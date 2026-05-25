export function csrfToken() {
    return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? '';
}

export async function apiFetch(path, options = {}) {
    const response = await fetch(path, {
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken(),
            ...(options.headers ?? {}),
        },
        ...options,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw data;
    }

    return data;
}
