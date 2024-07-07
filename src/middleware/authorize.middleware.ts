import express, { NextFunction } from "express";
import { RequestWithUser } from "../utils/requestWithUser";
import { JsonWebTokenError } from "jsonwebtoken";
import { JWT_SECRET } from "../utils/constants";
import { jwtPayload } from "../utils/jwtPayload";
import jsonwebtoken from "jsonwebtoken";

const authorize = async(
    req: RequestWithUser,
    res: express.Response,
    next: NextFunction
) => {
    try{
        const token = getTokenFromRequestHeader(req);
        console.log("token: ", token);
        const payload = jsonwebtoken.verify(token, JWT_SECRET);

        req.name = (payload as jwtPayload).name;
        req.email = (payload as jwtPayload).email;
        req.role = (payload as jwtPayload).role;
        
        return next();
    }catch(error){
        return next(error);
    }
}

const getTokenFromRequestHeader = (req: RequestWithUser) => {
    const bearerToken = req.header("Authorization");
    console.log("bearerToken: ", bearerToken);
    const token = bearerToken ? bearerToken.replace("Bearer","") : "";
    return token;
}

export default authorize;