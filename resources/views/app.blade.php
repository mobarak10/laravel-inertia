<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="base-url" content="{{ url('/') }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- favicon -->
    <link rel="shortcut icon" href="{{ asset('public/images/logos/icon-logo.svg') }}" type="image/x-icon">

    <!-- Scripts -->
    @vite('resources/js/app.js')
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>
