

class Login {
    login(value) {
        let userInfo = JSON.stringify(value)
        sessionStorage.setItem('user',userInfo)
    }


    loginOut() {
        sessionStorage.removeItem('user')
    }

    getLoginInfo() {
        let userInfo = sessionStorage.getItem('user')
        return JSON.parse(userInfo)
    }

    isLogin(){
        let userInfo = this.getLoginInfo()
        return !!userInfo;
    }
}

let login = new Login()
export default login

