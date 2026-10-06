'use client';
import { useRef, useState } from 'react';
import ContadorRegresivo from './ContadorRegresivo';

export default function ComponenteInvitacionClient({ nombre, regalo1, regalo2, mensajeConfirmacion }) {
  const audioRef = useRef(null);
  const [ocultarIndicador, setOcultarIndicador] = useState(false);

  const controlarMusica = () => {
    if (audioRef.current.paused) {
      audioRef.current.play().catch(err => console.log("Bloqueo de reproducción por el navegador:", err));
      setOcultarIndicador(true);
    } else {
      audioRef.current.pause();
    }
  };

  // Codificamos el mensaje para que sea seguro meterlo en el enlace de WhatsApp
  const whatsappUrl = `https://wa.me{encodeURIComponent(mensajeConfirmacion)}`;

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f4f9f9]">

      {/* Audio oculto: cámbialo por tu archivo en public/ cuando lo tengas */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/Cancion.mp3" type="audio/mpeg" />
      </audio>

      {/* Contenedor Adaptable Celular */}
      <div className="relative w-full max-w-[450px] shadow-2xl overflow-hidden bg-white">

        {/* Tu imagen de Canva que actúa como lienzo de fondo */}
        <img
          src="/Invitacion.png"
          alt="Invitación Revelación"
          className="w-full block h-auto"
        />

        {/* --- CAPAS DE TEXTO DINÁMICO (Ajusta la posición para que floten estéticos) --- */}
        <div className="absolute top-[33%] left-0 w-full text-center">
          <h2 className="text-xl font-serif  text-[#4A4A4A] tracking-wide">
            ¡Hola, {nombre}!
          </h2>
        </div>
        <div className="absolute top-[43.5%] left-0 w-full text-center px-12 select-none">
          <p className="text-[14px] text-[#574d4d] font-serif uppercase tracking-widest mb-2">
            Cra 8 #41-66 Ibague Tolima
          </p>
        </div>


        {/* Contenedor con ancho máximo controlado para que fuerce el salto de línea */}
        <div className="absolute top-[56.35%] left-0 w-full text-center px-12 select-none">

          {/* Título de la sección en blanco con sombra fina */}
          <p className="text-[14px] font-black text-white uppercase tracking-widest mb-2 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.5)]">
            Sugerencia de regalo:
          </p>

          {/* Bloque flexible para separar y estilizar los dos regalos */}
          <div className="flex flex-col gap-1.5 justify-center items-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">

            {/* Primer Regalo */}
            <span className="block max-w-[240px] text-xs font-black text-white whitespace-normal break-words leading-tight tracking-wide">
              {regalo1}
            </span>
            {/* Segundo Regalo */}
            {regalo2 && (
              <span className="block max-w-[240px] text-xs font-black text-white whitespace-normal break-words leading-tight tracking-wide">
                {regalo2}
              </span>
            )}

          </div>

        </div>

        {/* --- TUS BOTONES INTERACTIVOS MILIMÉTRICOS --- */}

        {/* 1. Botón de Play Azul */}
        {/* CONTENEDOR EN TUS COORDENADAS EXACTAS: TOP 22% / LEFT 47% */}
        <div className="absolute top-[22%] left-[48%] w-[12%] aspect-square z-20">

          {/* Botón táctil nativo*/}
          <div
            onClick={controlarMusica}
            className="w-full h-full cursor-pointer rounded-full bg-redx|-500/10 active:bg-white/40 transition-colors"
            title="Reproducir Música"
          />

          {/* MICROANIMACIÓN EXCLUSIVA DE PROGRAMADOR */}
          {/* Si 'ocultarIndicador' es false, renderiza el letrero flotante con la manito */}
          {!ocultarIndicador && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col items-center pointer-events-none w-max animate-bounce">

              {/* Icono de la manito apuntando hacia arriba */}
              <span className="text-xl filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)] select-none">
                👆
              </span>

              {/* Texto de llamado a la acción centrado y brillante */}
              <p className="text-[10px] font-black text-white uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded-md border border-white/20 whitespace-nowrap shadow-md mt-0.5 leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                ¡Haz clic para escuchar!
              </p>

            </div>
          )}

        </div>


        {/* 2. Botón Ver Ubicación Verde */}
        <a
          href="https://maps.app.goo.gl/HFyVXqdHGNCT7cBF8"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-[44.5%] left-[33%] w-[34%] h-[2.2%] rounded-[20px] bg-green-500/20 active:bg-white/40 transition-colors"
          title="Ver Ubicación"
        />

        <ContadorRegresivo />
        {/* 3. Botón Confirmar Asistencia Rojo */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-[24.5%] left-[33%] w-[34%] h-[2.5%] rounded-[20px] bg-red-500/20 active:bg-white/40 transition-colors"
          title="Confirmar por WhatsApp"
        />

      </div>
    </div>
  );
}
