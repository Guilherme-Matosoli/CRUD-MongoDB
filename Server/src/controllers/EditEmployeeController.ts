import { Request, Response } from 'express';
import Employee from '../database/entities/Employee';


export class EditEmployeeController{
    async edit(req: Request, res: Response ): Promise<Response>{
        const { id } = req.params;
        const {
            name,
            age,
            contract,
            wage, 
            position
        } = req.body;

        try{
            const employeeEdited = await Employee.findByIdAndUpdate(id, {
                name,
                age,
                contract,
                wage,
                position
            });

            return res.status(204).json(employeeEdited);


        }catch(err){

            return res.status(500).json({message: "Internal Server Error"})
        }

    
    };

}