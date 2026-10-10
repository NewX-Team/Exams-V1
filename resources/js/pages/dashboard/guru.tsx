import { Head, usePage } from '@inertiajs/react';
import { dashboard } from '@/routes';
import type { User } from '@/types';

export default function GuruDashboard() {
    const { auth } = usePage<{ auth?: { user?: User | null } }>().props;

    return (
        <>
            <Head title="Dashboard Guru" />

            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                {/* Header Peran Guru */}
                <div className="flex flex-col gap-2 rounded-xl border border-amber-300 bg-amber-50/60 p-6 dark:border-amber-900 dark:bg-amber-950/30">
                    <div className="flex items-center gap-2">
                        <span className="rounded-full border border-amber-300 bg-amber-100 px-3 py-0.5 font-mono text-xs font-bold text-amber-900 dark:border-amber-800 dark:bg-amber-900/60 dark:text-amber-300">
                            PERAN: GURU
                        </span>
                        <span className="text-xs text-muted-foreground">
                            {auth?.user?.email}
                        </span>
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        Halaman Guru
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
                            Ini halaman guru
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Halaman ini khusus untuk pendidik menyusun bank
                            soal, mengelola jadwal, dan memeriksa hasil ujian.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

GuruDashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard Guru',
            href: dashboard(),
        },
    ],
};
