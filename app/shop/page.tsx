import { ProductGrid } from '@/components/ProductGrid';
import { products } from '@/lib/products';

export default function ShopPage() {
    return (
        <main className="min-h-screen p-8 pt-24 max-w-7xl mx-auto space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white">Tienda de Empleados Digitales</h1>
                <p className="text-slate-400 max-w-2xl">
                    Explora nuestro catálogo de agentes de IA especializados diseñados para automatizar las operaciones de tu negocio.
                </p>
            </div>

            <ProductGrid products={products} />
        </main>
    );
}
