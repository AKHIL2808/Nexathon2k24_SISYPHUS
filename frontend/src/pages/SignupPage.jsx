import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import Labels from "../components/Labels.jsx";

function SignupPage() {
    return (
      <div className=' relative flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center h-screen bg-black '>
        <div className="absolute max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input border-2 border-white bg-black">
          <div className="flex flex-col justify-center">
          <h3 className='font-bold text-4xl text-white text-neutal-800 text-center '>Register</h3>
        
          </div>
          <form action="" className="flex flex-col justify-center items-center gap-4 p-4 my-4">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                 <Labels labels="First Name"/>
          <Labels labels="Last Name"/>

          </div>
             <Labels labels="Email Address"/>
             <Labels labels="Password"/>

            <button className=" flex mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-center  relative  w-full text-white rounded-md h-12 font-medium shadow-dark text-center"  type="submit">
              <span className="mt-2 font-semibold text-xl text-center">Sign up </span><span className=" mt-2 p-2"><FaArrowRight /></span></button> {/* Add a submit button */}

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[2px] w-full"></div>
              
              <div>
                    <span className="text-md text-center  text-neutral-600">Already have an account? </span><Link to="/student/signin"><span className='text-white'>SignIn</span></Link>
                </div>

              
          </form>
        </div>
      </div>
    )
  }
  
  export default SignupPage;