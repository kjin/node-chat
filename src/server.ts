import {Message} from './Message';
const express = require('express');
const bodyParser = require('body-parser');

export function startServer(address: string) {

  const app = express();

  let messages: Message[] = [];
  let messageCount: number = 0;

  app.get('/messages', (req, res) => {
    res.send(messages.slice(req.query.msgNo, messages.length));
  });

  app.use(bodyParser.json());

  app.post('/message', (req, res) => {
    let date = new Date();
    let currMessageCount = messageCount++;
    let message = {
      sender: req.body.sender,
      data: req.body.content,
      id: currMessageCount,
      time: date.getTime()
    }
    messages[currMessageCount] = message;
    res.send();
  });
  app.listen(address);
}
