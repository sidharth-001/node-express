const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end('Send all promotions');
})
.post((req,res,next)=>{
	res.end(`Will add promotion ${req.body.name} with details: ${req.body.description}`);
})
.put((req,res,next)=>{
	res.statusCode=403;
	res.end('Not supported');
})
.delete((req,res,next)=>{
	res.end('Deleting');
});

promoRouter.route('/:promoId')
.all((req,res,next)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end(`Sending details of ${req.params.promoId}`);
})
.post((req,res,next)=>{
	res.statusCode=403;
	res.end(`Post not supported for ${req.params.promoId}`);
})
.put((req,res,next)=>{
	res.write(`Updating promotion ${req.params.promoId} `);
	res.end(`Updated promotion with ${req.body.name} , details ${req.body.description}`);
})
.delete((req,res,next)=>{
	res.end(`Deleting ${req.params.promoId}`);
});

module.exports = promoRouter;