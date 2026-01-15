import { Link } from 'react-router-dom';
import { Car, Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter hover:text-gray-200 transition">
                        <Car className="h-8 w-8 text-white" />
                        <span>DL AUTOMÓVEIS</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 font-medium">
                        <Link to="/" className="hover:text-amber-400 transition">Início</Link>
                        <Link to="/estoque" className="hover:text-amber-400 transition">Estoque</Link>
                        <Link to="/sobre" className="hover:text-amber-400 transition">Sobre Nós</Link>
                        <a
                            href="https://wa.me/5542999260016"
                            target="_blank"
                            className="bg-accent hover:bg-amber-600 text-white px-6 py-2 rounded-full font-bold transition flex items-center gap-2"
                        >
                            <Phone size={18} />
                            Fale Conosco
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Side Drawer */}
            {/* Overlay/Backdrop */}
            <div
                className={`md:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Drawer Panel */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-slate-900 z-[70] shadow-2xl transition-transform duration-300 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full">
                    {/* Drawer Header */}
                    <div className="flex justify-between items-center p-6 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <Car className="h-6 w-6 text-white" />
                            <span className="font-bold text-lg text-white tracking-tighter">DL AUTOMÓVEIS</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white transition"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Drawer Links */}
                    <div className="flex flex-col p-4 gap-2 overflow-y-auto flex-grow">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 p-4 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition group"
                        >
                            <span className="font-bold text-lg">Início</span>
                        </Link>

                        <Link
                            to="/estoque"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 p-4 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition group"
                        >
                            <span className="font-bold text-lg">Estoque</span>
                        </Link>

                        <Link
                            to="/sobre"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 p-4 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition group"
                        >
                            <span className="font-bold text-lg">Sobre Nós</span>
                        </Link>

                        {/* Drawer Footer/CTA */}
                        <div className="mt-auto pt-8">
                            <a
                                href="https://wa.me/5542999260016"
                                target="_blank"
                                className="flex justify-center items-center gap-2 w-full bg-accent text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-300 transition-colors"
                            >
                                <Phone size={18} />
                                Chamar no WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
