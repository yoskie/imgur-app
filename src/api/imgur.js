import qs from 'qs';

export default {
  login() {
    const querystring = {
      client_id: process.env.VUE_APP_CLIENT_ID,
      response_type: 'token'
    };

    window.location = `${process.env.VUE_APP_ROOT_URL}/oath2.authorize?${qs.stringify(querystring)}`;
  }
}
