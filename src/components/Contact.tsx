import React from 'react'
// import {useForm} from 'react-hook-form'
import { ButtonInfo, ContactInfo } from './Data'
import Image from 'next/image'



const Contact = () => {

//   const {register, errors, handleSubmit}=useForm({
//     mode: 'onSubmit',
// })
// const handleChange = (e) => setState ({ ...state, [e.target.name]: e.target.value })
// const onSubmit =(data, e) =>{
//   e.preventDefault()
//   fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: encodeURI({
//       'form-name': 'contact',
//       ...state
//     })
//   })
//     .then(()=> '/contact')
//     .catch(error => alert(error)); 
// }

  return (
    <div id='contact'>
      <h5>{ContactInfo.tagLine}</h5>
      <h1>{ContactInfo.headLine}</h1>
      
      <div className="hero-section">
      
      <div className="hero-wrapper-image">
      <Image src={ContactInfo.Img} alt='email' layout="fill"/>
      </div>

      <div className="hero-wrapper-text">
        <p>{ContactInfo.subHeadLine}</p>

        <form name='contact' 
        action='/contact' method='POST' 
        // onSubmit={handleSubmit(onSubmit)}
        >
        <input type='hidden' name='form-name' value='contact'/>
        <label htmlFor='Name'>Name:</label>
        <input 
                  type='text' 
                  name='name'
                  // onChange={handleChange}
                  placeholder ='Name...'
                  required
                  // ref={register({ required: true })}
               />
               {/* <div>
              {errors.name && <span style={{color:'red'}}> Please input your name</span>}
              </div> */}
               <br/>
        <label htmlFor='Email'>Email:</label>
        <input 
                   type='email' 
                   name='email' 
                  //  onChange={handleChange}
                   placeholder='Email...' 
                   required
                  //  ref={register({
                  //  required: 'Required',
                  //  pattern:{
                  //       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  //       message: 'Please use a valid email address'
                  //           }
                  //   })}
               />
               {/* <div>
               {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}
               </div> */}
               <br/>
      <label htmlFor='Message'>Message:</label>
      <textarea  rows={20} name='message' 
      required
      // onChange={handleChange} 
      // ref={register({
      //              required: true
      //          })}
               placeholder='Type your message here...'
               />
               {/* <div>
               {errors.message && <span style={{color:'red'}}>Please add a message</span>}
               </div> */}
               <br/>
               
               <button type='submit' className='btn-primary'>
                {ButtonInfo.contact}
               </button>

           </form> 
      </div>
      </div>
      
      
    </div>
  )
}

export default Contact
