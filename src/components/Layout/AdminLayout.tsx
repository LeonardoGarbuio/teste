import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Car, LayoutDashboard, LogOut, PlusCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useEffect, useState } from 'react';

export default function AdminLayout() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) {
                navigate('/admin/login');
            }
            setLoading(false);
        });
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;

    return (
        <div className="min-h-screen bg-slate-100 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
                <div className="p-6">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                        <Car className="text-accent" />
                        <span>DL ADMIN</span>
                    </Link>
                </div>

                <nav className="flex-grow px-4 space-y-2">
                    <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600/20 text-blue-100 hover:bg-blue-600/30 transition">
                        <LayoutDashboard size={20} /> Dashboard
                    </Link>
                    <Link to="/admin/novo" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition">
                        <PlusCircle size={20} /> Novo Veículo
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition w-full"
                    >
                        <LogOut size={20} /> Sair
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-grow flex flex-col">
                {/* Mobile Header */}
                <header className="bg-white shadow-sm p-4 md:hidden flex justify-between items-center">
                    <span className="font-bold">DL Painel</span>
                    <button><LogOut size={20} /></button>
                </header>

                <main className="flex-grow p-8 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
