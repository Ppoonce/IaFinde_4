/**
 * Espacio reservado para publicidad (Google AdSense u otra red) más adelante.
 * No renderiza ningún anuncio falso ni simulado: solo reserva el espacio con
 * el tamaño y separación adecuados para no afectar al layout cuando se añada
 * el código real del anuncio.
 */
export default function AdSlot({ label = 'Espacio publicitario' }: { label?: string }) {
  return (
    <div
      className="my-8 flex min-h-[100px] w-full items-center justify-center rounded-lg border border-dashed border-line bg-white/40 text-xs text-inkmuted/70"
      data-ad-slot="reserved"
      aria-hidden="true"
    >
      {label} (reservado)
    </div>
  );
}
