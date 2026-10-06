'use client';
import { useState, useEffect } from 'react';

export default function ContadorRegresivo() {
  // 1. Definimos la fecha meta del evento: Domingo 15 de Noviembre de 2026 a la 1:00 PM
  const FECHA_META = new Date('2026-11-01T13:00:00').getTime();

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

      {/* Reducimos el espacio entre bloques (gap-1.5) y añadimos la sombra de relieve */}
      <div className="flex gap-1.5 justify-center items-center font-mono drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]">

        {/* Bloque Días */}
        <div className="flex flex-col items-center min-w-[40px]">
          <span className="text-xl font-black text-white tracking-tight leading-none">
            {formatearNumero(tiempoRestante.dias)}
          </span>
          <span className="text-[8px] uppercase font-black text-white/90 tracking-wider mt-1">
            Días
          </span>
        </div>

        <span className="text-lg font-black text-white animate-pulse bottom-[3px] relative">:</span>

        {/* Bloque Horas */}
        <div className="flex flex-col items-center min-w-[40px]">
          <span className="text-xl font-black text-white tracking-tight leading-none">
            {formatearNumero(tiempoRestante.horas)}
          </span>
          <span className="text-[8px] uppercase font-black text-white/90 tracking-wider mt-1">
            Horas
          </span>
        </div>

        <span className="text-lg font-black text-white animate-pulse bottom-[3px] relative">:</span>

        {/* Bloque Minutos */}
        <div className="flex flex-col items-center min-w-[40px]">
          <span className="text-xl font-black text-white tracking-tight leading-none">
            {formatearNumero(tiempoRestante.minutos)}
          </span>
          <span className="text-[8px] uppercase font-black text-white/90 tracking-wider mt-1">
            Min
          </span>
        </div>

        <span className="text-lg font-black text-white animate-pulse bottom-[3px] relative">:</span>

        {/* Bloque Segundos */}
        <div className="flex flex-col items-center min-w-[40px]">
          <span className="text-xl font-black text-white tracking-tight leading-none">
            {formatearNumero(tiempoRestante.segundos)}
          </span>
          <span className="text-[8px] uppercase font-black text-white/90 tracking-wider mt-1">
            Seg
          </span>
        </div>

      </div>

    </div>
  );
}
