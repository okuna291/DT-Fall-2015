var redis = require('redis');
var client = redis.createClient(); //creates a new client
var HOST="127.0.0.1"; //this is local host
var PORT="6379";//default redis port
var client = redis.createClient(PORT, HOST); //create redis client
///CONNECTION
client.on('connect', function(err) {//connect client to DB
    // console.log('connected');
});


//////REGISTER
////On first run MUST register as email "admin" and password "admin"
var prompt = require('prompt'); //require prompt module
prompt.start();//init. prompt
var email; // global variable to hold ID... use email as unique id

prompt.get(['Email'], function (err, result) { // prompt for email
email=result.Email; //place in variable

 client.exists(email, function(err, reply) { //does this email already exist in database?
 	if (reply === 1) {
 		if(email=="admin"){ // are you admin?
 			console.log("hello ADMIN, enter password")
 			prompt.get(['Password'], function (err, result) { 
 				if(result.Password=="admin"){ //if admin and give "admin" as pw
 					client.scan("0", function(err, reply) { // scan database for all 
 						for(var i=0;i<reply[1].length;i++){//get all keys in DB
 							client.hgetall(reply[1][i], function(err, object) {
 								console.log(object.Age);//print out all ages of all users
 							});
 						}
 					});
 				}
 			});
 		}else{
 			registered();}// if you are already in database run registered function
 		} else {
 			notRegister();// if you are NOT already in database run notRegister function
 		}
 	});
});



function registered(){
	console.log("YOU ARE REGISTERED... please enter your Password");
	client.hgetall(email, function(err, object) {// get data associated with email entered
		prompt.get(['Password'], function (err, result) {//ask for PW
			if(object.Password==result.Password){ //if PW mactch DB PW print user data
				console.log(object);
			}else{
				console.log("Bad Password");//if PW does NOT mactch DB PW print ask again for PW
				registered();
				
			}
		});
	});
}

function notRegister(){
	console.log("NOT REGISTERED... would you like to register?");
	prompt.get(['Register'], function (err, result) { //ask if you do want to register
		if(result.Register=="y"||"yes"||"YES"||"Y"){ //if you want to register get data
			prompt.get(['Password',"FirstName","LastName","Age"], function (err, result) {	//prompt for data
				client.hmset(email, 'Password',result.Password,'FirstName', result.FirstName, 'LastName', result.LastName, 'Age', result.Age,function(err, reply){//set data as hash and place in database
					console.log(reply+" "+result.FirstName+" you are now REGISTERED");
				});
			});
		}else{
			console.log("BYE");//if you do NOT want to register
		}
	});
}
