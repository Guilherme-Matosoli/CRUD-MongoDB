import { Router } from "express";

import { ListEmployeeController } from "./controllers/ListEmployeeController";
import { EditEmployeeController } from "./controllers/EditEmployeeController";
import { CreateEmployeeController } from "./controllers/CreateEmployeeController";
import { DeleteEmployeeController } from "./controllers/DeleteEmployeeController";

export const routes = Router();

routes.get('/list', new ListEmployeeController().index);
routes.post('/create', new CreateEmployeeController().create);
routes.put('/edit/:id', new EditEmployeeController().edit);
routes.delete('/delete/:id', new DeleteEmployeeController().delete);
