// src/app/[slug]/page.js
import { listaInvitados } from '@/data/invitados';
import { notFound } from 'next/navigation';
import ComponenteInvitacionClient from "./ComponenteInvitacionClient";

// 1. La función DEBE ser asíncrona (async) para poder leer los parámetros en las versiones nuevas
async function PaginaSlug({ params }) {
    
    // 2. Esperamos (await) a que Next.js capture los parámetros de la URL
    const { slug } = await params;

    // 3. Buscamos al invitado en nuestro archivo "data/invitados.js"
    const datosInvitado = listaInvitados[slug?.toLowerCase()];

    // 4. Si el invitado no existe en la lista (ej: alguien escribe /perrito), mandamos un 404 limpio
    if (!datosInvitado) {
        return notFound();
    }

    // 5. ¡Obligatorio el RETURN! Pasamos los datos dinámicos al componente interactivo
    return (
        <>
            <ComponenteInvitacionClient 
                nombre={datosInvitado.nombre} 
                regalo1={datosInvitado.regalo1}
                regalo2={datosInvitado.regalo2}
                mensajeConfirmacion={datosInvitado.mensajeConfirmacion}
            />
        </>
    );
}

export default PaginaSlug;
