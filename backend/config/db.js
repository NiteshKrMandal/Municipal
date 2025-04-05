import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://aaryanmandal1:Mandal6648@cluster01.sqn0ubc.mongodb.net/Municipal"
    )
    .then(() => console.log("DB Connected"));
};
