const { ObjectId } = require("mongodb");

function BecomeSponser (BecomeSponser22 , app){

    app.post("/becomeSponser", async (req, res) => {
        const data = req.body;
        console.log(data);
        const result = await BecomeSponser22.insertOne(data);
        res.send(result);
      });
      app.get('/becomeSponser' , async (req , res )=>{
        const data = req.body;
        const cursor = await BecomeSponser22.find(data).toArray();
        res.send(cursor);
      })
      app.get('/becomeSponser/:id' , async (req , res )=>{
        const { id } = req.params; 
          const cursor = await BecomeSponser22.find({ _id: new ObjectId(id)  }).toArray(); 
          res.send(cursor);
      })
}

module.exports  = BecomeSponser;