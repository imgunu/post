
const axios = require('axios');
const http = require('http');
//const redis = require('redis');

/*const clientRedis = redis.createClient({
    socket: {
        host: '127.0.0.1',
        port: '6379'
    },
    //password: '<password>'
});

clientRedis.on('error', err => {
    console.log('Error ' + err);
});*/

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 80 });

const express = require("express");
const app = express();

app.use(express.static("public"));
const bserver = http.createServer(app);
const webPort = 5000;

bserver.listen(webPort, function () {
	console.log("Web server start. http://localhost:" + webPort);
});
// const wss = new WebSocket.Server({ server: bserver });

app.get('/', (req, res) => {
  res.send("GET Request Called")
})
app.get('/get_market_data/:id', async (req, res) => {
	var marketId = req.params.id;  	
  	try {await clientRedis.connect();}catch(err) {}  	
  	var MarketData = await clientRedis.get('MarketData_'+marketId);
  	if(MarketData==null){
  		res.send({'status':false});
  	}else{
  		res.send(MarketData);
  	}	
  	await clientRedis.quit();
})

var rooms=[];
wss.on("connection", (ws) => {	

  ws.on("message", (message) => {
    console.log("message: ", JSON.parse(message));    
    var message = JSON.parse(message);    
    if (message.join) {    	  	
      	//ws.room.push(message.join);      	
      	if(rooms[message.join]){
      		if(!rooms[message.join].includes(message.UserId)){      			
      			ws.id = message.UserId;
      			rooms[message.join].push(message.UserId);
      		}
      	}else{      		
      		ws.id = message.UserId;
      		rooms[message.join]=[];
      		rooms[message.join].push(message.UserId);
      	}        	      	
      	console.log('rooms after join',rooms);      	
    }
    if (message.close) {    	  	      	      	
      	if(rooms[message.close]){
      		var key = rooms[message.close].indexOf(message.UserId)
      		if(key != -1){      			
      			rooms[message.close].splice(key, 1);
      		}      		
      		if(rooms[message.close].length == 0){
      			delete rooms[message.close];
      		}
      	}  
      	console.log('rooms after close',rooms);    	
    }
    if (message.eventid) {
      var msg = JSON.stringify(message);
      broadcast(msg);
    }
    if (message.msg) {
      // console.log("message: ", messag.msg);
    }
  });

  ws.on("error", (e) => console.log(e));
  ws.on("close", (e) =>{
  	console.log("websocket closed" + e,ws.id)
  	var UserId = ws.id
  	for (const [roomkey, value] of Object.entries(rooms)) {
  		console.log(`${roomkey}: ${value}`);
  		var key = rooms[roomkey].indexOf(UserId)
  		if(key != -1){      			
  			rooms[roomkey].splice(key, 1);
  		}      		
  		if(rooms[roomkey].length == 0){
  			delete rooms[roomkey];
  		}
	}
	console.log('rooms after websocket close',rooms);
  });
});

function broadcast(message) {
	console.log('messaged broadcast',message)
  	wss.clients.forEach((client) => {
    	if (client.room.indexOf(JSON.parse(message).eventid) > -1) {
      		client.send(message);
    	}
  	});
}

setInterval(function() {  			
	broadcast_auto();  
}, 500);


async function broadcast_auto() {
	//console.clear()
	const allKeys = Object.keys(rooms);			
	if(allKeys.length > 0){	
		//try {await clientRedis.connect();}catch(err) {}		
		await axios.get('https://apibsf.live/api/Odds/betfair/'+allKeys.toString()).then(res => {    		    	
	    	res.data.forEach((data) => {
	    		//clientRedis.connect().then(async () => {})	    						  				  		
				//clientRedis.set('MarketData_'+data.marketId, JSON.stringify(data));					
				
		    	wss.clients.forEach((client) => {		    		
		    		if (rooms[data.marketId] && rooms[data.marketId].indexOf(client.id) > -1) {
			    		var msgObj = {room: data.marketId,eventid:data.marketId, msg: 'hello auto' };
			    		msgObj.msg = msgObj.msg+' '+data['lastMatchTime'];		    		
			    		console.log('messaged broadcast auto',msgObj)		    		
			    		msgObj.apidata=[];
			    		msgObj.apidata[0] = data;		    		
			    		message = JSON.stringify(msgObj);
			      		client.send(message);
			      	}			    	
		  		});
		  	});	
	  	}).catch(error => {
	    	console.error(error);
	  	});
	  	//await clientRedis.quit();	
	}  
	
}
