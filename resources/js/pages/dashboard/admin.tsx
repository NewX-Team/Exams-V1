import { Head, usePage } from '@inertiajs/react';
import { dashboard } from '@/routes';
import type { User } from '@/types';

export default function AdminDashboard() {
    const { auth } = usePage<{ auth?: { user?: User | null } }>().props;

    return (
        <>
            <Head title="Dashboard Admin" />

            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                {/* Header Peran Admin */}
                <div className="flex flex-col gap-2 rounded-xl border border-emerald-300 bg-emerald-50/60 p-6 dark:border-emerald-900 dark:bg-emerald-950/30">
                    <div className="flex items-center gap-2">
                        <span className="rounded-full border border-emerald-300 bg-emerald-100 px-3 py-0.5 font-mono text-xs font-bold text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                            PERAN: ADMINISTRATOR
                        </span>
                        <span className="text-xs text-muted-foreground">
                            {auth?.user?.email}
                        </span>
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        Halaman Admin
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Selamat datang,{' '}
                        <span className="font-semibold text-foreground">
                            {auth?.user?.name}
                        </span>
                        .
                    </p>
                </div>

                {/* Konten Utama Polosan */}
                <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-border bg-card p-12 text-center">
                    <div className="max-w-md space-y-2">
                        <p className="text-lg font-semibold text-foreground">
                            Ini halaman admin
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Halaman ini khusus untuk administrator mengelola
                            master data pengguna, sesi ruangan, dan sistem
                            keseluruhan.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

AdminDashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard Admin',
            href: dashboard(),
        },
    ],
};
