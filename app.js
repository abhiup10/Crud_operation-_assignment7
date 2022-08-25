const fs = require("fs");
const http = require("http");

const path = "./Abhishek/data.txt"

try {
  if (fs.existsSync(path)) {
    console.log("File exists.")
  
  } else {
    console.log("File does not exist.")
    fs.mkdir("Abhishek",(err)=>{});
    fs.writeFile("./Abhishek/data.txt","Hello my name is Abhishek.",(err)=>{});
    fs.appendFile("./Abhishek/data.txt"," I study in Global Institute of Technology, Jaipur .",(err)=>{});
  }
} catch(err) {
  console.error(err)
}

const data = fs.readFileSync("./Abhishek/data.txt","utf-8");

const server = http.createServer((req,res)=>{
    res.end(data);
})

server.listen(5000,()=>{
    console.log("Server listening on 5000......");
})