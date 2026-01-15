import { Link } from 'react-router-dom';
import { useCars } from '../../hooks/useCars';
import { Edit, Plus, Trash2, Eye } from 'lucide-react';
import { carService } from '../../services/carService';

export default function Dashboard() {
    const { cars, loading, refresh } = useCars();

    const handleDelete = async (id: string) => {
        if (confirm('Tem certeza que deseja excluir?')) {
            try {
                await carService.delete(id);
                refresh();
            } catch (error) {
                alert('Erro ao excluir');
            }
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Visão Geral</h1>
                    <p className="text-slate-500">Gerencie seu estoque de veículos</p>
                </div>
                <Link
                    to="/admin/novo"
                    className="bg-primary hover:bg-blue-900 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition"
                >
                    <Plus size={20} /> Novo Veículo
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center text-slate-500">Carregando painel...</div>
                ) : (
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-slate-600">Veículo</th>
                                <th className="px-6 py-4 font-semibold text-slate-600">Preço</th>
                                <th className="px-6 py-4 font-semibold text-slate-600">Status</th>
                                <th className="px-6 py-4 font-semibold text-slate-600 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {cars.map((car) => (
                                <tr key={car.id} className="hover:bg-slate-50 transition">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            {car.images[0] && (
                                                <img src={car.images[0]} alt="" className="w-12 h-12 rounded-lg object-cover" />
                                            )}
                                            <div>
                                                <div className="font-bold text-slate-800">{car.title}</div>
                                                <div className="text-sm text-slate-500">{car.year} • {car.km} km</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-slate-700">
                                        {car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </td>
                                    <td className="px-6 py-4">
                                        {car.is_sold ? (
                                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Vendido</span>
                                        ) : (
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Disponível</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <Link to={`/carro/${car.id}`} className="p-2 hover:bg-slate-200 rounded-lg text-slate-500 transition" title="Ver no site">
                                                <Eye size={18} />
                                            </Link>
                                            <Link to={`/admin/editar/${car.id}`} className="p-2 hover:bg-blue-100 rounded-lg text-blue-600 transition" title="Editar">
                                                <Edit size={18} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(car.id)}
                                                className="p-2 hover:bg-red-100 rounded-lg text-red-600 transition" title="Excluir"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
