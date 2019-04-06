

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
        let data = JSON.parse(userInfo)
        return data
    }

    isLogin(){
        let userInfo = this.getLoginInfo()
        if (userInfo){
            return true
        } else {
            return false
        }
    }
}

let login = new Login()
export default login

