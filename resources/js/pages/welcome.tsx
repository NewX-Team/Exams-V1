import { dashboard, login, register } from '@/routes';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

import type { User } from '@/types';

// Opsi Soal Interaktif untuk Mockup Ruang Ujian
const examOptions = [
    {
        key: 'A',
        text: 'Prokariotik memiliki membran inti nyata (contoh: Bakteri)',
        isCorrect: false,
    },
    {
        key: 'B',
        text: 'Eukariotik memiliki membran inti (contoh: Hewan & Tumbuhan)',
        isCorrect: true,
    },
    {
        key: 'C',
        text: 'Keduanya tidak memiliki materi genetik berupa DNA',
        isCorrect: false,
    },
    {
        key: 'D',
        text: 'Prokariotik memiliki organel bermembran kompleks',
        isCorrect: false,
    },
];

export default function Welcome() {
    const { auth } = usePage<{ auth?: { user?: User | null } }>().props;

    // State untuk Mockup Browser Interaktif
    const [selectedOption, setSelectedOption] = useState<string>('B');
    const [activeQuestion, setActiveQuestion] = useState<number>(12);
    const [timerSeconds, setTimerSeconds] = useState<number>(2895); // 48:15
    const [flaggedQuestion, setFlaggedQuestion] = useState<boolean>(false);

    // Timer mundur real-time di mockup
    useEffect(() => {
        const interval = setInterval(() => {
            setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTimer = (totalSec: number) => {
        const mins = Math.floor(totalSec / 60);
        const secs = totalSec % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <>
            <Head title="Nx-Exams — Sistem Ujian Online" />

            {/* Container Utama dengan Palet Warna Khas Nx-Exams */}
            <div className="min-h-screen bg-[#FAFAF7] text-[#1C1C1A] antialiased selection:bg-[#E8F1EE] selection:text-[#2A6F5F]">
                {/* =========================================================================
                    NAVBAR (Sesuai Desain Nx-Exams)
                ========================================================================= */}
                <header className="sticky top-0 z-50 h-16 w-full border-b border-[#E8E6E1] bg-[#FAFAF7]/95 px-6 backdrop-blur-sm sm:px-12 lg:px-16">
                    <div className="mx-auto flex h-full max-w-[1312px] items-center justify-between">
                        {/* Left: Brand Wordmark */}
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="text-[18px] font-semibold tracking-tight text-[#2A6F5F] transition-opacity hover:opacity-90"
                            >
                                Nx-Exams
                            </Link>
                        </div>

                        {/* Center: Menu Navigasi */}
                        <nav className="hidden items-center gap-8 md:flex">
                            <a
                                href="#fitur"
                                className="text-[14px] font-medium text-[#6B6B66] transition-colors hover:text-[#1C1C1A]"
                            >
                                Fitur
                            </a>
                            <a
                                href="#untuk-siapa"
                                className="text-[14px] font-medium text-[#6B6B66] transition-colors hover:text-[#1C1C1A]"
                            >
                                Untuk Siapa
                            </a>
                            <a
                                href="#cara-kerja"
                                className="text-[14px] font-medium text-[#6B6B66] transition-colors hover:text-[#1C1C1A]"
                            >
                                Cara Kerja
                            </a>
                            <a
                                href="#keamanan"
                                className="text-[14px] font-medium text-[#6B6B66] transition-colors hover:text-[#1C1C1A]"
                            >
                                Keamanan
                            </a>
                        </nav>

                        {/* Right: Actions */}
                        <div className="flex items-center gap-4 sm:gap-6">
                            {auth?.user ? (
                                <Link
                                    href={dashboard()}
                                    className="inline-flex h-9 items-center justify-center rounded-[6px] bg-[#2A6F5F] px-[18px] text-[14px] font-medium text-white transition-colors hover:bg-[#235d4f]"
                                >
                                    Buka Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="text-[14px] font-medium text-[#1C1C1A] transition-colors hover:text-[#2A6F5F]"
                                    >
                                        Masuk
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="inline-flex h-9 items-center justify-center rounded-[6px] bg-[#2A6F5F] px-[18px] text-[14px] font-medium text-white transition-colors hover:bg-[#235d4f]"
                                    >
                                        Coba Sekarang
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </header>

                <main className="w-full">
                    {/* =========================================================================
                        HERO SECTION
                    ========================================================================= */}
                    <section className="flex w-full items-center px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
                        <div className="mx-auto grid max-w-[1312px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                            {/* Left Column (55% / 7 cols) */}
                            <div className="flex flex-col justify-center lg:col-span-7">
                                {/* Eyebrow */}
                                <span className="mb-3 font-mono text-[12px] font-medium tracking-[0.08em] text-[#6B6B66] uppercase">
                                    SISTEM UJIAN ONLINE
                                </span>

                                {/* Headline */}
                                <h1 className="max-w-[560px] text-[36px] leading-[44px] font-semibold tracking-tight text-[#1C1C1A] sm:text-[48px] sm:leading-[56px]">
                                    Ujian yang tenang, hasil yang tepercaya.
                                </h1>

                                {/* Subheadline */}
                                <p className="mt-5 max-w-[480px] text-[16px] leading-[26px] text-[#6B6B66] sm:text-[18px] sm:leading-[28px]">
                                    Nx-Exams membantu sekolah, kampus, dan
                                    lembaga kursus menyelenggarakan ujian online
                                    dengan alur yang jelas, aman, dan mudah
                                    dipakai guru maupun murid.
                                </p>

                                {/* CTA Buttons */}
                                <div className="mt-8 flex flex-wrap items-center gap-3">
                                    {auth?.user ? (
                                        <Link
                                            href={dashboard()}
                                            className="inline-flex h-[44px] items-center justify-center rounded-[6px] bg-[#2A6F5F] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#235d4f]"
                                        >
                                            Menuju Ruang Ujian
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={register()}
                                                className="inline-flex h-[44px] items-center justify-center rounded-[6px] bg-[#2A6F5F] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#235d4f]"
                                            >
                                                Mulai Sekarang
                                            </Link>
                                            <a
                                                href="#fitur"
                                                className="inline-flex h-[44px] items-center justify-center rounded-[6px] border border-[#E8E6E1] bg-[#FFFFFF] px-6 text-[15px] font-medium text-[#1C1C1A] transition-colors hover:border-[#9A9A94]"
                                            >
                                                Pelajari Fitur
                                            </a>
                                        </>
                                    )}
                                </div>

                                {/* Social Proof / Note */}
                                <p className="mt-5 text-[13px] text-[#9A9A94]">
                                    Digunakan oleh 120+ institusi pendidikan di
                                    Indonesia.
                                </p>
                            </div>

                            {/* Right Column (45% / 5 cols) - Mockup Jendela Browser Interaktif */}
                            <div className="relative flex items-center justify-center lg:col-span-5">
                                {/* Backdrop Shape Cantik */}
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-[10px] bg-[#E8F1EE] sm:translate-x-4 sm:translate-y-4"
                                />

                                {/* Browser Window Container */}
                                <div className="relative w-full overflow-hidden rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] shadow-[0_12px_32px_rgba(28,28,26,0.08)]">
                                    {/* Browser Top Bar */}
                                    <div className="flex h-8 items-center justify-between border-b border-[#E8E6E1] bg-[#F5F5F2] px-3">
                                        <div className="flex items-center gap-1.5">
                                            <span className="inline-block h-2 w-2 rounded-full bg-[#E8E6E1]" />
                                            <span className="inline-block h-2 w-2 rounded-full bg-[#E8E6E1]" />
                                            <span className="inline-block h-2 w-2 rounded-full bg-[#E8E6E1]" />
                                        </div>
                                        {/* Mockup Address Bar */}
                                        <div className="flex h-5 w-44 items-center rounded-[4px] border border-[#E8E6E1] bg-[#FFFFFF] px-2">
                                            <span className="font-mono text-[10px] tracking-tight text-[#9A9A94]">
                                                app.nx-exams.id/ruang-ujian
                                            </span>
                                        </div>
                                        <div className="w-8" />
                                    </div>

                                    {/* Browser Inner Content: Mini Exam Room Interface */}
                                    <div className="grid grid-cols-1 gap-5 bg-[#FFFFFF] p-5 text-[#1C1C1A] sm:grid-cols-12">
                                        {/* Left: Question area (8 cols di desktop) */}
                                        <div className="flex flex-col justify-between sm:col-span-8">
                                            <div>
                                                <div className="mb-2 flex items-center justify-between">
                                                    <span className="text-[11px] font-medium text-[#6B6B66]">
                                                        Soal {activeQuestion}{' '}
                                                        dari 30
                                                    </span>
                                                    <span className="font-mono text-[11px] text-[#9A9A94]">
                                                        Sisa Waktu:{' '}
                                                        {formatTimer(
                                                            timerSeconds,
                                                        )}
                                                    </span>
                                                </div>

                                                <p className="mb-4 text-[13px] leading-[19px] font-medium text-[#1C1C1A]">
                                                    Jelaskan perbedaan antara
                                                    sel prokariotik dan
                                                    eukariotik beserta
                                                    contohnya.
                                                </p>

                                                {/* Stack Pilihan Jawaban (Bisa Diklik & Interaktif) */}
                                                <div className="space-y-2">
                                                    {examOptions.map((opt) => {
                                                        const isSelected =
                                                            selectedOption ===
                                                            opt.key;
                                                        return (
                                                            <button
                                                                key={opt.key}
                                                                type="button"
                                                                onClick={() =>
                                                                    setSelectedOption(
                                                                        opt.key,
                                                                    )
                                                                }
                                                                className={`flex h-11 w-full cursor-pointer items-center gap-3 rounded-[8px] px-3.5 text-left transition-all ${
                                                                    isSelected
                                                                        ? 'border-[1.5px] border-[#2A6F5F] bg-[#E8F1EE]'
                                                                        : 'border border-[#E8E6E1] bg-[#FFFFFF] hover:border-[#9A9A94]'
                                                                }`}
                                                            >
                                                                <span
                                                                    className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
                                                                        isSelected
                                                                            ? 'border-[#2A6F5F]'
                                                                            : 'border-[#E8E6E1]'
                                                                    }`}
                                                                >
                                                                    {isSelected && (
                                                                        <span className="h-1.5 w-1.5 rounded-full bg-[#2A6F5F]" />
                                                                    )}
                                                                </span>
                                                                <span
                                                                    className={`truncate text-[12px] ${
                                                                        isSelected
                                                                            ? 'font-medium text-[#1C1C1A]'
                                                                            : 'text-[#6B6B66]'
                                                                    }`}
                                                                >
                                                                    {opt.text}
                                                                </span>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Question Bottom Control Indicator */}
                                            <div className="mt-4 flex items-center justify-between border-t border-[#E8E6E1] pt-3 text-[11px]">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setActiveQuestion((q) =>
                                                            Math.max(1, q - 1),
                                                        )
                                                    }
                                                    className="text-[#9A9A94] transition-colors hover:text-[#1C1C1A]"
                                                >
                                                    Sebelumnya
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setFlaggedQuestion(
                                                            !flaggedQuestion,
                                                        )
                                                    }
                                                    className={`font-medium transition-colors ${
                                                        flaggedQuestion
                                                            ? 'text-[#A8721F]'
                                                            : 'text-[#9A9A94] hover:text-[#A8721F]'
                                                    }`}
                                                >
                                                    {flaggedQuestion
                                                        ? 'Ragu-ragu (Aktif)'
                                                        : 'Tandai Ragu'}
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setActiveQuestion((q) =>
                                                            Math.min(30, q + 1),
                                                        )
                                                    }
                                                    className="font-medium text-[#2A6F5F] transition-colors hover:opacity-80"
                                                >
                                                    Selanjutnya
                                                </button>
                                            </div>
                                        </div>

                                        {/* Right: Navigasi Soal (4 cols di desktop) */}
                                        <div className="border-t border-[#E8E6E1] pt-4 sm:col-span-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-4">
                                            <span className="mb-2.5 block text-[11px] font-semibold tracking-wider text-[#6B6B66] uppercase">
                                                Navigasi Soal
                                            </span>

                                            {/* Grid Nomor Soal (5 Kolom x 4 Baris) */}
                                            <div className="grid grid-cols-5 gap-1.5 font-mono">
                                                {/* Baris 1: 1-5 (Sudah Dijawab) */}
                                                {[1, 2, 3, 4, 5].map((num) => (
                                                    <button
                                                        key={num}
                                                        type="button"
                                                        onClick={() =>
                                                            setActiveQuestion(
                                                                num,
                                                            )
                                                        }
                                                        className={`flex h-7 w-7 items-center justify-center rounded-[6px] text-[11px] font-medium transition-all ${
                                                            activeQuestion ===
                                                            num
                                                                ? 'border-2 border-[#2A6F5F] bg-[#E8F1EE] font-semibold text-[#2A6F5F]'
                                                                : 'bg-[#E8F1EE] text-[#2A6F5F] hover:opacity-80'
                                                        }`}
                                                    >
                                                        {num}
                                                    </button>
                                                ))}

                                                {/* Baris 2: 6-10 (No 7 Ragu-ragu) */}
                                                {[6, 7, 8, 9, 10].map((num) => {
                                                    const isFlagged = num === 7;
                                                    const isCurrent =
                                                        activeQuestion === num;
                                                    return (
                                                        <button
                                                            key={num}
                                                            type="button"
                                                            onClick={() =>
                                                                setActiveQuestion(
                                                                    num,
                                                                )
                                                            }
                                                            className={`flex h-7 w-7 items-center justify-center rounded-[6px] text-[11px] font-medium transition-all ${
                                                                isCurrent
                                                                    ? 'border-2 border-[#2A6F5F] bg-[#E8F1EE] font-semibold text-[#2A6F5F]'
                                                                    : isFlagged
                                                                      ? 'border border-[#A8721F] text-[#A8721F] hover:bg-[#A8721F]/10'
                                                                      : 'bg-[#E8F1EE] text-[#2A6F5F] hover:opacity-80'
                                                            }`}
                                                        >
                                                            {num}
                                                        </button>
                                                    );
                                                })}

                                                {/* Baris 3: 11-15 (No 11 Sudah, No 12 Aktif, 13-15 Belum) */}
                                                {[11, 12, 13, 14, 15].map(
                                                    (num) => {
                                                        const isCurrent =
                                                            activeQuestion ===
                                                            num;
                                                        const isAnswered =
                                                            num <= 11;
                                                        return (
                                                            <button
                                                                key={num}
                                                                type="button"
                                                                onClick={() =>
                                                                    setActiveQuestion(
                                                                        num,
                                                                    )
                                                                }
                                                                className={`flex h-7 w-7 items-center justify-center rounded-[6px] text-[11px] transition-all ${
                                                                    isCurrent
                                                                        ? 'border-2 border-[#2A6F5F] bg-[#E8F1EE] font-semibold text-[#2A6F5F]'
                                                                        : isAnswered
                                                                          ? 'bg-[#E8F1EE] font-medium text-[#2A6F5F] hover:opacity-80'
                                                                          : 'border border-[#E8E6E1] bg-[#FFFFFF] text-[#6B6B66] hover:border-[#9A9A94]'
                                                                }`}
                                                            >
                                                                {num}
                                                            </button>
                                                        );
                                                    },
                                                )}

                                                {/* Baris 4: 16-20 (Belum Dijawab) */}
                                                {[16, 17, 18, 19, 20].map(
                                                    (num) => {
                                                        const isCurrent =
                                                            activeQuestion ===
                                                            num;
                                                        return (
                                                            <button
                                                                key={num}
                                                                type="button"
                                                                onClick={() =>
                                                                    setActiveQuestion(
                                                                        num,
                                                                    )
                                                                }
                                                                className={`flex h-7 w-7 items-center justify-center rounded-[6px] text-[11px] transition-all ${
                                                                    isCurrent
                                                                        ? 'border-2 border-[#2A6F5F] bg-[#E8F1EE] font-semibold text-[#2A6F5F]'
                                                                        : 'border border-[#E8E6E1] bg-[#FFFFFF] text-[#6B6B66] hover:border-[#9A9A94]'
                                                                }`}
                                                            >
                                                                {num}
                                                            </button>
                                                        );
                                                    },
                                                )}
                                            </div>

                                            {/* Legend */}
                                            <div className="mt-3.5 space-y-1.5 border-t border-[#E8E6E1] pt-2.5 text-[9px] text-[#9A9A94]">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="h-2 w-2 rounded-[2px] border border-[#2A6F5F] bg-[#E8F1EE]" />
                                                    <span>Sudah dijawab</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="h-2 w-2 rounded-[2px] border border-[#A8721F]" />
                                                    <span>Ragu-ragu</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="h-2 w-2 rounded-[2px] border border-[#E8E6E1] bg-[#FFFFFF]" />
                                                    <span>Belum dijawab</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* =========================================================================
                        SECTION FITUR (Satu sistem untuk seluruh alur ujian)
                    ========================================================================= */}
                    <section
                        id="fitur"
                        className="w-full border-t border-[#E8E6E1] bg-[#FFFFFF] px-6 py-20 sm:px-12 lg:px-16"
                    >
                        <div className="mx-auto max-w-[1312px]">
                            <div className="text-center">
                                <h2 className="text-[24px] font-semibold tracking-tight text-[#1C1C1A]">
                                    Satu sistem untuk seluruh alur ujian.
                                </h2>
                                <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[24px] text-[#6B6B66]">
                                    Dari menyusun soal hingga membagikan hasil,
                                    semua dalam satu tempat.
                                </p>
                            </div>

                            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
                                <div>
                                    <div className="h-[2px] w-10 rounded-full bg-[#2A6F5F]" />
                                    <h3 className="mt-5 text-[18px] font-semibold text-[#1C1C1A]">
                                        Bank soal terpusat
                                    </h3>
                                    <p className="mt-2 text-[15px] leading-[24px] text-[#6B6B66]">
                                        Guru menyusun soal, mengatur bobot, dan
                                        menjadwalkan ujian dalam satu tempat.
                                    </p>
                                </div>

                                <div>
                                    <div className="h-[2px] w-10 rounded-full bg-[#2A6F5F]" />
                                    <h3 className="mt-5 text-[18px] font-semibold text-[#1C1C1A]">
                                        Ruang ujian yang fokus
                                    </h3>
                                    <p className="mt-2 text-[15px] leading-[24px] text-[#6B6B66]">
                                        Antarmuka bersih tanpa distraksi, dengan
                                        timer, autosave, dan navigasi soal yang
                                        jelas.
                                    </p>
                                </div>

                                <div>
                                    <div className="h-[2px] w-10 rounded-full bg-[#2A6F5F]" />
                                    <h3 className="mt-5 text-[18px] font-semibold text-[#1C1C1A]">
                                        Hasil yang transparan
                                    </h3>
                                    <p className="mt-2 text-[15px] leading-[24px] text-[#6B6B66]">
                                        Nilai otomatis untuk pilihan ganda,
                                        koreksi manual untuk esai, laporan
                                        langsung ke guru dan murid.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* =========================================================================
                        SECTION UNTUK SIAPA (Dirancang untuk tiga peran)
                    ========================================================================= */}
                    <section
                        id="untuk-siapa"
                        className="w-full border-t border-[#E8E6E1] bg-[#FAFAF7] px-6 py-20 sm:px-12 lg:px-16"
                    >
                        <div className="mx-auto max-w-[1312px]">
                            <div className="text-center">
                                <h2 className="text-[24px] font-semibold tracking-tight text-[#1C1C1A]">
                                    Dirancang untuk tiga peran.
                                </h2>
                                <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[24px] text-[#6B6B66]">
                                    Setiap peran punya tampilan dan alur yang
                                    disesuaikan.
                                </p>
                            </div>

                            <div className="mx-auto mt-12 grid max-w-[1312px] grid-cols-1 gap-6 md:grid-cols-3">
                                {/* Kartu 1: Murid */}
                                <div className="rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] p-8 shadow-xs">
                                    <span className="inline-block rounded-full bg-[#E8F1EE] px-3 py-1 text-[12px] font-medium text-[#2A6F5F]">
                                        Murid
                                    </span>
                                    <h3 className="mt-5 text-[20px] font-semibold text-[#1C1C1A]">
                                        Kerjakan ujian tanpa panik.
                                    </h3>
                                    <p className="mt-2.5 text-[15px] leading-[24px] text-[#6B6B66]">
                                        Lihat jadwal, ikut ujian, dan terima
                                        hasil — semua dari satu dashboard.
                                    </p>

                                    {/* Mockup Mini UI Murid */}
                                    <div className="mt-6 rounded-[8px] border border-[#E8E6E1] bg-[#FAFAF7] p-4">
                                        <div className="grid w-max grid-cols-4 gap-1">
                                            <div className="h-2 w-2 rounded-[2px] bg-[#E8E6E1]" />
                                            <div className="h-2 w-2 rounded-[2px] bg-[#2A6F5F]" />
                                            <div className="h-2 w-2 rounded-[2px] bg-[#E8E6E1]" />
                                            <div className="h-2 w-2 rounded-[2px] bg-[#E8E6E1]" />
                                            <div className="h-2 w-2 rounded-[2px] bg-[#E8E6E1]" />
                                            <div className="h-2 w-2 rounded-[2px] bg-[#E8E6E1]" />
                                            <div className="h-2 w-2 rounded-[2px] bg-[#2A6F5F]" />
                                            <div className="h-2 w-2 rounded-[2px] bg-[#E8E6E1]" />
                                            <div className="h-2 w-2 rounded-[2px] bg-[#E8E6E1]" />
                                            <div className="h-2 w-2 rounded-[2px] bg-[#E8E6E1]" />
                                            <div className="h-2 w-2 rounded-[2px] bg-[#E8E6E1]" />
                                            <div className="h-2 w-2 rounded-[2px] bg-[#E8E6E1]" />
                                        </div>
                                        <div className="mt-3.5 space-y-2">
                                            <div className="flex h-2 w-full overflow-hidden rounded-[4px] bg-[#E8E6E1]">
                                                <div
                                                    className="h-full rounded-[4px] bg-[#2A6F5F]"
                                                    style={{ width: '65%' }}
                                                />
                                            </div>
                                            <div className="h-2 w-full rounded-[4px] bg-[#E8E6E1]" />
                                            <div className="h-2 w-full rounded-[4px] bg-[#E8E6E1]" />
                                        </div>
                                    </div>
                                </div>

                                {/* Kartu 2: Guru */}
                                <div className="rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] p-8 shadow-xs">
                                    <span className="inline-block rounded-full bg-[#E8F1EE] px-3 py-1 text-[12px] font-medium text-[#2A6F5F]">
                                        Guru
                                    </span>
                                    <h3 className="mt-5 text-[20px] font-semibold text-[#1C1C1A]">
                                        Ajar, bukan berkutat di spreadsheet.
                                    </h3>
                                    <p className="mt-2.5 text-[15px] leading-[24px] text-[#6B6B66]">
                                        Buat soal, pantau peserta, koreksi esai,
                                        dan unduh laporan.
                                    </p>

                                    {/* Mockup Mini UI Guru */}
                                    <div className="mt-6 flex items-center justify-between rounded-[8px] border border-[#E8E6E1] bg-[#FAFAF7] p-4">
                                        <div className="flex h-12 items-end gap-2">
                                            <div
                                                className="w-2 rounded-[4px] bg-[#E8E6E1]"
                                                style={{ height: '18px' }}
                                            />
                                            <div
                                                className="w-2 rounded-[4px] bg-[#E8E6E1]"
                                                style={{ height: '32px' }}
                                            />
                                            <div
                                                className="w-2 rounded-[4px] bg-[#2A6F5F]"
                                                style={{ height: '48px' }}
                                            />
                                            <div
                                                className="w-2 rounded-[4px] bg-[#E8E6E1]"
                                                style={{ height: '24px' }}
                                            />
                                        </div>
                                        <div className="relative flex h-6 w-6 items-center justify-center rounded-[4px] border-[1.5px] border-[#E8E6E1]">
                                            <div className="absolute h-[1.5px] w-2.5 bg-[#E8E6E1]" />
                                            <div className="absolute h-2.5 w-[1.5px] bg-[#E8E6E1]" />
                                        </div>
                                    </div>
                                </div>

                                {/* Kartu 3: Admin */}
                                <div className="rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] p-8 shadow-xs">
                                    <span className="inline-block rounded-full bg-[#E8F1EE] px-3 py-1 text-[12px] font-medium text-[#2A6F5F]">
                                        Admin
                                    </span>
                                    <h3 className="mt-5 text-[20px] font-semibold text-[#1C1C1A]">
                                        Kendali penuh, tanpa kerumitan.
                                    </h3>
                                    <p className="mt-2.5 text-[15px] leading-[24px] text-[#6B6B66]">
                                        Kelola pengguna, kelas, izin, dan audit
                                        aktivitas.
                                    </p>

                                    {/* Mockup Mini UI Admin */}
                                    <div className="mt-6 rounded-[8px] border border-[#E8E6E1] bg-[#FAFAF7] p-4">
                                        <div className="mb-2.5 h-[3px] w-full rounded-[2px] bg-[#D5D3CC]" />
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2A6F5F]" />
                                                <div className="h-[1.5px] grow rounded-full bg-[#E8E6E1]" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8E6E1]" />
                                                <div className="h-[1.5px] grow rounded-full bg-[#E8E6E1]" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8E6E1]" />
                                                <div className="h-[1.5px] grow rounded-full bg-[#E8E6E1]" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8E6E1]" />
                                                <div className="h-[1.5px] grow rounded-full bg-[#E8E6E1]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* =========================================================================
                        SECTION CARA KERJA (Tiga langkah, tanpa kerumitan)
                    ========================================================================= */}
                    <section
                        id="cara-kerja"
                        className="w-full border-t border-[#E8E6E1] bg-[#FFFFFF] px-6 py-20 sm:px-12 lg:px-16"
                    >
                        <div className="mx-auto max-w-[1312px]">
                            <div className="text-center">
                                <h2 className="text-[24px] font-semibold tracking-tight text-[#1C1C1A]">
                                    Tiga langkah, tanpa kerumitan.
                                </h2>
                                <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[24px] text-[#6B6B66]">
                                    Dari persiapan hingga hasil, semuanya jelas.
                                </p>
                            </div>

                            <div className="mt-16 flex flex-col items-start justify-between gap-8 sm:gap-12 md:flex-row">
                                <div className="flex-1">
                                    <div className="font-mono text-[32px] leading-none font-medium text-[#2A6F5F]/35">
                                        01
                                    </div>
                                    <h3 className="mt-4 text-[18px] font-semibold text-[#1C1C1A]">
                                        Siapkan
                                    </h3>
                                    <p className="mt-2 text-[15px] leading-[24px] text-[#6B6B66]">
                                        Guru menyusun soal, mengatur bobot, dan
                                        menjadwalkan ujian untuk kelas yang
                                        dipilih.
                                    </p>
                                </div>

                                <div className="hidden h-[1px] w-8 shrink-0 bg-[#E8E6E1] md:mt-4 md:block" />

                                <div className="flex-1">
                                    <div className="font-mono text-[32px] leading-none font-medium text-[#2A6F5F]/35">
                                        02
                                    </div>
                                    <h3 className="mt-4 text-[18px] font-semibold text-[#1C1C1A]">
                                        Kerjakan
                                    </h3>
                                    <p className="mt-2 text-[15px] leading-[24px] text-[#6B6B66]">
                                        Murid masuk ke ruang ujian, menjawab
                                        dengan tenang, jawaban tersimpan
                                        otomatis.
                                    </p>
                                </div>

                                <div className="hidden h-[1px] w-8 shrink-0 bg-[#E8E6E1] md:mt-4 md:block" />

                                <div className="flex-1">
                                    <div className="font-mono text-[32px] leading-none font-medium text-[#2A6F5F]/35">
                                        03
                                    </div>
                                    <h3 className="mt-4 text-[18px] font-semibold text-[#1C1C1A]">
                                        Tinjau
                                    </h3>
                                    <p className="mt-2 text-[15px] leading-[24px] text-[#6B6B66]">
                                        Nilai tersedia langsung, guru meninjau
                                        esai, laporan bisa diunduh kapan saja.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* =========================================================================
                        SECTION KEAMANAN (Improvisasi Nilai Tambah: Memenuhi Anchor #keamanan)
                    ========================================================================= */}
                    <section
                        id="keamanan"
                        className="w-full border-t border-[#E8E6E1] bg-[#FAFAF7] px-6 py-20 sm:px-12 lg:px-16"
                    >
                        <div className="mx-auto max-w-[1312px]">
                            <div className="text-center">
                                <span className="font-mono text-[12px] font-medium tracking-[0.08em] text-[#6B6B66] uppercase">
                                    INTEGRITAS &amp; RELIABILITAS
                                </span>
                                <h2 className="mt-2 text-[24px] font-semibold tracking-tight text-[#1C1C1A]">
                                    Aman untuk sekolah, adil bagi seluruh murid.
                                </h2>
                                <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[24px] text-[#6B6B66]">
                                    Dirancang dengan standar proteksi data dan
                                    arsitektur toleransi offline agar proses
                                    evaluasi berjalan jujur tanpa hambatan
                                    koneksi.
                                </p>
                            </div>

                            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                <div className="rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] p-6">
                                    <span className="font-mono text-[11px] font-medium text-[#2A6F5F] uppercase">
                                        [ TOLERANSI OFFLINE ]
                                    </span>
                                    <h4 className="mt-3 text-[16px] font-semibold text-[#1C1C1A]">
                                        Cadangan Lokal Cerdas
                                    </h4>
                                    <p className="mt-2 text-[13px] leading-[20px] text-[#6B6B66]">
                                        Jawaban tetap aman tersimpan di memori
                                        peramban saat sinyal drop, dan langsung
                                        disinkronkan saat terhubung kembali.
                                    </p>
                                </div>

                                <div className="rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] p-6">
                                    <span className="font-mono text-[11px] font-medium text-[#2A6F5F] uppercase">
                                        [ JAM TERPUSAT ]
                                    </span>
                                    <h4 className="mt-3 text-[16px] font-semibold text-[#1C1C1A]">
                                        Validasi Waktu Server
                                    </h4>
                                    <p className="mt-2 text-[13px] leading-[20px] text-[#6B6B66]">
                                        Pewaktuan dihitung terpusat di server
                                        agar waktu ujian berjalan adil tanpa
                                        bisa dimanipulasi jam lokal gawai.
                                    </p>
                                </div>

                                <div className="rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] p-6">
                                    <span className="font-mono text-[11px] font-medium text-[#2A6F5F] uppercase">
                                        [ PROTEKSI SESI ]
                                    </span>
                                    <h4 className="mt-3 text-[16px] font-semibold text-[#1C1C1A]">
                                        Satu Akun Satu Gawai
                                    </h4>
                                    <p className="mt-2 text-[13px] leading-[20px] text-[#6B6B66]">
                                        Mencegah pembukaan akun di dua perangkat
                                        bersamaan, menjamin ujian dikerjakan
                                        oleh peserta yang sah.
                                    </p>
                                </div>

                                <div className="rounded-[10px] border border-[#E8E6E1] bg-[#FFFFFF] p-6">
                                    <span className="font-mono text-[11px] font-medium text-[#2A6F5F] uppercase">
                                        [ PENGACAKAN BUTIR ]
                                    </span>
                                    <h4 className="mt-3 text-[16px] font-semibold text-[#1C1C1A]">
                                        Pengacakan Soal &amp; Opsi
                                    </h4>
                                    <p className="mt-2 text-[13px] leading-[20px] text-[#6B6B66]">
                                        Urutan butir soal dan opsi pilihan ganda
                                        diacak otomatis per murid untuk menjaga
                                        suasana ujian tetap kondusif.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* =========================================================================
                        CALL TO ACTION (Banner Hijau Tua Khas Nx-Exams)
                    ========================================================================= */}
                    <section className="w-full bg-[#FAFAF7] px-6 pt-10 pb-20 sm:px-12 lg:px-16">
                        <div className="mx-auto max-w-[1312px]">
                            <div className="w-full rounded-[12px] bg-[#2A6F5F] px-8 py-16 text-center text-white sm:px-12">
                                <h2 className="text-[28px] font-semibold tracking-tight text-white sm:text-[32px]">
                                    Siap memulai ujian pertama Anda?
                                </h2>
                                <p className="mx-auto mt-3 max-w-[520px] text-[16px] leading-[26px] text-white/80">
                                    Tidak perlu kartu kredit. Cukup akun dari
                                    sekolah atau lembaga Anda.
                                </p>
                                <div className="mt-8 flex flex-wrap justify-center gap-3">
                                    {auth?.user ? (
                                        <Link
                                            href={dashboard()}
                                            className="inline-flex h-[44px] items-center justify-center rounded-[6px] bg-[#FFFFFF] px-7 text-[15px] font-medium text-[#2A6F5F] transition-colors hover:bg-[#F5F5F2]"
                                        >
                                            Buka Dashboard Saya
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={register()}
                                                className="inline-flex h-[44px] items-center justify-center rounded-[6px] bg-[#FFFFFF] px-7 text-[15px] font-medium text-[#2A6F5F] transition-colors hover:bg-[#F5F5F2]"
                                            >
                                                Daftar Sekarang
                                            </Link>
                                            <Link
                                                href={login()}
                                                className="inline-flex h-[44px] items-center justify-center rounded-[6px] border border-white/40 bg-transparent px-7 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
                                            >
                                                Masuk ke Akun
                                            </Link>
                                        </>
                                    )}
                                </div>
                                <p className="mt-5 text-[13px] text-white/60">
                                    Butuh bantuan atau integrasi sekolah?
                                    admin@nx-exams.id
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

                {/* =========================================================================
                    FOOTER (Sesuai Desain Nx-Exams)
                ========================================================================= */}
                <footer className="w-full border-t border-[#E8E6E1] bg-[#FAFAF7] px-6 py-12 sm:px-12 lg:px-16">
                    <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-12 sm:gap-16 md:grid-cols-12">
                        {/* Left Column (Brand & Copyright) */}
                        <div className="md:col-span-6">
                            <span className="text-[18px] font-semibold tracking-tight text-[#2A6F5F]">
                                Nx-Exams
                            </span>
                            <p className="mt-3 max-w-[320px] text-[13px] leading-[20px] text-[#6B6B66]">
                                Sistem ujian online untuk sekolah, kampus, dan
                                lembaga kursus di Indonesia.
                            </p>
                            <p className="mt-6 text-[12px] text-[#9A9A94]">
                                &copy; {new Date().getFullYear()} Nx-Exams.
                                Seluruh hak cipta dilindungi.
                            </p>
                        </div>

                        {/* Middle Column (Produk) */}
                        <div className="md:col-span-3">
                            <span className="font-mono text-[12px] font-semibold tracking-[0.08em] text-[#9A9A94] uppercase">
                                Produk
                            </span>
                            <div className="mt-4 flex flex-col gap-2.5">
                                <a
                                    href="#fitur"
                                    className="text-[14px] text-[#6B6B66] transition-colors hover:text-[#1C1C1A]"
                                >
                                    Fitur
                                </a>
                                <a
                                    href="#untuk-siapa"
                                    className="text-[14px] text-[#6B6B66] transition-colors hover:text-[#1C1C1A]"
                                >
                                    Untuk Guru
                                </a>
                                <a
                                    href="#untuk-siapa"
                                    className="text-[14px] text-[#6B6B66] transition-colors hover:text-[#1C1C1A]"
                                >
                                    Untuk Murid
                                </a>
                                <a
                                    href="#untuk-siapa"
                                    className="text-[14px] text-[#6B6B66] transition-colors hover:text-[#1C1C1A]"
                                >
                                    Untuk Admin
                                </a>
                            </div>
                        </div>

                        {/* Right Column (Bantuan & Kebijakan) */}
                        <div className="md:col-span-3">
                            <span className="font-mono text-[12px] font-semibold tracking-[0.08em] text-[#9A9A94] uppercase">
                                Bantuan
                            </span>
                            <div className="mt-4 flex flex-col gap-2.5">
                                <a
                                    href="#keamanan"
                                    className="text-[14px] text-[#6B6B66] transition-colors hover:text-[#1C1C1A]"
                                >
                                    Panduan &amp; Keamanan
                                </a>
                                <a
                                    href="mailto:admin@nx-exams.id"
                                    className="text-[14px] text-[#6B6B66] transition-colors hover:text-[#1C1C1A]"
                                >
                                    Kontak
                                </a>
                                <span className="text-[14px] text-[#6B6B66]">
                                    Kebijakan Privasi
                                </span>
                                <span className="text-[14px] text-[#6B6B66]">
                                    Syarat Layanan
                                </span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
