import axios from 'axios';

const API = {
  sendEmail(obj) {
    axios.post(`/api`, obj)
      .then(res => console.log(res))
      .catch(console.error)
  }
}

export default API;
