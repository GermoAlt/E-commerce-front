const Step1 = (props) => {
    return (
        <div className={`${props.visible !== 0 ? "hidden" : ""}`}>
            <p>step 1 </p>
        </div>
    )
}

export default Step1;