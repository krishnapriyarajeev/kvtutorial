const Options = (props) =>{
    return(
        <span className="form-width">
                <label className="emp_label">{props.label}</label>
            <select id="emp" name={props.name}>

                {props.op.map((item, index)=>{
                    console.log(item);
                    return <option key= {item.id} value={item.val}>{item.label}</option>;
                })}
            </select>
        </span>
    )
}

export default Options;

