var fs = require('fs'); 
fs.readFile('baby-names.csv', function(err,data){
    if(err){
        console.log(err)
        throw err
    }

    console.log(data.toString('utf-8'))
    
    //to write to the file
    /*fs.writeFile('baby-name-copy.csv', 'hey world!', function(err){
        if (err){
            console.log(err)
        }
    })*/
})