import Link from 'next/link';
import { Product } from '@/lib/products';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
    const isPopular = product.category === 'Most Popular';

    return (
        <Card className={cn(
            "h-full flex flex-col bg-zinc-900/50 border-white/10 overflow-hidden transition-all hover:scale-105 duration-300 relative",
            isPopular ? "border-primary/50 shadow-[0_0_30px_rgba(124,58,237,0.15)]" : "hover:border-primary/30"
        )}>
            {isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MÁS VENDIDO
                </div>
            )}

            <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-white text-center">{product.name}</CardTitle>
                <div className="text-center space-y-1 pt-2">
                    <div className="text-3xl font-bold text-white">
                        ${product.price.toLocaleString()}
                        <span className="text-sm font-normal text-muted-foreground ml-1">instalación</span>
                    </div>
                    <div className="text-lg text-primary font-medium">
                        +${product.monthlyPrice.toLocaleString()}/mes
                    </div>
                </div>
            </CardHeader>

            <CardContent className="flex-1 space-y-6">
                {product.target && (
                    <div className="bg-white/5 rounded-lg p-3 text-sm text-center text-zinc-300 font-medium">
                        {product.target}
                    </div>
                )}

                <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-zinc-400 flex items-start gap-2">
                            <span className="flex-shrink-0 mt-0.5">{feature.split(' ')[0]}</span>
                            <span>{feature.split(' ').slice(1).join(' ')}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>

            <CardFooter className="pt-4 pb-6">
                <Button
                    onClick={() => onAddToCart?.(product)}
                    className={cn(
                        "w-full font-semibold py-6 text-base",
                        isPopular
                            ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
                            : "bg-white/10 hover:bg-white/20 text-white"
                    )}
                >
                    Seleccionar Plan
                </Button>
            </CardFooter>
        </Card>
    );
}
