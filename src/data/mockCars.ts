export interface Car {
    id: string;
    title: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    km: number;
    fuel: string;
    transmission: string;
    color: string;
    images: string[];
    is_sold: boolean;
    featured: boolean;
    description?: string;
}

export const mockCars: Car[] = [
    {
        id: '1',
        title: 'Land Rover Range Rover Vogue 4.4 SDV8',
        brand: 'Land Rover',
        model: 'Range Rover',
        year: 2013,
        price: 219900,
        km: 115000,
        fuel: 'Diesel',
        transmission: 'Automático',
        color: 'Preto',
        images: [
            'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=800&auto=format&fit=crop', // Range Rover lookalike
        ],
        is_sold: false,
        featured: true,
    },
    {
        id: '2',
        title: 'Volkswagen Parati 1.6 G4',
        brand: 'Volkswagen',
        model: 'Parati',
        year: 2011,
        price: 32900,
        km: 140000,
        fuel: 'Flex',
        transmission: 'Manual',
        color: 'Prata',
        images: [
            'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop', // Station Wagon lookalike
        ],
        is_sold: false,
        featured: true,
    },
    {
        id: '3',
        title: 'Chevrolet Cruze LT 1.8',
        brand: 'Chevrolet',
        model: 'Cruze',
        year: 2012,
        price: 52900,
        km: 98000,
        fuel: 'Flex',
        transmission: 'Automático',
        color: 'Branco',
        images: [
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop', // Sedan
        ],
        is_sold: true,
        featured: true,
    },
    {
        id: '4',
        title: 'Volkswagen Fusca 1300',
        brand: 'Volkswagen',
        model: 'Fusca',
        year: 1974,
        price: 29900,
        km: 50000,
        fuel: 'Gasolina',
        transmission: 'Manual',
        color: 'Azul',
        images: [
            'https://images.unsplash.com/photo-1533038592350-f1bd06497d39?q=80&w=800&auto=format&fit=crop', // Beetle
        ],
        is_sold: false,
        featured: false,
    },
    {
        id: '5',
        title: 'Renault Kwid Zen 1.0',
        brand: 'Renault',
        model: 'Kwid',
        year: 2022,
        price: 44900,
        km: 15000,
        fuel: 'Flex',
        transmission: 'Manual',
        color: 'Branco',
        images: [
            'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?q=80&w=800&auto=format&fit=crop', // Compact car
        ],
        is_sold: false,
        featured: false,
    },
    {
        id: '6',
        title: 'Honda Civic EXL 2.0',
        brand: 'Honda',
        model: 'Civic',
        year: 2020,
        price: 129900,
        km: 45000,
        fuel: 'Flex',
        transmission: 'Automático',
        color: 'Cinza',
        images: [
            'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop',
        ],
        is_sold: false,
        featured: true,
        description: 'Honda Civic EXL completo com teto solar, bancos em couro, multimídia com Apple CarPlay e Android Auto. Único dono, todas as revisões na concessionária.',
    },
    {
        id: '7',
        title: 'Toyota Corolla XEi 2.0',
        brand: 'Toyota',
        model: 'Corolla',
        year: 2019,
        price: 109900,
        km: 62000,
        fuel: 'Flex',
        transmission: 'Automático',
        color: 'Branco Pérola',
        images: [
            'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?q=80&w=800&auto=format&fit=crop',
        ],
        is_sold: false,
        featured: true,
        description: 'Corolla XEi com câmera de ré, sensor de estacionamento, ar digital e direção elétrica. Carro de procedência, nunca batido.',
    },
    {
        id: '8',
        title: 'Jeep Compass Limited 2.0 Diesel',
        brand: 'Jeep',
        model: 'Compass',
        year: 2021,
        price: 169900,
        km: 38000,
        fuel: 'Diesel',
        transmission: 'Automático',
        color: 'Verde',
        images: [
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=800&auto=format&fit=crop',
        ],
        is_sold: false,
        featured: true,
        description: 'Compass Limited Diesel 4x4 com pacote High Tech, teto panorâmico, Park Assist e muito mais. Ideal para quem busca conforto e robustez.',
    },
    {
        id: '9',
        title: 'Fiat Argo Drive 1.0',
        brand: 'Fiat',
        model: 'Argo',
        year: 2023,
        price: 69900,
        km: 12000,
        fuel: 'Flex',
        transmission: 'Manual',
        color: 'Vermelho',
        images: [
            'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop',
        ],
        is_sold: false,
        featured: false,
        description: 'Argo Drive seminovo com ar condicionado, direção elétrica, vidros e travas elétricas. Econômico e perfeito para o dia a dia.',
    },
    {
        id: '10',
        title: 'Hyundai HB20S Comfort Plus 1.0',
        brand: 'Hyundai',
        model: 'HB20S',
        year: 2022,
        price: 74900,
        km: 28000,
        fuel: 'Flex',
        transmission: 'Manual',
        color: 'Prata',
        images: [
            'https://images.unsplash.com/photo-1580273916550-e323be2feb16?q=80&w=800&auto=format&fit=crop',
        ],
        is_sold: false,
        featured: false,
    },
    {
        id: '11',
        title: 'BMW 320i Sport GP 2.0 Turbo',
        brand: 'BMW',
        model: '320i',
        year: 2018,
        price: 159900,
        km: 55000,
        fuel: 'Gasolina',
        transmission: 'Automático',
        color: 'Preto',
        images: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
        ],
        is_sold: false,
        featured: true,
        description: 'BMW 320i Sport com interior caramelo, teto solar, acabamento M Sport e rodas aro 19. Performance e luxo em um só carro.',
    },
    {
        id: '12',
        title: 'Chevrolet Onix LTZ 1.0 Turbo',
        brand: 'Chevrolet',
        model: 'Onix',
        year: 2022,
        price: 79900,
        km: 22000,
        fuel: 'Flex',
        transmission: 'Automático',
        color: 'Azul',
        images: [
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop',
        ],
        is_sold: true,
        featured: false,
        description: 'Onix LTZ Turbo com MyLink, Wi-Fi nativo, câmera de ré e alerta de colisão. O hatch mais vendido do Brasil.',
    },
];
