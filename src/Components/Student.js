import React, { useState } from "react";

export default function Student(props) {
    const [name, setName] = useState("Anit");
    //send the  props as function
    const onchange = () => {
        setName("Rohit");
    };

    const [show, setShow] = useState(1);
    const toggleShow = () => {
        setShow(show + 1);
    };

    const [showt, setShowt] = useState(true);

    const toggleShowTF = () => {
        setShowt(!showt);
    };

    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);
    function getData(val) {
        console.warn(val.target.value);
        setData(val.target.value);
        setPrint(false);
    }

    //console.log(props);
    return (
        <div className="container" style={{ background: "skyBlue", margin: 10 }}>
            <h6>Hello {name}</h6>
            <button onClick={onchange}>Update Name</button>

            <h2>{show}</h2>
            <button onClick={toggleShow}>Toggle</button>

            <h2>{showt.toString()}</h2>
            <button onClick={toggleShowTF}>ToggleTrueFalse</button>

            <div className="App">
                {print ? <h1> {data}</h1> : null}
                <input type="text" onChange={getData} />
                <button onClick={() => setPrint(true)}>Print Data</button>
            </div>
        </div>
    );
}
