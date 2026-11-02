<?php

$_ENV['VERCEL'] = '1';
$_SERVER['VERCEL'] = '1';

// Ensure serverless writable storage directories exist in /tmp
$directories = [
    '/tmp/storage/framework/views',
    '/tmp/storage/framework/cache/data',
    '/tmp/storage/framework/sessions',
    '/tmp/storage/logs',
];

foreach ($directories as $directory) {
    if (!is_dir($directory)) {
        mkdir($directory, 0755, true);
    }
}

// Forward the request to Laravel's standard front controller
require __DIR__ . '/../public/index.php';
