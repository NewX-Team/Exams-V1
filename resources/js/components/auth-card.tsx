import InputError from '@/components/input-error';
import { request as forgotPasswordRequest } from '@/routes/password';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

type AuthCardProps = {
    defaultTab?: 'login' | 'register';
    status?: string;
    canResetPassword?: boolean;
};

export default function AuthCard({
    defaultTab = 'login',
    status,
    canResetPassword = true,
}: AuthCardProps) {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>(
        defaultTab,
    );
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);

    // Sinkronisasi tab jika defaultTab berubah (misal navigasi browser)
    useEffect(() => {
        setActiveTab(defaultTab);
    }, [defaultTab]);

    // Transisi tab yang mulus dengan pembaruan URL peramban tanpa reload
    const switchTab = (tab: 'login' | 'register') => {
        if (tab === activeTab) return;
        setActiveTab(tab);
        window.history.replaceState(
            null,
            '',
            tab === 'login' ? '/login' : '/register',
        );
    };

    // Form Login Manual
    const loginForm = useForm({
        email: '',
        password: '',
        remember: true,
    });

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        loginForm.post('/login', {
            onFinish: () => loginForm.reset('password'),
        });
    };

    // Form Registrasi Murid
    const registerForm = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        registerForm.post('/register', {
            onFinish: () =>
                registerForm.reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head
                title={
                    activeTab === 'login'
                        ? 'Masuk ke Akun — Nx-Exams'
                        : 'Daftar Akun Murid — Nx-Exams'
                }
            />

            <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAF7] px-6 py-12 text-[#1C1C1A] selection:bg-[#E8F1EE] selection:text-[#2A6F5F] md:px-12">
                {/* Kartu Autentikasi Utama Nx-Exams */}
                <main className="flex w-full max-w-[420px] flex-col rounded-[10px] border border-[#E8E6E1] bg-white p-8 shadow-xs sm:p-10">
                    {/* Brand Wordmark */}
                    <div className="text-center">
                        <Link
                            href="/"
                            className="text-[20px] font-semibold tracking-tight text-[#2A6F5F] transition-opacity hover:opacity-90"
                        >
                            Nx-Exams
                        </Link>
                    </div>

                    {/* Header Block dengan Transisi Teks yang Mulus */}
                    <header className="mt-8 text-center">
                        <div className="relative min-h-[60px]">
                            {/* Judul & Deskripsi Login */}
                            <div
                                className={`transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                                    activeTab === 'login'
                                        ? 'pointer-events-auto translate-y-0 opacity-100'
                                        : 'pointer-events-none absolute inset-0 -translate-y-2 opacity-0'
                                }`}
                            >
                                <h1 className="text-[22px] font-semibold tracking-tight text-[#1C1C1A]">
                                    Masuk ke akun Anda
                                </h1>
                                <p className="mx-auto mt-2 max-w-[320px] text-[14px] leading-[22px] text-[#6B6B66]">
                                    Gunakan akun yang diberikan sekolah atau
                                    lembaga Anda.
                                </p>
                            </div>

                            {/* Judul & Deskripsi Register */}
                            <div
                                className={`transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                                    activeTab === 'register'
                                        ? 'pointer-events-auto translate-y-0 opacity-100'
                                        : 'pointer-events-none absolute inset-0 translate-y-2 opacity-0'
                                }`}
                            >
                                <h1 className="text-[22px] font-semibold tracking-tight text-[#1C1C1A]">
                                    Daftar Akun Murid
                                </h1>
                                <p className="mx-auto mt-2 max-w-[320px] text-[14px] leading-[22px] text-[#6B6B66]">
                                    Pendaftaran mandiri peserta untuk mulai
                                    mengikuti ujian online.
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* Tab Switcher Interaktif dengan Indikator Geser (Sliding Pill) Modern */}
                    <nav
                        aria-label="Tipe Masuk"
                        className="relative mt-6 flex h-10 w-full items-center rounded-[8px] bg-[#F5F4F0] p-[3px] select-none"
                    >
                        {/* Elemen Slider Putih yang Bergeser Mulus */}
                        <div
                            className="absolute top-[3px] bottom-[3px] w-[calc(50%-3px)] rounded-[6px] bg-white shadow-xs transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                            style={{
                                transform:
                                    activeTab === 'login'
                                        ? 'translateX(0%)'
                                        : 'translateX(100%)',
                            }}
                        />

                        {/* Tombol Tab Masuk */}
                        <button
                            type="button"
                            onClick={() => switchTab('login')}
                            className={`relative z-10 flex flex-1 items-center justify-center text-[13px] font-semibold transition-colors duration-200 ${
                                activeTab === 'login'
                                    ? 'text-[#1C1C1A]'
                                    : 'text-[#6B6B66] hover:text-[#1C1C1A]'
                            }`}
                        >
                            Masuk
                        </button>

                        {/* Tombol Tab Daftar */}
                        <button
                            type="button"
                            onClick={() => switchTab('register')}
                            className={`relative z-10 flex flex-1 items-center justify-center text-[13px] font-semibold transition-colors duration-200 ${
                                activeTab === 'register'
                                    ? 'text-[#1C1C1A]'
                                    : 'text-[#6B6B66] hover:text-[#1C1C1A]'
                            }`}
                        >
                            Daftar
                        </button>
                    </nav>

                    {/* Pesan Status Sesi */}
                    {status && activeTab === 'login' && (
                        <div className="mt-5 rounded-[6px] border border-emerald-200 bg-emerald-50 p-3 text-center text-xs font-medium text-emerald-800">
                            {status}
                        </div>
                    )}

                    {/* Container Formulir dengan Transisi Cross-Fade & Slide */}
                    <div className="relative mt-6 overflow-hidden">
                        {/* ========================================================
                            FORMULIR 1: LOGIN MANUAL
                        ======================================================== */}
                        <div
                            className={`transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                                activeTab === 'login'
                                    ? 'pointer-events-auto translate-x-0 opacity-100'
                                    : 'pointer-events-none absolute inset-0 -translate-x-8 opacity-0'
                            }`}
                        >
                            <form
                                onSubmit={handleLoginSubmit}
                                className="flex flex-col space-y-4"
                            >
                                {/* Input Email */}
                                <div>
                                    <label
                                        htmlFor="login-email"
                                        className="mb-1.5 block text-left text-[13px] font-medium text-[#1C1C1A]"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="login-email"
                                        type="email"
                                        required
                                        value={loginForm.data.email}
                                        onChange={(e) =>
                                            loginForm.setData(
                                                'email',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="nama@sekolah.sch.id"
                                        autoComplete="email"
                                        className="h-[44px] w-full rounded-[6px] border border-[#E8E6E1] bg-white px-[14px] text-[14px] text-[#1C1C1A] placeholder-[#9A9A94] transition-colors outline-none focus:border-[#2A6F5F]"
                                    />
                                    <InputError
                                        message={loginForm.errors.email}
                                        className="mt-1"
                                    />
                                </div>

                                {/* Input Kata Sandi */}
                                <div>
                                    <div className="mb-1.5 flex items-center justify-between">
                                        <label
                                            htmlFor="login-password"
                                            className="text-[13px] font-medium text-[#1C1C1A]"
                                        >
                                            Kata Sandi
                                        </label>
                                        {canResetPassword && (
                                            <Link
                                                href={forgotPasswordRequest()}
                                                className="text-[12px] font-medium text-[#2A6F5F] hover:underline"
                                            >
                                                Lupa kata sandi?
                                            </Link>
                                        )}
                                    </div>
                                    <div className="relative w-full">
                                        <input
                                            id="login-password"
                                            type={
                                                showLoginPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            required
                                            value={loginForm.data.password}
                                            onChange={(e) =>
                                                loginForm.setData(
                                                    'password',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="••••••••"
                                            autoComplete="current-password"
                                            className="h-[44px] w-full rounded-[6px] border border-[#E8E6E1] bg-white pr-[74px] pl-[14px] text-[14px] text-[#1C1C1A] placeholder-[#9A9A94] transition-colors outline-none focus:border-[#2A6F5F]"
                                        />
                                        <button
                                            type="button"
                                            tabIndex={-1}
                                            onClick={() =>
                                                setShowLoginPassword(
                                                    !showLoginPassword,
                                                )
                                            }
                                            className="absolute top-1/2 right-[12px] -translate-y-1/2 font-mono text-[11px] font-semibold text-[#6B6B66] hover:text-[#1C1C1A]"
                                        >
                                            {showLoginPassword
                                                ? '[ Sembunyi ]'
                                                : '[ Lihat ]'}
                                        </button>
                                    </div>
                                    <InputError
                                        message={loginForm.errors.password}
                                        className="mt-1"
                                    />
                                </div>

                                {/* Checkbox Ingat Saya */}
                                <div className="pt-0.5">
                                    <label className="flex cursor-pointer items-center gap-[10px] select-none">
                                        <input
                                            id="login-remember"
                                            type="checkbox"
                                            checked={loginForm.data.remember}
                                            onChange={(e) =>
                                                loginForm.setData(
                                                    'remember',
                                                    e.target.checked,
                                                )
                                            }
                                            className="h-4 w-4 rounded-[4px] border-[#E8E6E1] text-[#2A6F5F] focus:ring-[#2A6F5F]"
                                        />
                                        <span className="text-[13px] text-[#1C1C1A]">
                                            Ingat saya di perangkat ini
                                        </span>
                                    </label>
                                </div>

                                {/* Tombol Masuk */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={loginForm.processing}
                                        className="flex h-[44px] w-full items-center justify-center rounded-[6px] bg-[#2A6F5F] text-[14px] font-medium text-white transition-colors hover:bg-[#215A4C] active:bg-[#19443A] disabled:opacity-50"
                                    >
                                        {loginForm.processing
                                            ? 'Memproses...'
                                            : 'Masuk'}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* ========================================================
                            FORMULIR 2: REGISTRASI KHUSUS MURID
                        ======================================================== */}
                        <div
                            className={`transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                                activeTab === 'register'
                                    ? 'pointer-events-auto translate-x-0 opacity-100'
                                    : 'pointer-events-none absolute inset-0 translate-x-8 opacity-0'
                            }`}
                        >
                            {/* Penjelasan Peran Murid */}
                            <div className="mb-4 rounded-[8px] border border-sky-200 bg-sky-50/70 p-3 text-xs leading-relaxed text-sky-950">
                                <span className="font-bold">
                                    Khusus Akun Murid:
                                </span>{' '}
                                Pendaftaran ini otomatis menetapkan peran
                                sebagai peserta ujian.
                            </div>

                            <form
                                onSubmit={handleRegisterSubmit}
                                className="flex flex-col space-y-3.5"
                            >
                                {/* Nama Lengkap */}
                                <div>
                                    <label
                                        htmlFor="reg-name"
                                        className="mb-1 block text-left text-[13px] font-medium text-[#1C1C1A]"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        id="reg-name"
                                        type="text"
                                        required
                                        value={registerForm.data.name}
                                        onChange={(e) =>
                                            registerForm.setData(
                                                'name',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Contoh: Ahmad Fauzi"
                                        autoComplete="name"
                                        className="h-[42px] w-full rounded-[6px] border border-[#E8E6E1] bg-white px-[14px] text-[14px] text-[#1C1C1A] placeholder-[#9A9A94] transition-colors outline-none focus:border-[#2A6F5F]"
                                    />
                                    <InputError
                                        message={registerForm.errors.name}
                                        className="mt-1"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="reg-email"
                                        className="mb-1 block text-left text-[13px] font-medium text-[#1C1C1A]"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="reg-email"
                                        type="email"
                                        required
                                        value={registerForm.data.email}
                                        onChange={(e) =>
                                            registerForm.setData(
                                                'email',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="murid@sekolah.sch.id"
                                        autoComplete="email"
                                        className="h-[42px] w-full rounded-[6px] border border-[#E8E6E1] bg-white px-[14px] text-[14px] text-[#1C1C1A] placeholder-[#9A9A94] transition-colors outline-none focus:border-[#2A6F5F]"
                                    />
                                    <InputError
                                        message={registerForm.errors.email}
                                        className="mt-1"
                                    />
                                </div>

                                {/* Kata Sandi */}
                                <div>
                                    <div className="mb-1 flex items-center justify-between">
                                        <label
                                            htmlFor="reg-password"
                                            className="text-[13px] font-medium text-[#1C1C1A]"
                                        >
                                            Kata Sandi
                                        </label>
                                        <button
                                            type="button"
                                            tabIndex={-1}
                                            onClick={() =>
                                                setShowRegisterPassword(
                                                    !showRegisterPassword,
                                                )
                                            }
                                            className="font-mono text-[11px] font-semibold text-[#6B6B66] hover:text-[#1C1C1A]"
                                        >
                                            {showRegisterPassword
                                                ? '[ Sembunyi ]'
                                                : '[ Lihat ]'}
                                        </button>
                                    </div>
                                    <input
                                        id="reg-password"
                                        type={
                                            showRegisterPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        required
                                        value={registerForm.data.password}
                                        onChange={(e) =>
                                            registerForm.setData(
                                                'password',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Minimal 8 karakter"
                                        autoComplete="new-password"
                                        className="h-[42px] w-full rounded-[6px] border border-[#E8E6E1] bg-white px-[14px] text-[14px] text-[#1C1C1A] placeholder-[#9A9A94] transition-colors outline-none focus:border-[#2A6F5F]"
                                    />
                                    <InputError
                                        message={registerForm.errors.password}
                                        className="mt-1"
                                    />
                                </div>

                                {/* Konfirmasi Kata Sandi */}
                                <div>
                                    <label
                                        htmlFor="reg-password-confirm"
                                        className="mb-1 block text-left text-[13px] font-medium text-[#1C1C1A]"
                                    >
                                        Konfirmasi Kata Sandi
                                    </label>
                                    <input
                                        id="reg-password-confirm"
                                        type={
                                            showRegisterPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        required
                                        value={
                                            registerForm.data
                                                .password_confirmation
                                        }
                                        onChange={(e) =>
                                            registerForm.setData(
                                                'password_confirmation',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Ulangi kata sandi"
                                        autoComplete="new-password"
                                        className="h-[42px] w-full rounded-[6px] border border-[#E8E6E1] bg-white px-[14px] text-[14px] text-[#1C1C1A] placeholder-[#9A9A94] transition-colors outline-none focus:border-[#2A6F5F]"
                                    />
                                    <InputError
                                        message={
                                            registerForm.errors
                                                .password_confirmation
                                        }
                                        className="mt-1"
                                    />
                                </div>

                                {/* Tombol Daftar */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={registerForm.processing}
                                        className="flex h-[44px] w-full items-center justify-center rounded-[6px] bg-[#2A6F5F] text-[14px] font-medium text-white transition-colors hover:bg-[#215A4C] active:bg-[#19443A] disabled:opacity-50"
                                    >
                                        {registerForm.processing
                                            ? 'Mendaftarkan...'
                                            : 'Daftar Akun Murid'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Tautan Navigasi Bawah Kartu dengan Transisi */}
                    <footer className="mt-8 text-center text-[13px] text-[#6B6B66]">
                        {activeTab === 'login' ? (
                            <>
                                Belum punya akun?{' '}
                                <button
                                    type="button"
                                    onClick={() => switchTab('register')}
                                    className="font-medium text-[#2A6F5F] hover:underline"
                                >
                                    Daftar sekarang
                                </button>
                            </>
                        ) : (
                            <>
                                Sudah punya akun?{' '}
                                <button
                                    type="button"
                                    onClick={() => switchTab('login')}
                                    className="font-medium text-[#2A6F5F] hover:underline"
                                >
                                    Masuk di sini
                                </button>
                            </>
                        )}
                    </footer>
                </main>

                {/* Footer Luar Kartu */}
                <footer className="mt-10 mb-2 text-center">
                    <nav
                        aria-label="Tautan Bantuan dan Legal"
                        className="flex items-center justify-center gap-5 text-[12px] text-[#9A9A94]"
                    >
                        <Link
                            href="/#keamanan"
                            className="transition-colors hover:text-[#6B6B66]"
                        >
                            Bantuan
                        </Link>
                        <span aria-hidden="true" className="select-none">
                            ·
                        </span>
                        <span className="transition-colors hover:text-[#6B6B66]">
                            Kebijakan Privasi
                        </span>
                        <span aria-hidden="true" className="select-none">
                            ·
                        </span>
                        <span className="transition-colors hover:text-[#6B6B66]">
                            Syarat Layanan
                        </span>
                    </nav>
                </footer>
            </div>
        </>
    );
}
