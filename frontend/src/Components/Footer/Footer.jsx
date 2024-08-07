import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white mt-20'>

      <div className='lg:flex lg:justify-around container mx-auto gap-24'>
        <div className='lg:py-14'>

          <div className='grid lg:grid-cols-4 md:grid-cols-2  lg:justify-around lg:px-0 px-10 lg:gap-20  gap-10'>

            <div className='mt-5 lg:mt-0'>
              <h4 className='text-lg font-medium my-5 text-slate-500'>ABOUT</h4>
              <ul className='text-sm space-y-2'>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Flipkart Stories</li>
                <li>Press</li>
                <li>Corporate Information</li>
              </ul>
            </div>

            <div className='mt-5 lg:mt-0'>
              <h4 className='text-lg font-medium my-5 text-slate-500'>GROUP COMPANIES</h4>
              <ul className='text-sm space-y-2'>
                <li>Myntra</li>
                <li>Cleartrip</li>
                <li>Shopsy</li>
              </ul>
            </div>

            <div className='mt-5 lg:mt-0'>
              <h4 className='text-lg font-medium my-5 text-slate-500'>HELP</h4>
              <ul className='text-sm space-y-2'>
                <li>Payments</li>
                <li>Shipping</li>
                <li>Cancellation & Returns</li>
                <li>FAQ</li>
                <li>Report Infringement</li>
              </ul>
            </div>

            <div className='mt-5 lg:mt-0'>
              <h4 className='text-lg font-medium my-5 text-slate-500'>CONSUMER POLICY</h4>
              <ul className='text-sm space-y-2'>
                <li>Cancellation & Returns</li>
                <li>Terms Of Use</li>
                <li>Security</li>
                <li>Privacy</li>
                <li>Sitemap</li>
                <li>Grievance Redressal</li>
                <li>EPR Compliance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='lg:py-14'>
          <div className='grid md:grid-cols-2  lg:justify-around lg:px-0 px-10 lg:gap-20 gap-10 lg:border-l lg:border-[#243b86] lg:pl-14'>

            <div className='mt-5 lg:mt-0'>
              <h4 className='text-lg font-medium my-5 text-slate-500'>Mail Us:</h4>
              <ul className='text-sm space-y-2'>
                <li>Flipkart Internet Private Limited, </li>
                <li> Buildings Alyssa, Begonia & </li>
                <li> Clove Embassy Tech Village, </li>
                <li> Outer Ring Road, Devarabeesanahalli Village, </li>
                <li> Bengaluru, 560103, </li>
                <li> Karnataka, India</li>
              </ul>
            </div>

            <div className='mt-5 lg:mt-0'>
              <h4 className='text-lg font-medium my-5 text-slate-500'>Registered Office Address:</h4>
              <ul className='text-sm space-y-2'>
                <li>Flipkart Internet Private Limited, </li>
                <li> Buildings Alyssa, Begonia & </li>
                <li> Clove Embassy Tech Village, </li>
                <li> Outer Ring Road, Devarabeesanahalli Village, </li>
                <li> Bengaluru, 560103, </li>
                <li> Karnataka, India </li>
                <li> CIN : U51109KA2012PTC066107 </li>
                <li>Telephone: <spn>044-45614700</spn> <spn>044-67415800</spn></li>
              </ul>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer