import '@/styles/globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';



export default function App(){

    return(
        <div className='flex grow-0 font-sans'>
      <div className=' w-[588px]  bg-black  text-lg flex lg:items-center lg:justify-center'>
        <div className=' md:my-auto md:mx-auto xl:w-[256px] xl:h-[88px]  xl:mx-[171px]  non-italic font-bold absolute  text-white text-5xl   xl:text-7xl'>
				Board.        
        </div>
      </div>
      <div className=' bg-[#F5F5F5] h-screen w-[852px] lg:text-2xl flex lg:items-center lg:justify-center'>
        <div className='absolute ' >
				<div className=' lg:w-2/6 lg:h-2/6 lg:w-[150px] xl:w-[131px] xl:h-[44px] xl:leading-[44px] font-sans   text-4xl font-bold '>
					 Sign In
				 </div> 
				 <div className='font-sansl  xl:w-[161px] xl:h-[19px] leading-[19.2px] text-base font-normal '>
				 	Sign in to your account
				 </div> 
				 <div className='flex   lg:mt-3  xl:mt-[26px]  xl:space-x-[25px] font-sans font-normal text-xs text-[#858585]' >
					<div className=' lg:w-35 lg:h-7  xl:w-[180px] xl:h-[30px] bg-white rounded-[10px] lg:px-3  xl:pl-[19px] xl:pt-[8px] xl:pb-[7px] xl:pr-[19px] flex lg:items-center lg:justify-center' >
						 <FontAwesomeIcon icon={faGoogle} className=' xl:w-[11.5px] xl:h-[14px] mr-[10.5px] lg:text-xs relative '  />  sign in with google
				   </div>
				 	<div className='lg:w-35 lg:h-7 lg:ml-2  xl:w-[180px] xl:h-[30px] bg-white rounded-[10px] lg:px-3  xl:pl-[19px] xl:pt-[8px] xl:pb-[7px] xl:pr-[19px] flex lg:items-center lg:justify-center' >
						 <FontAwesomeIcon icon={faApple} className='xl:w-[11.5px] xl:h-[14px] mr-[10.5px] lg:text-xs relative' />  sign in with apple
				   </div>				 
				 </div>
				 <div className='xl:w-[385px] lg:mt-3  xl:h-[317px] bg-white xl:mt-[25px] rounded-[20px]'>
				 	
				 	<div className='lg:px-5 lg:py-5 xl:pl-[30px] xl:pt-[20px] leading-20 lg:flex lg:flex-col  lg:justify-center '>
				 		<div className='leading-10'>
					 			<label htmlFor="email" className='font-sansl xl:h-[19px]  xl:font-normal text-[16px] xl:leading-[19px] text-black ' >
      						Email address
      					</label><br/>
      					<input type="email" id="email" name="email" 
      					className='lg:w-72 lg:w-30  bg-[#F5F5F5] xl:w-[325px] xl:h-[40px] rounded-[10px] placeholder-black  lg:px-3 xl:px-[10px] xl:py-[15px]'
      					placeholder='johndoe@gmail.com' /> 
				 		</div>
      				
						<div className='leading-10' >
							<label htmlFor="password" className='font-sansl h-[19px]  font-normal text-[16px] leading-[19px] text-black '>
      						Password
      					</label><br/>
      					<input type="password" id="password" name="password" 
      					className='lg:w-72 lg:w-30  bg-[#F5F5F5] xl:w-[325px] xl:h-[40px] rounded-[10px] placeholder-black lg:placeholder-[7px] xl:placeholder-[16px] lg:px-3 xl:px-[10px] xl:py-[15px]'
      					placeholder='••••••••' />
						</div>
						<div className='font-sansl font-normal text-[16px] mt-[20px] text-[#346BD4]'>
							Forgot password?						
						</div>
						 		<Link href='https://dashboard-git-main-yukendhiran.vercel.app'>
       							 <div className="bg-black w-[325px] h-[40px] rounded-[10px] flex text-white mt-[20px]">
         							 <span className="font-sans font-bold text-[16px] leading-[19.5px] m-auto">
												Sign In
            						</span>
        							</div>
        						</Link>
      				
      			</div>
      		</div>
				 <div className='ml-[50px] mt-[20px] w-[261px] font-sansl font-normal text-[16px] text-[#858585] h-[19px]'>
						Don’t have an account? <span className='text-[#346BD4]'>Register here</span>      			
      		</div>
        </div>
      </div>
      
	 </div>
    )
}