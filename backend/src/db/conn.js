const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://everyouth:jqkqB1olCmPv19az@cluster0.2hie9xm.mongodb.net/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.error("Error connecting to database:", err);
});
