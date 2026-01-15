import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { optimizeImage } from '../../utils/imageOptimizer';
import { carService } from '../../services/carService';
import { Upload, X, Save } from 'lucide-react';

export default function CarForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = !!id;

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        brand: '',
        model: '',
        year: new Date().getFullYear(),
        price: 0,
        km: 0,
        fuel: 'Flex',
        transmission: 'Automático',
        color: '',
        description: '',
        images: [] as string[],
        featured: false,
        is_sold: false,
    });

    // Load data if editing
    useEffect(() => {
        if (isEditing && id) {
            setLoading(true);
            carService.getById(id)
                .then(car => {
                    // @ts-ignore
                    setFormData(car);
                })
                .catch(console.error)
                .finally(() => setLoading(false));
        }
    }, [id, isEditing]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        // @ts-ignore
        const checked = e.target.checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;

        setLoading(true);
        const files = Array.from(e.target.files);

        try {
            for (const file of files) {
                // 1. Otimiza
                const optimizedBlob = await optimizeImage(file);

                // 2. Upload para o Supabase
                const publicUrl = await carService.uploadImage(optimizedBlob);

                // 3. Atualiza estado
                setFormData(prev => ({ ...prev, images: [...prev.images, publicUrl] }));
            }
        } catch (error) {
            console.error('Erro no upload', error);
            alert('Erro ao fazer upload da imagem.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isEditing && id) {
                await carService.update(id, formData);
            } else {
                await carService.create(formData);
            }
            navigate('/admin');
        } catch (error) {
            console.error(error);
            alert('Erro ao salvar veículo');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-slate-800">
                    {isEditing ? 'Editar Veículo' : 'Novo Veículo'}
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-8">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Título do Anúncio</label>
                        <input
                            type="text"
                            name="title"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary"
                            placeholder="Ex: Honda Civic G10 Touring 1.5 Turbo"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Marca</label>
                        <input
                            type="text"
                            name="brand"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary"
                            value={formData.brand}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Modelo</label>
                        <input
                            type="text"
                            name="model"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary"
                            value={formData.model}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Ano</label>
                        <input
                            type="number"
                            name="year"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary"
                            value={formData.year}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Preço (R$)</label>
                        <input
                            type="number"
                            name="price"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Quilometragem</label>
                        <input
                            type="number"
                            name="km"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary"
                            value={formData.km}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Cor</label>
                        <input
                            type="text"
                            name="color"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary"
                            value={formData.color}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Câmbio</label>
                        <select
                            name="transmission"
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary"
                            value={formData.transmission}
                            onChange={handleChange}
                        >
                            <option>Automático</option>
                            <option>Manual</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Combustível</label>
                        <select
                            name="fuel"
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary"
                            value={formData.fuel}
                            onChange={handleChange}
                        >
                            <option>Flex</option>
                            <option>Gasolina</option>
                            <option>Diesel</option>
                            <option>Híbrido</option>
                            <option>Elétrico</option>
                        </select>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Descrição / Opcionais</label>
                    <textarea
                        name="description"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                {/* Images */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-4">Fotos do Veículo</label>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        {formData.images.map((url, index) => (
                            <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                                <img src={url} alt="" className="w-full h-full object-cover" />
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }))}
                                    className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}

                        <label className="border-2 border-dashed border-slate-300 rounded-lg aspect-square flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-slate-50 transition text-slate-400 hover:text-primary">
                            <Upload size={32} className="mb-2" />
                            <span className="text-sm font-medium">Adicionar Fotos</span>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                        </label>
                    </div>
                    <p className="text-sm text-slate-400">
                        * As imagens serão otimizadas automaticamente para ~100kb antes do envio.
                    </p>
                </div>

                {/* Toggles */}
                <div className="flex gap-8">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="featured"
                            className="w-5 h-5 text-primary rounded focus:ring-primary border-gray-300"
                            checked={formData.featured}
                            onChange={handleChange}
                        />
                        <span className="font-medium text-slate-700">Destaque na Home</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="is_sold"
                            className="w-5 h-5 text-red-600 rounded focus:ring-red-600 border-gray-300"
                            checked={formData.is_sold}
                            onChange={handleChange}
                        />
                        <span className="font-medium text-slate-700">Marcar como Vendido</span>
                    </label>
                </div>

                {/* Submit */}
                <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => navigate('/admin')}
                        className="px-6 py-3 rounded-lg font-bold text-slate-600 hover:bg-slate-100 transition"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-3 rounded-lg font-bold bg-primary hover:bg-blue-900 text-white transition flex items-center gap-2"
                    >
                        <Save size={20} />
                        {loading ? 'Salvando...' : 'Salvar Veículo'}
                    </button>
                </div>
            </form>
        </div>
    );
}
