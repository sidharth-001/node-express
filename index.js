const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev')); // shows information about headers;
app.use(express.static(__dirname+'/public')); // search the given directory for serving the static pages;

app.use((req,res,next) => {		// will use in creating a server;
		res.statusCode = 200;
		res.setHeader('Content-Type','text/html');
		res.end('<html><body><h1>This is a Express server</h1></body></html>');
});

const server = http.createServer(app); 	// creates a server;

server.listen(port,hostname,()=>{		//listening to the requests at the localhost:port;
	console.log(`Listening to http://${hostname}:${port}`);
});