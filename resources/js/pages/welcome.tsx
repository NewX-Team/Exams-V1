import { dashboard, login, register } from '@/routes';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import type { User } from '@/types';

export default function Welcome() {
    const { auth } = usePage<{ auth?: { user?: User | null } }>().props;
    const [selectedAnswer, setSelectedAnswer] = useState<string>('B');
    const [isDoubtful, setIsDoubtful] = useState<boolean>(false);

    return (
        <>
            <Head title="Portal Ujian Online Terstandar" />
            <div className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground selection:text-background">
                {/* Navigasi Utama */}
                <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-sm">
                    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                        <Link
                            href="/"
                            className="flex items-center gap-3 text-sm font-semibold tracking-tight"
                        >
                            <span className="flex h-7 w-7 items-center justify-center rounded bg-foreground font-mono text-xs font-bold text-background">
                                EX
                            </span>
                            <div className="flex flex-col leading-none">
                                <span className="font-bold tracking-tight">PORTAL UJIAN</span>
                                <span className="font-mono text-[10px] text-muted-foreground">Sistem Asesmen Digital</span>
                            </div>
                        </Link>

                        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
                            <a href="#keandalan" className="transition-colors hover:text-foreground">
                                Keandalan Sistem
                            </a>
                            <a href="#simulasi" className="transition-colors hover:text-foreground">
                                Tampilan Ujian
                            </a>
                            <a href="#peran" className="transition-colors hover:text-foreground">
                                Panduan Peran
                            </a>
                            <a href="#alur" className="transition-colors hover:text-foreground">
                                Alur Pelaksanaan
                            </a>
                            <a href="#faq" className="transition-colors hover:text-foreground">
                                Bantuan
                            </a>
                        </nav>

                        <div className="flex items-center gap-3">
                            {auth?.user ? (
                                <Button asChild size="sm">
                                    <Link href={dashboard()}>Menuju Dashboard</Link>
                                </Button>
                            ) : (
                                <>
                                    <Button asChild variant="ghost" size="sm">
                                        <Link href={login()}>Masuk Akun</Link>
                                    </Button>
                                    <Button asChild size="sm">
                                        <Link href={register()}>Daftar Peserta</Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </header>

                <main>
                    {/* Hero Section */}
                    <section className="border-b border-border/70 py-16 md:py-24">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                                    <span>STANDAR ASESMEN DIGITAL INDEPENDEN</span>
                                </div>

                                <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl sm:leading-[1.15]">
                                    Ujian online yang tenang, tertib, dan bebas kendala teknis.
                                </h1>

                                <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                                    Dirancang dengan antarmuka yang bersih untuk semua kalangan peserta.
                                    Jawaban otomatis tersimpan setiap detik, hemat kuota internet, dan dapat
                                    diakses lancar dari ponsel sederhana maupun komputer sekolah.
                                </p>

                                <div className="mt-8 flex flex-wrap items-center gap-3">
                                    {auth?.user ? (
                                        <Button asChild size="lg" className="px-6">
                                            <Link href={dashboard()}>Buka Ruang Ujian Saya</Link>
                                        </Button>
                                    ) : (
                                        <>
                                            <Button asChild size="lg" className="px-6">
                                                <Link href={login()}>Mulai Akses Ujian</Link>
                                            </Button>
                                            <Button asChild variant="outline" size="lg" className="px-6">
                                                <a href="#simulasi">Lihat Contoh Lembar Soal</a>
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Tiga Pilar Jaminan Teknis */}
                            <div className="mt-16 grid grid-cols-1 gap-6 border-t border-border/80 pt-10 sm:grid-cols-3">
                                <div className="space-y-1">
                                    <p className="font-mono text-xs font-semibold text-muted-foreground uppercase">
                                        01 / Ketahanan Jaringan
                                    </p>
                                    <h3 className="text-base font-semibold text-foreground">
                                        Penyimpanan Lokal & Server
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Jika koneksi internet tiba-tiba terputus, jawaban terakhir tetap aman tersimpan di perangkat Anda.
                                    </p>
                                </div>

                                <div className="space-y-1">
                                    <p className="font-mono text-xs font-semibold text-muted-foreground uppercase">
                                        02 / Jam Terpusat
                                    </p>
                                    <h3 className="text-base font-semibold text-foreground">
                                        Pewaktuan Adil & Akurat
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Waktu dihitung langsung dari server pusat, menghindari perbedaan waktu pada jam internal ponsel peserta.
                                    </p>
                                </div>

                                <div className="space-y-1">
                                    <p className="font-mono text-xs font-semibold text-muted-foreground uppercase">
                                        03 / Ringan & Hemat Data
                                    </p>
                                    <h3 className="text-base font-semibold text-foreground">
                                        Tanpa Instalasi Tambahan
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Berjalan langsung di browser bawaan gawai tanpa membutuhkan aplikasi berat atau spesifikasi tinggi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Simulasi Nyata Tampilan Ujian (Interactive Preview) */}
                    <section id="simulasi" className="border-b border-border/70 bg-muted/20 py-20">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="max-w-2xl">
                                <p className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Antarmuka Pengguna
                                </p>
                                <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                    Simpel, fokus, dan nyaman untuk mata.
                                </h2>
                                <p className="mt-3 text-base text-muted-foreground">
                                    Berikut gambaran lembar pengerjaan yang dilihat peserta saat ujian berlangsung.
                                    Tidak ada iklan, tidak ada tombol yang membingungkan, dan navigasi soal sangat jelas.
                                </p>
                            </div>

                            {/* Card Simulasi Lembar Ujian */}
                            <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                                {/* Header Simulasi */}
                                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-muted/40 px-6 py-4">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs font-semibold text-muted-foreground">
                                                SESI #2026-A
                                            </span>
                                            <span className="text-xs text-muted-foreground">|</span>
                                            <span className="text-sm font-semibold text-foreground">
                                                Penilaian Akhir — Matematika Terapan
                                            </span>
                                        </div>
                                        <p className="mt-0.5 text-xs text-muted-foreground">
                                            Peserta: Ahmad Fauzi (ID: 2026-0812) · Ruang 04
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2 rounded border border-border bg-background px-3 py-1 font-mono text-xs">
                                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                            <span>Koneksi: Normal</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded border border-border bg-background px-3 py-1 font-mono text-sm font-bold text-foreground">
                                            <span>Sisa Waktu: 41:25</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3">
                                    {/* Area Pertanyaan */}
                                    <div className="p-6 lg:col-span-2 lg:border-r lg:border-border">
                                        <div className="flex items-center justify-between border-b border-border pb-3">
                                            <span className="font-mono text-xs font-semibold text-foreground">
                                                SOAL NO. 14 DARI 40
                                            </span>
                                            <span className="font-mono text-xs text-muted-foreground">
                                                Bobot Nilai: 2.50
                                            </span>
                                        </div>

                                        <div className="py-6">
                                            <p className="text-base leading-relaxed text-foreground">
                                                Sebuah tangki penampungan air memiliki kapasitas maksimal 240 liter.
                                                Jika kran pengisian mengalirkan air dengan debit tetap sebesar 8 liter per menit
                                                selama 18 menit penuh, berapakah sisa kapasitas tangki yang belum terisi?
                                            </p>

                                            {/* Opsi Pilihan Jawaban */}
                                            <div className="mt-6 space-y-3">
                                                {[
                                                    { key: 'A', text: '84 liter' },
                                                    { key: 'B', text: '96 liter' },
                                                    { key: 'C', text: '104 liter' },
                                                    { key: 'D', text: '112 liter' },
                                                ].map((option) => {
                                                    const isSelected = selectedAnswer === option.key;
                                                    return (
                                                        <button
                                                            key={option.key}
                                                            type="button"
                                                            onClick={() => setSelectedAnswer(option.key)}
                                                            className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition-all ${
                                                                isSelected
                                                                    ? 'border-foreground bg-foreground/5 font-semibold text-foreground ring-1 ring-foreground/20'
                                                                    : 'border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground'
                                                            }`}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <span
                                                                    className={`flex h-6 w-6 items-center justify-center rounded font-mono text-xs font-bold ${
                                                                        isSelected
                                                                            ? 'bg-foreground text-background'
                                                                            : 'border border-border bg-muted text-muted-foreground'
                                                                    }`}
                                                                >
                                                                    {option.key}
                                                                </span>
                                                                <span>{option.text}</span>
                                                            </div>
                                                            {isSelected && (
                                                                <span className="font-mono text-xs text-foreground">
                                                                    [ Pilihan Anda ]
                                                                </span>
                                                            )}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Aksi Navigasi Bawah */}
                                        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                                            <button
                                                type="button"
                                                className="rounded border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                                            >
                                                &larr; Soal Sebelumnya
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => setIsDoubtful(!isDoubtful)}
                                                className={`rounded border px-4 py-2 font-mono text-xs font-medium transition-colors ${
                                                    isDoubtful
                                                        ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold'
                                                        : 'border-border bg-background text-muted-foreground hover:text-foreground'
                                                }`}
                                            >
                                                {isDoubtful ? '[ Ditandai Ragu-Ragu ]' : 'Tandai Ragu-Ragu'}
                                            </button>

                                            <button
                                                type="button"
                                                className="rounded bg-foreground px-4 py-2 text-xs font-medium text-background hover:bg-foreground/90"
                                            >
                                                Simpan &amp; Selanjutnya &rarr;
                                            </button>
                                        </div>
                                    </div>

                                    {/* Panel Lembar Navigasi Soal */}
                                    <div className="bg-muted/10 p-6">
                                        <p className="font-mono text-xs font-semibold text-foreground uppercase">
                                            Daftar Nomor Soal
                                        </p>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            Klik nomor untuk berpindah langsung ke soal yang dituju.
                                        </p>

                                        {/* Grid 20 Soal Preview */}
                                        <div className="mt-4 grid grid-cols-5 gap-2">
                                            {Array.from({ length: 20 }, (_, idx) => {
                                                const num = idx + 1;
                                                const isCurrent = num === 14;
                                                const isAnswered = num < 14;
                                                const isFlagged = num === 7;

                                                let statusClasses = 'border-border bg-background text-muted-foreground';
                                                if (isCurrent) {
                                                    statusClasses = 'border-foreground bg-foreground text-background font-bold';
                                                } else if (isFlagged) {
                                                    statusClasses = 'border-amber-500 bg-amber-500/20 text-amber-700 dark:text-amber-400 font-medium';
                                                } else if (isAnswered) {
                                                    statusClasses = 'border-emerald-600/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium';
                                                }

                                                return (
                                                    <div
                                                        key={num}
                                                        className={`flex h-9 items-center justify-center rounded border font-mono text-xs transition-colors ${statusClasses}`}
                                                    >
                                                        {num}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Legenda Warna Teks */}
                                        <div className="mt-6 space-y-2 border-t border-border pt-4 text-xs">
                                            <div className="flex items-center gap-2">
                                                <span className="h-3 w-3 rounded border border-emerald-600/40 bg-emerald-500/20" />
                                                <span className="text-muted-foreground">13 Soal Sudah Terjawab</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="h-3 w-3 rounded border border-amber-500 bg-amber-500/20" />
                                                <span className="text-muted-foreground">1 Soal Ditandai Ragu</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="h-3 w-3 rounded border border-border bg-background" />
                                                <span className="text-muted-foreground">6 Soal Belum Dikerjakan</span>
                                            </div>
                                        </div>

                                        <div className="mt-6 rounded border border-border bg-background p-3 text-xs leading-relaxed text-muted-foreground">
                                            <p className="font-semibold text-foreground">Catatan Keamanan Sistem:</p>
                                            <p className="mt-1">
                                                Jawaban Anda disinkronkan secara berkala. Tombol selesai hanya aktif setelah seluruh soal diperiksa.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Tiga Peran Pengguna */}
                    <section id="peran" className="border-b border-border/70 py-20">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="max-w-2xl">
                                <p className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Struktur Pengguna
                                </p>
                                <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                    Satu platform, tiga ruang kerja terpisah.
                                </h2>
                                <p className="mt-3 text-base text-muted-foreground">
                                    Setiap pengguna memiliki akses yang sesuai dengan tanggung jawabnya, memastikan pelaksanaan ujian tetap teratur dan terpercaya.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                                {/* Peran Siswa */}
                                <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-6">
                                    <div>
                                        <span className="font-mono text-xs font-semibold text-muted-foreground uppercase">
                                            PERAN 01
                                        </span>
                                        <h3 className="mt-2 text-lg font-bold text-foreground">
                                            Peserta Ujian
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Untuk siswa, mahasiswa, atau peserta sertifikasi yang membutuhkan kemudahan akses dan ketenangan saat mengerjakan soal.
                                        </p>
                                        <div className="mt-6 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                                            <p className="font-medium text-foreground">&bull; Akses masuk cepat dengan ID &amp; Token</p>
                                            <p className="font-medium text-foreground">&bull; Tampilan jelas dan ukuran huruf yang nyaman</p>
                                            <p className="font-medium text-foreground">&bull; Otomatis menyimpan progres pengerjaan</p>
                                            <p className="font-medium text-foreground">&bull; Riwayat nilai dan ulasan hasil ujian</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 border-t border-border pt-4 font-mono text-[11px] text-muted-foreground">
                                        AKSES: DIBATASI PADA JADWAL AKTIF
                                    </div>
                                </div>

                                {/* Peran Guru */}
                                <div className="flex flex-col justify-between rounded-xl border border-foreground/30 bg-card p-6 shadow-sm">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-mono text-xs font-semibold text-foreground uppercase">
                                                PERAN 02
                                            </span>
                                            <span className="rounded bg-muted px-2 py-0.5 font-mono text-[10px] font-semibold text-foreground">
                                                UTAMA
                                            </span>
                                        </div>
                                        <h3 className="mt-2 text-lg font-bold text-foreground">
                                            Pendidik &amp; Penguji
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Untuk guru dan dosen dalam merancang bank soal, menentukan jadwal ujian, serta memantau perkembangan nilai siswa.
                                        </p>
                                        <div className="mt-6 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                                            <p className="font-medium text-foreground">&bull; Penyusunan bank soal dengan kunci jawaban</p>
                                            <p className="font-medium text-foreground">&bull; Pengaturan durasi, token, dan jadwal ujian</p>
                                            <p className="font-medium text-foreground">&bull; Pengacakan urutan nomor dan pilihan opsi</p>
                                            <p className="font-medium text-foreground">&bull; Rekap nilai otomatis dan ekspor data nilai</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 border-t border-border pt-4 font-mono text-[11px] text-muted-foreground">
                                        AKSES: MANAJEMEN KELAS &amp; BANK SOAL
                                    </div>
                                </div>

                                {/* Peran Administrator */}
                                <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-6">
                                    <div>
                                        <span className="font-mono text-xs font-semibold text-muted-foreground uppercase">
                                            PERAN 03
                                        </span>
                                        <h3 className="mt-2 text-lg font-bold text-foreground">
                                            Administrator Lembaga
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Untuk staf tata usaha, panitia ujian, atau administrator institusi dalam mengatur seluruh infrastruktur akun dan ruangan.
                                        </p>
                                        <div className="mt-6 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                                            <p className="font-medium text-foreground">&bull; Manajemen master data siswa dan pengajar</p>
                                            <p className="font-medium text-foreground">&bull; Penataan sesi ujian dan alokasi ruang</p>
                                            <p className="font-medium text-foreground">&bull; Pengawasan kehadiran peserta secara langsung</p>
                                            <p className="font-medium text-foreground">&bull; Pencadangan data dan log integritas sesi</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 border-t border-border pt-4 font-mono text-[11px] text-muted-foreground">
                                        AKSES: KONTROL SISTEM MENYELURUH
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Alur Kerja Pengerjaan (Step by Step) */}
                    <section id="alur" className="border-b border-border/70 bg-muted/20 py-20">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="max-w-2xl">
                                <p className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Prosedur Pelaksanaan
                                </p>
                                <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                    Alur empat langkah yang mudah dipahami.
                                </h2>
                                <p className="mt-3 text-base text-muted-foreground">
                                    Dirancang agar siswa sekolah dasar hingga perguruan tinggi dapat langsung mengerti tanpa memerlukan petunjuk teknis yang berbelit-belit.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                <div className="rounded-xl border border-border bg-card p-5">
                                    <span className="font-mono text-2xl font-black text-muted-foreground/40">
                                        01
                                    </span>
                                    <h3 className="mt-3 text-base font-bold text-foreground">
                                        Masuk Akun Peserta
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                        Peserta login menggunakan akun terdaftar dan memeriksa kebenaran data identitas diri yang tampil di layar konfirmasi.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-border bg-card p-5">
                                    <span className="font-mono text-2xl font-black text-muted-foreground/40">
                                        02
                                    </span>
                                    <h3 className="mt-3 text-base font-bold text-foreground">
                                        Verifikasi Token Sesi
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                        Pengawas membagikan kode token ruang ujian sesaat sebelum pengerjaan dimulai untuk membuka lembar soal secara bersamaan.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-border bg-card p-5">
                                    <span className="font-mono text-2xl font-black text-muted-foreground/40">
                                        03
                                    </span>
                                    <h3 className="mt-3 text-base font-bold text-foreground">
                                        Pengerjaan Mandiri
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                        Peserta menjawab soal dengan dukungan penghitung waktu mundur otomatis dan indikator soal yang telah terjawab.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-border bg-card p-5">
                                    <span className="font-mono text-2xl font-black text-muted-foreground/40">
                                        04
                                    </span>
                                    <h3 className="mt-3 text-base font-bold text-foreground">
                                        Pengumpulan &amp; Nilai
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                        Jawaban dikunci saat waktu berakhir atau ketika peserta menekan tombol selesai. Rekapitulasi nilai langsung tercatat di sistem penguji.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Keandalan & Penanganan Masalah Lapangan */}
                    <section id="keandalan" className="border-b border-border/70 py-20">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                                <div>
                                    <p className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        Spesifikasi Keandalan
                                    </p>
                                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                        Dibangun untuk menghadapi kondisi internet nyata di lapangan.
                                    </h2>
                                    <p className="mt-3 text-base text-muted-foreground">
                                        Banyak sekolah dan daerah menghadapi kendala jaringan yang tidak stabil.
                                        Sistem kami dirancang dengan prinsip ketahanan agar kendala koneksi tidak merugikan peserta ujian.
                                    </p>

                                    <div className="mt-8 space-y-4 border-t border-border pt-6">
                                        <div className="rounded-lg border border-border bg-muted/20 p-4">
                                            <p className="text-sm font-semibold text-foreground">
                                                Koneksi Internet Putus Sementara?
                                            </p>
                                            <p className="mt-1 text-xs text-muted-foreground">
                                                Peserta tetap dapat melanjutkan membaca dan memilih jawaban. Begitu koneksi terhubung kembali, sistem secara otomatis mengirimkan seluruh antrean jawaban ke server tanpa tindakan manual.
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-border bg-muted/20 p-4">
                                            <p className="text-sm font-semibold text-foreground">
                                                Gawai Mati Mendadak atau Baterai Habis?
                                            </p>
                                            <p className="mt-1 text-xs text-muted-foreground">
                                                Peserta cukup berpindah ke gawai cadangan dan masuk kembali. Sesi ujian dapat langsung dilanjutkan dengan sisa waktu dan jawaban yang sebelumnya telah tersimpan.
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-border bg-muted/20 p-4">
                                            <p className="text-sm font-semibold text-foreground">
                                                Pencegahan Aksi Tidak Sengaja
                                            </p>
                                            <p className="mt-1 text-xs text-muted-foreground">
                                                Tombol penyelesaian ujian dilengkapi dengan dialog konfirmasi ganda serta peringatan apabila masih terdapat soal yang belum terjawab atau masih bertanda ragu-ragu.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabel Spesifikasi Teknis */}
                                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                                    <div className="border-b border-border pb-4">
                                        <span className="font-mono text-xs font-semibold text-muted-foreground uppercase">
                                            TOLOK UKUR TEKNIS SISTEM
                                        </span>
                                        <h3 className="mt-1 text-base font-bold text-foreground">
                                            Parameter Kesiapan Sistem
                                        </h3>
                                    </div>

                                    <div className="divide-y divide-border text-sm">
                                        <div className="flex items-center justify-between py-3">
                                            <span className="text-muted-foreground">Format Soal</span>
                                            <span className="font-mono text-xs font-semibold text-foreground">
                                                Pilihan Ganda, Majemuk, Benar/Salah
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between py-3">
                                            <span className="text-muted-foreground">Penyimpanan Otomatis</span>
                                            <span className="font-mono text-xs font-semibold text-foreground">
                                                Tiap 3 Detik &amp; Tiap Pemilihan Opsi
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between py-3">
                                            <span className="text-muted-foreground">Beban Muat Halaman</span>
                                            <span className="font-mono text-xs font-semibold text-foreground">
                                                Kurang Dari 500 KB (Sangat Hemat Kuota)
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between py-3">
                                            <span className="text-muted-foreground">Dukungan Peramban</span>
                                            <span className="font-mono text-xs font-semibold text-foreground">
                                                Chrome, Safari, Firefox, Edge, Opera
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between py-3">
                                            <span className="text-muted-foreground">Dukungan Perangkat</span>
                                            <span className="font-mono text-xs font-semibold text-foreground">
                                                Ponsel Android/iOS, Tablet, Laptop, PC Lab
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between py-3">
                                            <span className="text-muted-foreground">Integritas Sesi</span>
                                            <span className="font-mono text-xs font-semibold text-foreground">
                                                Satu Akun Satu Perangkat Aktif
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6 rounded border border-border bg-muted/40 p-4 text-xs text-muted-foreground">
                                        <span className="font-bold text-foreground">Komitmen Privasi:</span> Sistem ini hanya mencatat aktivitas yang berkaitan langsung dengan pengerjaan ujian tanpa mengakses berkas pribadi di perangkat peserta.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pertanyaan Umum (FAQ) */}
                    <section id="faq" className="border-b border-border/70 bg-muted/20 py-20">
                        <div className="mx-auto max-w-4xl px-6">
                            <div className="text-center">
                                <p className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Pusat Bantuan
                                </p>
                                <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                    Pertanyaan yang sering diajukan.
                                </h2>
                                <p className="mt-2 text-base text-muted-foreground">
                                    Jawaban ringkas seputar penggunaan platform ujian untuk peserta dan penguji.
                                </p>
                            </div>

                            <div className="mt-12 space-y-4">
                                <div className="rounded-xl border border-border bg-card p-6">
                                    <h3 className="text-base font-bold text-foreground">
                                        Apakah saya bisa mengubah jawaban yang sudah saya pilih sebelumnya?
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        Ya, Anda bebas berpindah antar nomor soal dan mengganti pilihan jawaban kapan saja selama durasi waktu ujian masih tersisa.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-border bg-card p-6">
                                    <h3 className="text-base font-bold text-foreground">
                                        Bagaimana jika waktu ujian habis sebelum saya menekan tombol selesai?
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        Sistem secara otomatis akan mengunci dan mengirimkan seluruh jawaban terakhir yang telah Anda pilih ke server penguji. Jawaban Anda tidak akan hilang.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-border bg-card p-6">
                                    <h3 className="text-base font-bold text-foreground">
                                        Apakah sistem ini dapat dibuka di ponsel berlayar kecil?
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        Ya. Seluruh tata letak telah dioptimalkan secara responsif sehingga teks soal, opsi pilihan, dan tombol navigasi tetap proporsional dan mudah ditekan pada layar ponsel.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-border bg-card p-6">
                                    <h3 className="text-base font-bold text-foreground">
                                        Bagaimana cara guru menyusun dan memasukkan bank soal?
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        Guru dapat membuat soal langsung melalui form di dashboard atau mengimpor daftar butir soal sekaligus. Sistem juga menyediakan pratinjau soal sebelum ujian dijadwalkan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Ajakan Bertindak (CTA) */}
                    <section className="py-20">
                        <div className="mx-auto max-w-4xl px-6 text-center">
                            <div className="rounded-2xl border border-border bg-card px-8 py-16 shadow-sm sm:px-16">
                                <span className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    MULAI PENYELENGGARAAN ASESMEN
                                </span>
                                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                                    Siap melaksanakan ujian yang tertib dan transparan?
                                </h2>
                                <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                                    Gunakan sistem asesmen terstandar untuk kemudahan evaluasi belajar di sekolah, kampus, maupun lembaga Anda.
                                </p>
                                <div className="mt-8 flex flex-wrap justify-center gap-3">
                                    {auth?.user ? (
                                        <Button asChild size="lg" className="px-8">
                                            <Link href={dashboard()}>Buka Dashboard Ujian</Link>
                                        </Button>
                                    ) : (
                                        <>
                                            <Button asChild size="lg" className="px-8">
                                                <Link href={login()}>Masuk ke Portal Ujian</Link>
                                            </Button>
                                            <Button asChild variant="outline" size="lg" className="px-8">
                                                <Link href={register()}>Daftarkan Akun Baru</Link>
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer Resmi */}
                <footer className="border-t border-border bg-muted/10 py-10">
                    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-xs text-muted-foreground sm:flex-row">
                        <div className="flex flex-col items-center gap-1 sm:items-start">
                            <div className="flex items-center gap-2 font-bold text-foreground">
                                <span className="flex h-5 w-5 items-center justify-center rounded bg-foreground font-mono text-[10px] text-background">
                                    EX
                                </span>
                                <span>PORTAL UJIAN ONLINE</span>
                            </div>
                            <p className="mt-1">
                                &copy; {new Date().getFullYear()} Sistem Evaluasi Asesmen Berbasis Komputer &amp; Ponsel.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 font-mono text-[11px]">
                            <span className="flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                <span>Sistem Operasional Normal</span>
                            </span>
                            <span>&bull;</span>
                            <span>Edisi 2.4</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
