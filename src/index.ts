import { Server } from "./server";

// Check to see that we have enough arguments.
if (process.argv.length < 4) {
  console.log(`Usage: node ${process.argv[1]} (server|client) [address]`);
  // Exit with a non-zero exit code.
  process.exit(1);
}
const instanceType = process.argv[2];
const address = process.argv[3];

if (instanceType === 'server') {
  new Server(address).start();
} else if (instanceType === 'client') {
  // ???
} else {
  console.log(`Expected 'server' or 'client' but got: '${process.argv[2]}'`);
  process.exit(1);
}
