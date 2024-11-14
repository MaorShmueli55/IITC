const mongoose = require(`mongoose`);

 const userSchema = new mongoose.Schema({
    fName: { 
       type: String,
       required: true 
      },
    lName: { 
       type: String,
       required: true 
      },
    email: { 
      type: String, 
      required: true ,
      unique: true
     },
    phoneNumber: { 
      type: String, 
      required: true,
      unique: true
     }
     
});

userSchema.virtual(`fullName`).get(function(){
  return `${this.fName} ${this.lName}`
});

userSchema.set(`toJSON`, {virtuals: true})

module.exports = mongoose.model(`User` , userSchema)