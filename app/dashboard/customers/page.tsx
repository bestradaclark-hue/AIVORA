import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Filter, Plus } from "lucide-react";

const customers = [
    { id: 1, name: "María González", status: "Lead", phone: "+52 55 1234 5678", lastContact: "Hoy, 10:30 AM", value: "$0" },
    { id: 2, name: "Empresa ABC", status: "Cliente", phone: "+52 81 9876 5432", lastContact: "Ayer", value: "$15,000" },
    { id: 3, name: "Juan Pérez", status: "Cotización", phone: "+52 33 1111 2222", lastContact: "Hace 2 días", value: "$4,500" },
    { id: 4, name: "Clínica San José", status: "Cliente", phone: "+52 55 4444 3333", lastContact: "Hace 1 semana", value: "$32,000" },
    { id: 5, name: "Roberto T.", status: "Lead", phone: "+52 55 8888 9999", lastContact: "Hace 1 semana", value: "$0" },
];

export default function CustomersPage() {
    return (
        <div className="p-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">Clientes y Leads</h2>
                    <p className="text-muted-foreground">Gestiona los contactos capturados por tu IA.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" /> Exportar CSV
                    </Button>
                    <Button className="gap-2 bg-primary text-white">
                        <Plus className="w-4 h-4" /> Nuevo Contacto
                    </Button>
                </div>
            </div>

            <Card className="border-white/5 bg-zinc-900/50">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>Base de Datos (5)</CardTitle>
                        <Button variant="ghost" size="sm" className="text-zinc-400">
                            <Filter className="w-4 h-4 mr-2" /> Filtros
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="border-white/10 hover:bg-white/5">
                                <TableHead className="text-zinc-400">Nombre</TableHead>
                                <TableHead className="text-zinc-400">Estado</TableHead>
                                <TableHead className="text-zinc-400">Teléfono</TableHead>
                                <TableHead className="text-zinc-400">Última Interacción</TableHead>
                                <TableHead className="text-right text-zinc-400">Valor Estimado</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customers.map((customer) => (
                                <TableRow key={customer.id} className="border-white/10 hover:bg-white/5">
                                    <TableCell className="font-medium text-white">{customer.name}</TableCell>
                                    <TableCell>
                                        <Badge variant={customer.status === 'Cliente' ? 'default' : 'secondary'} className={customer.status === 'Cliente' ? 'bg-green-500 hover:bg-green-600' : 'bg-zinc-700'}>
                                            {customer.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-zinc-300">{customer.phone}</TableCell>
                                    <TableCell className="text-zinc-400">{customer.lastContact}</TableCell>
                                    <TableCell className="text-right text-white font-mono">{customer.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
