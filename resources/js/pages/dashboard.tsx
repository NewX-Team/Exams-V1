import { usePage } from '@inertiajs/react';
import type { User } from '@/types';
import AdminDashboard from './dashboard/admin';
import GuruDashboard from './dashboard/guru';
import MuridDashboard from './dashboard/murid';

export default function Dashboard() {
    const { auth } = usePage<{ auth?: { user?: User | null } }>().props;
    const role = auth?.user?.role;

    if (role === 'admin') {
        return <AdminDashboard />;
    }

    if (role === 'guru') {
        return <GuruDashboard />;
    }

    return <MuridDashboard />;
}
