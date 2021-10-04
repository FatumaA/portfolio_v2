import React from 'react'
import Button from './Button'
import { ButtonInfo, ContactInfo } from './Data'

const Contacts = () => {
    return (
        <div id='contacts' className="text-white flex flex-col items-center justify-center my-20">
            <h5 className="tagline">{ContactInfo.tagLine}</h5>
            <h1 className="headline">{ContactInfo.headLine}</h1>

            <p className="text-center leading-7">{ContactInfo.subHeadLine}</p>

        <form name='contact' action='/contact' method='POST'className="flex flex-col" >
            <input type='hidden' name='form-name' value='contact'/>
            <label htmlFor='Name'>Name:</label>
            <input type='text' name='name' placeholder ='Name...' required />
                {/* <br/> */}
            <label htmlFor='Email'>Email:</label>
            <input type='email' name='email' placeholder='Email...' required />
                {/* <br/> */}
            <label htmlFor='Message'>Message:</label>
            <textarea  rows={20} name='message' required placeholder='Type your message here...' />
                {/* <br/> */}
            <Button btnText={ButtonInfo.contact}/>
        </form> 
      </div>
    )
}

export default Contacts
