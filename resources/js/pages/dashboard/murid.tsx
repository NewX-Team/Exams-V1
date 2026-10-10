import { Head, usePage } from '@inertiajs/react';
import { dashboard } from '@/routes';
import type { User } from '@/types';

export default function MuridDashboard() {
    const { auth } = usePage<{ auth?: { user?: User | null } }>().props;

    return (
        <>
            <Head title="Dashboard Murid" />

            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                {/* Header Peran Murid */}
                <div className="flex flex-col gap-2 rounded-xl border border-sky-200 bg-sky-50/60 p-6 dark:border-sky-900 dark:bg-sky-950/30">
                    <div className="flex items-center gap-2">
                        <span className="rounded-full border border-sky-300 bg-sky-100 px-3 py-0.5 font-mono text-xs font-bold text-sky-800 dark:border-sky-800 dark:bg-sky-900/60 dark:text-sky-300">
                            PERAN: MURID
                        </span>
                        <span className="text-xs text-muted-foreground">
                            {auth?.user?.email}
                        </span>
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        Halaman Murid
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
                            Ini halaman murid
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Halaman ini khusus untuk peserta ujian / siswa
                            melihat jadwal dan mengerjakan ujian.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

MuridDashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard Murid',
            href: dashboard(),
        },
    ],
};
