"use client";

import { Product } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { useCart } from '@/lib/cart-context';

interface ProductGridProps {
    products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
    const { addItem } = useCart();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addItem}
                />
            ))}
        </div>
    );
}
