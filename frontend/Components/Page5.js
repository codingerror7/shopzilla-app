'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Page5 = () => {
  let router = useRouter();
  function call(){
    router.push("/all");
  }
  return (
    <>
    <div className='min-h-[160vh] w-full bg-indigo-950 overflow-hidden px-4 sm:px-6 lg:px-20'>


{/* PAGE HEADER */}
<div className="text-center mb-16 mt-16">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">Shop by Category</h1>
<p className="text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
Explore a wide range of premium categories curated for your lifestyle.
</p>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 max-w-6xl mx-auto">
    {[{
      href:'/product/mens', img:'/Men/shirt5.jpg', title:"Men's Fashion", desc:"Trending outfits and premium wear"
    },{
      href:'/product/womens', img:'/Women/saree4.jpg', title:"Women's Fashion", desc:"Latest styles and elegant designs"
    },{
      href:'/product/gadgets', img:'/Electronics/watch1.jpg', title:"Electronics", desc:"Smart gadgets and devices"
    },{
      href:'/product/kids', img:'/Child/child10.jpg', title:"Genz's store", desc:"Aesthetic decor for modern homes"
    },{
      href:'/product/beauty', img:'/Beauty/beauty7.jpg', title:"Beauty&Care", desc:"Top-notch skincare and wellness"
    },{
      href:'/product/health', img:'/Health/health9.jpg', title:"Health&Wellness", desc:"Gear for active lifestyle"
    }].map((cat, index)=>(
      <Link key={index} href={cat.href} className="w-full bg-gray-100 p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer group">
        <div className="h-48 sm:h-56 md:h-60 bg-gray-300 rounded-xl mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <img className='h-full w-full object-cover rounded-xl' src={cat.img} alt={cat.title}></img>
        </div>
        <h3 className="text-lg sm:text-xl md:text-xl font-semibold mb-1">{cat.title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{cat.desc}</p>
      </Link>
    ))}
  </div>

  {/* BOTTOM CTA */}
  <div className="text-center mt-12 sm:mt-16">
    <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4">Looking for something specific?</h2>
    <p className="text-white mb-6 sm:mb-8 text-sm sm:text-base">Browse our full collection and find exactly what you need.</p>
    <button onClick={call} className="px-8 sm:px-10 py-2 sm:py-3 mb-16 bg-black text-white rounded-xl shadow hover:scale-105 transition">
      View All Products
    </button>
  </div>
</div>
    </>
  )
}

export default Page5