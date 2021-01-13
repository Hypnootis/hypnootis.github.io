const fs = require("fs");
let fileUrl = "content"
let files = fs.readdirSync(fileUrl);

function readFile(input){
    fs.readFile(fileUrl + "/" + input, "utf8", function(err, data){
        if (err) throw err;
        return data;
    })

    
}
function appendFiles(files){
for (i in files){
    data = readFile(files[i]);
    let doc = document.getElementById("output");
    doc.innerHTML += data;
    }
}


window.addEventListener("load", appendFiles(files));


