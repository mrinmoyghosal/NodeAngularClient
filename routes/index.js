var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Angular + Node - OAuth Client Credential Grant Example ' });
});

router.get('/restaurent', function(req, res) {

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

  request(options_2,function(e,r,b){
  	res.setHeader('Content-Type', 'application/json');
  	res.send(b);
  })

  // request(options,function(e,r,b){
  // 	console.log(b.access_token);	
  // })

  
});


router.get('/restaurentAdmin', function(req, res) {

  var options={
  	uri:'/oauth/token',
  	baseUrl:'http://localhost:8889',
  	method:'POST',
  	json:true,
  	body:{"client_id":"admin","client_secret":"getroot","grant_type":"client_credentials","scope":"restaurent"},
  }

  

   request(options,function(e,r,b){
   	
   		var bearerOptions={
   			uri:'/restaurent',
   			baseUrl:'http://localhost:8889',
   			auth:{
   				bearer:b.access_token
   			}
   		}

   		request(bearerOptions,function(e,r,b){
   			res.setHeader('Content-Type', 'application/json');
  			res.send(b);
   		})

   })

  
});

router.get('/restaurentUpdate', function(req, res) {

 console.log('I am called');

  var options={
  	uri:'/oauth/token',
  	baseUrl:'http://localhost:8889',
  	method:'POST',
  	json:true,
  	body:{"client_id":"admin","client_secret":"getroot","grant_type":"client_credentials","scope":"restaurent"},
  }

  

   request(options,function(e,r,b){
   	
   		var bearerOptions={
   			uri:'/restaurentUpdate',
   			baseUrl:'http://localhost:8889',
   			qs:{id:req.query.id,Name:req.query.Name,Address:req.query.Address,open:req.query.open,close:req.query.close},
   			auth:{
   				bearer:b.access_token
   			}
   		}

   		request(bearerOptions,function(e,r,b){
   			res.setHeader('Content-Type', 'application/json');
  			res.send(b);
   		})

   })

  
});

module.exports = router;
