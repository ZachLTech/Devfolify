<script setup>
    const user = useUserSession();
</script>

<template>

    <head>
        <title>Devfolify - Share</title>
    </head>

    <Navdude />

    <div v-if="user.current.value">
        <div class="w-screen h-[50vh] flex flex-col gap-4 justify-center items-center">
            <h1 class="text-7xl">😔 Sorry...</h1>
            <p class="text-2xl max-w-[700px] text-center">There wasn't enough time to setup a database for everyones projects to update on the dashboard forum & for solution posts</p>
            <div class="flex gap-3">
                <NuxtLink href="/dashboard" class="btn btn-primary border-2 w-28">Dashboard</NuxtLink>
            </div>
        </div>
    </div>

    <div v-else>
        <div class="w-screen h-[80vh] flex flex-col gap-4 justify-center items-center">
            <h1 class="text-5xl">You seem to be lost...</h1>
            <p class="text-sm">This happens when you try accessing a page while not logged in</p>
            <div class="flex gap-3">
                <NuxtLink href="/" class="btn btn-primary w-28">Go Home</NuxtLink>
                <NuxtLink href="/login" class="btn btn-primary btn-outline border-2 w-28">Login</NuxtLink>
            </div>
        </div>
    </div>
</template>