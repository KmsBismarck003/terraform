export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-8 lowercase">
        {slug}
      </h1>
      
      <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
        <p>
          Cada proyecto comienza con una idea: resolver un problema, conectar con una comunidad o crear algo útil. El camino más efectivo no siempre es el más complejo, sino el que mantiene a las personas en el centro.
        </p>
        <p>
          Diseñar, probar y aprender de forma continua permite transformar una primera versión en una experiencia clara, accesible y valiosa. Los pequeños avances sostenidos suelen generar los mejores resultados.
        </p>
      </div>
      
      <div className="mt-16 flex justify-end">
        <a href="/blog" className="text-emerald-700 font-bold border border-emerald-200 bg-emerald-50 px-6 py-3 rounded-full hover:bg-emerald-100 transition-colors">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
