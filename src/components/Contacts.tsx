import React from 'react'
import Button from './Button'
import { ButtonInfo, ContactInfo } from '../Data'

const Contacts = () => {
    return (
        <div id='contacts' className="top-styles">
            <h5 className="tagline">{ContactInfo.tagLine}</h5>
            <h1 className="headline">{ContactInfo.headLine}</h1>

            <p className="text-center leading-7">{ContactInfo.subHeadLine}</p>

            <form name='contact' action='/contact' method='POST'className="flex flex-col w-full text-center my-6" >
                <input type='hidden' name='form-name' value='contact'/>

                <label htmlFor='Name' className="mb-1">Name:</label>
                <input className="p-2 rounded-sm" type='text' name='name' placeholder ='Name...' required />
                    {/* <br/> */}
                <label htmlFor='Email' className="mt-6 mb-1">Email:</label>
                <input className="p-2 rounded-sm" type='email' name='email' placeholder='Email...' required />
                    {/* <br/> */}
                <label htmlFor='Message' className="mt-6 mb-1">Message:</label>
                <textarea className="rounded-sm" rows={10} name='message' required placeholder='Type your message here...' />
                    {/* <br/> */}
                <Button btnText={ButtonInfo.contact} />
            </form> 
      </div>
    )
}

export default Contacts
