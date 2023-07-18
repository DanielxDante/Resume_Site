import React from 'react'
import Link from 'next/link'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "About",
        url: "/"
    },
    {
        id: 3,
        title: "Projects",
        url: "/"
    }
]

export const Navbar = () => {
  return (
    <div>
      {links.map( (link) => {
        return (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        )}
      )}  
    </div>
  )
}
