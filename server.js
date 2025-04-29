const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const schema = require("./schema");

const app = express();

const PORT = 7868;

app.get("/",async(req,res)=>{
    try {
        const items = await schema.find();
        return res.status(200).send({message:"Hello there",items});
    } catch (error) {
        console.log("Something went wrong");
        res.status(400).send({message:"Something went wrong"});
    }
});

app.post("/createItems",async(req,res)=>{
    try {
        const {name,price,genre} = req.body;
        if(!name || !price || !body){
            return res.status(400).send({message:"Please fill in all the fields"});
        }

        const newItem = new model({
            name,price,genre
        });

        await newItem.save();

        return res.status(200).send({message:"Item added successfully",newItem});

    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal server error"});
    }
});

app.put("/updateItems:id", async(req,res)=>{
    try {
        const {id} = req.params;
        if(!{id}){
            return res.status(400).send({message:"Please provide the id"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal server error"});
    }
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DB connected succesfully");
    app.listen(PORT,()=>{
        try {
            console.log(`Server listening at http://localhost:${PORT}`);
        } catch (error) {
            console.log(error);
        }
    });
}).catch(()=>{
    console.log("error");
});