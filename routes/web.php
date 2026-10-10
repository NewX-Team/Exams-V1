<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');

    Route::get('dashboard/admin', fn () => Inertia::render('dashboard/admin'))
        ->middleware('role:admin')
        ->name('dashboard.admin');

    Route::get('dashboard/guru', fn () => Inertia::render('dashboard/guru'))
        ->middleware('role:guru')
        ->name('dashboard.guru');

    Route::get('dashboard/murid', fn () => Inertia::render('dashboard/murid'))
        ->middleware('role:murid')
        ->name('dashboard.murid');
});

require __DIR__.'/settings.php';
