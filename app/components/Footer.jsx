import React from 'react'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='container p-8 flex justify-between text-slate-600'>
            <span className='font-bold text-xl'>arpit.</span>
            <p>© {new Date().getFullYear()} Arpit Joshi. Let&apos;s connect!</p>
        </div>
    </footer>
  )
}

export default Footer;