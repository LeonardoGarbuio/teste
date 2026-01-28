// Credenciais de admin local para desenvolvimento/teste
// Em produção, use apenas Supabase Auth
export const LOCAL_ADMIN = {
    email: 'admin@dlautomoveis.com',
    password: 'dl2024admin'
};

// Verifica se o usuário está logado (localmente ou via Supabase)
export function isLocallyAuthenticated(): boolean {
    return localStorage.getItem('dl_admin_logged') === 'true';
}

export function localLogin(email: string, password: string): boolean {
    if (email === LOCAL_ADMIN.email && password === LOCAL_ADMIN.password) {
        localStorage.setItem('dl_admin_logged', 'true');
        return true;
    }
    return false;
}

export function localLogout(): void {
    localStorage.removeItem('dl_admin_logged');
}
