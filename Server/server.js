const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer();


const io = new Server(httpServer, {
  pingTimeout:60000,
  cors: {
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "DELETE", "PUT"], 
    allowedHeaders: ["Authorization"], 
  },
});


let allData = [] 
io.on("connect", (socket) => {
 
  socket.on("data", (data)=>{
    allData.push({...data, id:socket.id})

    console.log("Total amount",allData);
    io.emit("notification", allData.length);
  })
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});

