const express = require(`express`);
const bcrypt = require(`bcrypt`);

const app = express();
const PORT = 3000;
const saltRounds = 10;
const hashKey =
  "hd64d654hfctm465fb489blvfod4b65d4dn6g51iuiaefdkl8947689n65d9g4w4teaaefd65u4";

const dummyUser = {};

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "Hello from the server",
  });
});

app.post(`/sign-up`, async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password + hashKey, saltRounds);
    dummyUser.email = email;
    dummyUser.password = hashedPassword;
    return res.send({
      you: dummyUser,
    });
  } catch (error) {
    res.send(error);
  }
});

app.post(`/sign-in`, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (dummyUser.email !== email) {
      return res.send(401).send("NO SUCH USER");
    }

    const IsCorrectPassword = await bcrypt.compare(
      password + hashKey,
      dummyUser.password
    );

    if (IsCorrectPassword) {
      return res.status(200).send({
        status: "success",
        massage: "Welcome",
        data: dummyUser.email,
      });
    } else {
      return res.status(401).send({
        error: "error",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`server in running on port ${PORT}`);
});
