import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h1><span>404</span>Page Not Found</h1>
            <Link to="/">Go back to <span>Home</span></Link>
        </div>
     );
}
 
export default NotFound;