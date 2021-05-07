const Step3 = (props) => {
    return (
        <div className={`${props.visible !== 2 ? "hidden" : ""}`}>
            <p>step 3 </p>
        </div>
    )
}

export default Step3;