const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev')); // shows information about headers;

app.use(bodyParser.json());

app.use('/dishes',dishRouter);

/*
app.get('/dishes/:dishId',(req,res,next)=>{
	res.end(`Sending details of ${req.params.dishId}`);
});
app.post('/dishes/:dishId',(req,res,next)=>{
	res.statusCode=403;
	res.end(`Post not supported for ${req.params.dishId}`);
});
app.put('/dishes/:dishId',(req,res,next)=>{
	res.write(`Updating dish ${req.params.dishId}`);
	res.end(`Updated dish with ${req.body.name} , details ${req.body.description}`);
});
app.delete('/dishes/:dishId',(req,res,next)=>{
	res.end(`Deleting ${req.params.dishId}`);
});
*/


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