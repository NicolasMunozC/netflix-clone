import React from 'react'

function Footer() {
  return (
    <div className='h-4/6 bg-black flex flex-col text-neutral-500 font-light justify-evenly p-4 w-full'>
            <h4 className='text-lg text-left'>Questions? Call 800 914 144</h4>
            <div className='flex flex-row text-sm mb-3 justify-between'>
              <div>
                <ul className='space-y-3'>
                  <li>FAQ</li>
                  <li>Account</li>
                  <li>Investor Relations</li>
                  <li>Redeem Gift Cards</li>
                  <li>Terms OF Use</li>
                  <li>Cookie Preferences</li>
                  <li>Contact Us</li>
                  <li>Legal Notices</li>
                </ul>
              </div>
              <div>
                <ul  className='space-y-3'>
                    <li>Help Center</li>
                    <li>Media Center</li>
                    <li>Jobs</li>
                    <li>Ways to Watch</li>
                    <li>Privacy</li>
                    <li>Corporate Information</li>
                    <li>Speed Test</li>
                    <li>Only on Netflix</li>
                  </ul>
              </div>
            </div>
            <p className='text-sm'>Netflix Clone by <a href='https://nmunoz.vercel.app' className='text-white font-semibold'>Nicolás Muñoz</a></p>
        </div>
  )
}

export default Footer