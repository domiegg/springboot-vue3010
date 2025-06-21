const base = {
    get() {
        return {
            url : "http://localhost:8080/qiyezhiliangguanli/",
            name: "qiyezhiliangguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/qiyezhiliangguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "中小型制造企业质量管理"
        } 
    }
}
export default base
