"use client";

import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { X, Trash2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CartSidebar() {
    const { items, removeItem, total, isOpen, setIsOpen } = useCart();
    const [mounted, setMounted] = useState(false);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleCheckout = async () => {
        setIsCheckingOut(true);
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        alert("¡Sistema de Pagos listo para configurar! \n\nPara activar pagos reales, necesito las llaves de Stripe en el archivo .env.local.\n\n(Simulación completada con éxito)");
        setIsCheckingOut(false);
    };

    if (!mounted) return null;

    const monthlyTotal = items.reduce((sum, item) => sum + item.monthlyPrice * item.quantity, 0);

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={cn(
                "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-zinc-950 border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="p-6 border-b border-white/10 flex items-center justify-between bg-zinc-900/50">
                    <h2 className="text-xl font-bold text-white">Tu Carrito ({items.length})</h2>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {items.length === 0 ? (
                        <div className="text-center text-zinc-500 mt-10">
                            Tu carrito está vacío.
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4 p-4 bg-white/5 rounded-lg border border-white/5 animate-in fade-in slide-in-from-right-4">
                                <div className="h-20 w-20 bg-zinc-800 rounded-md overflow-hidden relative flex-shrink-0">
                                    {/* Using next/image would be better but keeping simple img for now or just checking if we can use the visual div */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover opacity-80"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-sm font-medium text-white line-clamp-1">{item.name}</h3>
                                        <p className="text-xs text-zinc-400">{item.category}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-white">${item.price.toLocaleString()}</span>
                                            <span className="text-xs text-zinc-400">+${item.monthlyPrice.toLocaleString()}/mo</span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-6 w-6 text-red-400 hover:text-red-300 hover:bg-red-900/20"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <Trash2 className="h-3 w-3" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-6 border-t border-white/10 bg-zinc-900/50 space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm text-zinc-400">
                            <span>Instalación (Pago Único)</span>
                            <span className="text-white font-medium">${total.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-zinc-400">
                            <span>Mensualidad Recurrente</span>
                            <span className="text-white font-medium">${monthlyTotal.toLocaleString()}/mes</span>
                        </div>
                    </div>
                    <div className="h-px bg-white/10 my-2" />
                    <div className="flex items-center justify-between text-lg font-bold text-white">
                        <span>Total Hoy</span>
                        <span className="text-primary">${total.toLocaleString()}</span>
                    </div>
                    <Button
                        onClick={handleCheckout}
                        disabled={items.length === 0 || isCheckingOut}
                        className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold shadow-[0_0_15px_rgba(124,58,237,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isCheckingOut ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Procesando...
                            </>
                        ) : (
                            "Finalizar Compra"
                        )}
                    </Button>
                </div>
            </div>
        </>
    );
}
