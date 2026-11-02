import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../lib/http.js';

export default function AdminLogin() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: 'admin@pfesi.test', password: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        apiFetch('/api/admin/me')
            .then((data) => {
                if (data.authenticated) {
                    navigate('/admin/dashboard', { replace: true });
                }
            })
            .catch(() => {});
    }, [navigate]);

    const submitLogin = async (event) => {
        event.preventDefault();
        setError('');

        try {
            await apiFetch('/api/admin/login', {
                method: 'POST',
                body: JSON.stringify(form),
            });
            navigate('/admin/dashboard');
        } catch (loginError) {
            setError(loginError.message ?? 'Login failed.');
        }
    };

    return (
        <section className="bg-[#f7fbff] px-4 py-20 sm:px-6 lg:px-8">
            <form onSubmit={submitLogin} className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-xl shadow-slate-200">
                <p className="text-sm font-black uppercase text-orange-500">Admin</p>
                <h1 className="mt-3 text-3xl font-black">Login</h1>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                    Login to view contact submissions.
                </p>

                <div className="mt-8 space-y-5">
                    <div>
                        <label className="mb-2 block text-sm font-bold">Email</label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(event) => setForm({ ...form, email: event.target.value })}
                            className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-[#0fd3c8] focus:ring-2 focus:ring-cyan-100"
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-bold">Password</label>
                        <input
                            type="password"
                            value={form.password}
                            onChange={(event) => setForm({ ...form, password: event.target.value })}
                            className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-[#0fd3c8] focus:ring-2 focus:ring-cyan-100"
                            required
                        />
                    </div>
                </div>

                {error && <p className="mt-4 text-sm font-bold text-red-600">{error}</p>}

                <button className="mt-7 h-11 w-full rounded-lg bg-[#062b33] text-sm font-black text-white hover:bg-[#0b3c46]">
                    Login
                </button>
            </form>
        </section>
    );
}
