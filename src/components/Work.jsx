import React from 'react'
import Food from '../assets/food.png'
import DataImg from '../assets/dataimg.jpeg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Work</p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>
        <div>
          {/* Image 1 */}
          <div className='flex mr-6 gap-8'>
          <div className='hover:scale-110 duration-500' >
           <a href="https://jessie9497.github.io/food-app-react/"><img src={Food} alt="foodapp" /></a> 
            <p className='text-center py-3 text-2xl'>Food Web App</p>
          </div>
         

          <div className='px-4 hover:scale-110 duration-500'>
         <a href="https://jessie9497.github.io/data-cloud-app/"> <img src={DataImg} alt="" /></a>  
            <p className='text-center py-3 text-2xl'>Cloud Data App</p>
          </div>
            {/* Image 2 */}
          
            </div>
           </div>
          {/* Image section ends */}

        </div>
      </div>
    
  )
}

export default Work