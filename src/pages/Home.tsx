import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFeaturedCars } from '../hooks/useCars';
import CarCard from '../components/Car/CarCard';

export default function Home() {
    const { cars: featuredCars, loading } = useFeaturedCars();

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center justify-center bg-slate-900 overflow-hidden py-20 px-4 md:py-0">
                {/* Background Image Placeholder - Replace with nice car photo */}
                <div className="absolute inset-0 bg-blue-900/40 z-10 mix-blend-multiply" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop")' }} // Generic Luxury Car
                />

                <div className="container mx-auto relative z-20 text-center text-white w-full">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
                        Seu próximo carro <span className="text-accent">está aqui</span>
                    </h1>
                    <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-blue-100 px-4">
                        Qualidade, procedência e as melhores condições de Ponta Grossa.
                    </p>
                    <div className="max-w-xl mx-auto mb-8 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 shadow-lg flex items-center mx-4 md:mx-auto">
                        <input
                            type="text"
                            placeholder="Buscar (ex: Hilux, Civic)..."
                            className="bg-transparent text-white placeholder-blue-200/70 border-none focus:ring-0 flex-grow px-3 md:px-4 outline-none w-full text-sm md:text-base"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    window.location.href = `/estoque?q=${e.currentTarget.value}`;
                                }
                            }}
                        />
                        <button
                            onClick={(e) => {
                                const input = e.currentTarget.parentElement?.querySelector('input');
                                if (input) window.location.href = `/estoque?q=${input.value}`;
                            }}
                            className="bg-accent hover:bg-slate-400 text-slate-900 p-2 md:p-3 rounded-full transition flex-shrink-0"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center px-4 md:px-0">
                        <Link
                            to="/estoque"
                            className="bg-white hover:bg-blue-50 text-slate-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full md:w-auto"
                        >
                            Ver Estoque Completo <ArrowRight size={20} />
                        </Link>
                        <a
                            href="https://wa.me/5542999260016"
                            target="_blank"
                            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition w-full md:w-auto block md:inline-block"
                        >
                            Falar com Vendedor
                        </a>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-8 md:py-12 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-4">
                    {/* Desktop Grid */}
                    <div className="hidden md:grid md:grid-cols-3 md:gap-8">
                        <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="bg-blue-100 p-3 rounded-full text-primary shrink-0">
                                <CheckCircle size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800">Procedência Garantida</h3>
                                <p className="text-slate-600 text-sm">Todos os veículos periciados e aprovados.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="bg-blue-100 p-3 rounded-full text-primary shrink-0">
                                <CheckCircle size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800">Melhores Taxas</h3>
                                <p className="text-slate-600 text-sm">Financiamento facilitado em até 60x.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="bg-blue-100 p-3 rounded-full text-primary shrink-0">
                                <CheckCircle size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800">Compra Segura</h3>
                                <p className="text-slate-600 text-sm">Loja tradicional em Ponta Grossa.</p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Marquee */}
                    <div className="md:hidden relative w-full -mx-4 px-4 overflow-hidden">
                        <div className="marquee-container gap-4">
                            {/* Original Set */}
                            {[1, 2].map((set) => (
                                <div key={set} className="flex gap-4">
                                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 min-w-[300px]">
                                        <div className="bg-blue-100 p-3 rounded-full text-primary shrink-0">
                                            <CheckCircle size={28} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base text-slate-800">Procedência Garantida</h3>
                                            <p className="text-slate-600 text-xs text-nowrap">Veículos periciados e aprovados.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 min-w-[300px]">
                                        <div className="bg-blue-100 p-3 rounded-full text-primary shrink-0">
                                            <CheckCircle size={28} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base text-slate-800">Melhores Taxas</h3>
                                            <p className="text-slate-600 text-xs text-nowrap">Financiamento em até 60x.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 min-w-[300px]">
                                        <div className="bg-blue-100 p-3 rounded-full text-primary shrink-0">
                                            <CheckCircle size={28} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base text-slate-800">Compra Segura</h3>
                                            <p className="text-slate-600 text-xs text-nowrap">Loja tradicional em PG.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Stock */}
            <section className="py-12 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-8 md:mb-12">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Destaques da Loja</h2>
                            <p className="text-slate-600 text-sm md:text-base">Veículos selecionados especialmente para você</p>
                        </div>
                        <Link to="/estoque" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-blue-700">
                            Ver tudo <ArrowRight size={20} />
                        </Link>
                    </div>

                    {loading ? (
                        <div className="text-center py-20 text-slate-400">Carregando destaques...</div>
                    ) : (
                        // Mobile: Horizontal Scroll (Snap) | Desktop: Grid
                        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                            {featuredCars.length > 0 ? featuredCars.map(car => (
                                <div key={car.id} className="min-w-[85vw] md:min-w-0 snap-center">
                                    <CarCard car={car} />
                                </div>
                            )) : (
                                <p className="col-span-4 text-center text-slate-400 w-full">Nenhum destaque no momento.</p>
                            )}
                        </div>
                    )}

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/estoque" className="inline-flex items-center gap-2 text-primary font-bold">
                            Ver todo o estoque <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
