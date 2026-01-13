import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Save, Sparkles } from "lucide-react";

export default function EmployeeConfigPage() {
    return (
        <div className="p-8 space-y-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                        <Bot className="w-8 h-8 text-violet-500" />
                        Configuración del Empleado Digital
                    </h2>
                    <p className="text-muted-foreground mt-2">Define cómo tu IA representa a tu negocio.</p>
                </div>
                <Button variant="premium" className="gap-2">
                    <Save className="w-4 h-4" />
                    Guardar Cambios
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Persona Section */}
                <Card className="md:col-span-1 border-violet-500/20 shadow-lg shadow-violet-900/10">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-yellow-500" />
                            Identidad y Personalidad
                        </CardTitle>
                        <CardDescription>
                            Establece el nombre, rol y personalidad de tu agente.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="botName">Nombre del Empleado</Label>
                            <Input id="botName" placeholder="ej. Maya, Alex, SoporteBot" defaultValue="Agente Aivora" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="businessName">Nombre del Negocio</Label>
                            <Input id="businessName" placeholder="ej. Limpieza Pro" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tone">Tono de Voz</Label>
                            <select className="flex h-10 w-full rounded-md border border-input bg-black/20 text-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                <option value="professional">Profesional y Formal</option>
                                <option value="friendly">Amigable y Casual</option>
                                <option value="enthusiastic">Entusiasta y Energético</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="instructions">Instrucciones Principales (Prompt del Sistema)</Label>
                            <Textarea
                                id="instructions"
                                placeholder="ej. Eres un asistente útil para una clínica dental. Siempre pregunta el nombre del paciente primero..."
                                className="h-32"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Knowledge Base / Rules */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Conocimiento del Negocio</CardTitle>
                            <CardDescription>Sube documentos para entrenar a tu IA.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="border-2 border-dashed border-zinc-700 rounded-lg p-6 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors cursor-pointer">
                                <span className="text-4xl mb-2">📄</span>
                                <p className="text-sm font-medium text-white">Sube tus Menús, Lista de Precios o FAQs</p>
                                <p className="text-xs text-zinc-500 mt-1">PDF, DOCX, TXT (Max 10MB)</p>
                                <Button variant="secondary" size="sm" className="mt-4">
                                    Seleccionar Archivos
                                </Button>
                            </div>

                            <div className="space-y-2">
                                <Label>O escribe la información clave aquí:</Label>
                                <Textarea
                                    placeholder="Nuestros horarios son... Aceptamos tarjeta... La limpieza incluye..."
                                    className="min-h-[100px]"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-green-500/20">
                        <CardHeader>
                            <CardTitle>Lógica de Precios (Simple)</CardTitle>
                            <CardDescription>Define tarifas base para cotización automática.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-2 items-end">
                                <div className="flex-1 space-y-2">
                                    <Label>Nombre del Servicio</Label>
                                    <Input placeholder="ej. Limpieza Estándar" />
                                </div>
                                <div className="w-24 space-y-2">
                                    <Label>Precio Base</Label>
                                    <Input placeholder="$0" />
                                </div>
                            </div>
                            <Button variant="outline" className="w-full border-dashed">
                                + Agregar Regla de Precio
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
