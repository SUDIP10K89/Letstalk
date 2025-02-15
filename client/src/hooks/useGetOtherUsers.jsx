import {useEffect} from 'react'
import api from '../api'
import { useDispatch } from 'react-redux'
import { setOtherUsers } from '../redux/userSlice';

const useGetOtherUsers = () => {
  const dispatch = useDispatch();

    useEffect(() => {
      const fetchOtherUsers = async () => {
        try {
          api.defaults.withCredentials = true;
          const response = await api.get('/v1/user/')
         
          dispatch(setOtherUsers(response.data))
        } catch (error) {
          console.error(error)
        }
      }
      fetchOtherUsers();
      
    }, [])
}

export default useGetOtherUsers
