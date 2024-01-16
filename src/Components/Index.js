import React, { useState } from "react";

export default function Index(props) {
    // const [count, setCount] = useState(0);
    const [text, setText] = useState("Enter the text is here ");

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    };

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        console.log("lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text.value);
        }
    };
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };

    return (
        <div className="container my-3">
            <h3>{props.title}</h3>
            <textarea
                className="form-control"
                value={text}
                onChange={handleOnChange}
                id="myBox"
                rows="6"
            ></textarea>

            <div className="container my-3">
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>

                <button className="btn btn-primary mx-1" onClick={handleLoClick}>
                    Convert to lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div className="container my-3">
                <h2>Your Test Summery</h2>
                <p>
                    {text.split(" ").length} Words and {text.length} characters
                </p>
                {/* //Calculating Reading Time */}
                <p>time to read the text -: {0.008 * text.split(" ").length} minutes </p>

                <h3>Preview </h3>
                <p>{text}</p>
            </div>
        </div>
    );
}
