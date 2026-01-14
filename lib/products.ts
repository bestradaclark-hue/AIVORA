export interface Product {
    id: string;
    name: string;
    description: string; // Keeping for compatibility, can be short summary or empty
    price: number; // Installation price
    monthlyPrice: number;
    image: string; // We'll keep placeholders or potential future images
    category: string; // We can use this for the tag (e.g. "Most Popular")
    features: string[];
    target?: string;
    stripeLink: string;
 

}

export const products: Product[] = [
        id: 'start',
        name: 'RECEPCIÓN AUTOMÁTICA',
        description: 'La solución esencial para no perder clientes.',
        price: 2600,
        monthlyPrice: 800,
        image: '/images/start.jpg',
        category: 'Basic',
        features: [
            '✔ Respuestas automáticas WhatsApp 24/7',
            '✔ Preguntas frecuentes (Precios/Horarios)',
            '✔ Captura de datos (Nombre/Tel)',
            '✔ Tono humano personalizado',
            '✔ Derivación a humano si se requiere'
        ],
        target: '👉 Ideal para negocios pequeños',
        stripeLink: 'https://buy.stripe.com/cNidR92MS5CP66o9GQ7N602'

    },
    {
        id: 'pro',
        name: 'ATENCIÓN INTELIGENTE',
        description: 'Atención + Agenda Automática.',
        price: 5600,
        monthlyPrice: 1000,
        image: '/images/pro.jpg',
        category: 'Most Popular',
        features: [
            '✔ Todo lo anterior incluido',
            '✔ Agenda automática de citas',
            '✔ Clasificación de leads (Interesado/No)',
            '✔ Seguimiento automático',
            '✔ Reporte mensual simple'
        ],
        target: '👉 Ideal para spas, clínicas, consultorios',
        stripeLink: 'https://buy.stripe.com/dRm3cv9bgaX98ew9GQ7N601'


    },
    {
        id: 'elite',
        name: 'SISTEMA COMPLETO',
        description: 'Atención + Llamadas + Ventas.',
        price: 6000,
        monthlyPrice: 1200,
        image: '/images/elite.jpg',
        category: 'Premium',
        features: [
            '📞 Contestación de llamadas con IA',
            '💰 Cotizaciones automáticas',
            '🎙️ Respuestas por audio natural',
            '🔁 Seguimiento de ventas (Re-marketing)',
            '📊 Panel de control completo'
        ],
        target: '👉 Reemplaza a una recepcionista 24/7',
        stripeLink: 'https://buy.stripe.com/8x24gz87c7KX9iA9GQ7N600'

    }
];
