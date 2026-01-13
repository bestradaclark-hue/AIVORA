"use client"

import { useState, useRef, useEffect } from "react";
import { MessageBubble } from "@/components/simulator/message-bubble";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mic, Send, Phone, MoreVertical, RefreshCw } from "lucide-react";

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    type: 'text' | 'audio' | 'quote';
    timestamp: string;
}

export default function SimulatorPage() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: 'Hola! Soy el asistente virtual de AIVORA. ¿Cómo puedo ayudarte hoy con tu negocio?',
            type: 'text',
            timestamp: '10:00 AM'
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            type: 'text',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, newMessage]);
        setInput("");
        simulateResponse(input);
    };

    const simulateAudio = () => {
        // Logic to simulate user sending an audio
        const newMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: "Mensaje de Audio",
            type: 'audio', // Visual only for now
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, newMessage]);
        simulateResponse("audio_trigger");
    }

    const simulateResponse = (userInput: string) => {
        setIsTyping(true);

        setTimeout(() => {
            const lowerInput = userInput.toLowerCase();
            let responseText = "Entiendo, ¿puedes darme más detalles?";
            let responseType: 'text' | 'quote' | 'audio' = 'text';

            if (lowerInput.includes("precio") || lowerInput.includes("costo") || lowerInput.includes("cotiz")) {
                responseText = "Para calcular tu cotización necesito: 1. Tipo de servicio\n2. Metros cuadrados aprox.";
                responseType = 'text';
            } else if (lowerInput.includes("metros") || lowerInput.includes("m2")) {
                // Simulate Quote Generation
                responseText = "$850.00 USD|Limpieza Profunda (120m2)";
                responseType = 'quote';
            } else if (lowerInput === "audio_trigger") {
                // Respond to audio with audio or text
                responseText = "He escuchado tu audio. Entendido, agendaré la cita para mañana.";
                responseType = 'text'; // or audio if we want to simulate bot voice
            } else if (lowerInput.includes("hola")) {
                responseText = "Hola de nuevo. ¿En qué te puedo servir?";
            }

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: responseText,
                type: responseType,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="h-[calc(100vh-2rem)] flex gap-6 p-6">
            {/* Config Side */}
            <div className="hidden lg:block w-80 space-y-4">
                <Card className="p-4 bg-violet-900/10 border-violet-500/20">
                    <h3 className="font-semibold text-white mb-2">Simulando: "Agente Aivora"</h3>
                    <p className="text-sm text-muted-foreground mb-4">Modo: Profesional</p>
                    <Button variant="outline" size="sm" className="w-full mb-2" onClick={() => setMessages([])}>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Reiniciar Chat
                    </Button>
                </Card>
                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mt-4">Acciones de Debug</h4>
                <Button variant="secondary" size="sm" className="w-full justify-start" onClick={simulateAudio}>
                    <Mic className="w-4 h-4 mr-2" />
                    Simular "Audio de Usuario"
                </Button>
            </div>

            {/* Android/Whatsapp UI */}
            <div className="flex-1 flex justify-center">
                <div className="w-full max-w-md h-full bg-[#111b21] rounded-[3rem] border-8 border-[#2a2f32] overflow-hidden flex flex-col shadow-2xl relative">
                    <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between text-[#e9edef] z-10 shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center text-xs font-bold">
                                AI
                            </div>
                            <div>
                                <p className="font-medium text-sm">Aivora Business</p>
                                <p className="text-[10px] text-white/60">En línea</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Phone className="w-5 h-5" />
                            <MoreVertical className="w-5 h-5" />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-center opacity-90">
                        <div className="absolute inset-0 bg-black/80 pointer-events-none z-0" />
                        <div className="relative z-10">
                            <div className="bg-[#182229] text-[#fcd853] text-[10px] p-2 rounded-lg text-center mb-4 shadow-sm w-fit mx-auto border border-[#fcd853]/20">
                                🔒 Los mensajes están cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos o escucharlos.
                            </div>

                            {messages.map((msg) => (
                                <MessageBubble key={msg.id} {...msg} />
                            ))}

                            {isTyping && (
                                <div className="flex justify-start mb-4">
                                    <div className="bg-[#202c33] px-4 py-3 rounded-2xl rounded-tl-none text-white/50 text-xs italic">
                                        Escribiendo...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    <div className="bg-[#202c33] p-2 flex items-center gap-2 shrink-0">
                        <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white shrink-0">
                            <span className="text-xl">😊</span>
                        </Button>
                        <div className="flex-1 bg-[#2a3942] rounded-full flex items-center px-4 py-2">
                            <Input
                                className="bg-transparent border-none text text-white placeholder:text-zinc-400 focus-visible:ring-0 p-0 h-auto"
                                placeholder="Mensaje"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            />
                        </div>
                        {input.trim() ? (
                            <Button size="icon" className="bg-[#00a884] hover:bg-[#008f70] rounded-full shrink-0 animate-in zoom-in duration-200" onClick={handleSend}>
                                <Send className="w-5 h-5 text-white" />
                            </Button>
                        ) : (
                            <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white shrink-0" onClick={simulateAudio}>
                                <Mic className="w-6 h-6" />
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
