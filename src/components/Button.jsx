const Button = (props) => {

    // const handleClick = (e) => {
    //     e.preventDefault(),
    //     console.log(e)
    // };

    return(
        <button onClick={props.onClick} className={props.className}>{props.text}</button>
    )
}

export default Button;