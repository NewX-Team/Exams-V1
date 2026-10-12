import { logout } from '@/routes';
import type { User } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function MuridDashboard() {
    const { auth } = usePage<{ auth?: { user?: User | null } }>().props;
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    // Dapatkan nama & inisial murid
    const userName = auth?.user?.name || 'Arinda';
    const userInitials = userName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <>
            <Head title="Dashboard Murid — Nx-Exams" />

            <div className="min-h-screen bg-[#FAFAF7] text-[#1C1C1A] selection:bg-[#E8F1EE] selection:text-[#2A6F5F]">
                {/* =========================================================================
                    TOP NAVBAR (Sesuai Desain Stitch Nx-Exams)
                ========================================================================= */}
                <header className="sticky top-0 z-30 h-16 w-full border-b border-[#E8E6E1] bg-[#FAFAF7]/95 backdrop-blur-sm">
                    <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 sm:px-12">
                        {/* Left: Brand Wordmark */}
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="text-[18px] font-semibold tracking-tight text-[#2A6F5F] transition-opacity hover:opacity-90"
                            >
                                Nx-Exams
                            </Link>
                        </div>

                        {/* Center: Menu Links */}
                        <nav className="hidden items-center gap-7 sm:flex">
                            <Link
                                href="/dashboard"
                                className="border-b-2 border-[#2A6F5F] py-5 text-[14px] font-medium text-[#1C1C1A]"
                            >
                                Dashboard
                            </Link>
                            <span className="cursor-pointer py-5 text-[14px] text-[#6B6B66] transition-colors hover:text-[#1C1C1A]">
                                Ujian Saya
                            </span>
                            <span className="cursor-pointer py-5 text-[14px] text-[#6B6B66] transition-colors hover:text-[#1C1C1A]">
                                Nilai
                            </span>
                            <span className="cursor-pointer py-5 text-[14px] text-[#6B6B66] transition-colors hover:text-[#1C1C1A]">
                                Jadwal
                            </span>
                        </nav>

                        {/* Right: Notification & Avatar */}
                        <div className="flex items-center gap-4 sm:gap-5">
                            {/* Tombol Lonceng Notifikasi */}
                            <button
                                type="button"
                                className="relative p-1 text-[#6B6B66] transition-colors hover:text-[#1C1C1A] focus:outline-none"
                                aria-label="Notifikasi"
                            >
                                <svg
                                    className="h-[18px] w-[18px]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                                </svg>
                                <span className="absolute top-0.5 right-0.5 h-[6px] w-[6px] rounded-full bg-[#A8721F]" />
                            </button>

                            {/* Avatar Circle & Dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setUserMenuOpen(!userMenuOpen)
                                    }
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F1EE] text-[12px] font-semibold text-[#2A6F5F] transition-transform select-none hover:scale-105"
                                    aria-label="Menu Pengguna"
                                >
                                    {userInitials || 'AR'}
                                </button>

                                {/* Dropdown Menu Ringkas */}
                                {userMenuOpen && (
                                    <div className="absolute right-0 z-50 mt-2 w-52 rounded-[8px] border border-[#E8E6E1] bg-white p-2 shadow-lg">
                                        <div className="border-b border-[#E8E6E1] px-3 py-2 text-left">
                                            <p className="truncate text-xs font-semibold text-[#1C1C1A]">
                                                {userName}
                                            </p>
                                            <p className="truncate text-[11px] text-[#6B6B66]">
                                                {auth?.user?.email ||
                                                    'murid@example.com'}
                                            </p>
                                            <span className="mt-1 inline-block rounded bg-[#E8F1EE] px-1.5 py-0.5 font-mono text-[10px] font-medium text-[#2A6F5F]">
                                                Role: Murid
                                            </span>
                                        </div>
                                        <div className="pt-1">
                                            <Link
                                                href={logout()}
                                                method="post"
                                                as="button"
                                                className="block w-full rounded px-3 py-1.5 text-left text-xs text-[#A8443B] transition-colors hover:bg-[#F3E4E2]"
                                            >
                                                Keluar (Logout)
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* =========================================================================
                    MAIN CONTAINER (Max width 1200px, responsive padding)
                ========================================================================= */}
                <main className="mx-auto max-w-[1200px] px-6 pb-12 sm:px-12">
                    {/* SECTION 1 — GREETING HEADER */}
                    <section className="flex flex-col justify-between gap-4 pt-8 sm:flex-row sm:items-center sm:pt-10">
                        <div>
                            <h1 className="text-[24px] leading-tight font-semibold text-[#1C1C1A]">
                                Selamat pagi, {userName}
                            </h1>
                            <p className="mt-1 text-[13px] text-[#6B6B66]">
                                Senin, 13 Oktober 2025 · Semester Ganjil
                            </p>
                        </div>
                        <div>
                            <a
                                href="#jadwal"
                                className="inline-flex items-center gap-1 text-[14px] font-medium text-[#2A6F5F] hover:underline"
                            >
                                Lihat semua jadwal &rarr;
                            </a>
                        </div>
                    </section>

                    {/* SECTION 2 — STAT ROW (4 Sel Stat) */}
                    <section className="mt-8">
                        <div className="grid grid-cols-2 divide-y divide-[#E8E6E1] rounded-[10px] border border-[#E8E6E1] bg-white sm:h-[88px] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
                            {/* Sel 1 */}
                            <div className="flex flex-col justify-center p-4 sm:px-6">
                                <span className="font-mono text-[24px] leading-none font-medium text-[#1C1C1A] tabular-nums">
                                    3
                                </span>
                                <span className="mt-2 text-[12px] text-[#6B6B66]">
                                    Ujian minggu ini
                                </span>
                            </div>

                            {/* Sel 2 */}
                            <div className="flex flex-col justify-center p-4 sm:px-6">
                                <span className="font-mono text-[24px] leading-none font-medium text-[#1C1C1A] tabular-nums">
                                    86
                                </span>
                                <span className="mt-2 text-[12px] text-[#6B6B66]">
                                    Rata-rata nilai
                                </span>
                            </div>

                            {/* Sel 3 */}
                            <div className="flex flex-col justify-center p-4 sm:px-6">
                                <span className="font-mono text-[24px] leading-none font-medium text-[#1C1C1A] tabular-nums">
                                    12
                                </span>
                                <span className="mt-2 text-[12px] text-[#6B6B66]">
                                    Ujian selesai
                                </span>
                            </div>

                            {/* Sel 4 */}
                            <div className="flex flex-col justify-center p-4 sm:px-6">
                                <span className="font-mono text-[24px] leading-none font-medium text-[#A8721F] tabular-nums">
                                    4
                                </span>
                                <span className="mt-2 text-[12px] text-[#6B6B66]">
                                    Menunggu koreksi
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3 — DUA KOLOM LAYOUT (65% / 35%, gap 24px) */}
                    <section className="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
                        {/* LEFT COLUMN (Kolom Kiri 65% / col-span-8) */}
                        <div className="space-y-8 lg:col-span-8">
                            {/* A) Ujian Hari Ini */}
                            <div>
                                <h2 className="mb-4 text-[18px] font-semibold text-[#1C1C1A]">
                                    Ujian Hari Ini
                                </h2>
                                <div className="rounded-[10px] border border-[#E8E6E1] bg-white p-6 shadow-xs">
                                    {/* Top row */}
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <span className="rounded-full bg-[#E8F1EA] px-[10px] py-[3px] text-[11px] font-medium text-[#3A7D5C]">
                                            Sedang Berlangsung
                                        </span>
                                        <span className="text-[13px] text-[#6B6B66]">
                                            Matematika · Kelas XI IPA 2
                                        </span>
                                    </div>

                                    {/* Middle */}
                                    <div className="mt-4">
                                        <h3 className="text-[20px] font-semibold text-[#1C1C1A]">
                                            Ujian Tengah Semester — Matematika
                                        </h3>
                                        <p className="mt-2 flex flex-wrap items-center gap-2 text-[13px] text-[#6B6B66]">
                                            <span>90 menit</span>
                                            <span>·</span>
                                            <span>30 soal</span>
                                            <span>·</span>
                                            <span>Dimulai 08:00</span>
                                        </p>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="mt-5">
                                        <div className="h-1 w-full overflow-hidden rounded-full bg-[#E8F1EE]">
                                            <div
                                                className="h-full rounded-full bg-[#2A6F5F]"
                                                style={{ width: '40%' }}
                                            />
                                        </div>
                                        <p className="mt-2 text-[12px] text-[#6B6B66]">
                                            Waktu tersisa 42 menit
                                        </p>
                                    </div>

                                    {/* Button CTA */}
                                    <div className="mt-5">
                                        <button
                                            type="button"
                                            className="h-10 rounded-[6px] bg-[#2A6F5F] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#215A4C] focus:outline-none"
                                        >
                                            Lanjutkan Ujian
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* B) Jadwal Mendatang */}
                            <div id="jadwal">
                                <h2 className="mb-3 text-[18px] font-semibold text-[#1C1C1A]">
                                    Jadwal Mendatang
                                </h2>
                                <div className="divide-y divide-[#E8E6E1] rounded-[10px] border border-[#E8E6E1] bg-white p-0 shadow-xs">
                                    {/* Row 1 */}
                                    <div className="flex h-[72px] items-center justify-between px-6">
                                        <div className="flex items-center">
                                            {/* Left date block (fixed 64px) */}
                                            <div className="flex w-16 flex-col justify-center text-left">
                                                <span className="text-[11px] font-medium tracking-[0.06em] text-[#9A9A94] uppercase">
                                                    SEL
                                                </span>
                                                <span className="text-[20px] leading-tight font-semibold text-[#1C1C1A]">
                                                    14
                                                </span>
                                                <span className="text-[11px] font-medium tracking-[0.06em] text-[#9A9A94] uppercase">
                                                    OKT
                                                </span>
                                            </div>
                                            {/* Middle block */}
                                            <div className="ml-5">
                                                <div className="text-[15px] font-medium text-[#1C1C1A]">
                                                    Biologi
                                                </div>
                                                <div className="mt-0.5 text-[13px] text-[#6B6B66]">
                                                    Biologi · Kelas XI IPA 2 ·
                                                    10:00
                                                </div>
                                            </div>
                                        </div>
                                        {/* Right badge & icon */}
                                        <div className="flex items-center gap-3">
                                            <span className="rounded-full bg-[#E4ECF5] px-[10px] py-[3px] text-[11px] font-medium text-[#3D6A99]">
                                                Terjadwal
                                            </span>
                                            <svg
                                                className="h-4 w-4 text-[#9A9A94]"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="flex h-[72px] items-center justify-between px-6">
                                        <div className="flex items-center">
                                            <div className="flex w-16 flex-col justify-center text-left">
                                                <span className="text-[11px] font-medium tracking-[0.06em] text-[#9A9A94] uppercase">
                                                    RAB
                                                </span>
                                                <span className="text-[20px] leading-tight font-semibold text-[#1C1C1A]">
                                                    15
                                                </span>
                                                <span className="text-[11px] font-medium tracking-[0.06em] text-[#9A9A94] uppercase">
                                                    OKT
                                                </span>
                                            </div>
                                            <div className="ml-5">
                                                <div className="text-[15px] font-medium text-[#1C1C1A]">
                                                    Fisika Dasar
                                                </div>
                                                <div className="mt-0.5 text-[13px] text-[#6B6B66]">
                                                    Fisika · Kelas XI IPA 2 ·
                                                    08:00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="rounded-full bg-[#E4ECF5] px-[10px] py-[3px] text-[11px] font-medium text-[#3D6A99]">
                                                Terjadwal
                                            </span>
                                            <svg
                                                className="h-4 w-4 text-[#9A9A94]"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="flex h-[72px] items-center justify-between px-6">
                                        <div className="flex items-center">
                                            <div className="flex w-16 flex-col justify-center text-left">
                                                <span className="text-[11px] font-medium tracking-[0.06em] text-[#9A9A94] uppercase">
                                                    KAM
                                                </span>
                                                <span className="text-[20px] leading-tight font-semibold text-[#1C1C1A]">
                                                    16
                                                </span>
                                                <span className="text-[11px] font-medium tracking-[0.06em] text-[#9A9A94] uppercase">
                                                    OKT
                                                </span>
                                            </div>
                                            <div className="ml-5">
                                                <div className="text-[15px] font-medium text-[#1C1C1A]">
                                                    Bahasa Inggris
                                                </div>
                                                <div className="mt-0.5 text-[13px] text-[#6B6B66]">
                                                    Bahasa Inggris · Kelas XI
                                                    IPA 2 · 13:00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="rounded-full bg-[#E4ECF5] px-[10px] py-[3px] text-[11px] font-medium text-[#3D6A99]">
                                                Terjadwal
                                            </span>
                                            <svg
                                                className="h-4 w-4 text-[#9A9A94]"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* C) Hasil Terakhir */}
                            <div>
                                <h2 className="mb-3 text-[18px] font-semibold text-[#1C1C1A]">
                                    Hasil Terakhir
                                </h2>
                                <div className="divide-y divide-[#E8E6E1] rounded-[10px] border border-[#E8E6E1] bg-white p-0 shadow-xs">
                                    {/* Row 1 */}
                                    <div className="flex h-16 items-center justify-between px-6">
                                        <div>
                                            <div className="text-[15px] font-medium text-[#1C1C1A]">
                                                Kimia Organik
                                            </div>
                                            <div className="mt-0.5 text-[12px] text-[#9A9A94]">
                                                Dikumpulkan 8 Okt 2025
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-[20px] font-medium text-[#1C1C1A] tabular-nums">
                                                92
                                            </span>
                                            <span className="rounded-full bg-[#E8F1EA] px-[10px] py-[3px] text-[11px] font-medium text-[#3A7D5C]">
                                                Lulus
                                            </span>
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="flex h-16 items-center justify-between px-6">
                                        <div>
                                            <div className="text-[15px] font-medium text-[#1C1C1A]">
                                                Bahasa Indonesia — Teks
                                                Eksposisi
                                            </div>
                                            <div className="mt-0.5 text-[12px] text-[#9A9A94]">
                                                Dikumpulkan 5 Okt 2025
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-[20px] font-medium text-[#1C1C1A] tabular-nums">
                                                88
                                            </span>
                                            <span className="rounded-full bg-[#E8F1EA] px-[10px] py-[3px] text-[11px] font-medium text-[#3A7D5C]">
                                                Lulus
                                            </span>
                                        </div>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="flex h-16 items-center justify-between px-6">
                                        <div>
                                            <div className="text-[15px] font-medium text-[#1C1C1A]">
                                                Sejarah Indonesia
                                            </div>
                                            <div className="mt-0.5 text-[12px] text-[#9A9A94]">
                                                Dikumpulkan 2 Okt 2025
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-[20px] font-medium text-[#1C1C1A] tabular-nums">
                                                78
                                            </span>
                                            <span className="rounded-full bg-[#E8F1EA] px-[10px] py-[3px] text-[11px] font-medium text-[#3A7D5C]">
                                                Lulus
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN (Kolom Kanan 35% / col-span-4) */}
                        <div className="space-y-6 lg:col-span-4">
                            {/* D) Ringkasan Nilai (Sparkline Chart) */}
                            <div className="rounded-[10px] border border-[#E8E6E1] bg-white p-6 shadow-xs">
                                <h3 className="text-[15px] font-semibold text-[#1C1C1A]">
                                    Ringkasan Nilai
                                </h3>
                                <p className="mt-1 text-[12px] text-[#9A9A94]">
                                    5 ujian terakhir
                                </p>

                                <div className="relative mt-5">
                                    <div className="mb-1 flex items-center justify-between">
                                        <span className="font-mono text-[10px] text-[#9A9A94] tabular-nums">
                                            70
                                        </span>
                                        <span className="font-mono text-[10px] text-[#9A9A94] tabular-nums">
                                            95
                                        </span>
                                    </div>

                                    <svg
                                        viewBox="0 0 260 80"
                                        className="h-[80px] w-full overflow-visible"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="#2A6F5F"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            points="20,56 75,42 130,32 185,22 240,16"
                                        />
                                        <circle
                                            cx="20"
                                            cy="56"
                                            r="3"
                                            fill="#2A6F5F"
                                        />
                                        <circle
                                            cx="75"
                                            cy="42"
                                            r="3"
                                            fill="#2A6F5F"
                                        />
                                        <circle
                                            cx="130"
                                            cy="32"
                                            r="3"
                                            fill="#2A6F5F"
                                        />
                                        <circle
                                            cx="185"
                                            cy="22"
                                            r="3"
                                            fill="#2A6F5F"
                                        />
                                        <circle
                                            cx="240"
                                            cy="16"
                                            r="3"
                                            fill="#2A6F5F"
                                        />
                                    </svg>

                                    <div className="mt-4 flex items-center justify-between px-2 text-[10px] font-medium text-[#9A9A94]">
                                        <span>MTK</span>
                                        <span>BIO</span>
                                        <span>FIS</span>
                                        <span>KIM</span>
                                        <span>B.IND</span>
                                    </div>
                                </div>
                            </div>

                            {/* E) Tugas & Pengingat */}
                            <div className="rounded-[10px] border border-[#E8E6E1] bg-white p-6 shadow-xs">
                                <h3 className="text-[15px] font-semibold text-[#1C1C1A]">
                                    Tugas &amp; Pengingat
                                </h3>

                                <div className="mt-4 space-y-4">
                                    {/* Item 1 */}
                                    <div className="flex items-start gap-3">
                                        <span className="mt-1.5 h-[6px] w-[6px] shrink-0 rounded-full bg-[#A8721F]" />
                                        <div>
                                            <div className="text-[13px] leading-[20px] text-[#1C1C1A]">
                                                Kumpulkan revisi esai Biologi
                                            </div>
                                            <div className="text-[11px] text-[#9A9A94]">
                                                Besok, 14 Okt
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="flex items-start gap-3">
                                        <span className="mt-1.5 h-[6px] w-[6px] shrink-0 rounded-full bg-[#3D6A99]" />
                                        <div>
                                            <div className="text-[13px] leading-[20px] text-[#1C1C1A]">
                                                Unduh kartu ujian
                                            </div>
                                            <div className="text-[11px] text-[#9A9A94]">
                                                16 Okt
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="flex items-start gap-3">
                                        <span className="mt-1.5 h-[6px] w-[6px] shrink-0 rounded-full bg-[#6B6B66]" />
                                        <div>
                                            <div className="text-[13px] leading-[20px] text-[#1C1C1A]">
                                                Baca materi Bab 5
                                            </div>
                                            <div className="text-[11px] text-[#9A9A94]">
                                                18 Okt
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 pt-1">
                                    <span className="inline-flex cursor-pointer items-center text-[13px] font-medium text-[#2A6F5F] hover:underline">
                                        Lihat semua &rarr;
                                    </span>
                                </div>
                            </div>

                            {/* F) Kehadiran Ujian */}
                            <div className="rounded-[10px] border border-[#E8E6E1] bg-white p-6 shadow-xs">
                                <h3 className="text-[15px] font-semibold text-[#1C1C1A]">
                                    Kehadiran Ujian
                                </h3>
                                <p className="mt-1 text-[12px] text-[#9A9A94]">
                                    Semester ini
                                </p>

                                <div className="mt-5">
                                    <div className="grid w-fit grid-cols-7 gap-[6px]">
                                        {/* Baris 1 */}
                                        <div className="h-3 w-3 rounded-[3px] bg-[#2A6F5F]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#2A6F5F]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#2A6F5F]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />

                                        {/* Baris 2 */}
                                        <div className="h-3 w-3 rounded-[3px] bg-[#2A6F5F]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#F5EBD9]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />

                                        {/* Baris 3 */}
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />
                                        <div className="h-3 w-3 rounded-[3px] border border-[#E8E6E1]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />
                                        <div className="h-3 w-3 rounded-[3px] bg-[#E8F1EE]" />
                                    </div>

                                    {/* Legend Row */}
                                    <div className="mt-4 flex items-center gap-4 text-[11px] text-[#6B6B66]">
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-2.5 w-2.5 rounded-[2px] bg-[#2A6F5F]" />
                                            <span>Hadir</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-2.5 w-2.5 rounded-[2px] bg-[#E8F1EE]" />
                                            <span>Terjadwal</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-2.5 w-2.5 rounded-[2px] bg-[#F5EBD9]" />
                                            <span>Terlewat</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4 — FOOTER */}
                    <footer className="mt-12 border-t border-[#E8E6E1] pt-6 text-center">
                        <p className="text-[12px] text-[#9A9A94]">
                            &copy; {new Date().getFullYear()} Nx-Exams · Bantuan
                            · Kebijakan Privasi
                        </p>
                    </footer>
                </main>
            </div>
        </>
    );
}

MuridDashboard.layout = (page: React.ReactNode) => page;
