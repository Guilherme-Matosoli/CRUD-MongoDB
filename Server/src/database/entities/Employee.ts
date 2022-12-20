import mongoose, { Schema } from "mongoose";

const Employee = new Schema({

    name: String,
    age: Number,
    contract: String,
    wage: Number,
    position: String

}, {timestamps: true});

export default mongoose.model('Employees', Employee);
