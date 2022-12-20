import { Request, Response } from "express";
import Employee from "../database/entities/Employee";


export class ListEmployeeController{
    async index( req: Request, res: Response ): Promise<Response>{

        const employees = await Employee.find();
    
        return res.json(employees);
        
    };
}