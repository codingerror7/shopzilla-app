import React from 'react'
import Autoslider from './Autoslider'
import Slider4 from './Slider4'
import Slider5 from './Slider5'
import Link from 'next/link'

const Page3 = () => {
  
  return (
    <>
    <div className='h-[250vh] lg:min-h-[250vh] w-[100%] bg-indigo-950 overflow-hidden'>
      <Autoslider/>
     <section className="py-12 px-4 sm:px-8 md:px-20 bg-transparent">
<h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-white font-[gilroy] mt-10 mb-10">Featured Categories</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
<Link href='/product/beauty' className="p-4 sm:p-6 bg-gray-100 rounded-2xl cursor-pointer hover:scale-105 transition">
<div className="h-44 sm:h-48 bg-gray-300 rounded-xl mb-3">
  <img className='h-full w-full rounded-[20px] object-cover' src='/Beauty/beauty1.jpg'></img>
</div>
<h3 className="text-lg sm:text-xl font-semibold text-center">Beauty</h3>
</Link>
<Link href='/product/fitness' className="p-4 sm:p-6 bg-gray-100 rounded-2xl cursor-pointer hover:scale-105 transition">
<div className="h-44 sm:h-48 bg-gray-300 rounded-xl mb-3">
  <img className='h-full w-full rounded-[20px] object-cover' src='/Fitness/dumble1.jpg'></img>
</div>
<h3 className="text-xl font-semibold text-center">Fitness</h3>
</Link>
<Link href='/product/gadgets' className="p-4 sm:p-6 bg-gray-100 rounded-2xl cursor-pointer hover:scale-105 transition">
<div className="h-44 sm:h-48 bg-gray-300 rounded-xl mb-3">
  <img className='h-full w-full rounded-[20px] object-cover' src='/Electronics/headphone1.jpg'></img>
</div>
<h3 className="text-lg sm:text-xl font-semibold text-center">Electronics</h3>
</Link>
</div>
</section>
<h1 className='font-extrabold text-white text-2xl sm:text-3xl md:text-4xl ml-4 mt-14 md:ml-[2%]'>TRENDING IN ELECTRONICS</h1> 
<Slider4/>
<h1 className='font-extrabold text-white text-2xl sm:text-3xl md:text-4xl ml-4 mt-14 md:ml-[2%]'>TRENDING IN BEAUTY</h1> 
<Slider5/>
    </div>
    </>
  )
}

export default Page3
