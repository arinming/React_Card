import React from "react";

export default function ShowMusic() {
    function viewMusic() {
        console.log("악보");
    }
    function viewName(age) {
        console.log(age);
    }
    /*
    function showText(e) {
        console.log(e.target.value)
    }
    */


    return (
        <div>
            <h1>Hello</h1>
            <button onClick={viewMusic}>View More</button>
            <button
                onClick={
                    () => {
                        viewName("아린");
                    }}>
                        View Name
                        </button>
            <input type="text" onChange={(e)=>{
                console.log(e.target.value)
            }} />
        </div>
    )
}