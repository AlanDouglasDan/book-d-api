import mongoose, { Schema, Model } from "mongoose";
// import bcrypt from "bcryptjs";

export interface fields {
  id: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  businessName: string;
  address: string;
  // comparePassword: comparePasswordFunction;
}

export type userModel = mongoose.Document & fields;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    businessName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
  },
  { timestamps: true }
);

// type comparePasswordFunction = (userPassword: string) => Promise<boolean>;

// // Hash the password before saving
// userSchema.pre<userModel>("save", async function (next: any) {
//   if (!this.isModified("password")) {
//     return next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   const hash = bcrypt.hashSync(this.password, salt);
//   this.password = hash;
//   next();
// });

// // Compare the password with the hash
// const comparePassword: comparePasswordFunction = function (
//   this: userModel,
//   userPassword: string
// ) {
//   return bcrypt.compare(userPassword, this.password);
// };

// userSchema.methods.comparePassword = comparePassword;

userSchema.plugin(require("mongoose-autopopulate"));

const User: Model<userModel> = mongoose.model<userModel>("Users", userSchema);

export default User;
