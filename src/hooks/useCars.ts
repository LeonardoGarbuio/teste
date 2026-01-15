import { useEffect, useState } from 'react';
import { carService } from '../services/carService';
import type { Car } from '../data/mockCars';

export function useCars() {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCars = async () => {
        try {
            setLoading(true);
            const data = await carService.getAll(); // Admin vê tudo
            setCars(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    return { cars, loading, error, refresh: fetchCars };
}

export function usePublicInventory() {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        carService.getPublicInventory()
            .then(setCars)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return { cars, loading };
}

export function useFeaturedCars() {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        carService.getFeatured()
            .then(setCars)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return { cars, loading };
}
