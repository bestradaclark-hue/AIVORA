"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search, Phone, Video, MoreVertical, Send, Mic } from "lucide-react";

const conversations = [
    { id: 1, name: "María González", lastMessage: "Me interesa el paquete de limpieza...", time: "10:30 AM", unread: 2 },
    { id: 2, name: "Dr. Roberto Campos", lastMessage: "Confirmado para mañana a las 5.", time: "Yesterday", unread: 0 },
    { id: 3, name: "Restaurante El Sabor", lastMessage: "¿Pueden facturar?", time: "Yesterday", unread: 0 },
];

export default function ConversationsPage() {
    return (
        <div className="flex h-full bg-[#111b21] overflow-hidden">
            {/* Chat List (Left) */}
            <div className="w-[400px] border-r border-[#2a3942] flex flex-col bg-[#111b21]">
                <div className="p-4 bg-[#202c33] flex justify-between items-center border-b border-[#2a3942]">
                    <div className="font-bold text-lg text-[#e9edef]">Chats</div>
                    <div className="flex gap-4 text-[#aebac1]">
                        <MoreVertical className="w-5 h-5 cursor-pointer" />
                    </div>
                </div>
                <div className="p-3">
                    <div className="relative">
                        <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-[#aebac1]" />
                        <Input
                            className="bg-[#202c33] border-none pl-10 text-[#e9edef] placeholder:text-[#aebac1] focus-visible:ring-0"
                            placeholder="Buscar un chat"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {conversations.map((chat) => (
                        <div key={chat.id} className="flex items-center gap-3 p-3 hover:bg-[#202c33] cursor-pointer border-b border-[#2a3942]/50 transition-colors">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${chat.id}`} />
                                <AvatarFallback>{chat.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-medium text-[#e9edef] truncate">{chat.name}</h3>
                                    <span className="text-xs text-[#aebac1]">{chat.time}</span>
                                </div>
                                <p className="text-sm text-[#8696a0] truncate">{chat.lastMessage}</p>
                            </div>
                            {chat.unread > 0 && (
                                <div className="min-w-[20px] h-5 rounded-full bg-[#00a884] flex items-center justify-center text-[10px] font-bold text-[#111b21]">
                                    {chat.unread}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Detail (Right) */}
            <div className="flex-1 flex flex-col bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-center">
                <div className="absolute inset-0 bg-black/90 pointer-events-none" /> {/* Dimmer */}

                {/* Header */}
                <div className="p-4 bg-[#202c33] flex justify-between items-center border-b border-[#2a3942] z-10 shrink-0">
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=1`} />
                            <AvatarFallback>MG</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="font-medium text-[#e9edef]">María González</div>
                            <div className="text-xs text-[#8696a0]">en línea hoy a las 10:30 AM</div>
                        </div>
                    </div>
                    <div className="flex gap-6 text-[#aebac1]">
                        <Video className="w-5 h-5 cursor-pointer" />
                        <Phone className="w-5 h-5 cursor-pointer" />
                        <Search className="w-5 h-5 cursor-pointer" />
                        <MoreVertical className="w-5 h-5 cursor-pointer" />
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 relative z-10 p-8 flex flex-col gap-4 overflow-y-auto">
                    <div className="bg-[#2a3942] text-[#e9edef] text-sm p-2 rounded-lg text-center self-center shadow-sm w-fit mb-4 text-[10px] uppercase font-bold tracking-widest bg-opacity-50 backdrop-blur-sm">
                        Hoy
                    </div>

                    {/* Bot Message */}
                    <div className="self-start bg-[#202c33] text-[#e9edef] p-3 rounded-lg rounded-tl-none max-w-[60%] shadow-sm text-sm">
                        Hola María, ¡claro! Tenemos disponible el paquete de limpieza profunda. ¿Cuántos metros cuadrados tiene tu oficina aproximadamente?
                        <div className="text-[10px] text-[#ffffff99] text-right mt-1">10:28 AM</div>
                    </div>

                    {/* User Message */}
                    <div className="self-end bg-[#005c4b] text-[#e9edef] p-3 rounded-lg rounded-tr-none max-w-[60%] shadow-sm text-sm">
                        Es pequeña, unos 80m2. ¿Cuánto costaría?
                        <div className="text-[10px] text-[#ffffff99] text-right mt-1">10:30 AM</div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-3 bg-[#202c33] flex items-center gap-4 z-10 shrink-0">
                    <Button variant="ghost" size="icon" className="text-[#8696a0]">
                        <span className="text-xl">😊</span>
                    </Button>
                    <div className="flex-1">
                        <Input
                            className="bg-[#2a3942] border-none text-[#e9edef] placeholder:text-[#8696a0] focus-visible:ring-0"
                            placeholder="Escribe un mensaje"
                        />
                    </div>
                    <Button variant="ghost" size="icon" className="text-[#8696a0]">
                        <Mic className="w-6 h-6" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
