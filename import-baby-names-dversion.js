var fs= require('fs');
var Sequelize = require('sequelize');
var sq = new Sequelize('postgres://keodijah@localhost:5432/inclusion');

sq.authenticate()
    .then(function(){
        console.log("Successfully established connection");
    })
    .catch(function(err){
        console.log("unable to connect to database", err);
    })




/*var fs = require('fs'); 
fs.readFile('baby-names.csv', function(err,data){
    if(err){
        console.log(err)
        throw err
    }

   // console.log(data.toString('utf-8'))
    
    //to write to the file
    /*fs.writeFile('baby-name-copy.csv', 'hey world!', function(err){
        if (err){
            console.log(err)
        }
    })
console.log(parseData.split('\n')//splits data into array seats
var parsedData = data.toString('utf-8')
var result = parsedData.split('\n').slice(1).map(function(intel){
    var pieceOfData = intel.split(',')
    return{
        birthYear: parseInt(pieceOfData[0]),
        gender: pieceOfData[1],
        ethnicity:  pieceOfData[2],
        name: pieceOfData[3],
        count: parseInt(pieceOfData[4]),
        rank: parseInt(pieceOfData[5]),


    }
})
console.log(result[0])
})*/
