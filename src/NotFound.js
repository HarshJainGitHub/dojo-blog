import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <span>That page Cannot be Found...</span>
            <Link to="/">Back to Homepage</Link>
        </div>
     );
}
 
export default NotFound;