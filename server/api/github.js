const request = require('superagent');
module.exports = (app) => {
  app.get('http://localhost:3000/oauth-callback', (req, res, next) => {
    const { query } = req;

    const { code } = code;

    if (!code) {
      return res.send({
        success: false,
        message: 'Error: no code',
      });
    }

    //post
    request
      .post('https://github.com/login/oauth/access_token')
      .send({
        client_id: 'aa4dc7e3e3fa6da1d088',
        client_secret: '40fc0a814cb9dfac291b9f3c54355dc1a57c4476',
        code: code,
      })
      .set('Accept', 'application/json')
      .then(function (result) {
        const data = result.body;
        console.log(data);

        res.send(data);
      });
  });
};
