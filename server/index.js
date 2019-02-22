require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

// CONTROLLERS
const uc = require('./controllers/user_controller');
const mc = require('./controllers/message_controller');

// ENV
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
     cookie: {
    maxAge: 1000 * 60 * 60
  }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);

  console.log('Connected to database');
  app.listen(SERVER_PORT, () =>
    console.log(`Listening on port ${SERVER_PORT}`)
  );
});

// USER ENDPOINTS
app.get('/api/isLoggedIn', uc.isLoggedIn);
app.post('/api/login', uc.login);
app.post('/api/logout', uc.logout);

// MESSAGES ENDPOINTS
app.get('/api/messages', mc.getAll);
app.get('/api/message/:id', mc.getMessage);
app.post('/api/message', mc.addMessage);
app.delete('/api/message/:id', mc.deleteMessage);
app.put('/api/message/:id', mc.updateMessage);
