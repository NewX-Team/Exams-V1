import { logout } from '@/routes';
import type { User } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function GuruDashboard() {
    const { auth } = usePage<{ auth?: { user?: User | null } }>().props;
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    // Dapatkan nama & inisial guru
    const userName = auth?.user?.name || 'Bu Sari';
    const userInitials = userName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <>
            <Head title="Dashboard Guru — Nx-Exams" />

            <div className="flex min-h-screen flex-col justify-between bg-[#FAFAF7] text-[#1C1C1A] selection:bg-[#E8F1EE] selection:text-[#2A6F5F]">
                {/* =========================================================================
                    TOP NAVBAR (Sesuai Desain Stitch Nx-Exams Teacher Dashboard)
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

                        {/* Center: Navigation Menu */}
                        <nav className="hidden items-center gap-7 md:flex">
                            <Link
                                href="/dashboard"
                                className="border-b-2 border-[#2A6F5F] py-5 text-[14px] font-medium text-[#1C1C1A]"
                            >
                                Dashboard
                            </Link>
                            <span className="cursor-pointer py-5 text-[14px] text-[#6B6B66] transition-colors hover:text-[#1C1C1A]">
                                Ujian
                            </span>
                            <span className="cursor-pointer py-5 text-[14px] text-[#6B6B66] transition-colors hover:text-[#1C1C1A]">
                                Bank Soal
                            </span>
                            <span className="cursor-pointer py-5 text-[14px] text-[#6B6B66] transition-colors hover:text-[#1C1C1A]">
                                Kelas
                            </span>
                            <span className="cursor-pointer py-5 text-[14px] text-[#6B6B66] transition-colors hover:text-[#1C1C1A]">
                                Laporan
                            </span>
                        </nav>

                        {/* Right: Notification Bell & Avatar */}
                        <div className="flex items-center gap-5">
                            {/* Tombol Lonceng Notifikasi */}
                            <button
                                type="button"
                                className="relative flex h-8 w-8 items-center justify-center rounded-full text-[#6B6B66] transition-colors hover:bg-[#E8E6E1]/50 hover:text-[#1C1C1A]"
                                title="Notifikasi"
                            >
                                <svg
                                    className="h-[18px] w-[18px]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                                </svg>
                                <span className="absolute top-1 right-1 h-[6px] w-[6px] rounded-full bg-[#A8721F]" />
                            </button>

                            {/* Avatar Dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setUserMenuOpen(!userMenuOpen)
                                    }
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F1EE] text-[12px] font-semibold text-[#2A6F5F] transition-opacity select-none hover:opacity-90 focus:outline-none"
                                >
                                    {userInitials || 'BS'}
                                </button>

                                {userMenuOpen && (
                                    <div
                                        className="absolute right-0 z-50 mt-2 w-56 rounded-lg border border-[#E8E6E1] bg-white py-1.5 shadow-lg"
                                        onMouseLeave={() =>
                                            setUserMenuOpen(false)
                                        }
                                    >
                                        <div className="border-b border-[#E8E6E1] px-4 py-2">
                                            <p className="text-[13px] font-medium text-[#1C1C1A]">
                                                {userName}
                                            </p>
                                            <p className="truncate text-[11px] text-[#6B6B66]">
                                                {auth?.user?.email}
                                            </p>
                                            <span className="mt-1 inline-block rounded bg-[#E8F1EE] px-1.5 py-0.5 text-[10px] font-medium text-[#2A6F5F]">
                                                Guru Pengajar
                                            </span>
                                        </div>
                                        <Link
                                            href="/settings/profile"
                                            className="block px-4 py-2 text-[13px] text-[#6B6B66] hover:bg-[#FAFAF7] hover:text-[#1C1C1A]"
                                        >
                                            Profil & Akun
                                        </Link>
                                        <Link
                                            href={logout()}
                                            method="post"
                                            as="button"
                                            className="block w-full px-4 py-2 text-left text-[13px] text-[#A8443B] hover:bg-[#F3E4E2]/50"
                                        >
                                            Keluar
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* =========================================================================
                    MAIN CONTENT CONTAINER
                ========================================================================= */}
                <main className="mx-auto w-full max-w-[1200px] flex-grow px-6 pb-16 sm:px-12">
                    {/* SECTION 1 — GREETING HEADER */}
                    <section className="flex flex-col justify-between gap-4 pt-10 sm:flex-row sm:items-center">
                        <div>
                            <h1 className="text-[24px] leading-tight font-semibold text-[#1C1C1A]">
                                Selamat pagi, {userName}
                            </h1>
                            <p className="mt-1 text-[13px] text-[#6B6B66]">
                                Senin, 13 Oktober 2025 · 3 ujian aktif hari ini
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Secondary Button */}
                            <button
                                type="button"
                                className="h-10 rounded-[6px] border border-[#E8E6E1] bg-[#FFFFFF] px-5 text-[14px] font-medium text-[#1C1C1A] transition-colors hover:bg-[#F5F5F0]"
                            >
                                Bank Soal
                            </button>
                            {/* Primary Button */}
                            <button
                                type="button"
                                className="flex h-10 items-center gap-2 rounded-[6px] bg-[#2A6F5F] px-5 text-[14px] font-medium text-[#FFFFFF] transition-colors hover:bg-[#215A4C]"
                            >
                                <svg
                                    className="h-4 w-4 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                                <span>Buat Ujian</span>
                            </button>
                        </div>
                    </section>

                    {/* SECTION 2 — STAT ROW (4 CELLS GRID) */}
                    <section className="mt-8 grid grid-cols-2 divide-y divide-[#E8E6E1] overflow-hidden rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] sm:h-[88px] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
                        {/* Cell 1 */}
                        <div className="flex flex-col justify-center px-6 py-4 sm:py-0">
                            <span className="font-mono text-[24px] leading-none font-medium text-[#1C1C1A] tabular-nums">
                                3
                            </span>
                            <span className="mt-1.5 text-[12px] text-[#6B6B66]">
                                Ujian aktif
                            </span>
                        </div>
                        {/* Cell 2 */}
                        <div className="flex flex-col justify-center px-6 py-4 sm:py-0">
                            <span className="font-mono text-[24px] leading-none font-medium text-[#A8721F] tabular-nums">
                                12
                            </span>
                            <span className="mt-1.5 text-[12px] text-[#6B6B66]">
                                Esai perlu dikoreksi
                            </span>
                        </div>
                        {/* Cell 3 */}
                        <div className="flex flex-col justify-center px-6 py-4 sm:py-0">
                            <span className="font-mono text-[24px] leading-none font-medium text-[#1C1C1A] tabular-nums">
                                5
                            </span>
                            <span className="mt-1.5 text-[12px] text-[#6B6B66]">
                                Kelas diampu
                            </span>
                        </div>
                        {/* Cell 4 */}
                        <div className="flex flex-col justify-center px-6 py-4 sm:py-0">
                            <span className="font-mono text-[24px] leading-none font-medium text-[#1C1C1A] tabular-nums">
                                84
                            </span>
                            <span className="mt-1.5 text-[12px] text-[#6B6B66]">
                                Rata-rata kelas
                            </span>
                        </div>
                    </section>

                    {/* SECTION 3 — TWO COLUMN LAYOUT (65% : 35%) */}
                    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
                        {/* LEFT COLUMN (approx 65% -> 8 of 12 cols) */}
                        <div className="flex flex-col lg:col-span-8">
                            {/* SUBSECTION A: Ujian Aktif */}
                            <div>
                                <div className="mb-4 flex items-baseline justify-between">
                                    <h2 className="text-[18px] font-semibold text-[#1C1C1A]">
                                        Ujian Aktif
                                    </h2>
                                    <span className="cursor-pointer text-[13px] font-medium text-[#2A6F5F] hover:underline">
                                        Lihat semua →
                                    </span>
                                </div>

                                {/* Card List: Ujian Aktif */}
                                <div className="divide-y divide-[#E8E6E1] rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF]">
                                    {/* Row 1 */}
                                    <div className="flex flex-col gap-3 px-6 py-4 sm:h-[88px] sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:py-0">
                                        {/* Left (fixed 200px) */}
                                        <div className="w-full flex-shrink-0 pr-2 sm:w-[200px]">
                                            <h3
                                                className="truncate text-[15px] font-medium text-[#1C1C1A]"
                                                title="Penilaian Harian 2 Matematika"
                                            >
                                                Penilaian Harian 2 Matematika
                                            </h3>
                                            <p className="mt-0.5 truncate text-[13px] text-[#6B6B66]">
                                                Matematika · XI IPA 2
                                            </p>
                                        </div>

                                        {/* Middle (flex 1) */}
                                        <div className="flex-1 sm:mx-6">
                                            <div className="flex items-center justify-between text-[12px] text-[#6B6B66]">
                                                <span>
                                                    18 dari 30 peserta selesai
                                                </span>
                                                <span className="font-mono tabular-nums">
                                                    60%
                                                </span>
                                            </div>
                                            <div className="mt-2 h-[6px] w-full overflow-hidden rounded-full bg-[#E8F1EE]">
                                                <div
                                                    className="h-full rounded-full bg-[#2A6F5F]"
                                                    style={{ width: '60%' }}
                                                />
                                            </div>
                                        </div>

                                        {/* Right (fixed 140px, right-aligned) */}
                                        <div className="flex flex-shrink-0 items-center justify-between sm:w-[140px] sm:flex-col sm:items-end sm:text-right">
                                            <span className="inline-block rounded-full bg-[#E8F1EA] px-2.5 py-[3px] text-[11px] font-medium text-[#3A7D5C]">
                                                Berlangsung
                                            </span>
                                            <span className="text-[12px] text-[#9A9A94] sm:mt-1.5">
                                                Sisa 42 menit
                                            </span>
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="flex flex-col gap-3 px-6 py-4 sm:h-[88px] sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:py-0">
                                        {/* Left (fixed 200px) */}
                                        <div className="w-full flex-shrink-0 pr-2 sm:w-[200px]">
                                            <h3
                                                className="truncate text-[15px] font-medium text-[#1C1C1A]"
                                                title="Kuis Aljabar Linier"
                                            >
                                                Kuis Aljabar Linier
                                            </h3>
                                            <p className="mt-0.5 truncate text-[13px] text-[#6B6B66]">
                                                Matematika · XI IPA 1
                                            </p>
                                        </div>

                                        {/* Middle (flex 1) */}
                                        <div className="flex-1 sm:mx-6">
                                            <div className="flex items-center justify-between text-[12px] text-[#6B6B66]">
                                                <span>
                                                    24 dari 32 peserta selesai
                                                </span>
                                                <span className="font-mono tabular-nums">
                                                    75%
                                                </span>
                                            </div>
                                            <div className="mt-2 h-[6px] w-full overflow-hidden rounded-full bg-[#E8F1EE]">
                                                <div
                                                    className="h-full rounded-full bg-[#2A6F5F]"
                                                    style={{ width: '75%' }}
                                                />
                                            </div>
                                        </div>

                                        {/* Right (fixed 140px, right-aligned) */}
                                        <div className="flex flex-shrink-0 items-center justify-between sm:w-[140px] sm:flex-col sm:items-end sm:text-right">
                                            <span className="inline-block rounded-full bg-[#E8F1EA] px-2.5 py-[3px] text-[11px] font-medium text-[#3A7D5C]">
                                                Berlangsung
                                            </span>
                                            <span className="text-[12px] text-[#9A9A94] sm:mt-1.5">
                                                Sisa 18 menit
                                            </span>
                                        </div>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="flex flex-col gap-3 px-6 py-4 sm:h-[88px] sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:py-0">
                                        {/* Left (fixed 200px) */}
                                        <div className="w-full flex-shrink-0 pr-2 sm:w-[200px]">
                                            <h3
                                                className="truncate text-[15px] font-medium text-[#1C1C1A]"
                                                title="Uji Pemahaman Trigonometri"
                                            >
                                                Uji Pemahaman Trigonometri
                                            </h3>
                                            <p className="mt-0.5 truncate text-[13px] text-[#6B6B66]">
                                                Matematika · X-1
                                            </p>
                                        </div>

                                        {/* Middle (flex 1) */}
                                        <div className="flex-1 sm:mx-6">
                                            <div className="flex items-center justify-between text-[12px] text-[#6B6B66]">
                                                <span>
                                                    7 dari 34 peserta selesai
                                                </span>
                                                <span className="font-mono tabular-nums">
                                                    20%
                                                </span>
                                            </div>
                                            <div className="mt-2 h-[6px] w-full overflow-hidden rounded-full bg-[#E8F1EE]">
                                                <div
                                                    className="h-full rounded-full bg-[#2A6F5F]"
                                                    style={{ width: '20%' }}
                                                />
                                            </div>
                                        </div>

                                        {/* Right (fixed 140px, right-aligned) */}
                                        <div className="flex flex-shrink-0 items-center justify-between sm:w-[140px] sm:flex-col sm:items-end sm:text-right">
                                            <span className="inline-block rounded-full bg-[#E8F1EA] px-2.5 py-[3px] text-[11px] font-medium text-[#3A7D5C]">
                                                Berlangsung
                                            </span>
                                            <span className="text-[12px] text-[#9A9A94] sm:mt-1.5">
                                                Sisa 65 menit
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SUBSECTION B: Perlu Tindakan */}
                            <div className="mt-8">
                                <h2 className="mb-3 text-[18px] font-semibold text-[#1C1C1A]">
                                    Perlu Tindakan
                                </h2>
                                <div className="divide-y divide-[#E8E6E1] overflow-hidden rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF]">
                                    {/* Row 1 */}
                                    <div className="relative flex h-[64px] items-center justify-between pr-6 pl-0">
                                        {/* Left Accent Bar (3px) */}
                                        <div className="h-full w-[3px] flex-shrink-0 bg-[#A8721F]" />
                                        <div className="ml-5 flex-1">
                                            <p className="text-[14px] font-medium text-[#1C1C1A]">
                                                8 esai menunggu koreksi
                                            </p>
                                            <p className="mt-0.5 text-[12px] text-[#9A9A94]">
                                                Ujian Tengah Semester —
                                                Matematika
                                            </p>
                                        </div>
                                        <span className="cursor-pointer text-[13px] font-medium text-[#2A6F5F] hover:underline">
                                            Koreksi
                                        </span>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="relative flex h-[64px] items-center justify-between pr-6 pl-0">
                                        {/* Left Accent Bar (3px) */}
                                        <div className="h-full w-[3px] flex-shrink-0 bg-[#3D6A99]" />
                                        <div className="ml-5 flex-1">
                                            <p className="text-[14px] font-medium text-[#1C1C1A]">
                                                Jadwal ujian belum
                                                dipublikasikan
                                            </p>
                                            <p className="mt-0.5 text-[12px] text-[#9A9A94]">
                                                Biologi · XI IPA 1 · Selasa, 14
                                                Okt
                                            </p>
                                        </div>
                                        <span className="cursor-pointer text-[13px] font-medium text-[#2A6F5F] hover:underline">
                                            Publikasikan
                                        </span>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="relative flex h-[64px] items-center justify-between pr-6 pl-0">
                                        {/* Left Accent Bar (3px) */}
                                        <div className="h-full w-[3px] flex-shrink-0 bg-[#6B6B66]" />
                                        <div className="ml-5 flex-1">
                                            <p className="text-[14px] font-medium text-[#1C1C1A]">
                                                3 soal perlu ditinjau
                                            </p>
                                            <p className="mt-0.5 text-[12px] text-[#9A9A94]">
                                                Bank Soal — Bab 5 Fisika
                                            </p>
                                        </div>
                                        <span className="cursor-pointer text-[13px] font-medium text-[#2A6F5F] hover:underline">
                                            Tinjau
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* SUBSECTION C: Jadwal Hari Ini */}
                            <div className="mt-8">
                                <h2 className="mb-3 text-[18px] font-semibold text-[#1C1C1A]">
                                    Jadwal Hari Ini
                                </h2>
                                <div className="rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] p-6">
                                    {/* Timeline container */}
                                    <div className="relative">
                                        {/* Garis Vertikal Timeline */}
                                        <div className="pointer-events-none absolute top-4 bottom-4 left-[88px] w-[1px] bg-[#E8E6E1]" />

                                        {/* Item 1: 07:30 (past) */}
                                        <div className="relative flex h-[56px] items-center">
                                            <div className="w-[72px] flex-shrink-0 text-right font-mono text-[13px] font-medium text-[#1C1C1A] tabular-nums">
                                                07:30
                                            </div>
                                            <div className="z-10 flex w-[32px] flex-shrink-0 items-center justify-center">
                                                <div className="h-2 w-2 rounded-full bg-[#E8E6E1]" />
                                            </div>
                                            <div className="flex-1 pl-1">
                                                <h4 className="text-[14px] leading-tight font-medium text-[#1C1C1A]">
                                                    Ujian Matriks &amp; Vektor
                                                </h4>
                                                <p className="mt-0.5 text-[12px] text-[#6B6B66]">
                                                    XI IPA 1 · Ruang Lab 1 · 60
                                                    menit
                                                </p>
                                            </div>
                                        </div>

                                        {/* Item 2: 08:00 (current, active highlight) */}
                                        <div className="relative flex h-[56px] items-center">
                                            <div className="w-[72px] flex-shrink-0 text-right font-mono text-[13px] font-medium text-[#1C1C1A] tabular-nums">
                                                08:00
                                            </div>
                                            <div className="z-10 flex w-[32px] flex-shrink-0 items-center justify-center">
                                                <div className="h-2 w-2 rounded-full border-2 border-[#2A6F5F] bg-[#FFFFFF]" />
                                            </div>
                                            <div className="flex-1 pl-1">
                                                <h4 className="text-[14px] leading-tight font-medium text-[#1C1C1A]">
                                                    Penilaian Harian 2
                                                    Matematika
                                                </h4>
                                                <p className="mt-0.5 text-[12px] text-[#6B6B66]">
                                                    XI IPA 2 · Ruang 3 · 90
                                                    menit
                                                </p>
                                            </div>
                                        </div>

                                        {/* Item 3: 10:30 (upcoming) */}
                                        <div className="relative flex h-[56px] items-center">
                                            <div className="w-[72px] flex-shrink-0 text-right font-mono text-[13px] font-medium text-[#1C1C1A] tabular-nums">
                                                10:30
                                            </div>
                                            <div className="z-10 flex w-[32px] flex-shrink-0 items-center justify-center">
                                                <div className="h-2 w-2 rounded-full border-[1.5px] border-[#9A9A94] bg-[#FFFFFF]" />
                                            </div>
                                            <div className="flex-1 pl-1">
                                                <h4 className="text-[14px] leading-tight font-medium text-[#1C1C1A]">
                                                    Remedial Bab 3 Geometri
                                                </h4>
                                                <p className="mt-0.5 text-[12px] text-[#6B6B66]">
                                                    XI IPS 1 · Ruang 4 · 45
                                                    menit
                                                </p>
                                            </div>
                                        </div>

                                        {/* Item 4: 13:00 (upcoming) */}
                                        <div className="relative flex h-[56px] items-center">
                                            <div className="w-[72px] flex-shrink-0 text-right font-mono text-[13px] font-medium text-[#1C1C1A] tabular-nums">
                                                13:00
                                            </div>
                                            <div className="z-10 flex w-[32px] flex-shrink-0 items-center justify-center">
                                                <div className="h-2 w-2 rounded-full border-[1.5px] border-[#9A9A94] bg-[#FFFFFF]" />
                                            </div>
                                            <div className="flex-1 pl-1">
                                                <h4 className="text-[14px] leading-tight font-medium text-[#1C1C1A]">
                                                    Uji Pemahaman Trigonometri
                                                </h4>
                                                <p className="mt-0.5 text-[12px] text-[#6B6B66]">
                                                    X-1 · Ruang 2 · 90 menit
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SUBSECTION D: Distribusi Nilai */}
                            <div className="mt-8">
                                <h2 className="mb-3 text-[18px] font-semibold text-[#1C1C1A]">
                                    Distribusi Nilai
                                </h2>
                                <div className="rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] p-6">
                                    <h3 className="text-[15px] font-semibold text-[#1C1C1A]">
                                        Ujian Tengah Semester — Matematika
                                    </h3>
                                    <p className="mt-0.5 text-[12px] text-[#9A9A94]">
                                        30 peserta · dikumpulkan 8 Okt
                                    </p>

                                    {/* Horizontal Bar Chart */}
                                    <div className="mt-5 space-y-3">
                                        {/* Row 1: 0–59 (count 1 / max 12 -> 8.33%) */}
                                        <div className="flex items-center">
                                            <span className="w-[60px] flex-shrink-0 text-right text-[12px] text-[#6B6B66]">
                                                0–59
                                            </span>
                                            <div className="ml-4 h-5 flex-1 overflow-hidden rounded-[4px] bg-[#E8F1EE]">
                                                <div
                                                    className="h-full rounded-[4px] bg-[#2A6F5F]"
                                                    style={{ width: '8.33%' }}
                                                />
                                            </div>
                                            <span className="w-10 flex-shrink-0 text-right font-mono text-[12px] text-[#6B6B66] tabular-nums">
                                                1
                                            </span>
                                        </div>

                                        {/* Row 2: 60–69 (count 3 / max 12 -> 25%) */}
                                        <div className="flex items-center">
                                            <span className="w-[60px] flex-shrink-0 text-right text-[12px] text-[#6B6B66]">
                                                60–69
                                            </span>
                                            <div className="ml-4 h-5 flex-1 overflow-hidden rounded-[4px] bg-[#E8F1EE]">
                                                <div
                                                    className="h-full rounded-[4px] bg-[#2A6F5F]"
                                                    style={{ width: '25%' }}
                                                />
                                            </div>
                                            <span className="w-10 flex-shrink-0 text-right font-mono text-[12px] text-[#6B6B66] tabular-nums">
                                                3
                                            </span>
                                        </div>

                                        {/* Row 3: 70–79 (count 8 / max 12 -> 66.66%) */}
                                        <div className="flex items-center">
                                            <span className="w-[60px] flex-shrink-0 text-right text-[12px] text-[#6B6B66]">
                                                70–79
                                            </span>
                                            <div className="ml-4 h-5 flex-1 overflow-hidden rounded-[4px] bg-[#E8F1EE]">
                                                <div
                                                    className="h-full rounded-[4px] bg-[#2A6F5F]"
                                                    style={{ width: '66.66%' }}
                                                />
                                            </div>
                                            <span className="w-10 flex-shrink-0 text-right font-mono text-[12px] text-[#6B6B66] tabular-nums">
                                                8
                                            </span>
                                        </div>

                                        {/* Row 4: 80–89 (count 12 / max 12 -> 100%) */}
                                        <div className="flex items-center">
                                            <span className="w-[60px] flex-shrink-0 text-right text-[12px] text-[#6B6B66]">
                                                80–89
                                            </span>
                                            <div className="ml-4 h-5 flex-1 overflow-hidden rounded-[4px] bg-[#E8F1EE]">
                                                <div
                                                    className="h-full rounded-[4px] bg-[#2A6F5F]"
                                                    style={{ width: '100%' }}
                                                />
                                            </div>
                                            <span className="w-10 flex-shrink-0 text-right font-mono text-[12px] text-[#6B6B66] tabular-nums">
                                                12
                                            </span>
                                        </div>

                                        {/* Row 5: 90–100 (count 6 / max 12 -> 50%) */}
                                        <div className="flex items-center">
                                            <span className="w-[60px] flex-shrink-0 text-right text-[12px] text-[#6B6B66]">
                                                90–100
                                            </span>
                                            <div className="ml-4 h-5 flex-1 overflow-hidden rounded-[4px] bg-[#E8F1EE]">
                                                <div
                                                    className="h-full rounded-[4px] bg-[#2A6F5F]"
                                                    style={{ width: '50%' }}
                                                />
                                            </div>
                                            <span className="w-10 flex-shrink-0 text-right font-mono text-[12px] text-[#6B6B66] tabular-nums">
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN (approx 35% -> 4 of 12 cols) */}
                        <div className="flex flex-col gap-6 lg:col-span-4">
                            {/* SUBSECTION E: Kelas Diampu */}
                            <div className="rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] p-6">
                                <h3 className="text-[15px] font-semibold text-[#1C1C1A]">
                                    Kelas Diampu
                                </h3>
                                <p className="mt-0.5 text-[12px] text-[#9A9A94]">
                                    Semester Ganjil 2025/2026
                                </p>

                                <div className="mt-5 divide-y divide-[#E8E6E1]">
                                    {/* Row 1 */}
                                    <div className="flex h-12 items-center justify-between">
                                        <span className="text-[14px] font-medium text-[#1C1C1A]">
                                            XI IPA 1
                                        </span>
                                        <div className="flex items-center gap-1.5 text-[#6B6B66]">
                                            <span className="text-[12px]">
                                                32 siswa
                                            </span>
                                            <svg
                                                className="h-3.5 w-3.5 text-[#9A9A94]"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="flex h-12 items-center justify-between">
                                        <span className="text-[14px] font-medium text-[#1C1C1A]">
                                            XI IPA 2
                                        </span>
                                        <div className="flex items-center gap-1.5 text-[#6B6B66]">
                                            <span className="text-[12px]">
                                                30 siswa
                                            </span>
                                            <svg
                                                className="h-3.5 w-3.5 text-[#9A9A94]"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="flex h-12 items-center justify-between">
                                        <span className="text-[14px] font-medium text-[#1C1C1A]">
                                            XI IPS 1
                                        </span>
                                        <div className="flex items-center gap-1.5 text-[#6B6B66]">
                                            <span className="text-[12px]">
                                                28 siswa
                                            </span>
                                            <svg
                                                className="h-3.5 w-3.5 text-[#9A9A94]"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Row 4 */}
                                    <div className="flex h-12 items-center justify-between">
                                        <span className="text-[14px] font-medium text-[#1C1C1A]">
                                            X-1
                                        </span>
                                        <div className="flex items-center gap-1.5 text-[#6B6B66]">
                                            <span className="text-[12px]">
                                                34 siswa
                                            </span>
                                            <svg
                                                className="h-3.5 w-3.5 text-[#9A9A94]"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <span className="cursor-pointer text-[13px] font-medium text-[#2A6F5F] hover:underline">
                                        Kelola kelas →
                                    </span>
                                </div>
                            </div>

                            {/* SUBSECTION F: Bank Soal */}
                            <div className="rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] p-6">
                                <h3 className="text-[15px] font-semibold text-[#1C1C1A]">
                                    Bank Soal
                                </h3>
                                <p className="mt-0.5 text-[12px] text-[#9A9A94]">
                                    Total 248 soal tersimpan
                                </p>

                                <div className="mt-5 space-y-1">
                                    <div className="flex h-10 items-center justify-between">
                                        <span className="text-[13px] text-[#1C1C1A]">
                                            Matematika
                                        </span>
                                        <span className="font-mono text-[13px] text-[#6B6B66] tabular-nums">
                                            86
                                        </span>
                                    </div>
                                    <div className="flex h-10 items-center justify-between">
                                        <span className="text-[13px] text-[#1C1C1A]">
                                            Fisika
                                        </span>
                                        <span className="font-mono text-[13px] text-[#6B6B66] tabular-nums">
                                            54
                                        </span>
                                    </div>
                                    <div className="flex h-10 items-center justify-between">
                                        <span className="text-[13px] text-[#1C1C1A]">
                                            Biologi
                                        </span>
                                        <span className="font-mono text-[13px] text-[#6B6B66] tabular-nums">
                                            42
                                        </span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="mt-4 h-9 w-full rounded-[6px] bg-[#E8F1EE] px-4 text-[13px] font-medium text-[#2A6F5F] transition-colors hover:bg-[#dce9e5]"
                                >
                                    + Tambah Soal
                                </button>
                            </div>

                            {/* SUBSECTION G: Aktivitas Terbaru */}
                            <div className="rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] p-6">
                                <h3 className="text-[15px] font-semibold text-[#1C1C1A]">
                                    Aktivitas Terbaru
                                </h3>

                                <div className="mt-4 space-y-3.5">
                                    {/* Item 1: Success */}
                                    <div className="flex items-start">
                                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3A7D5C]" />
                                        <div className="ml-3">
                                            <p className="text-[13px] leading-[20px] text-[#1C1C1A]">
                                                Rani menyelesaikan ujian
                                                Matematika
                                            </p>
                                            <p className="text-[11px] text-[#9A9A94]">
                                                10 menit lalu
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 2: Success */}
                                    <div className="flex items-start">
                                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3A7D5C]" />
                                        <div className="ml-3">
                                            <p className="text-[13px] leading-[20px] text-[#1C1C1A]">
                                                Budi mengumpulkan esai Biologi
                                            </p>
                                            <p className="text-[11px] text-[#9A9A94]">
                                                1 jam lalu
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 3: Info */}
                                    <div className="flex items-start">
                                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3D6A99]" />
                                        <div className="ml-3">
                                            <p className="text-[13px] leading-[20px] text-[#1C1C1A]">
                                                Ujian Fisika kelas XI IPA 1
                                                dimulai
                                            </p>
                                            <p className="text-[11px] text-[#9A9A94]">
                                                2 jam lalu
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 4: Neutral */}
                                    <div className="flex items-start">
                                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6B6B66]" />
                                        <div className="ml-3">
                                            <p className="text-[13px] leading-[20px] text-[#1C1C1A]">
                                                Anda mempublikasikan jadwal
                                                ujian Kimia
                                            </p>
                                            <p className="text-[11px] text-[#9A9A94]">
                                                kemarin
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* SECTION 4 — FOOTER */}
                <footer className="mt-12 w-full border-t border-[#E8E6E1] py-6">
                    <div className="mx-auto max-w-[1200px] px-6 text-center sm:px-12">
                        <p className="text-[12px] text-[#9A9A94]">
                            &copy; {new Date().getFullYear()} Nx-Exams · Bantuan
                            · Kebijakan Privasi
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}

GuruDashboard.layout = (page: React.ReactNode) => page;
