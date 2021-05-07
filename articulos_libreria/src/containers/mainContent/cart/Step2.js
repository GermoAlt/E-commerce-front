import React from "react";
const Step2 = (props) => {
    return (
        <div className={`${props.visible !== 1 ? "hidden" : ""}`}>
            <p>step 2 </p>
        </div>
    )
}

export default Step2;