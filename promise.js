var fs = require("fs");

function writeFile(path){
    //var content = fs.readFileSync(__dirname + path, "utf8");//success
    var content = fs.readFile(__dirname + path, "utf8");//error
    return new Promise(function(resolve, reject){
        if(content){
            resolve(content);
        }
        else{
            reject("File not found");
        } 
    })
}

var text = writeFile("/readme.txt");
text.then((function(msg){
    console.log(msg);
}), function(err){
    console.log(err);
});
