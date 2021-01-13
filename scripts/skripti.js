const fs = require("fs");
let files = fs.readdirSync("/content");

for (i = 0; i <= files.length(); i++){
    let tulostus = fs.readFile(files[i]);
    document.getElementById("output").textContent=tulostus;

    
}