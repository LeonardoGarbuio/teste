import { Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">DL AUTOMÓVEIS</h3>
                        <p className="text-blue-200 mb-4 max-w-sm">
                            Tradição, qualidade e procedência. Encontre seu próximo carro com quem entende do assunto.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/dlautomoveispg/" target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-accent transition">
                                <Instagram size={20} />
                            </a>
                            {/* <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition">
                <Facebook size={20} />
              </a> */}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-accent">Contato</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="shrink-0 text-accent" size={20} />
                                <span className="text-blue-100">
                                    Av. João Manoel dos Santos Ribas, 811<br />
                                    Nova Rússia, Ponta Grossa - PR
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-accent" size={20} />
                                <span className="text-blue-100">(42) 99926-0016</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-accent">Horários</h4>
                        <ul className="space-y-2 text-blue-100">
                            <li className="flex justify-between">
                                <span>Segunda a Sexta</span>
                                <span>08:30 - 18:30</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sábado</span>
                                <span>08:30 - 13:00</span>
                            </li>
                            <li className="flex justify-between text-gray-400">
                                <span>Domingo</span>
                                <span>Fechado</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-800 pt-6 text-center text-blue-300 text-sm">
                    <p>&copy; {new Date().getFullYear()} DL Automóveis. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
