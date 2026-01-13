import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'AIVORA | El Empleado Digital',
    description: 'Automatiza tu negocio con empleados inteligentes de IA',
};

import { CartProvider } from '@/lib/cart-context';
import { CartSidebar } from '@/components/CartSidebar';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={cn(inter.className, "min-h-screen bg-background antialiased selection:bg-primary/30")}>
                <CartProvider>
                    <CartSidebar />
                    {children}
                </CartProvider>
            </body>
        </html>
    );
}
