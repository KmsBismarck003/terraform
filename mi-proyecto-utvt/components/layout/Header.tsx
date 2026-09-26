"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-800 text-white flex items-center justify-center font-bold rounded-sm">
          W
        </div>
        <span className="font-bold text-xl tracking-tight">UTVT</span>
      </div>
      
      <nav className="flex items-center gap-6 text-sm font-medium">
        <Link 
          href="/" 
          className={pathname === '/' ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' : 'text-gray-600 hover:text-gray-900'}
        >
          Mi carrera
        </Link>
        <Link 
          href="/about" 
          className={pathname === '/about' ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' : 'text-gray-600 hover:text-gray-900'}
        >
          Acerca de
        </Link>
        <Link 
          href="/blog" 
          className={pathname.startsWith('/blog') ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' : 'text-gray-600 hover:text-gray-900'}
        >
          Blog
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Next.js
        </Link>
      </nav>

      <div className="w-8"></div>
    </header>
  );
}
