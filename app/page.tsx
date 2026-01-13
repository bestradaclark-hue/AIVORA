import Link from 'next/link';
import { ProductGrid } from '@/components/ProductGrid';
import { products } from '@/lib/products';

import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden relative">
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="z-10 text-center space-y-8 max-w-4xl flex flex-col items-center">
                <div className="relative w-24 h-24 mb-4 animate-in fade-in zoom-in duration-1000">
                    <Image
                        src="/logo.jpg"
                        alt="AIVORA Logo"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-slate-300 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    ✨ El Futuro de la Automatización de Negocios
                </div>

                <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                    No pierdas ni un cliente, <br />
                    <span className="text-gradient">aunque no estés.</span>
                </h1>

                <p className="text-xl text-slate-400 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    Tu negocio atiende clientes 24/7 sin contratar a nadie.
                    Un sistema completo de atención automática, pero con trato humano.
                </p>

                <div className="flex gap-4 justify-center pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <Link
                        href="/dashboard"
                        className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:scale-105 active:scale-95"
                    >
                        Entrar al Dashboard
                    </Link>
                    <Link href="/shop">
                        <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                            Ver Tienda
                        </button>
                    </Link>
                </div>
            </div>

            <div className="z-10 w-full max-w-6xl mt-32 space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold text-white">Empleados Digitales Destacados</h2>
                    <p className="text-slate-400">Agentes de IA listos para integrarse a tu equipo</p>
                </div>
                <ProductGrid products={products.slice(0, 4)} />
                <div className="flex justify-center">
                    <Link
                        href="/shop"
                        className="text-primary hover:text-primary/80 font-medium flex items-center gap-2"
                    >
                        Ver todos los productos <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
