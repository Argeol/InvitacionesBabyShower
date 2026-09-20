'use client';
import { useState, useEffect } from 'react';

export default function ContadorRegresivo() {
  // 1. Definimos la fecha meta del evento: Domingo 15 de Noviembre de 2026 a la 1:00 PM
  const FECHA_META = new Date('2026-11-15T13:00:00').getTime();

  // Estado inicializado a cero para evitar problemas de hidratación en Next.js
  const [tiempoRestante, setTiempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const calcularTiempo = () => {
      const ahora = new Date().getTime();
      const diferencia = FECHA_META - ahora;

      if (diferencia <= 0) {
        setTiempoRestante({ dias: 0, horas: 0, minutes: 0, segundos: 0 });
        return;
      }

      setTiempoRestante({
        dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((diferencia % (1000 * 60)) / 1000),
      });
    };

    calcularTiempo();
    const intervalo = setInterval(calcularTiempo, 1000);
    return () => clearInterval(intervalo);
  }, [FECHA_META]);

  const formatearNumero = (num) => String(num).padStart(2, '0');

  return (
    /* Posicionamiento calibrado al 63% de altura */
    <div className="absolute top-[63%] left-0 w-full z-10 flex justify-center items-center px-4 select-none">
      
      {/* Sombra de caja sutil para agrupar todo el bloque si se requiere */}
      <div className="flex gap-3 justify-center items-center font-mono ">
        
        {/* Bloque Días */}
        <div className="flex flex-col items-center min-w-[55px]">
          <span className="text-3xl font-black text-white tracking-tight">
            {formatearNumero(tiempoRestante.dias)}
          </span>
          <span className="text-[10px] uppercase font-extrabold text-white/90 tracking-widest mt-0.5">
            Días
          </span>
        </div>

        <span className="text-2xl font-black text-white animate-pulse bottom-1 relative">:</span>

        {/* Bloque Horas */}
        <div className="flex flex-col items-center min-w-[55px]">
          <span className="text-3xl font-black text-white tracking-tight">
            {formatearNumero(tiempoRestante.horas)}
          </span>
          <span className="text-[10px] uppercase font-extrabold text-white/90 tracking-widest mt-0.5">
            Horas
          </span>
        </div>

        <span className="text-2xl font-black text-white animate-pulse bottom-1 relative">:</span>

        {/* Bloque Minutos */}
        <div className="flex flex-col items-center min-w-[55px]">
          <span className="text-3xl font-black text-white tracking-tight">
            {formatearNumero(tiempoRestante.minutos)}
          </span>
          <span className="text-[10px] uppercase font-extrabold text-white/90 tracking-widest mt-0.5">
            Min
          </span>
        </div>

        <span className="text-2xl font-black text-white animate-pulse bottom-1 relative">:</span>

        {/* Bloque Segundos */}
        <div className="flex flex-col items-center min-w-[55px]">
          <span className="text-3xl font-black text-white tracking-tight">
            {formatearNumero(tiempoRestante.segundos)}
          </span>
          <span className="text-[10px] uppercase font-extrabold text-white/90 tracking-widest mt-0.5">
            Seg
          </span>
        </div>

      </div>

    </div>
  );
}
