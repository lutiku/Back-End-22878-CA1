const express = require('express')
const app = express()
const { MongoClient, ObjectId } = require("mongodb");

// Replace the following with your Atlas connection string
const url = "mongodb+srv://FirstDatabase:Poiuy.2706@cluster0.osu6p.mongodb.net/ca1?retryWrites=true&w=majority"
const client = new MongoClient(url, { useUnifiedTopology: true });

// The database to use
const dbName = "ca1";


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false}))



let db, smartphonesDb ;




run().catch(console.dir);


//home page route
app.get('/', (req, res) => {
    // console.log(smartphoneDb)
    res.send('Hello world')
})



//get smarthphones router
app.get('/smartphones/:id', (req, res) => {
    console.log('You are in the smarthphones route');

    async function findSmartphone() {
        const foundSmartphone = await  smartphonesDb.findOne({model:"model1"})
        res.json(foundSmartphone)
    };
    findSmartphone();
})




//post smartphones route
app.post('/smartphones', (req, res) =>{
    console.log('I have received a post request in the /smartphones route');
    //create a smartphone object
    let smartphone = new Smartphone(
        req.body.brand,
        req.body.model,
        req.body.colour
    )
    //insert it to the database
    SmartphoneDb.insertOne(smartphone)
    res.sendStatus(200)

})



// smartphone router for the update
app.put('/smartphones', (req, res) => {
    console.log(' Smartphones router for update ');
    async function findSmartphone() {
        try{
            const foundSmartphone = await  smartphonesDb.findOne({"_id": ObjectId(req.body.id)})
            //if the car is found edit it and send a message to the user
            if(foundSmartphone !== null){
                let smartphone = new Smartphone(
                    foundSmartphone.brand,
                    foundSmartphone.model,
                    foundSmartphone.colour
                )


                try{
                    const updateResult = await smartphonesDb.updateOne(
                        {"_id": ObjectId(req.body.id)},
                        {$set:smartphone})
                } catch(err){
                    console.log(err.stack)
                }
                // console.log(updateResult.modifiedCount)
                res.send("The smartphone was updated");
            } else {
                //if the car is not found send a message to the user saying that this entry doe not exist
                res.send("Te smarthphone was not updated");
            }}catch(err){
            res.send("Object id is invalid")
        }
    };
    findSmartphone();

})


// car router to delete
app.delete('/smartphones', (req, res) =>{

    console.log('Smartphones router to delete one car');

    console.log(req.body.id)

    smartphonesDb.deleteOne({"_id": ObjectId(req.body.id)})
    async function findSmartphone() {
        const foundSmartphone = await  smartphonesDb.findOne({"_id": ObjectId(req.body.id)})
        if(foundSmartphone !== null){
            res.send("The entry was not deleted")
        }
        res.send("The entry was deleted")
    };
    findSmartphone();
})


//code used to start our application
async function run() {
    // try to start the application only if the database is connected correctly
    try {
        //connect to the database
        await client.connect();

        //connect to the right database ("dealership")
        db = client.db(dbName);

        //get reference to our car "table"
        smartphonesDb = db.collection("smartphones");

        //start listening to requests (get/post/etc.)
        app.listen(3000);
    } catch (err) {
        //in case we couldn't connect to our database throw the error in the console
        console.log(err.stack);
    }
}


class Smartphones {
    constructor(brand, model, colour){
        this.brand = brand;
        this.model = model;
        this.colour = colour
    }

    printValues(){
        console.log(this.brand, this.model, this.colour);
    }
}
