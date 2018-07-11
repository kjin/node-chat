// will display messages
import axios from 'axios';
import {Message} from "./Message";
import leftPad from "left-pad"


let address: string;
let lastMessageNumber: number = 0;

export function startDisplay(address: string){
    this.address = address;
    const instance = axios.create({
        baseURL: address
      });
    axios.get(address, {
        params: {
          msgNo: 0
        }}).then((response) => printMessages(response.data));
    poll();
}

function printMessages(messages: Message[]){
    
    messages.forEach((element)=>{
        printMessage(element);
        lastMessageNumber = element.id;
    })

}

function printMessage(message: Message){
    let messageString = '';
   messageString += leftPad(message.time, 6);
   messageString += leftPad(message.sender, 16);
   messageString += leftPad(message.data, 8);
    console.log(messageString);
}

async function poll(){
    setTimeout(update, 1000);
}

function update(){
    axios.get(address, {
        params: {
          msgNo: lastMessageNumber
        }}).then((response) => printMessages(response.data));
    poll();

}

