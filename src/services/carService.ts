import { supabase } from '../lib/supabase';
import { mockCars, type Car } from '../data/mockCars';

// Tipo para criação/edição (sem ID)
export type CarInput = Omit<Car, 'id'>;

// Flag para usar dados mock (para desenvolvimento)
const USE_MOCK_DATA = true;

export const carService = {
    // Listar todos
    async getAll() {
        if (USE_MOCK_DATA) {
            return mockCars;
        }
        const { data, error } = await supabase
            .from('cars')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as Car[];
    },

    // Busca para vitrine (público) - Pode adicionar filtros aqui
    async getPublicInventory() {
        if (USE_MOCK_DATA) {
            return mockCars.filter(car => !car.is_sold);
        }
        const { data, error } = await supabase
            .from('cars')
            .select('*')
            .eq('is_sold', false) // Opcional: mostrar só disponiveis na vitrine
            .order('featured', { ascending: false }) // Destaques primeiro
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as Car[];
    },

    // Pegar Destaques
    async getFeatured() {
        if (USE_MOCK_DATA) {
            return mockCars.filter(car => car.featured).slice(0, 4);
        }
        const { data, error } = await supabase
            .from('cars')
            .select('*')
            .eq('featured', true)
            .limit(4);

        if (error) throw error;
        return data as Car[];
    },

    // Pegar um por ID
    async getById(id: string) {
        if (USE_MOCK_DATA) {
            const car = mockCars.find(c => c.id === id);
            if (!car) throw new Error('Carro não encontrado');
            return car;
        }
        const { data, error } = await supabase
            .from('cars')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data as Car;
    },

    // Criar
    async create(car: CarInput) {
        const { data, error } = await supabase
            .from('cars')
            .insert([car])
            .select()
            .single();

        if (error) throw error;
        return data;
    },

    // Atualizar
    async update(id: string, updates: Partial<CarInput>) {
        const { data, error } = await supabase
            .from('cars')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    },

    // Deletar
    async delete(id: string) {
        const { error } = await supabase
            .from('cars')
            .delete()
            .eq('id', id);

        if (error) throw error;
    },

    // Upload Imagem
    async uploadImage(file: Blob): Promise<string> {
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.webp`;

        const { error } = await supabase.storage
            .from('showroom-images')
            .upload(fileName, file, {
                cacheControl: '3600',
                upsert: false
            });

        if (error) throw error;

        const { data: { publicUrl } } = supabase.storage
            .from('showroom-images')
            .getPublicUrl(fileName);

        return publicUrl;
    }
};
