import qs from 'qs';

const CLIENT_ID = 'process.env.VUE_APP_CLIENT_ID';
const ROOT_URL = 'process.env.VUE_APP_ROOT_URL'

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    window.location = `${ROOT_URL}/oath2.authorize?${qs.stringify(querystring)}`;
  }
}
