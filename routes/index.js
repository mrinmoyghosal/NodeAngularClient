var express = require('express');
var router = express.Router();
var request = require('request');


var options={
    uri:'/oauth/token',
    baseUrl:'http://localhost:8889',
    method:'POST',
    json:true,
    body:{"client_id":"admin","client_secret":"getroot","grant_type":"client_credentials","scope":"restaurent"},
  }

  var options_2={
    uri:'/restaurent',
    baseUrl:'http://localhost:8889',
    method:'GET'
  }

  var bearerOptions={
        uri:'/restaurent',
        baseUrl:'http://localhost:8889',
        auth:{
          bearer:''
        }
      }


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Angular + Node - OAuth Client Credential Grant Example ' });
});

router.get('/restaurent', function(req, res) {

  

  request(options_2,function(e,r,b){
  	res.setHeader('Content-Type', 'application/json');
  	res.send(b);
  })

  // request(options,function(e,r,b){
  // 	console.log(b.access_token);	
  // })

  
});


router.get('/restaurentAdmin', function(req, res) {

  

  

   request(options,function(e,r,b){
   	
   		bearerOptions['auth']['bearer']=b.access_token;

   		request(bearerOptions,function(e,r,b){
   			res.setHeader('Content-Type', 'application/json');
  			res.send(b);
   		})

   })

  
});

router.get('/restaurentUpdate', function(req, res) {

 console.log('I am called');


   request(options,function(e,r,b){
   	
      bearerOptions['uri']='/restaurentUpdate';
      bearerOptions['qs']={id:req.query.id,Name:req.query.Name,Address:req.query.Address,open:req.query.open,close:req.query.close};
   		bearerOptions['auth']['bearer']=b.access_token;

   		request(bearerOptions,function(e,r,b){
        console.log(b);
   			res.setHeader('Content-Type', 'application/json');
  			res.send(b);
   		})

   })

  
});

module.exports = router;
