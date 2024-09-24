const { ObjectId } = require("mongodb");

function SubscribeEmail(SubscribeEmail1, app) {
  app.post("/subscribeEmail1", async (req, res) => {
    const data = req.body;
    console.log(data);
    const result = await SubscribeEmail1.insertOne(data);
    res.send(result);
  });
  app.get("/subscribeEmail1", async (req, res) => {
    const data = req.body;
    const cursor = await SubscribeEmail1.find(data).toArray();
    res.send(cursor);
  });
  app.get("/subscribeEmail1/:id", async (req, res) => {
    const { id } = req.params;
    const cursor = await SubscribeEmail1.find({
      _id: new ObjectId(id),
    }).toArray();
    res.send(cursor);
  });
}

module.exports = SubscribeEmail;
