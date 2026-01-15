import { Calendar, Fuel, Gauge, PenTool as Tool } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Car } from '../../data/mockCars';

interface CarCardProps {
    car: Car;
}

export default function CarCard({ car }: CarCardProps) {
    return (
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 overflow-hidden flex flex-col h-full">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <Link to={`/carro/${car.id}`}>
                    <img
                        src={car.images[0]}
                        alt={car.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                </Link>
                {car.is_sold && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Vendido
                    </div>
                )}
                {!car.is_sold && car.featured && (
                    <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Destaque
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <Link to={`/carro/${car.id}`} className="block mb-2">
                    <h3 className="font-bold text-lg text-slate-800 line-clamp-1 group-hover:text-primary transition">
                        {car.title}
                    </h3>
                </Link>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary/70" />
                        <span>{car.year}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Gauge size={14} className="text-primary/70" />
                        <span>{car.km.toLocaleString()} km</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Tool size={14} className="text-primary/70" /> {/* Transmission icon proxy */}
                        <span className="truncate">{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Fuel size={14} className="text-primary/70" />
                        <span className="truncate">{car.fuel}</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                        <span className="text-xs text-slate-400 block">Preço à vista</span>
                        <span className="text-xl font-bold text-primary">
                            {car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                    </div>
                    <Link
                        to={`/carro/${car.id}`}
                        className="bg-slate-100 text-slate-600 hover:bg-primary hover:text-white p-2 rounded-lg transition"
                    >
                        Ver Detalhes
                    </Link>
                </div>
            </div>
        </div>
    );
}
