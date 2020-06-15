import axios from 'axios';

const USER_API_BASE_URL = '/';
console.log(USER_API_BASE_URL)
class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        console.log(USER_API_BASE_URL + '/' + userId)
        return axios.get("http://localhost:8099/oneid" + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
    editUser(user) {
        const USER_API_BASE_URL = '/put';
        //console.log(USER_API_BASE_URL)
        return axios.put(USER_API_BASE_URL,user);
    }

    addUser(user) {
        const USER_API_BASE_URL = '/load';
        console.log("here")
        return axios.post(""+USER_API_BASE_URL, user);
    }
    addUser1(user) {
        const USER_API_BASE_URL = '/load1';
        console.log(USER_API_BASE_URL)
        return axios.post(""+USER_API_BASE_URL, user);
    }
    editUser1(user) {
        const USER_API_BASE_URL = '/put1';
        //console.log(USER_API_BASE_URL)
        return axios.put(USER_API_BASE_URL,user);
    }
    editUser2(user) {
        const USER_API_BASE_URL = '/put2';
        //console.log(USER_API_BASE_URL)
        return axios.put(USER_API_BASE_URL,user);
    }
}

export default new ApiService();
