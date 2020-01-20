#!/usr/bin/env node
const readline = require('readline');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs');
const path = require('path');

clear();

console.log(
    figlet.textSync('commandwall', { horizontalLayout: 'full' })
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    // console.log(`Received: ${input}`);
    var mAnswer = input;
    if(answer.length!==0){
        // var containsInit = answer.indexOf('init');
        // var containsAdd = answer.indexOf('add')
        // var position = answer[]
        // if(answer==='add')
      
        let b = process.cwd();

        if (!fs.existsSync(path.join(b,'/command_wall.json'))) {
          fs.writeFile(path.join(b,'/command_wall.json'), [], function(err) {
            if(err) {
                console.log("Failed Error #1", err);
            }
            console.log('...')
            }); 

            setTimeout(function(){
                console.log('...')
                let a = [];
                a.push(mAnswer);
                      
                        write(JSON.stringify(a),path.join(b, '/command_wall.json')).then(res=>{
            
                            console.log("Success!");
                        },err=>{
                            console.log("Failed Error #2");
                        })

                    },3000)
                      
        }else{
            console.log('...')

                let b = process.cwd();
                var p = path.join(b, '/command_wall.json');
                var newArr = require(p)

                console.log('...')

                newArr.push(mAnswer)

                        write(JSON.stringify(newArr),path.join(b, '/command_wall.json')).then(res=>{
            
                            console.log("Success");
                        },err=>{
                            console.log("Failed Error #3");
                        })

        }
        
      rl.close();
    }else{
      console.log("Closing...");
      rl.close();
    }
});

function write(what,where){
    return new Promise((resolve, reject)=>{

        fs.writeFile(where, what, function(err) {
            if(err) {
                reject()
            }
            resolve()
        }); 
    })
}

function processFile() {
    console.log(content);
}
  

rl.question('', (answer) => {
    var mAnswer = answer;
    console.log('cwi your_command')
    // console.log('cwi init || cwi add command_text')
})