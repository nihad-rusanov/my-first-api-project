const mongoose = require("mongoose");

const connectDatabse = () => {
  mongoose
    .connect(process.env.url,{useNewUrlParser:true})
    .then(() => console.log("Connect Database"))
    .catch((err) => console.log(err));
};
module.exports = {connectDatabse}
