import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, MessageSquare, Users, Wallet, Zap } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="p-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">Panel Principal</h2>
                    <p className="text-muted-foreground">Resumen del rendimiento de tu Empleado Digital</p>
                </div>
                <div className="flex items-center gap-x-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-sm text-green-500 font-medium">AIVORA en Línea</span>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="hover:bg-white/5 transition-colors cursor-pointer border-l-4 border-l-violet-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-200">
                            Conversaciones Totales
                        </CardTitle>
                        <MessageSquare className="h-4 w-4 text-violet-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">1,234</div>
                        <p className="text-xs text-muted-foreground flex items-center">
                            <span className="text-green-500 flex items-center mr-1">
                                +20.1% <ArrowUpRight className="h-3 w-3" />
                            </span>
                            desde el mes pasado
                        </p>
                    </CardContent>
                </Card>

                <Card className="hover:bg-white/5 transition-colors cursor-pointer border-l-4 border-l-sky-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-200">
                            Leads Activos
                        </CardTitle>
                        <Users className="h-4 w-4 text-sky-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">45</div>
                        <p className="text-xs text-muted-foreground flex items-center">
                            <span className="text-green-500 flex items-center mr-1">
                                +12 Nuevos
                            </span>
                            hoy
                        </p>
                    </CardContent>
                </Card>

                <Card className="hover:bg-white/5 transition-colors cursor-pointer border-l-4 border-l-pink-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-200">
                            Cotizaciones Generadas
                        </CardTitle>
                        <Zap className="h-4 w-4 text-pink-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">89</div>
                        <p className="text-xs text-muted-foreground">
                            Valor Est.: $45,200
                        </p>
                    </CardContent>
                </Card>

                <Card className="hover:bg-white/5 transition-colors cursor-pointer border-l-4 border-l-orange-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-200">
                            Ventas Cerradas
                        </CardTitle>
                        <Wallet className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">12</div>
                        <p className="text-xs text-muted-foreground flex items-center">
                            <span className="text-green-500 flex items-center mr-1">
                                +4.5%
                            </span>
                            tasa de conversión
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 border-white/5">
                    <CardHeader>
                        <CardTitle>Actividad Reciente</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-sm text-muted-foreground">Las actividades aparecerán aquí...</div>
                    </CardContent>
                </Card>
                <Card className="col-span-3 border-white/5 bg-gradient-to-b from-violet-900/10 to-transparent">
                    <CardHeader>
                        <CardTitle>Rendimiento de IA</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-medium text-zinc-300">Precisión del Mensaje</div>
                                <div className="text-sm font-bold text-green-400">98.2%</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-medium text-zinc-300">Tiempo de Respuesta Promedio</div>
                                <div className="text-sm font-bold text-sky-400">1.2s</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
