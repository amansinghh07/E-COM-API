
import UserModel from "../features/user/user.model.js";
export const basicAuthorizer=(req,res,next)=>{
    // 1.Check if AUthorization header is Empty.

    const authHeader=req.headers["authorization"];
    if(!authHeader){
        return res.status(401).send("No authorization details found..");
    }
    console.log(authHeader);

    // 2.Extract Credentials .[Basic lashdaoigfuqeg12345pfiob]
    const base64Credentials=authHeader.replace('Basic','');
    console.log(base64Credentials);
    // 3.Decode credentials
    const decodedCreds=Buffer.from(base64Credentials,'base64').toString('utf-8');
    console.log(decodedCreds);
    
    const creds=decodedCreds.split(':');
    const user=UserModel.getAll().find(u=>u.email==creds[0]&&u.password==creds[1]);
    if(user){
        next();
    }else{
        return res.status(401).send("Incorrect Credentials");
    }
}