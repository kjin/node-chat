// Client Module to send messages 
import axios from 'axios';
import * as readline from 'readline';


export function startMessenger (
    address: string, username: string){

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Please enter a message'
});
rl.prompt();

rl.on('line', (line) => {
    let data = {sender: username,
                contents: line};
    axios.post(address, data).catch(console.log);
});
}
    