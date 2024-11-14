const User = require(`../models/userModel.js`);


const createUser = async (req, res) => {
  const { fName, lName, email, phoneNumber } = req.body;
  if (!fName || !lName || !email || !phoneNumber) {
    return res
      .status(400)
      .send(`fName lName mail and phoneNumber are required`);
  }

  try {
    const newUser = new User({
      fName,
      lName,
      email,
      phoneNumber,
    });
    await newUser.save();
    res.status(201).send({
      status: `success`,
      message: `"User Succefully Regitered"`,
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    if (error?.errorResponse?.code === 11000) {
      return res.status(400).send({
        status: "Failed",
        message: "User already exists",
      });
    }
    res.status(500).send(error);
  }
};

const findUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await User.findById(id);
    res.status(200).send({
      status: "success",
      data: foundUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const findAllUser = async (req, res) => {
  try {
    const foundUser = await User.find();
    res.status(200).send({
      status: "success",
      data: foundUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (id === ":id") {
      return res.status(400).send("id is required");
    }

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(400).send("user is not exists");
    }

    res.status(200).send({
      status: "success",
      message: "user deleted",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req , res) =>{
    try {
        const { id } = req.params;
          const user = await User.findByIdAndUpdate(id , req.body, {
            new: true
          });
          if (!user) {
            return res.status(400).send("user is not exists");
          }
      
          res.status(200).send({
            status: "success",
            message: "user update",
            data: user
          });
        } catch (error) {
          res.status(500).send(error);
        }
}

module.exports = {
  createUser,
  findUserById,
  findAllUser,
  deleteUser,
  updateUser
};
