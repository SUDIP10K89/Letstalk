import { useEffect } from 'react'
import api from '../api'

const useGetMessages = () => {
  useEffect(()=>{
    const fetchMessages = async ()=>{
        try {
            api.defaults.withCredentials = true;
            // const res = await api.get(`/v1/message/get/${}`);
        } catch (error) {
            console.log(error)
        }
    }
    fetchMessages();
  },[])
}

export default useGetMessages
