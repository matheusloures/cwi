const readline = require('readline');
const fs = require('fs');
const path = require('path');
console.log('Leave this window open to serve as support.\r\nAdd your commands below.\r\nEnter saves')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'cwi> '
});

rl.prompt();
rl.on('line', (line) => {
    let a = [];
    let b = process.cwd();
  switch (line.trim()) {
    case 'init':
    if (!fs.existsSync(path.join(b,'/command_wall.json'))) {
      write(JSON.stringify(a),path.join(b, '/command_wall.json')).then(res=>{
            
        console.warn("cwi initialized at: "+path.join(b, '/command_wall.json'));
        },err=>{
            console.log("Failed Error #2");
        })
    }else{
        console.log('you already have cwi in your project.')
        setTimeout(function(){
            console.log('Run add to start saving commands')
        },300)
    }
    break;
    case 'add':
    rl.question('write your command and hit enter\r\n', (answer) => {
        var mAnswer = answer;

            if (!fs.existsSync(path.join(b,'/command_wall.json'))) {
                fs.writeFile(path.join(b,'/command_wall.json'), [], function(err) {
                if(err) {
                    console.warn("cwi not initialized, run init first.", err);
                }
                }); 
                            
            }else{

                    var p = path.join(b, '/command_wall.json');
                    var newArr = require(p)
    
                    newArr.push(mAnswer)
    
                            write(JSON.stringify(newArr),path.join(b, '/command_wall.json')).then(res=>{
                
                                console.log("...Success...");
                                console.log("Run 'add' again to add more");
                            },err=>{
                                console.log("Failed Error #3");
                            })
    
            }

        })


    break;
    default:
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Over.');
  process.exit(0);
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