const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer();


const socket = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"], // Allow only specific methods
    allowedHeaders: ["Authorization"], // Allow only specific headers
  },
});

socket.on("connection", (socket) => {
  console.log("Connected", socket);
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});

