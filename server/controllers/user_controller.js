module.exports = {
  login: (req, res) => {
    const db = req.app.get('db');
    const { name, password } = req.body;

    db.get_user([name, password]).then(resp => {
      if (resp.length) {
        req.session.user = resp[0];
        res.status(200).send(req.session.user);
      } else {
        db.create_user([name, password]).then(resp => {
          req.session.user = resp[0];
          res.status(200).send(req.session.user);
        });
      }
    });
  },

  isLoggedIn: (req, res) => {
    if (req.session.user) {
      console.log(req.sessionStore);
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send({});
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send('Logged Out');
  }
};
