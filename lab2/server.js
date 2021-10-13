const express=require ('express')
const bodyparser=require('body-parser')
const server=express()
server.use(bodyparser.urlencoded({extended:true}))




server.get('/',function(req, res){
    res.send(' Calculator Web Api');
})
function logger(req,res,next ){
    console.log(req.method,req.url);
    next();
}
server.use(logger);
server.get('/add/:x/:y',function(req,res){
    var x=parseInt(req.params.x)
    var y=parseInt(req.params.y)
    var sum=(x + y).toString()
    
    res.json({"x":x,"y":y,"operation":"add","result":sum})
})

server.get('/subtract/:x/:y', function(req, res){
    var x=parseInt(req.params.x)
    var y=parseInt(req.params.y)
    var subtraction=(x - y).toString()
    
    res.json({"x":x,"y":y,"operation":"subtract","result":subtraction})
})

server.get('/multiply/:x/:y', function(req, res){
    var x=parseInt(req.params.x)
    var y=parseInt(req.params.y)
    var multiplication=(x * y).toString()
    
    res.json({"x":x,"y":y,"operation":"multiply","result":multiplication})
})

server.get('/divide/:x/:y', function(req, res){
    var x=parseInt(req.params.x)
    var y=parseInt(req.params.y)
    var division=(x / y).toString()
    
    res.json({"x":x,"y":y,"operation":"divide","result":division})
})
server.get('/json',(req,res,next)=>{
    var numbers=[
        {"x":"4",
        "y":"5",
        "operation":"add","result":"10"
        },
        {"x":"10","y":"5","operation":"divide","result":"2"}
        

    ]
    res.send(numbers)
    
})


server.listen(3000,function(){
    console.log('you started from port 3000')
})