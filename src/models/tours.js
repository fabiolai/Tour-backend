import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
    {
        
            title: String,
            location:String,
            duration: {
                startdate:Date,
                enddate: Date,
              },
              description:String,
              seat: String,
              picture: String,
              price: String,
              rate: Number,
              isActive: {
                type: Boolean,
                default: true,
              },
              createdby:{
                userid: Number,

              },

            
        
        },
        { timestamps: true }
    
);
const tour = mongoose.model("Tour",tourSchema);
export default tour;