let readline = require('readline');
let fs = require('fs')
let re = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

// let datas = "Dummy"

re.question("Give the content to paste on a file \n", data => {
    fs.appendFileSync("Data.txt", data,(err)=>{console.log(err)})
    re.close();
}, )


// be proud You have created your own


