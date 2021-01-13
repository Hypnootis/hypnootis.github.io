const fs = require("fs");
let fileUrl = "content";
let files = fs.readdirSync(fileUrl);

function kys(){
    let result = "";
for (i in files){
    result += fs.readFileSync("content/" + files[i]).toString();
}
return result;
}