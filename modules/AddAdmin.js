const { ObjectId } = require("mongodb");

function AddAdmins(AddAdminsDB, app) {

  // Add new admin
  app.post("/admins", async (req, res) => {
    const data = req.body;
    console.log(data);
    const result = await AddAdminsDB.insertOne(data);
    res.send(result);
  });

  // Get all admins
  app.get("/admins", async (req, res) => {
    const cursor = await AddAdminsDB.find({}).toArray();
    res.send(cursor);
  });

  // Get a specific admin by ID
  app.get("/admins/:id", async (req, res) => {
    const { id } = req.params;
    const cursor = await AddAdminsDB.find({
      _id: new ObjectId(id),
    }).toArray();
    res.send(cursor);
  });

  // Delete admin by ID (corrected for MongoDB)
  app.delete("/admins/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
      const result = await AddAdminsDB.deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount === 1) {
        res.status(200).json({ message: "Admin removed successfully" });
      } else {
        res.status(404).json({ error: "Admin not found" });
      }
    } catch (err) {
      console.error("Error deleting admin:", err);
      res.status(500).json({ error: "Failed to remove admin" });
    }
  });
}

module.exports = AddAdmins;
