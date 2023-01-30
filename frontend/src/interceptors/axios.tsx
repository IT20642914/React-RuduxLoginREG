import axios from "axios";
import { useSelector } from "react-redux";

axios.defaults.baseURL = 'http://localhost:9090/api';
// let refresh = false;
//  axios.interceptors.response.use(resp => resp, async error => {
//     if (error.response.status === 403 && !refresh) {
//         refresh = true;
    
//         const response = await axios.post('/refresh', {}, {withCredentials: true});
//         if (response.status === 200) {
//             axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`;

//             return axios(error.config);
//         }
//     }
//     refresh = false;
//     return error;
// });
// const  token= useSelector((state:any)=> state.login.accessKey);

// const instance = axios.create({

//     baseURL: 'http://localhost:9090/api',
//     headers: {
//       'Authorization': 'Bearer ' + token
//     }
//   });
  
//   instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  
//   export default instance;