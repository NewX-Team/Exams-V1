<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request and show the appropriate role dashboard.
     */
    public function __invoke(Request $request): Response
    {
        $role = $request->user()?->role ?? 'murid';

        return match ($role) {
            'admin' => Inertia::render('dashboard/admin'),
            'guru' => Inertia::render('dashboard/guru'),
            default => Inertia::render('dashboard/murid'),
        };
    }
}
