import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePublicInventory } from '../hooks/useCars';
import CarCard from '../components/Car/CarCard';
import { Filter, Search } from 'lucide-react';

export default function Inventory() {
    const { cars, loading } = usePublicInventory();
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
    const [selectedBrand, setSelectedBrand] = useState('Todas');
    const [isBrandOpen, setIsBrandOpen] = useState(false);

    const filteredCars = useMemo(() => {
        return cars.filter(car => {
            const matchesSearch = car.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesBrand = selectedBrand === 'Todas' || car.brand === selectedBrand;
            return matchesSearch && matchesBrand;
        });
    }, [cars, searchTerm, selectedBrand]);

    const brands = useMemo(() => ['Todas', ...new Set(cars.map(car => car.brand))], [cars]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Nosso Estoque</h1>

                {/* Filters */}
                <div className="bg-white p-3 md:p-2 rounded-2xl md:rounded-full shadow-sm border border-slate-100 flex flex-col md:flex-row gap-3 md:gap-2 items-stretch md:items-center">
                    <div className="relative flex-grow w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar por modelo..."
                            className="w-full pl-12 pr-4 py-3 rounded-xl md:rounded-full border border-slate-200 md:border-none bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary transition-all outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="relative group w-full md:w-auto md:min-w-[200px]">
                        <button
                            onClick={() => setIsBrandOpen(!isBrandOpen)}
                            className="w-full flex items-center justify-between gap-2 bg-slate-50 px-4 py-3 rounded-xl md:rounded-full border border-slate-200 hover:border-primary hover:text-primary transition-colors text-slate-700 font-medium"
                        >
                            <div className="flex items-center gap-2">
                                <Filter size={20} className="text-slate-500 group-hover:text-primary transition-colors" />
                                <span>{selectedBrand}</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform duration-200 ${isBrandOpen ? 'rotate-180' : ''}`}
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        {isBrandOpen && (
                            <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                                {brands.map(brand => (
                                    <button
                                        key={brand}
                                        onClick={() => {
                                            setSelectedBrand(brand);
                                            setIsBrandOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors ${selectedBrand === brand ? 'text-primary font-bold bg-blue-50' : 'text-slate-600'}`}
                                    >
                                        {brand}
                                    </button>
                                ))}
                            </div>
                        )}
                        {/* Overlay to close on click outside */}
                        {isBrandOpen && (
                            <div className="fixed inset-0 z-40" onClick={() => setIsBrandOpen(false)} />
                        )}
                    </div>
                </div>
            </div>

            {/* Grid */}
            {loading ? (
                <div className="text-center py-20 text-slate-400">Carregando estoque...</div>
            ) : (
                <>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredCars.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>

                    {filteredCars.length === 0 && (
                        <div className="text-center py-20 text-slate-400">
                            <p className="text-xl">Nenhum veículo encontrado.</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
