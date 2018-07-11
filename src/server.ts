import {Message} from './Message';
const express = require('express');
const app = express();

let messages: Message[] = [];
let messageCount: number = 0;

app.get('/get', (req, res) => {
  res.send(messages.slice(req.body.msgNo, messages.length));
});

app.user(bodyParser());

app.post('/send', (req, res) => {
  let date = new Date();
  let currMessageCount = messageCount++;
  let message = {
    sender: req.body.sender,
    data: req.body.content,
    id: currMessageCount,
    time: date.getTime()
  }
  messages[currMessageCount] = message;

});
app.listen(3000);

