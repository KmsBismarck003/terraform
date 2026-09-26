export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4 block">UTVT</span>
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Ingeniería en Tecnologías de la Información e Innovación Digital
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Fórmate para crear soluciones digitales, desarrollar software y liderar la innovación tecnológica que impulsa a las organizaciones y a la sociedad.
        </p>
      </div>
      <div className="rounded-xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Tecnología" 
          className="w-full h-auto object-cover" 
        />
      </div>
    </div>
  );
}
