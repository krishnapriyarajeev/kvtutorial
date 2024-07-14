const Options = (props) =>{
    const onChange = (e) => {
        if (props.onChange) {
          props.onChange(e.target.value, props.field);
          console.log(e.target.value);
          // console.log(e);
        }
      };
    
    return(
        <span className="form-width">
                <label className="emp_label">{props.label}</label>
            <select id="emp" name={props.name} onChange={onChange}>

                {props.op.map((item, index)=>{
                    // console.log(item);
                    return <option key= {item.id} value={item.val} >{item.label}</option>;
                })}
            </select>
        </span>
    )
}

export default Options;

