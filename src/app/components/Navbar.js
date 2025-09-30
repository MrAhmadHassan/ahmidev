"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            AHMI.DEV
          </Link>
          
          <ul className="flex space-x-8">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item}`}
                  className="nav-link capitalize"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
