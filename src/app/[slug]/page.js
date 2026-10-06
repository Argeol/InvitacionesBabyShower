// src/app/[slug]/page.js
import { listaInvitados } from '@/data/invitados';
import { notFound } from 'next/navigation';
import ComponenteInvitacionClient from "./ComponenteInvitacionClient";

export default async function PaginaSlug({ params }) {
    // 1. Esperamos los parámetros de la URL
    const { slug } = await params;
    if (!slug) return notFound();

    // 2. Normalizamos el slug que viene de la URL (Pasar a minúsculas y quitar espacios sueltos si los hay)
    const slugFormateado = slug.trim().toLowerCase();

    // 3. BUSQUEDA INTELIGENTE E INSENSIBLE A MAYÚSCULAS/MINÚSCULAS
    // Buscamos dentro de las llaves de tu objeto si hay alguna que coincida al convertirla a minúsculas
    const claveEncontrada = Object.keys(listaInvitados).find(
        (key) => key.trim().toLowerCase() === slugFormateado
    );

    // 4. Extraemos los datos usando la clave real encontrada (ej: "Leidy-GUIO")
    const datosInvitado = claveEncontrada ? listaInvitados[claveEncontrada] : null;

    // 5. Si de verdad no existe en tus 37 registros, mandamos al 404 seguro
    if (!datosInvitado) {
        return notFound();
    }

    return (
        <ComponenteInvitacionClient 
            nombre={datosInvitado.nombre} 
            regalo1={datosInvitado.regalo1}
            regalo2={datosInvitado.regalo2}
            mensajeConfirmacion={datosInvitado.mensajeConfirmacion}
        />
    );
}
