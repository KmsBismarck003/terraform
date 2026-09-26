import Link from 'next/link';

export default function BlogPage() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-12 mb-16">
        <div>
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider block mb-4">Blog Académico</span>
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
            Ingeniería en Tecnologías de la Información e Innovación Digital
          </h1>
        </div>
        <div className="flex items-center">
          <p className="text-gray-600 text-lg border-l-4 border-emerald-500 pl-6">
            Conocimiento, creatividad y tecnología para diseñar soluciones que mejoran la forma en que vivimos, aprendemos y trabajamos.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-8">Explora el blog</h2>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="border border-gray-200 p-8 rounded-xl flex flex-col justify-between group hover:border-emerald-500 transition-colors">
          <div>
            <span className="text-gray-400 font-bold mb-4 block">01</span>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Actualidad tecnológica</h3>
            <p className="text-gray-600 mb-8">Tendencias, herramientas y proyectos que están transformando el entorno digital.</p>
          </div>
          <Link href="/blog/articulos-recientes" className="text-emerald-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
            Ver publicaciones <span>→</span>
          </Link>
        </div>

        <div className="border border-gray-200 p-8 rounded-xl flex flex-col justify-between group hover:border-emerald-500 transition-colors">
          <div>
            <span className="text-gray-400 font-bold mb-4 block">02</span>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Áreas de formación</h3>
            <p className="text-gray-600 mb-8">Desarrollo de software, redes, datos, ciberseguridad e innovación aplicada.</p>
          </div>
          <Link href="/blog/areas-formacion" className="text-emerald-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
            Ver publicaciones <span>→</span>
          </Link>
        </div>

        <div className="border border-gray-200 p-8 rounded-xl flex flex-col justify-between group hover:border-emerald-500 transition-colors">
          <div>
            <span className="text-gray-400 font-bold mb-4 block">03</span>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Historias que inspiran</h3>
            <p className="text-gray-600 mb-8">Experiencias y publicaciones destacadas de nuestra comunidad académica.</p>
          </div>
          <Link href="/blog/historias-inspiran" className="text-emerald-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
            Ver publicaciones <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
