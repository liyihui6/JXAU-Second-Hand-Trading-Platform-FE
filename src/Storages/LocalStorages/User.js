class User {
    setUser =(value) => {
        localStorage.setItem('user',JSON.stringify(value))
    }

    getUser =()=>{
        let data = localStorage.getItem('user')
        return JSON.parse(data)
    }

    clearUser= () => {
        localStorage.removeItem('user')
    }

}

let user = new User()

export default user
