import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-fa625.firebaseio.com/'
});

export default instance;
