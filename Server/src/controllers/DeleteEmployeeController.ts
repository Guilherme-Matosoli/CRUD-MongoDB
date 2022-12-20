import { Request, Response } from "express";
import Employee from "../database/entities/Employee";

export class DeleteEmployeeController{
    async delete(req: Request, res: Response ): Promise<Response>{
        const { id } = req.params;

        try{
            const employeeDeleted = await Employee.findByIdAndRemove(id);

            return res.status(204).json(employeeDeleted);
        }catch(err){
            return res.status(500).json({message: "Internal Server Error"})
        }
    };
};