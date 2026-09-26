import Link from 'next/link';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-8 py-8">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-12">
        <Link href="/blog" className="text-lg font-bold tracking-widest text-slate-900 uppercase">
          UTVT / Blog ITIID
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-gray-500">
          <Link href="/blog/actualidad" className="hover:text-slate-900 text-slate-900">Actualidad</Link>
          <Link href="/blog/areas" className="hover:text-slate-900">Áreas</Link>
          <Link href="/blog/historias" className="hover:text-slate-900">Historias</Link>
        </nav>
      </div>
      
      {children}
    </div>
  );
}
