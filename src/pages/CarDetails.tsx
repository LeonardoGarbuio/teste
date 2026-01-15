import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { carService } from '../services/carService';
import type { Car } from '../data/mockCars';
import { ArrowLeft, Calendar, Fuel, Gauge, PenTool as Tool, MapPin, Phone, Share2 } from 'lucide-react';

export default function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState<Car | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            carService.getById(id)
                .then(setCar)
                .catch(console.error)
                .finally(() => setLoading(false));
        }
    }, [id]);

    if (loading) return <div className="text-center py-20">Carregando detalhes...</div>;

    if (!car) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-slate-800">Veículo não encontrado</h2>
                <Link to="/estoque" className="text-primary hover:underline mt-4 block">Voltar para o estoque</Link>
            </div>
        );
    }

    const whatsappMessage = encodeURIComponent(`Olá, vi o ${car.title} no site e gostaria de mais informações.`);
    const whatsappLink = `https://wa.me/5542999260016?text=${whatsappMessage}`;

    return (
        <div className="bg-slate-50 min-h-screen pb-12">
            <div className="bg-white border-b border-slate-200 sticky top-20 z-40 shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/estoque" className="flex items-center gap-2 text-slate-600 hover:text-primary font-medium">
                        <ArrowLeft size={20} /> Voltar
                    </Link>
                    <div className="font-bold text-lg text-slate-800 truncate hidden md:block">{car.title}</div>
                    <button className="text-slate-400 hover:text-primary transition">
                        <Share2 size={24} />
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content - Gallery */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden aspect-video relative">
                            <img src={car.images[0]} alt={car.title} className="w-full h-full object-cover" />
                            {car.is_sold && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <span className="bg-red-600 text-white text-3xl font-bold px-8 py-4 rounded-xl uppercase transform -rotate-12 border-4 border-white">Vendido</span>
                                </div>
                            )}
                        </div>

                        {/* Description Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Sobre este veículo</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Veículo em excelente estado de conservação. Procedência garantida, revisado e com garantia da loja.
                                Entre em contato para mais detalhes ou para agendar uma visita.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">Aceita Troca</span>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">Financia</span>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">IPVA 2024 Pago</span>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Details & CTA */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-36">
                            <h1 className="text-2xl font-bold text-slate-900 mb-2">{car.title}</h1>
                            <div className="text-3xl font-bold text-primary mb-6">
                                {car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex flex-col gap-1 p-3 bg-slate-50 rounded-lg">
                                    <span className="text-xs text-slate-400 flex items-center gap-1"><Calendar size={12} /> Ano</span>
                                    <span className="font-semibold text-slate-700">{car.year}</span>
                                </div>
                                <div className="flex flex-col gap-1 p-3 bg-slate-50 rounded-lg">
                                    <span className="text-xs text-slate-400 flex items-center gap-1"><Gauge size={12} /> Km</span>
                                    <span className="font-semibold text-slate-700">{car.km.toLocaleString()}</span>
                                </div>
                                <div className="flex flex-col gap-1 p-3 bg-slate-50 rounded-lg">
                                    <span className="text-xs text-slate-400 flex items-center gap-1"><Tool size={12} /> Câmbio</span>
                                    <span className="font-semibold text-slate-700 truncate">{car.transmission}</span>
                                </div>
                                <div className="flex flex-col gap-1 p-3 bg-slate-50 rounded-lg">
                                    <span className="text-xs text-slate-400 flex items-center gap-1"><Fuel size={12} /> Combustível</span>
                                    <span className="font-semibold text-slate-700 truncate">{car.fuel}</span>
                                </div>
                            </div>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                className="w-full bg-accent hover:bg-amber-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg hover:shadow-xl hover:-translate-y-1 mb-4"
                            >
                                <Phone size={20} /> Tenho Interesse
                            </a>

                            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                                <MapPin size={16} /> Disponível em Ponta Grossa - PR
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
