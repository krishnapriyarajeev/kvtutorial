import { forwardRef } from "react";

const TextField = forwardRef((props, ref) => {
  const onChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value, props.field);
      // console.log(e);
    }
  };

  return (
    <span className="form-width">
      <label htmlFor="uname" className="emp_label">
        {props.label}
      </label>
      {/* {props.error} */}
      <input
        style= {props.error? {borderColor:"red"}:{}}
        type={props.type}
        placeholder={props.placeholder}
        id="emp"
        value={props.value}
        onChange={onChange}
        ref={ref}
      />
      {/* <div>
        {props.error}
      </div> */}
    </span>
  );
});

export default TextField;
