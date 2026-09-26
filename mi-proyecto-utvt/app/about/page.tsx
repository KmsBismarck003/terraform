export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-2">Universidad Tecnológica del Valle de Toluca</span>
          <h1 className="text-4xl font-extrabold text-slate-900 max-w-2xl leading-tight">
            Ingeniería en Tecnologías de la Información e Innovación Digital
          </h1>
        </div>
        <button className="text-sm border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 font-medium flex items-center gap-2">
          Sitio institucional <span>↗</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-12">
        <div>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Una formación para imaginar, diseñar y construir soluciones tecnológicas que respondan a los retos de las organizaciones y de la sociedad.
          </p>
          <div className="flex gap-4">
            <button className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800">
              Conoce el modelo educativo
            </button>
            <button className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-emerald-100">
              Servicios para estudiantes
            </button>
          </div>
        </div>

        <div className="bg-emerald-500 rounded-3xl p-10 relative overflow-hidden flex flex-col justify-end min-h-[300px]">
          <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400 rounded-bl-full"></div>
          <div className="absolute top-8 left-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M4 12h16M12 4v16"/></svg>
          </div>
          <span className="text-emerald-900 font-bold tracking-widest text-sm mb-2 relative z-10">PERFIL PROFESIONAL</span>
          <h2 className="text-3xl font-bold text-white leading-tight max-w-sm relative z-10">
            Tecnólogo con visión estratégica, ética y creativa.
          </h2>
        </div>
      </div>
    </div>
  );
}
