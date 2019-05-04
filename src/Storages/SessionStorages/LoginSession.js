

class Login {
    login(value) {
        let userInfo = JSON.stringify(value)
        localStorage.setItem('user',userInfo)
    }


    loginOut() {
        localStorage.removeItem('user')
    }

    getLoginInfo() {
        let userInfo = localStorage.getItem('user')
        return JSON.parse(userInfo)
    }

    isLogin(){
        let userInfo = this.getLoginInfo()
        return !!userInfo;
    }
}

let login = new Login()
export default login

