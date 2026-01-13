import { cn } from "@/lib/utils";
import { Play, FileText } from "lucide-react";

interface MessageBubbleProps {
    role: 'user' | 'assistant';
    content: string;
    type: 'text' | 'audio' | 'quote';
    timestamp: string;
}

export function MessageBubble({ role, content, type, timestamp }: MessageBubbleProps) {
    const isUser = role === 'user';

    return (
        <div className={cn("flex w-full mb-4", isUser ? "justify-end" : "justify-start")}>
            <div
                className={cn(
                    "max-w-[80%] rounded-2xl relative text-sm shadow-sm",
                    isUser
                        ? "bg-[#005c4b] text-[#e9edef] rounded-tr-none"
                        : "bg-[#202c33] text-[#e9edef] rounded-tl-none"
                )}
            >
                {/* Audio Message UI */}
                {type === 'audio' && (
                    <div className="flex items-center gap-3 p-3 min-w-[200px]">
                        <div className="w-8 h-8 rounded-full bg-zinc-500/20 flex items-center justify-center cursor-pointer hover:bg-zinc-500/30">
                            <Play className="w-4 h-4 fill-current" />
                        </div>
                        <div className="flex-1 space-y-1">
                            <div className="h-1 bg-white/20 rounded-full w-full relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-white/60" />
                            </div>
                            <div className="flex justify-between text-[10px] text-white/50">
                                <span>0:14</span>
                                <span>2:30</span>
                            </div>
                        </div>
                        <div className="w-6 h-6 rounded-full overflow-hidden bg-sky-500/20">
                            {/* Avatar placeholder */}
                        </div>
                    </div>
                )}

                {/* Quote Card UI */}
                {type === 'quote' && (
                    <div className="p-1">
                        <div className="bg-white/5 rounded-xl border border-white/5 p-3 mb-1">
                            <div className="flex items-start gap-3">
                                <div className="bg-orange-500/20 p-2 rounded-lg">
                                    <FileText className="w-5 h-5 text-orange-400" />
                                </div>
                                <div>
                                    <p className="font-semibold text-orange-400 text-xs uppercase tracking-wider mb-1">Cotización Oficial</p>
                                    <p className="font-bold text-lg">{content.split('|')[0]}</p>
                                    <p className="text-xs text-white/60">{content.split('|')[1]}</p>
                                </div>
                            </div>
                            <button className="mt-3 w-full py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs transition-colors">
                                Tocar para Ver Detalles
                            </button>
                        </div>
                        <p className="px-2 pb-1 text-xs">Aquí tienes tu cotización solicitada basada en los detalles proporcionados.</p>
                    </div>
                )}

                {/* Standard Text */}
                {type === 'text' && (
                    <div className="px-4 py-3">
                        <p className="leading-relaxed whitespace-pre-line">{content}</p>
                    </div>
                )}

                <span className={cn("text-[10px] text-white/40 block pb-2 pr-3 text-right absolute bottom-0 right-0")}>
                    {timestamp}
                </span>
            </div>
        </div>
    );
}
