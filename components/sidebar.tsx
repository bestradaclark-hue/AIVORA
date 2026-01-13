"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    BarChart3,
    Bot,
    MessageSquare,
    Settings,
    Users,
    Zap,
    LogOut
} from "lucide-react";

const routes = [
    {
        label: "Panel Principal",
        icon: BarChart3,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Conversaciones",
        icon: MessageSquare,
        href: "/dashboard/conversations",
        color: "text-violet-500",
    },
    {
        label: "Empleado Digital",
        icon: Bot,
        href: "/dashboard/employee",
        color: "text-pink-700",
    },
    {
        label: "Simulador / Prueba",
        icon: MessageSquare,
        href: "/dashboard/simulator",
        color: "text-green-500",
    },
    {
        label: "Clientes",
        icon: Users,
        href: "/dashboard/customers",
        color: "text-orange-700",
    },
    {
        label: "Configuración",
        icon: Settings,
        href: "/dashboard/settings",
    },
];

import Image from "next/image";

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#050A18] border-r border-white/5 text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-10 h-10 mr-4">
                        <Image
                            src="/logo.jpg"
                            alt="AIVORA Logo"
                            fill
                            className="object-contain rounded-lg"
                        />
                    </div>
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        AIVORA
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/5 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="px-3 py-2">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 mb-4">
                    <div className="flex items-center gap-x-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <p className="text-xs text-zinc-400">Sistema Operativo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
