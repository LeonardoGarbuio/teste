import { MapPin, Phone, Check, ArrowRight, Star, Shield, Car, Calendar, Users, Trophy } from 'lucide-react';

export default function About() {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-accent selection:text-zinc-900">
            {/* 1. Hero Section: The Statement (Dark Blue Theme) */}
            <div className="relative w-full overflow-hidden bg-slate-900">
                <div className="flex flex-col lg:flex-row h-auto lg:h-[85vh] min-h-[600px]">
                    {/* Left: Content */}
                    <div className="lg:w-[55%] relative z-20 flex flex-col justify-center px-6 sm:px-16 lg:px-24 py-16 lg:py-20 bg-slate-900 text-white order-2 lg:order-1">
                        <div className="absolute top-0 left-0 w-24 h-24 lg:w-32 lg:h-32 border-t-4 border-l-4 border-accent opacity-20"></div>

                        <div className="flex items-center gap-3 mb-6 lg:mb-8">
                            <span className="bg-accent px-3 py-1 text-slate-900 font-bold text-[10px] lg:text-xs uppercase tracking-widest rounded-sm">
                                Desde 2012
                            </span>
                            <span className="text-slate-500 uppercase text-[10px] lg:text-xs tracking-widest">
                                Ponta Grossa • PR
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.9] mb-8 lg:mb-10 tracking-tighter text-white">
                            NÃO VENDEMOS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                                CARROS.
                            </span>
                            <br />
                            VENDEMOS <br />
                            <span className="text-accent">
                                CONQUISTAS.
                            </span>
                        </h1>

                        <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-md leading-relaxed font-light border-l-2 border-accent/30 pl-6">
                            Para quem entende que a máquina é a extensão da sua personalidade. Bem-vindo ao padrão DL.
                        </p>

                        <div className="mt-12 lg:mt-16 flex items-center gap-4">
                            <div className="w-12 lg:w-16 h-[1px] bg-slate-700"></div>
                            <span className="text-slate-500 uppercase text-[10px] lg:text-xs tracking-widest">Role para conhecer</span>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="order-1 lg:order-2 lg:w-[45%] relative h-[300px] lg:h-full group">
                        <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop"
                            alt="Luxury Car Detail"
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-1000 ease-in-out"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 lg:hidden"></div>
                        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-slate-900 hidden lg:block"></div>
                    </div>
                </div>
            </div>

            {/* 2. A Jornada (Storytelling) */}
            <section className="py-16 lg:py-24 overflow-hidden bg-white">
                <div className="container mx-auto px-4">
                    {/* Block 1 - Curadoria (Image Hover Effect) */}
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-32">
                        <div className="relative group cursor-pointer lg:order-1">
                            <div className="absolute -inset-2 lg:-inset-4 bg-slate-100 transform rotate-2 rounded-2xl transition-transform group-hover:rotate-1"></div>
                            <div className="relative rounded-sm shadow-xl w-full h-[300px] lg:h-[500px] overflow-hidden">
                                {/* Dark Overlay that fades out on hover/active */}
                                <div className="absolute inset-0 bg-slate-900/60 z-10 transition-all duration-700 group-hover:bg-transparent group-active:bg-transparent"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1974&auto=format&fit=crop"
                                    alt="Curadoria Automotiva"
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-active:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                        </div>
                        <div className="lg:pl-10 lg:order-2">
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 lg:mb-8 tracking-tight">
                                A Arte da <br /><span className="text-primary">Curadoria.</span>
                            </h2>
                            <p className="text-slate-600 text-base lg:text-lg leading-loose mb-6">
                                Não somos um estacionamento lotado. Somos uma coleção.
                                Rejeitamos mais de 40% dos carros oferecidos a nós. Por quê? Porque nossa assinatura vale mais do que uma venda rápida.
                            </p>
                            <p className="text-slate-600 text-base lg:text-lg leading-loose border-l-4 border-slate-200 pl-6 italic">
                                "Quando você vê o selo DL em um carro, você sabe que ali existe procedência, histórico e qualidade."
                            </p>
                        </div>
                    </div>

                    {/* Block 2 - Legado (Image Hover Effect) */}
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1 lg:pr-10">
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 lg:mb-8 tracking-tight lg:text-right">
                                Mais que clientes,<br /><span className="text-primary">Legado.</span>
                            </h2>
                            <p className="text-slate-600 text-base lg:text-lg leading-loose mb-6 lg:text-right">
                                Em 10 anos, construímos mais que uma carteira de clientes. Construímos amizades.
                                Ver famílias crescendo e trocando de carro conosco ciclo após ciclo é o nosso maior troféu.
                            </p>
                            {/* Mobile: Horizontal Scroll (Slider) / Desktop: Flex Right */}
                            <div className="flex overflow-x-auto pb-4 -mx-4 px-4 mt-8 snap-x snap-mandatory lg:flex lg:justify-end lg:gap-12 lg:mt-10 lg:pb-0 lg:mx-0 lg:overflow-visible">
                                <div className="min-w-[45vw] snap-center mr-4 lg:mr-0 lg:min-w-0 bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center lg:bg-transparent lg:p-0 lg:shadow-none lg:border-none lg:text-right group cursor-default">
                                    <Users className="mx-auto lg:ml-auto lg:mr-0 text-slate-300 group-hover:text-primary transition mb-2" />
                                    <span className="block text-3xl lg:text-4xl font-black text-slate-900">500+</span>
                                    <span className="text-[10px] lg:text-xs text-slate-500 uppercase tracking-wider font-bold">Veículos Entregues</span>
                                </div>
                                <div className="min-w-[45vw] snap-center lg:mr-0 lg:min-w-0 bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center lg:bg-transparent lg:p-0 lg:shadow-none lg:border-none lg:text-right group cursor-default">
                                    <Star className="mx-auto lg:ml-auto lg:mr-0 text-slate-300 group-hover:text-amber-400 transition mb-2" />
                                    <span className="block text-3xl lg:text-4xl font-black text-slate-900">100%</span>
                                    <span className="text-[10px] lg:text-xs text-slate-500 uppercase tracking-wider font-bold">Satisfação</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative group cursor-pointer">
                            <div className="absolute -inset-2 lg:-inset-4 bg-primary/5 transform -rotate-2 rounded-2xl transition-transform group-hover:-rotate-1"></div>
                            <div className="relative rounded-sm shadow-xl w-full h-[300px] lg:h-[500px] overflow-hidden">
                                {/* Dark Overlay that fades out on hover/active */}
                                <div className="absolute inset-0 bg-slate-900/60 z-10 transition-all duration-700 group-hover:bg-transparent group-active:bg-transparent"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Legado Automotivo"
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-active:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Vantagens High-End (Light Gray Theme) */}
            <section className="bg-slate-50 text-slate-900 py-16 lg:py-24 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                        <div className="lg:w-1/3">
                            <div className="inline-flex items-center gap-2 mb-4 lg:mb-6">
                                <span className="w-8 h-[2px] bg-accent"></span>
                                <span className="text-accent font-bold tracking-widest uppercase text-xs lg:text-sm">Experience</span>
                            </div>
                            <h3 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 text-slate-900">O Padrão DL.</h3>
                            <p className="text-slate-600 leading-relaxed text-base lg:text-lg max-w-xs">
                                Detalhes que tornam sua experiência de compra única, segura e memorável.
                            </p>
                        </div>

                        <div className="lg:w-2/3">
                            {/* Mobile: Horizontal Scroll (Slider) / Desktop: Grid */}
                            <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12 lg:pb-0 lg:mx-0 lg:overflow-visible">
                                {[
                                    { icon: Shield, title: "Blindagem de Procedência", desc: "Laudo cautelar estrutural completo e verificação de 150 itens." },
                                    { icon: Star, title: "Garantia Premium", desc: "Cobertura estendida para motor e câmbio em veículos selecionados." },
                                    { icon: Car, title: "Delivery Experience", desc: "Levamos o carro até você para um test-drive exclusivo (região de PG)." },
                                    { icon: Check, title: "Pós-Venda Real", desc: "Suporte dedicado. Você tem o WhatsApp direto dos donos." }
                                ].map((item, i) => (
                                    <div key={i} className="min-w-[85vw] sm:min-w-[320px] lg:min-w-0 snap-center mr-4 lg:mr-0 flex flex-col gap-4 group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 lg:bg-transparent lg:p-0 lg:shadow-none lg:border-none">
                                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-50 lg:bg-white shadow-sm border border-slate-200 group-hover:border-primary group-hover:bg-primary transition duration-300 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-white">
                                            <item.icon size={24} className="lg:w-[28px] lg:h-[28px]" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. A Experiência Física (Card Flutuante) */}
            <section className="py-0 bg-white">
                <div className="container mx-auto px-4 -mt-10 lg:-mt-16 relative z-10 pb-12 lg:pb-20">
                    <div className="bg-primary rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[auto] lg:min-h-[500px]">
                        {/* Map/Image Side */}
                        <div className="w-full md:w-1/2 relative h-[250px] lg:h-auto overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1974&auto=format&fit=crop"
                                alt="Showroom DL Automóveis"
                                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition duration-500"></div>

                            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 bg-gradient-to-t from-black/90 to-transparent">
                                <div className="flex items-center gap-2 text-white">
                                    <MapPin className="text-accent" size={20} />
                                    <span className="font-bold tracking-wide text-sm lg:text-base">Nova Rússia, Ponta Grossa</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Side */}
                        <div className="w-full md:w-1/2 p-8 lg:p-16 flex flex-col justify-center text-white bg-primary">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Agende sua visita VIP.</h2>
                            <p className="text-blue-100 mb-8 lg:mb-12 text-base lg:text-lg font-light leading-relaxed">
                                Você merece um atendimento exclusivo. O café está quente e o carro está pronto esperando por você.
                            </p>

                            <div className="space-y-6 lg:space-y-8 mb-8 lg:mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <MapPin className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base lg:text-lg">Endereço</h4>
                                        <p className="text-blue-200 text-sm lg:text-base">Av. João Manoel dos Santos Ribas, 811</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <Calendar className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base lg:text-lg">Horários</h4>
                                        <p className="text-blue-200 text-sm lg:text-base">Seg-Sex: 08:30 - 18:30 | Sab: 08:30 - 13:00</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/5542999260016"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-3 bg-white text-primary font-bold px-8 py-4 lg:py-5 rounded-lg hover:bg-slate-50 transition duration-300 w-full sm:w-auto text-center transform hover:-translate-y-1 shadow-lg"
                            >
                                <Phone size={20} />
                                Agendar Visita
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
