require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');

const server = createServer();

//express for cookies and current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is now  🚀  on port http://localhost:${deets.port}`);
  }
);
