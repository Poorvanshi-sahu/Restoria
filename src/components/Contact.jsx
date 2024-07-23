import React from 'react'

const CONTACT = [
    { key: "address", value: "Address: 123 Main Street, Paris, France, 345678" },
    { key: "phone", value: "Phone: 123-456-7890" },
    { key: "email", value: "Email: contact@restaurant.com" },
  ];

const Contact = () => {
  return (
    <section className='container py-16 mx-auto' id='contact'>
          <h2 className='mb-8 text-center text-3xl lg:text-4xl'>Contact Us</h2>
          <div className='text-neutral-400'>
            {
                CONTACT.map((detail)=>{
                    return <p key={detail.key} className='my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center text-2xl tracking-tighter lg:text-3xl'>{
                    detail.value}</p>
                })
            }
          </div>
    </section>
    
  )
}

export default Contact