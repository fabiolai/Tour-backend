import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
    {
        
            title: String,
            location:String,
            duration: {
                startAt:Date,
                endAt: Date,
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
              createdby:
              {
                type:mongoose.Schema.ObjectId,
                ref:"User"

              },

            
        
        },
        { timestamps: true }

    
);

tourSchema.pre(/^find/, function(next){
  this.populate({
    path:"createdby",
  })
  next();})




const tour = mongoose.model("Tour",tourSchema);
export default tour;