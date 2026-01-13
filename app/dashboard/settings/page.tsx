import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrCode, Smartphone, RefreshCw, CheckCircle2 } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="p-8 space-y-8 max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-white">Configuración</h2>

            {/* WhatsApp Integration Section */}
            <Card className="border-green-500/20 bg-zinc-900/50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-500">
                        <Smartphone className="w-5 h-5" />
                        Conexión de WhatsApp
                    </CardTitle>
                    <CardDescription>
                        Vincula tu número de WhatsApp Business para activar el Empleado Digital.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg aspect-square max-w-[250px] mx-auto border-4 border-white shadow-xl">
                            <QrCode className="w-full h-full text-zinc-900" />
                            <p className="mt-2 text-xs text-zinc-500 font-bold text-center">ESCANEA PARA VINCULAR</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-white">Pasos para conectar:</h3>
                            <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-400">
                                <li>Abre WhatsApp en tu teléfono.</li>
                                <li>Ve a <strong>Ajustes</strong> {'>'} <strong>Dispositivos vinculados</strong>.</li>
                                <li>Toca en <strong>Vincular un dispositivo</strong>.</li>
                                <li>Apunta la cámara al código QR de la izquierda.</li>
                            </ol>
                            <div className="pt-4">
                                <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2">
                                    <RefreshCw className="w-4 h-4" />
                                    Generar Nuevo Código QR
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Subscription Section */}
            <Card className="border-white/10 bg-zinc-900/50">
                <CardHeader>
                    <CardTitle>Tu Suscripción</CardTitle>
                    <CardDescription>Detalles del plan activo y facturación.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-500 font-bold">
                                VZ
                            </div>
                            <div>
                                <p className="font-medium text-white">AIVORA PRO</p>
                                <p className="text-xs text-zinc-400">$1,500 MXN / mes</p>
                            </div>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                            <CheckCircle2 className="w-3 h-3" />
                            Activo
                        </span>
                    </div>
                    <Button variant="outline" className="w-full">Gestionar Pagos en Stripe</Button>
                </CardContent>
            </Card>
        </div>
    );
}
