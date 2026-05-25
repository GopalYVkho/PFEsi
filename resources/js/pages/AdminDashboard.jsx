import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiFetch } from '../lib/http.js';

const tabs = [
    { key: 'consultations', label: 'Paid Consulting Forms' },
    { key: 'contacts', label: 'Contact Forms' },
];

const emptyConsultation = {
    name: '',
    email: '',
    phone: '',
    talking_about: '',
    preferred_date: '',
    time_slot: '',
    language: '',
    service_plan: '',
    amount: '',
    payment_status: '',
    status: '',
};

const emptyContact = {
    name: '',
    subject: '',
    phone: '',
    email: '',
    message: '',
};

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('consultations');
    const [contacts, setContacts] = useState([]);
    const [consultations, setConsultations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editing, setEditing] = useState(null);
    const [status, setStatus] = useState('');

    const loadData = async () => {
        setIsLoading(true);
        try {
            const [contactData, consultationData] = await Promise.all([
                apiFetch('/api/admin/contact-submissions'),
                apiFetch('/api/admin/consultation-submissions'),
            ]);
            setContacts(contactData.submissions ?? []);
            setConsultations(consultationData.submissions ?? []);
        } catch {
            navigate('/admin/login');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const logout = async () => {
        await apiFetch('/api/admin/logout', { method: 'POST', body: JSON.stringify({}) });
        navigate('/admin/login');
    };

    const startEdit = (type, row) => {
        setStatus('');
        setEditing({
            type,
            id: row.id,
            form: type === 'consultations'
                ? { ...emptyConsultation, ...row }
                : { ...emptyContact, ...row },
        });
    };

    const updateEditField = (event) => {
        setEditing((current) => ({
            ...current,
            form: {
                ...current.form,
                [event.target.name]: event.target.value,
            },
        }));
    };

    const saveEdit = async (event) => {
        event.preventDefault();

        const endpoint = editing.type === 'consultations'
            ? `/api/admin/consultation-submissions/${editing.id}`
            : `/api/admin/contact-submissions/${editing.id}`;

        try {
            await apiFetch(endpoint, {
                method: 'PUT',
                body: JSON.stringify(editing.form),
            });
            setEditing(null);
            setStatus('Updated successfully.');
            await loadData();
        } catch (error) {
            setStatus(error.message ?? 'Unable to update.');
        }
    };

    const deleteRow = async (type, id) => {
        const confirmed = window.confirm('Delete this data?');
        if (!confirmed) return;

        const endpoint = type === 'consultations'
            ? `/api/admin/consultation-submissions/${id}`
            : `/api/admin/contact-submissions/${id}`;

        await apiFetch(endpoint, { method: 'DELETE', body: JSON.stringify({}) });
        setStatus('Deleted successfully.');
        await loadData();
    };

    const rows = activeTab === 'consultations' ? consultations : contacts;

    return (
        <section className="bg-[#f7fbff] px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-sm font-black uppercase text-orange-500">Admin Dashboard</p>
                        <h1 className="mt-2 text-3xl font-black">Form Submissions</h1>
                    </div>
                    <button onClick={logout} className="rounded-lg bg-slate-950 px-5 py-3 text-sm font-black text-white">
                        Logout
                    </button>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => {
                                setActiveTab(tab.key);
                                setEditing(null);
                                setStatus('');
                            }}
                            className={`rounded-lg px-5 py-3 text-sm font-black ${activeTab === tab.key ? 'bg-[#087f86] text-white' : 'bg-white text-slate-700 ring-1 ring-slate-200'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {status && <p className="mt-5 text-sm font-black text-[#087f86]">{status}</p>}

                {editing && (
                    <form onSubmit={saveEdit} className="mt-8 rounded-2xl bg-white p-6 shadow-xl shadow-slate-200">
                        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                            <h2 className="text-xl font-black">
                                Edit {editing.type === 'consultations' ? 'Paid Consulting Form' : 'Contact Form'}
                            </h2>
                            <button type="button" onClick={() => setEditing(null)} className="text-sm font-black text-slate-500">
                                Cancel
                            </button>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {Object.keys(editing.type === 'consultations' ? emptyConsultation : emptyContact).map((field) => (
                                <div key={field} className={field === 'message' ? 'md:col-span-2' : ''}>
                                    <label className="mb-2 block text-sm font-bold capitalize">
                                        {field.replaceAll('_', ' ')}
                                    </label>
                                    {field === 'message' ? (
                                        <textarea
                                            name={field}
                                            value={editing.form[field] ?? ''}
                                            onChange={updateEditField}
                                            className="min-h-28 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                        />
                                    ) : (
                                        <input
                                            type={field === 'preferred_date' ? 'date' : 'text'}
                                            name={field}
                                            value={editing.form[field] ?? ''}
                                            onChange={updateEditField}
                                            className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                            required={field !== 'message'}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-sm font-black text-white">
                            Save Changes
                        </button>
                    </form>
                )}

                <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200">
                    {isLoading ? (
                        <p className="p-6 text-sm font-bold text-slate-600">Loading...</p>
                    ) : rows.length === 0 ? (
                        <div className="p-8">
                            <p className="text-sm font-bold text-slate-600">No submissions yet.</p>
                            <Link to={activeTab === 'consultations' ? '/paid-consulting' : '/contact'} className="mt-4 inline-flex text-sm font-black text-blue-600">
                                Go to form
                            </Link>
                        </div>
                    ) : activeTab === 'consultations' ? (
                        <ConsultationTable rows={consultations} onEdit={startEdit} onDelete={deleteRow} />
                    ) : (
                        <ContactTable rows={contacts} onEdit={startEdit} onDelete={deleteRow} />
                    )}
                </div>
            </div>
        </section>
    );
}

function ConsultationTable({ rows, onEdit, onDelete }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[1400px] text-left text-sm">
                <thead className="bg-slate-950 text-white">
                    <tr>
                        {['Name', 'Email', 'Phone', 'Talking About', 'Date', 'Time Slot', 'Language', 'Service', 'Amount', 'Payment', 'Status', 'Actions'].map((heading) => (
                            <th key={heading} className="px-5 py-4">{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {rows.map((row) => (
                        <tr key={row.id}>
                            <td className="px-5 py-4 font-bold">{row.name}</td>
                            <td className="px-5 py-4">{row.email}</td>
                            <td className="px-5 py-4">{row.phone}</td>
                            <td className="px-5 py-4">{row.talking_about}</td>
                            <td className="px-5 py-4">{row.preferred_date}</td>
                            <td className="px-5 py-4">{row.time_slot}</td>
                            <td className="px-5 py-4">{row.language}</td>
                            <td className="px-5 py-4">{row.service_plan || '-'}</td>
                            <td className="px-5 py-4">{row.amount ? `₹${row.amount}` : '-'}</td>
                            <td className="px-5 py-4">{row.payment_status || '-'}</td>
                            <td className="px-5 py-4">{row.status}</td>
                            <td className="px-5 py-4">
                                <ActionButtons onEdit={() => onEdit('consultations', row)} onDelete={() => onDelete('consultations', row.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ContactTable({ rows, onEdit, onDelete }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[950px] text-left text-sm">
                <thead className="bg-slate-950 text-white">
                    <tr>
                        {['Name', 'Subject', 'Phone', 'Email', 'Message', 'Date', 'Actions'].map((heading) => (
                            <th key={heading} className="px-5 py-4">{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {rows.map((row) => (
                        <tr key={row.id}>
                            <td className="px-5 py-4 font-bold">{row.name}</td>
                            <td className="px-5 py-4">{row.subject}</td>
                            <td className="px-5 py-4">{row.phone}</td>
                            <td className="px-5 py-4">{row.email}</td>
                            <td className="max-w-xs px-5 py-4 text-slate-600">{row.message || '-'}</td>
                            <td className="px-5 py-4 text-slate-500">{new Date(row.created_at).toLocaleString()}</td>
                            <td className="px-5 py-4">
                                <ActionButtons onEdit={() => onEdit('contacts', row)} onDelete={() => onDelete('contacts', row.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ActionButtons({ onEdit, onDelete }) {
    return (
        <div className="flex gap-2">
            <button onClick={onEdit} className="rounded-md bg-blue-50 px-3 py-2 text-xs font-black text-blue-700">
                Edit
            </button>
            <button onClick={onDelete} className="rounded-md bg-red-50 px-3 py-2 text-xs font-black text-red-700">
                Delete
            </button>
        </div>
    );
}
