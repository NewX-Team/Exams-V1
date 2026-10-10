<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Akun Admin
        User::updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Administrator',
                'password' => Hash::make('password'),
                'role' => 'admin',
                'email_verified_at' => now(),
            ]
        );

        // 2. Akun Guru
        User::updateOrCreate(
            ['email' => 'guru@example.com'],
            [
                'name' => 'Guru Penguji',
                'password' => Hash::make('password'),
                'role' => 'guru',
                'email_verified_at' => now(),
            ]
        );

        // 3. Akun Murid
        User::updateOrCreate(
            ['email' => 'murid@example.com'],
            [
                'name' => 'Murid Peserta',
                'password' => Hash::make('password'),
                'role' => 'murid',
                'email_verified_at' => now(),
            ]
        );
    }
}
