let fs = require('fs')

// fs.appendFile('Hello.txt',"HELELEHBGEB",function(err){
//     if(err) throw err
//         console.log("Saved")
// })



// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// }); 


const filedata = fs.readFileSync("./Some.html","utf-8");
console.log(filedata)