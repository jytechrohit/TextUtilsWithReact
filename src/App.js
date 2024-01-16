import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Index from "./Components/Index";
import "./App.css";

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
            <Index title="Enter the text to analyze" />
        </div>
    );
}

export default App;
