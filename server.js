import express from'express';
import * as Productrouter from './src/features/product/product.route';
const server=express();

server.use('/api/products',Productrouter);
server.get('/',(req,res)=>{
    res.send("Welcom to Ecom APi server...");
});

server.listen(3200,()=>{
    console.log("server is listening at 3200");
})