import { Request, Response } from "express";
import Employee from "../database/entities/Employee";

export class CreateEmployeeController{
    async create(req: Request, res: Response ): Promise<Response>{

        try{

            const {
                name,
                age,
                contract,
                wage, 
                position
            } = req.body;
    
            const employeeCreated = await Employee.create({
                name,
                age,
                contract,
                wage,
                position
            });

            return res.status(201).json(employeeCreated);

        }catch(err){
            return res.status(500).json({message: "Internal server error"})
        }


        
    };
}