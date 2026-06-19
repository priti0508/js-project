const mongoose = require("mongoose");
// Schema
const proSchema = mongoose.Schema(
    {
        pname: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            min: 12900,
            max: 52900,
            required: true,
        },
        category: {
            type: String,
            enum: ["ab", "cd", "ef", "gh"],
            required: true,
        },
        quantity: {
            type:String,
          
        }
    },
    { timestamps: true }
);

const proModel = mongoose.model("pro", empSchema);

module.exports = proModel;

