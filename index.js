const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const dotenv = require("dotenv");
const RegisterStartup = require("./modules/RegisterStartup");
const BecomeSponser = require("./modules/BecomeSponser");
const SubscribeEmail = require("./modules/SubscribeEmail");
const AddAdmins = require("./modules/AddAdmin");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON request bodies

const uri = `mongodb+srv://nerobislama14:zqaqjWzNvKDp7vZ1@cluster0.umuhy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //=========== Connection DataBase =============
    const database = client.db("booking");
    const bookingDetails = database.collection("startUp-register");
    const BecomeSponser22 = database.collection("BecomeSponser2");
    const SubscribeEmail1 = database.collection("SubscribeEmail");
    const AddAdminsDB = database.collection("Admins");

    //============ Modules API =============
    RegisterStartup(bookingDetails, app);
    BecomeSponser(BecomeSponser22, app);
    SubscribeEmail(SubscribeEmail1, app);
    AddAdmins(AddAdminsDB, app);



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/check', (req, res)=>{
  res.send('Check Is ready to !!');
})
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
