import React from 'react'
import Newarrivalslider from './Newarrivalslider'
import Timer from './Timer'

const Page4 = () => {
  return (
    <>
        <div className='min-h-[210vh] w-full bg-white overflow-hidden'>
          <section className="py-10 px-4 sm:px-6 md:px-20 bg-white">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 sm:mb-5">New Arrivals</h2>
<p className='text-red-600 text-center text-xl sm:text-2xl font-semibold mb-6'>We will reveal them shortly!</p>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
{[1, 2, 3, 4].map((item) => (
<div key={item} className="p-4 sm:p-5 bg-gray-100 rounded-2xl shadow hover:shadow-xl transition cursor-pointer flex flex-col items-center">
<div className="h-48 w-full bg-gray-300 rounded-xl mb-4"></div>
<h4 className="text-lg sm:text-base md:text-lg font-semibold mb-1 text-center">New Product</h4>
<p className="text-gray-600 text-sm sm:text-base mb-4 text-center">$129.99</p>
<button className="w-full py-2 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition">Shop Now</button>
</div>
))}
</div>
</section>
<Newarrivalslider/>
<Timer/>
        </div>
    </>
  )
}

export default Page4