import { Link } from 'react-router-dom'
import Labels from '../components/Labels'
function LoginPage() {
    return (
        <div className='h-screen max-wd-md screen flex items-center justify-center flex-col bg-black  p-4'>

          
            <div className='flex flex-col items-center justify-center w-96 border-2 border-white-500 rounded-lg p-8 gap-4'>
                <div className="flex flex-col justify-center  w-full">
                   
                  
                </div>
                <div className="w-full">
                    <Labels labels="Email Address" />
                </div>
                <div className="w-full">
                    <Labels labels="Password" />
                </div>
                
                <div className='w-full flex justify-center'>
                    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-lg font-semibold rounded-xl  mt-3 py-2  w-60">Sign In</button>
                </div>
                
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[2px] w-full"></div>

                <div className="text-white">
                    <span className="text-md text-center  text-neutral-600">Dont have an account? </span><Link to="/student/signup"><span className='text-white'>Signup</span> </Link>
                </div>
    
            </div>
        </div>
    )  
}

export default LoginPage
