// src/app/page.js

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-[#edf4f9] via-white to-[#fbf0f3] px-6 text-center select-none">
      
      {/* Contenedor Flotante Estilo Tarjeta */}
      <div className="max-w-md p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_0_rgba(148,163,184,0.1)] flex flex-col items-center gap-4 animate-fade-in">
        
        {/* Iconos Temáticos con animación flotante */}
        <div className="flex gap-4 text-4xl animate-bounce">
          <span>🧸</span>
          <span>🍼</span>
          <span>✨</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl font-black tracking-tight text-[#4A4A4A] leading-tight">
          Baby Shower <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c9cb6] to-[#e5a9b4]">
            Iam Argeol
                      </span>
        </h1>

        {/* Línea Divisoria Decorativa */}
        <div className="w-16 h-1 bg-gradient-to-r from-[#b0c4de] to-[#f2ced4] rounded-full my-1" />

        {/* Texto de Instrucción */}
        <p className="text-sm font-medium text-slate-500 max-w-[280px] leading-relaxed">
          Por favor, ingresa a la plataforma utilizando el enlace personalizado que te enviamos por WhatsApp.
        </p>

        {/* Micro-firma de Programador sutil al final */}
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-4">
          Powered by: Next.js <br></br>
          X-Developer: @Argeol Guio


        </span>

      </div>

    </main>
  );
}
