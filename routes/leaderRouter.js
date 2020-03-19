const express  = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end('Send all leaders');
})
.post((req,res,next)=>{
	res.end(`Will add leader ${req.body.name} with details: ${req.body.description}`);
})
.put((req,res,next)=>{
	res.statusCode=403;
	res.end('Not supported');
})
.delete((req,res,next)=>{
	res.end('Deleting');
});

leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end(`Sending details of ${req.params.leaderId}`);
})
.post((req,res,next)=>{
	res.statusCode=403;
	res.end(`Post not supported for ${req.params.leaderId}`);
})
.put((req,res,next)=>{
	res.write(`Updating leader ${req.params.leaderId} `);
	res.end(`Updated leader with ${req.body.name} , details ${req.body.description}`);
})
.delete((req,res,next)=>{
	res.end(`Deleting ${req.params.leaderId}`);
});

module.exports = leaderRouter;