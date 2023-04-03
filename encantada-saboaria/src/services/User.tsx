import axios from 'axios'
import { Url } from '../constants/Url'

export const login = async(form:any, clean:any, navigate:any, setIsLoading:any) => {
    setIsLoading(true)
    try{
        const res = await axios.post(`${Url}/user/login`, form)
        localStorage.setItem("token", res.data.token)
        clean()
        setIsLoading(false)
        
    }
    catch (err:any) {
        setIsLoading(false)
        alert(err.response.data.message)
    }

}