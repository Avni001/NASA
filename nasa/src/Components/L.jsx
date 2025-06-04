import React from 'react'


export default function list() {

   const navMenu = [
    { href: "/", name: "About" },
    { href: "/", name: "Portfolio" },
    { href: "/", name: "Contact" },
    { href: "/", name: "About" },
    { href: "/", name: "Portfolio" },
    { href: "/", name: "Contact" },
  ]

  

   


  return (
    <div>
         <ul className=' '>
             <div>News & Events</div>
            {
              navMenu.map((items, key) => (

                <li key={key}><a href={items.href}>{items.name}</a></li>






              ))
            }

          </ul>          
      
                    

    </div>


  )
}
