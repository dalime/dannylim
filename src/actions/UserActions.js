import AppDispatcher from '../AppDispatcher';
import API from '../API';

const UserActions = {
  sendEmail(obj) {
    API.sendEmail(obj)
  }
}

export default UserActions;
