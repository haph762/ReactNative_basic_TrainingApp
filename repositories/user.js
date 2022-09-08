import axios from 'axios';
const SERVER_NAME = 'randomuser.me';
const getUserDetail = async () => {
  try {
    let response = await axios.get(`https://${SERVER_NAME}/api`);
    if (response.status != 200) {
      throw 'failed request';
    }
    if (response.data.results.length > 0) {
      let responseUser = response.data.results[0];
      let user = {};
      user.dateOfBirth = new Date(responseUser.dob.date);
      user.email = responseUser.email;
      user.gender = responseUser.gender ?? 'male';
      user.userId = `${responseUser.id.name}${responseUser.id.value}`;
      user.address = `${responseUser.location.state}, ${responseUser.location.street.name}`;
      user.userName = responseUser.login.username;
      user.url = responseUser.picture.large;
      user.phone = responseUser.phone ?? '';
      user.registeredDate = new Date(responseUser.registered.date);
      return user;
    }
    throw 'user not found';
  } catch (error) {
    throw error;
  }
};
const login = ({email, password}) => {};
export default {
  getUserDetail,
  login,
};
