<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='gongzuorenyuan'">
                    <el-form-item class="select" v-if="type!='info'"  label="工作人员" prop="gongzuorenyuanId">
                        <el-select v-model="ruleForm.gongzuorenyuanId" :disabled="ro.gongzuorenyuanId" filterable placeholder="请选择工作人员" @change="gongzuorenyuanChange">
                            <el-option
                                    v-for="(item,index) in gongzuorenyuanOptions"
                                    v-bind:key="item.id"
                                    :label="item.gongzuorenyuanName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='gongzuorenyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="工作人员编号" prop="gongzuorenyuanUuidNumber">
                        <el-input v-model="gongzuorenyuanForm.gongzuorenyuanUuidNumber"
                                  placeholder="工作人员编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="工作人员编号" prop="gongzuorenyuanUuidNumber">
                            <el-input v-model="ruleForm.gongzuorenyuanUuidNumber"
                                      placeholder="工作人员编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='gongzuorenyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="工作人员姓名" prop="gongzuorenyuanName">
                        <el-input v-model="gongzuorenyuanForm.gongzuorenyuanName"
                                  placeholder="工作人员姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="工作人员姓名" prop="gongzuorenyuanName">
                            <el-input v-model="ruleForm.gongzuorenyuanName"
                                      placeholder="工作人员姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='gongzuorenyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="工作人员手机号" prop="gongzuorenyuanPhone">
                        <el-input v-model="gongzuorenyuanForm.gongzuorenyuanPhone"
                                  placeholder="工作人员手机号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="工作人员手机号" prop="gongzuorenyuanPhone">
                            <el-input v-model="ruleForm.gongzuorenyuanPhone"
                                      placeholder="工作人员手机号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='gongzuorenyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="工作人员身份证号" prop="gongzuorenyuanIdNumber">
                        <el-input v-model="gongzuorenyuanForm.gongzuorenyuanIdNumber"
                                  placeholder="工作人员身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="工作人员身份证号" prop="gongzuorenyuanIdNumber">
                            <el-input v-model="ruleForm.gongzuorenyuanIdNumber"
                                      placeholder="工作人员身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='gongzuorenyuan' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.gongzuorenyuanPhoto" label="工作人员头像" prop="gongzuorenyuanPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (gongzuorenyuanForm.gongzuorenyuanPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.gongzuorenyuanPhoto" label="工作人员头像" prop="gongzuorenyuanPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.gongzuorenyuanPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='gongzuorenyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="检验工种" prop="jianyangongzhongValue">
                        <el-input v-model="gongzuorenyuanForm.jianyangongzhongValue"
                                  placeholder="检验工种" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="检验工种" prop="jianyangongzhongValue">
                            <el-input v-model="ruleForm.jianyangongzhongValue"
                                      placeholder="检验工种" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='gongzuorenyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="工作人员邮箱" prop="gongzuorenyuanEmail">
                        <el-input v-model="gongzuorenyuanForm.gongzuorenyuanEmail"
                                  placeholder="工作人员邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="工作人员邮箱" prop="gongzuorenyuanEmail">
                            <el-input v-model="ruleForm.gongzuorenyuanEmail"
                                      placeholder="工作人员邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='gongzuorenyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="账户状态" prop="jinyongValue">
                        <el-input v-model="gongzuorenyuanForm.jinyongValue"
                                  placeholder="账户状态" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="账户状态" prop="jinyongValue">
                            <el-input v-model="ruleForm.jinyongValue"
                                      placeholder="账户状态" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="gongzuorenyuanId" name="gongzuorenyuanId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="检验编号" prop="chuhuojianyanUuidNumber">
                       <el-input v-model="ruleForm.chuhuojianyanUuidNumber"
                                 placeholder="检验编号" clearable  :readonly="ro.chuhuojianyanUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="检验编号" prop="chuhuojianyanUuidNumber">
                           <el-input v-model="ruleForm.chuhuojianyanUuidNumber"
                                     placeholder="检验编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="检验标题" prop="chuhuojianyanName">
                       <el-input v-model="ruleForm.chuhuojianyanName"
                                 placeholder="检验标题" clearable  :readonly="ro.chuhuojianyanName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="检验标题" prop="chuhuojianyanName">
                           <el-input v-model="ruleForm.chuhuojianyanName"
                                     placeholder="检验标题" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="检验中心" prop="jianyanzhongxinTypes">
                        <el-select v-model="ruleForm.jianyanzhongxinTypes" :disabled="ro.jianyanzhongxinTypes" placeholder="请选择检验中心">
                            <el-option
                                v-for="(item,index) in jianyanzhongxinTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="检验中心" prop="jianyanzhongxinValue">
                        <el-input v-model="ruleForm.jianyanzhongxinValue"
                            placeholder="检验中心" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="检验仪器" prop="jianyanyiqiTypes">
                        <el-select v-model="ruleForm.jianyanyiqiTypes" :disabled="ro.jianyanyiqiTypes" placeholder="请选择检验仪器">
                            <el-option
                                v-for="(item,index) in jianyanyiqiTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="检验仪器" prop="jianyanyiqiValue">
                        <el-input v-model="ruleForm.jianyanyiqiValue"
                            placeholder="检验仪器" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="检验项目" prop="jianyanxiangmuTypes">
                        <el-select v-model="ruleForm.jianyanxiangmuTypes" :disabled="ro.jianyanxiangmuTypes" placeholder="请选择检验项目">
                            <el-option
                                v-for="(item,index) in jianyanxiangmuTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="检验项目" prop="jianyanxiangmuValue">
                        <el-input v-model="ruleForm.jianyanxiangmuValue"
                            placeholder="检验项目" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="出货检验类型" prop="chuhuojianyanTypes">
                        <el-select v-model="ruleForm.chuhuojianyanTypes" :disabled="ro.chuhuojianyanTypes" placeholder="请选择出货检验类型">
                            <el-option
                                v-for="(item,index) in chuhuojianyanTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="出货检验类型" prop="chuhuojianyanValue">
                        <el-input v-model="ruleForm.chuhuojianyanValue"
                            placeholder="出货检验类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.chuhuojianyanFile" label="检验文件" prop="chuhuojianyanFile">
                        <file-upload
                                tip="点击上传检验文件"
                                action="file/upload"
                                :limit="3"
                                :multiple="true"
                                :fileUrls="ruleForm.chuhuojianyanFile?$base.url+ruleForm.chuhuojianyanFile:''"
                                @change="chuhuojianyanFileUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.chuhuojianyanFile" label="检验文件" prop="chuhuojianyanFile">
                            <a type="text" style="text-decoration:none" class="el-button" :href="$base.url+ruleForm.chuhuojianyanFile"  >检验文件下载</a>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item v-if="type!='info' && !ro.chuhuojianyanTime"  class="input" label="检验时间" prop="chuhuojianyanTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                v-model="ruleForm.chuhuojianyanTime"
                                type="datetime"
                                placeholder="检验时间"
                                :disabled="ro.chuhuojianyanTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.chuhuojianyanTime" label="检验时间" prop="chuhuojianyanTime">
                            <span v-html="ruleForm.chuhuojianyanTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="质量等级" prop="zhiliangdengjiTypes">
                        <el-select v-model="ruleForm.zhiliangdengjiTypes" :disabled="ro.zhiliangdengjiTypes" placeholder="请选择质量等级">
                            <el-option
                                v-for="(item,index) in zhiliangdengjiTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="质量等级" prop="zhiliangdengjiValue">
                        <el-input v-model="ruleForm.zhiliangdengjiValue"
                            placeholder="质量等级" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="缺陷等级" prop="quexiandengjiTypes">
                        <el-select v-model="ruleForm.quexiandengjiTypes" :disabled="ro.quexiandengjiTypes" placeholder="请选择缺陷等级">
                            <el-option
                                v-for="(item,index) in quexiandengjiTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="缺陷等级" prop="quexiandengjiValue">
                        <el-input v-model="ruleForm.quexiandengjiValue"
                            placeholder="缺陷等级" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="缺陷原因类型" prop="quexianyuanyinTypes">
                        <el-select v-model="ruleForm.quexianyuanyinTypes" :disabled="ro.quexianyuanyinTypes" placeholder="请选择缺陷原因类型">
                            <el-option
                                v-for="(item,index) in quexianyuanyinTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="缺陷原因类型" prop="quexianyuanyinValue">
                        <el-input v-model="ruleForm.quexianyuanyinValue"
                            placeholder="缺陷原因类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="检测结果" prop="jieguoTypes">
                        <el-select v-model="ruleForm.jieguoTypes" :disabled="ro.jieguoTypes" placeholder="请选择检测结果">
                            <el-option
                                v-for="(item,index) in jieguoTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="检测结果" prop="jieguoValue">
                        <el-input v-model="ruleForm.jieguoValue"
                            placeholder="检测结果" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.chuhuojianyanContent"  label="检验结果" prop="chuhuojianyanContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.chuhuojianyanContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.chuhuojianyanContent" label="检验结果" prop="chuhuojianyanContent">
                            <span v-html="ruleForm.chuhuojianyanContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.chuhuojianyanBeizhuContent"  label="备注" prop="chuhuojianyanBeizhuContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.chuhuojianyanBeizhuContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.chuhuojianyanBeizhuContent" label="备注" prop="chuhuojianyanBeizhuContent">
                            <span v-html="ruleForm.chuhuojianyanBeizhuContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                gongzuorenyuanForm: {},
                ro:{
                    gongzuorenyuanId: false,
                    chuhuojianyanUuidNumber: true,
                    chuhuojianyanName: false,
                    jianyanzhongxinTypes: false,
                    jianyanyiqiTypes: false,
                    jianyanxiangmuTypes: false,
                    chuhuojianyanTypes: false,
                    chuhuojianyanFile: false,
                    chuhuojianyanTime: false,
                    zhiliangdengjiTypes: false,
                    quexiandengjiTypes: false,
                    quexianyuanyinTypes: false,
                    jieguoTypes: false,
                    chuhuojianyanContent: false,
                    chuhuojianyanBeizhuContent: false,
                    insertTime: false,
                },
                ruleForm: {
                    gongzuorenyuanId: '',
                    chuhuojianyanUuidNumber: new Date().getTime(),
                    chuhuojianyanName: '',
                    jianyanzhongxinTypes: '',
                    jianyanyiqiTypes: '',
                    jianyanxiangmuTypes: '',
                    chuhuojianyanTypes: '',
                    chuhuojianyanFile: '',
                    chuhuojianyanTime: '',
                    zhiliangdengjiTypes: '',
                    quexiandengjiTypes: '',
                    quexianyuanyinTypes: '',
                    jieguoTypes: '',
                    chuhuojianyanContent: '',
                    chuhuojianyanBeizhuContent: '',
                    insertTime: '',
                },
                jianyanzhongxinTypesOptions : [],
                jianyanyiqiTypesOptions : [],
                jianyanxiangmuTypesOptions : [],
                chuhuojianyanTypesOptions : [],
                zhiliangdengjiTypesOptions : [],
                quexiandengjiTypesOptions : [],
                quexianyuanyinTypesOptions : [],
                jieguoTypesOptions : [],
                gongzuorenyuanOptions : [],
                rules: {
                   gongzuorenyuanId: [
                              { required: true, message: '工作人员不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chuhuojianyanUuidNumber: [
                              { required: true, message: '检验编号不能为空', trigger: 'blur' },
                          ],
                   chuhuojianyanName: [
                              { required: true, message: '检验标题不能为空', trigger: 'blur' },
                          ],
                   jianyanzhongxinTypes: [
                              { required: true, message: '检验中心不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   jianyanyiqiTypes: [
                              { required: true, message: '检验仪器不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   jianyanxiangmuTypes: [
                              { required: true, message: '检验项目不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chuhuojianyanTypes: [
                              { required: true, message: '出货检验类型不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chuhuojianyanFile: [
                              { required: true, message: '检验文件不能为空', trigger: 'blur' },
                          ],
                   chuhuojianyanTime: [
                              { required: true, message: '检验时间不能为空', trigger: 'blur' },
                          ],
                   zhiliangdengjiTypes: [
                              { required: true, message: '质量等级不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   quexiandengjiTypes: [
                              { required: true, message: '缺陷等级不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   quexianyuanyinTypes: [
                              { required: true, message: '缺陷原因类型不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   jieguoTypes: [
                              { required: true, message: '检测结果不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chuhuojianyanContent: [
                              { required: true, message: '检验结果不能为空', trigger: 'blur' },
                          ],
                   chuhuojianyanBeizhuContent: [
                              { required: true, message: '备注不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '录入时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }else{
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=jianyanzhongxin_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.jianyanzhongxinTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=jianyanyiqi_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.jianyanyiqiTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=jianyanxiangmu_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.jianyanxiangmuTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=chuhuojianyan_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.chuhuojianyanTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=zhiliangdengji_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.zhiliangdengjiTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=quexiandengji_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.quexiandengjiTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=quexianyuanyin_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.quexianyuanyinTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=jieguo_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.jieguoTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `gongzuorenyuan/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.gongzuorenyuanOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            gongzuorenyuanChange(id){
                this.$http({
                    url: `gongzuorenyuan/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.gongzuorenyuanForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `chuhuojianyan/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.gongzuorenyuanChange(data.data.gongzuorenyuanId)
                        _this.ruleForm.chuhuojianyanContent = _this.ruleForm.chuhuojianyanContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                        _this.ruleForm.chuhuojianyanBeizhuContent = _this.ruleForm.chuhuojianyanBeizhuContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.ruleForm.chuhuojianyanContent = this.ruleForm.chuhuojianyanContent.replaceAll(this.$base.url,"");
                        this.ruleForm.chuhuojianyanBeizhuContent = this.ruleForm.chuhuojianyanBeizhuContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`chuhuojianyan/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.chuhuojianyanCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.chuhuojianyanCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            chuhuojianyanFileUploadChange(fileUrls){
                this.ruleForm.chuhuojianyanFile = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}</style>

