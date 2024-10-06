'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router=useRouter();
  return (
    <div>
     <nav className= 'navbar'>
     <div className="navdiv">
        <div className="logo">Navbar</div>
        <ul>
          <li>
          <Link href="/">Home</Link>
          </li>
          <li>
          <Link href="/about">About</Link>
          </li>
          <li>
          <Link href="/contact">Contact</Link>
          </li>
        <button onClick={()=>router.push("/singin")}>Singin</button>
        </ul>
        </div>
        </nav> 
    </div>
  )
}

export default Navbar
