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
    }
];
