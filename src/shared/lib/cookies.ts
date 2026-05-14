// Cookie utility functions for token management

export const getCookie = (name: string): string | null => {
    const match = document.cookie.match(
        new RegExp('(?:^|;\\s*)' + name + '=([^;]*)')
    );
    return match ? decodeURIComponent(match[1]) : null;
};

export const setCookie = (name: string, value: string, days: number = 7): void => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/; SameSite=Lax';
};

export const deleteCookie = (name: string): void => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
};

export const getAccessToken = (): string | null => getCookie('access_token');
export const getRefreshToken = (): string | null => getCookie('refresh_token');

export const setAccessToken = (token: string): void => setCookie('access_token', token, 1);
export const setRefreshToken = (token: string): void => setCookie('refresh_token', token, 7);

export const clearAuthCookies = (): void => {
    deleteCookie('access_token');
    deleteCookie('refresh_token');
};
