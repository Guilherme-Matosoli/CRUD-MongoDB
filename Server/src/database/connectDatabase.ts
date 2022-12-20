import mongoose from "mongoose";

const PASSWORD = process.env.DB_PASS;

export const ConnectionDB = mongoose.connect(`mongodb+srv://mongodbcrud:${PASSWORD}@crud.f6oq4xc.mongodb.net/?retryWrites=true&w=majority`)
