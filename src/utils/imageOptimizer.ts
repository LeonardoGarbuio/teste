/**
 * Redimensiona e comprime uma imagem para WebP no lado do cliente.
 * Alvo: ~100kb, Max Width 1920px.
 */
export async function optimizeImage(file: File): Promise<Blob> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target?.result as string;

            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Define dimensões máximas (Full HD)
                const maxWidth = 1920;
                let width = img.width;
                let height = img.height;

                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }

                canvas.width = width;
                canvas.height = height;

                if (ctx) {
                    ctx.drawImage(img, 0, 0, width, height);

                    // Converte para WebP com qualidade 0.8 (bom equilíbrio para atingir ~100kb)
                    canvas.toBlob(
                        (blob) => {
                            if (blob) {
                                resolve(blob);
                            } else {
                                reject(new Error('Falha na compressão da imagem'));
                            }
                        },
                        'image/webp',
                        0.8
                    );
                } else {
                    reject(new Error('Contexto do Canvas não encontrado'));
                }
            };

            img.onerror = (err) => reject(err);
        };

        reader.onerror = (err) => reject(err);
    });
}
