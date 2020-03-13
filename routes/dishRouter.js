const express  = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end('Send all dishes');
})
.post((req,res,next)=>{
	res.end(`Will add dish ${req.body.name} with details: ${req.body.description}`);
})
.put((req,res,next)=>{
	res.statusCode=403;
	res.end('Not supported');
})
.delete((req,res,next)=>{
	res.end('Deleting');
});

module.exports = dishRouter;