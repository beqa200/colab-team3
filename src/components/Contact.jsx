import React from 'react'
import image3 from '../assets/image3.jpg'
export default function Contact() {
  return (
    <div>
      <div>
        <h2>contact us</h2>
      </div>
      <div className='flex'>
      
      <div>
        <img src={image3} alt="wedding photo" />
      </div>
     
      <form className='flex flex-col' action="">
        <label htmlFor="">Full Name</label>
        <input type="text" placeholder='your name here' />
        <label htmlFor="">Email</label>
        <input type="text" placeholder='your email here' />
        <label htmlFor="">phone number</label>
        <input type="text" placeholder='your phone number here' />
        <label htmlFor="">event date </label>
        <input type="text" placeholder='MM/DD/YY' />
        <label htmlFor="">number of guests  </label>
        <input type="text" placeholder='E.g. 200' />
        <label htmlFor="">location </label>
        <input type="text" placeholder='E.g 742 Evergreen Terrace, Springfield' />
        <label htmlFor="">what is your event about? the more details the better </label>
        <input type="text" placeholder='what do I need to know about the project?' />
        <label htmlFor="">How did you hear about us?  </label>
        <input type="text" placeholder='social media?' />
      </form>
      </div>
     
    </div>
  )
}
