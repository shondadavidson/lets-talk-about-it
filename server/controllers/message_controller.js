module.exports = {
  getAll: (req, res) => {
    const db = req.app.get('db');

    db.get_all_messages().then(resp => {
      res.status(200).send(resp);
    });
  },

  getMessage: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.get_message([id]).then(resp => {
      res.status(200).send(resp[0]);
    });
  },

  addMessage: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.session.user;
    const { message } = req.body;

    db.create_message([id, message]).then(resp => {
      res.status(200).send(resp);
    });
  },

  deleteMessage: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_message([id]).then(resp => {
      res.status(200).send(resp);
    });
  },

  updateMessage: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { message } = req.body;

    db.update_message([id, message]).then(resp => {
      res.status(200).send(resp);
    });
  }
};
