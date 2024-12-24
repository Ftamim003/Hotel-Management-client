import errorImage from '../../assets/images/error.png'
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div >
           
        <div className="min-h-screen flex flex-col items-center justify-center">
        <div className='mt-5 justify-center'>
            <img src={errorImage} alt="" className='w-full rounded-lg'/>
         </div> 
        <div className='mt-5'>
        <Link to="/" className="btn btn-primary hover:bg-blue-600 transition-colors duration-300">
            Go Back to Home
        </Link>
        </div>
    </div>
    </div>
    );
};

export default NotFound;