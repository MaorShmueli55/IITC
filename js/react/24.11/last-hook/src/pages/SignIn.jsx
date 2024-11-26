import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [btnText , setBtnText] = useState("Submit")
  const [passType , setPassType] = useState("false")
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBtnText("loading")
    setTimeout(()=>{
        setEmail("")
        passwordRef.current.value=""
        console.log(email);
        console.log(passwordRef.current.value);
        setBtnText("SUBMIT")
        setTimeout(()=>{
            navigate("/")
        },1000)
    },2000)
  };

  return (
    <>
      <div>SignIn</div>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          background: "A9A9A9",
          padding: "1.5rem",
          gap: "1rem",
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          ref={passwordRef}
          type={passType ? "text" : "password"}
          id="password"
          name="password"
        />
        <label htmlFor="show">ShowPassword</label>
        {/* <input type="checkBox" id="show" name="show" onClick={setPassType(pass)=> {!pass}}/> */}
        <button type="submit">{btnText}</button>
      </form>
    </>
  );
};

export default SignIn;
