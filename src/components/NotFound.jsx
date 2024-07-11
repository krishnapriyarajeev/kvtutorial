import { Link } from "react-router-dom";

const NotFound =(props)=>{
    return(
        <div>
            <p>Page Not Found</p>
            <Link to="/">Go Back Home</Link>
        </div>
    )
}

export default NotFound;