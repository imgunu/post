const axios = require('axios');
const http = require("http");
const express = require("express");

let clientlist = require('./clientlist.json')

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
  allowRequest: (req, callback) => {
  	console.log('allowRequest',req.headers.origin,clientlist.includes(req.headers.origin))
    callback(null, clientlist.includes(req.headers.origin)); // cross-origin requests will not be allowed
    //callback(null, (req.headers.origin!='http://localhost:4200' || req.headers.origin!='http://bestbook.live')); // cross-origin requests will not be allowed
  }
});
const PORT = 5000;

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

/*let clientlist = require('./clientlist.json')

app.use(async function(req,res,next){	
	if(clientlist.includes(req.get('host'))){
		next();	
	}else{
		res.end('Blocked');	
	}	
   	
});*/

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
var roomsFancy=[];
var roomsEvent=[];
io.on("connection", (socket) => {
	console.log('new connection'); 	
  	socket.on("join", (obj) => {
  		console.log('join',obj)  		
	    socket.join(obj.room);
	    if(rooms[obj.room]){
      		if(!rooms[obj.room].includes(socket.id)){      			      			
      			rooms[obj.room].push(socket.id);
      		}
      	}else{      		      		
      		rooms[obj.room]=[];
      		rooms[obj.room].push(socket.id);
      	} 

      	if(obj.roomFancy && obj.roomFancy==1){
	      	if(roomsFancy[obj.room]){
	      		if(!roomsFancy[obj.room].includes(socket.id)){      			      			
	      			roomsFancy[obj.room].push(socket.id);
	      		}
	      	}else{      		      		
	      		roomsFancy[obj.room]=[];
	      		roomsFancy[obj.room].push(socket.id);
	      	} 
	    }  	      	      	
      	console.log('rooms after join',rooms);        	 					    			    		
      	console.log('roomsFancy after join',roomsFancy);       	
  	});

  	socket.on("close", (obj) => {
  		console.log('close',obj)
  		socket.leave(obj.room);
  		if(rooms[obj.room]){
      		var key = rooms[obj.room].indexOf(socket.id)
      		if(key != -1){      			
      			rooms[obj.room].splice(key, 1);
      		}      		
      		if(rooms[obj.room].length == 0){
      			delete rooms[obj.room];
      		}
      	} 
      	
      	if(obj.roomFancy && obj.roomFancy==1 && roomsFancy[obj.room]){
      		var key = roomsFancy[obj.room].indexOf(socket.id)
      		if(key != -1){      			
      			roomsFancy[obj.room].splice(key, 1);
      		}      		
      		if(roomsFancy[obj.room].length == 0){
      			delete roomsFancy[obj.room];
      		}
      	} 
      	console.log('rooms after close',rooms); 
      	console.log('roomsFancy after close',roomsFancy); 
  	});

  	/*socket.on("message", (obj) => {  		
	    socket.broadcast.to(obj.room).emit("message", { user: "Admin", text: 'new message '+obj.message});	    
  	})*/
  	
  	socket.on("disconnect", () => {	    
	    console.log("socket closed",socket.id)
  		var UserId = socket.id
	  	for (const [roomkey, value] of Object.entries(rooms)) {	  		
	  		var key = rooms[roomkey].indexOf(UserId)
	  		if(key != -1){      			
	  			rooms[roomkey].splice(key, 1);
	  		}      		
	  		if(rooms[roomkey].length == 0){
	  			delete rooms[roomkey];
	  		}
		}
		for (const [roomkey, value] of Object.entries(roomsFancy)) {	  		
	  		var key = roomsFancy[roomkey].indexOf(UserId)
	  		if(key != -1){      			
	  			roomsFancy[roomkey].splice(key, 1);
	  		}      		
	  		if(roomsFancy[roomkey].length == 0){
	  			delete roomsFancy[roomkey];
	  		}
		}
		for (const [roomkey, value] of Object.entries(roomsEvent)) {	  		
	  		var key = roomsEvent[roomkey].indexOf(UserId)
	  		if(key != -1){      			
	  			roomsEvent[roomkey].splice(key, 1);
	  		}      		
	  		if(roomsEvent[roomkey].length == 0){
	  			delete roomsEvent[roomkey];
	  		}
		}
		console.log('rooms after socket close',rooms);
		console.log('roomsFancy after close',roomsFancy); 
		console.log('roomsEvent after close',roomsEvent); 
  	});

  	socket.on("join_eventid", (obj) => {
  		console.log('join_eventid',obj)  		
	    socket.join(obj.room);
	    if(roomsEvent[obj.room]){
      		if(!roomsEvent[obj.room].includes(socket.id)){      			      			
      			roomsEvent[obj.room].push(socket.id);
      		}
      	}else{  
      		roomsEvent[obj.room]=[];
      		roomsEvent[obj.room].push(socket.id);
      	} 

      	console.log('roomsEvent after join',roomsEvent);       	
  	});

  	socket.on("close_eventid", (obj) => {
  		console.log('close_eventid',obj)
  		socket.leave(obj.room);
  		if(roomsEvent[obj.room]){
      		var key = roomsEvent[obj.room].indexOf(socket.id)
      		if(key != -1){      			
      			roomsEvent[obj.room].splice(key, 1);
      		}      		
      		if(roomsEvent[obj.room].length == 0){
      			delete roomsEvent[obj.room];
      		}
      	}       	
      	
      	console.log('roomsEvent after close',roomsEvent); 
  	}); 	
});

server.listen(PORT, () => console.log(`Server is connected to Port ${PORT}`));

setInterval(function() {  			
	broadcast_auto(); 
	broadcast_auto_fancy();
	broadcast_auto_event();
}, 500);


async function broadcast_auto() {
	//console.clear()
	const allKeys = Object.keys(rooms);	
	console.log('allKeys',allKeys)				    			    				
	console.log('All rooms',io.sockets.adapter.rooms)				    			    				
	if(allKeys.length > 0){	
		//try {await clientRedis.connect();}catch(err) {}		
		await axios.get('https://apibsf.live/api/Odds/betfair/'+allKeys.toString()).then(res => {    		    	
	    	res.data.forEach((data) => {	    		
	    		//clientRedis.connect().then(async () => {})	    						  				  		
				//clientRedis.set('MarketData_'+data.marketId, JSON.stringify(data));									

				var msgObj = {room: data.marketId,msg: 'hello auto'};	    		
	    		console.log('messaged broadcast auto',msgObj)		    		
	    		msgObj.apidata=[];
	    		msgObj.apidata[0] = data;		    			    			    		
	    		io.to(data.marketId).emit("message", msgObj);
		  	});	
	  	}).catch(error => {
	    	console.error('error in fetch api data for betfair odds');
	  	});
	  	//await clientRedis.quit();	
	}  
}

async function broadcast_auto_fancy() {
	//console.clear() // {timeout: 2000}
	const allKeys = Object.keys(roomsFancy);	
	console.log('allKeys roomsFancy',allKeys)
	for (const [roomkey, value] of Object.entries(roomsFancy)) {					    			    									    			    									
		await axios.get('https://fancy.omsexch.live/api/betfair/BookMakerFancy/'+roomkey).then(res => {	    	
			var msgObj = {room: roomkey,msg: 'hello auto fancy'};	    		
    		console.log('messaged broadcast auto for room fancy',msgObj)		    		
    		msgObj.apidata = res.data;		    			    			    		
    		io.to(roomkey).emit("message_fancy", msgObj);
	  	}).catch(error => {
	    	console.error('error in fetch api data for fancy');
	  	});
	}  
}

async function broadcast_auto_event() {	
	const allKeys = Object.keys(roomsEvent);	
	console.log('allKeys roomsEvent',allKeys)
	for (const [roomkey, value] of Object.entries(roomsEvent)) {							    			    									    			    									
		await axios.get('https://score.apibsf.live/api/MatchOdds/Score/'+roomkey).then(res => {	
			if(res.data){    	
				var msgObj = {room: roomkey,msg: 'hello auto Event'};	    		
	    		console.log('messaged broadcast auto for room Event',msgObj)		    		
	    		msgObj.apidata = res.data;		    			    			    		
	    		io.to(roomkey).emit("message_eventid", msgObj);
	    	}	
	  	}).catch(error => {
	    	console.error('error in fetch api data for fancy');
	  	});
	}  
}

