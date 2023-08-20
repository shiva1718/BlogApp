const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vishwaraviraaj08:vishwa08@cluster0.6sn3u0n.mongodb.net/BlogDB?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function addUser(userJSON) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        await client.db("BlogDB").collection("users").insertOne(userJSON);
        console.log("Successfully added user to database");
        return true;
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function addBlog(blog) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        await client.db("BlogDB").collection("blogs").insertOne(blog);
        console.log("Successfully added blog to database");
        return true;
    } catch (e) {
        console.log(e);
        return false;
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by
    // entering http://loacalhost:5000

    // If you see App is working means
    // backend working properly
});

app.post("/register", async (req, resp) => {
    let res = addUser(req.body).catch(console.dir);
    res.then((result) => {
        resp.status(200).send("User Registered");
    }).catch((e) => {
        resp.status(500).send("Something Went Wrong");
    });
});

app.post("/addBlog", async (req, resp) => {
    addBlog(req.body).catch(console.dir).then((result) => {
        resp.status(200).send("Blog Added");
    }).catch((e) => {
        resp.status(500).send("Something Went Wrong");
    });
});
app.listen(5000);

