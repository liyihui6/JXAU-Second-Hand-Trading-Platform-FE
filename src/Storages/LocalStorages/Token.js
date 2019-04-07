class Token {
    setToken =(value) => {
        localStorage.setItem('token',value)
    }

    getToken =()=>{
        let data = localStorage.getItem('token')
        return data
    }

    clearToken = () => {
        localStorage.removeItem('token')
    }

}

let token = new Token()

export default token
