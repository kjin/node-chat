import * as Messenger from "./Messenger"
import* as ChatDisplay from "./ChatDisplay"

// Check to see that we have enough arguments.
if (process.argv.length < 4) {
  console.log(`Usage: node ${process.argv[1]} (server|client) [address]`);
  // Exit with a non-zero exit code.
  process.exit(1);
}
const instanceType = process.argv[2];
const address = process.argv[3];
const username = process.argv[4];

if (instanceType === 'server') {
} else if (instanceType === 'clientMessenger') {
  Messenger.startMessenger(address, username);
}else if (instanceType === 'clientDisplay'){
  ChatDisplay.startDisplay(address);
} else {
  console.log(`Expected 'server' or 'client' but got: '${process.argv[2]}'`);
  process.exit(1);
}
