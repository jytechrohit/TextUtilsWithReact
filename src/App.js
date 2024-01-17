import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Index from "./Components/Index";
import "./App.css";
import Student from "./Components/Student";
import Validation from "./Components/Validation";

function App() {
    const [mode, setMode] = useState("light");

    const toogleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "grey";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
        }
    };

    return (
        <div>
            {/* <Navbar title="TextUtils" mode={mode} /> */}

            <Navbar
                title="TextUtils"
                aboutText="About TextUtils"
                mode={mode}
                toggleMode={toogleMode}
            />
            <Index title="Enter here the text to analyze" />
            <Student name={"Rohit"} email={"rohit@123gmail.com"} address={"delhi"} />

            <br></br>
            {/* <button onClick={() => setShow(!show)}>Toggle</button> */}
            <Validation />
        </div>
    );
}

export default App;
