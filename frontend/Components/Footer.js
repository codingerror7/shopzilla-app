import React from 'react'
import { FaShoppingBag } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <div className='min-h-[60vh] pt-16 bg-white overflow-hidden px-6 md:px-20'>
  
  {/* HEADER */}
  <h3 className='font-[gilroy] text-3xl md:text-4xl font-extrabold text-gray-900 mb-4'>Inspiration for Future Gateways</h3>
  <hr className='border-gray-300 mb-6' />

  {/* MAIN FOOTER CONTENT */}
  <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-16 mb-6'>
    
    {/* Logo & Brand */}
    <div className='flex items-center gap-3'>
      <h1 className='text-3xl md:text-4xl text-orange-800 font-extrabold font-[gilroy]'>Shopzilla</h1>
      <FaShoppingBag className='text-4xl md:text-5xl text-orange-700' />
    </div>

    {/* Navigation Links */}
    <div className='flex flex-col md:flex-row gap-10'>
      <div className='flex flex-col gap-2 md:gap-3 text-black text-sm md:text-base font-medium'>
        <p className='hover:underline cursor-pointer'>SHOPZILLA YOUR HOME</p>
        <p className='hover:underline cursor-pointer'>ABOUT SHOPZILLA</p>
        <p className='hover:underline cursor-pointer'>SHOPZILLA YOUR REVIEWS</p>
        <p className='hover:underline cursor-pointer'>SHOPZILLA YOUR PACKAGES</p>
        <p className='hover:underline cursor-pointer'>SHOPZILLA YOUR EXPERIENCES</p>
        <p className='hover:underline cursor-pointer'>SHOPZILLA COMMUNITY</p>
        <p className='hover:underline cursor-pointer'>CONTACT US</p>
      </div>
      <div className='flex flex-col gap-2 md:gap-3 text-black text-sm md:text-base font-medium'>
        <h4 className='font-semibold'>SHOPZILLA</h4>
        <p className='hover:underline cursor-pointer'>shopzilla.careers</p>
        <p className='hover:underline cursor-pointer'>shopzilla.explore</p>
        <p className='hover:underline cursor-pointer'>shopzilla.offers</p>
        <p className='hover:underline cursor-pointer'>FAQ's/Support</p>
        <p className='hover:underline cursor-pointer'>Terms & Conditions</p>
      </div>
    </div>
  </div>

  <hr className='border-gray-300 mb-6' />

  {/* Popular searches */}
  <h4 className='font-[gilroy] text-2xl md:text-3xl font-extrabold text-gray-900 mb-2'>Popular Searches</h4>
  <p className='text-black text-sm md:text-base mb-4 leading-relaxed'>
    Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Saree | Watches | Dresses | Goggles | Suit | Adidas Shoes | Woodland Shoes | Designers Sarees
  </p>

  {/* Footer bottom links */}
  <div className='flex flex-wrap gap-4 md:gap-6 text-black text-sm md:text-base font-medium mb-4'>
    <p>©️2025 SHOPZILLA Inc.</p>
    <p>Privacy •</p>
    <p>Terms •</p>
    <p>Settings •</p>
    <p>Company Details</p>
  </div>

  {/* Footer legal text */}
  <div className='text-sm md:text-base text-gray-600 space-y-1 mb-12'>
    <p>By using Shopzilla, you agree to our Terms & Conditions and Privacy Policy. All orders, deliveries, and user data are handled securely in accordance with our safety and transparency standards. Shopzilla ensures a trusted platform for buyers and sellers worldwide.</p>
    <p>Shopzilla operates under strict privacy and safety policies to protect both buyers and sellers. By accessing our services, you agree to our Terms & Conditions and acknowledge our Privacy Policy.</p>
    <p>Use of this website constitutes acceptance of Shopzilla's Terms & Conditions and Privacy Policy. © 2025 Shopzilla. All rights reserved.</p>
  </div>

</div>

    </>
  )
}

export default Footer