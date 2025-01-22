import {useEffect} from 'react'
import axios from 'axios';

const useGetOtherUsers = () => {

    useEffect(() => {
      const fetchOtherUsers = async () => {
        try {
          axios.defaults.withCredentials = true;
          const response = await axios.get('http://localhost:8080/api/v1/user/')
          console.log(response.data)
        } catch (error) {
          console.error(error)
        }
      }
      fetchOtherUsers();
      
    }, [])
}

export default useGetOtherUsers
