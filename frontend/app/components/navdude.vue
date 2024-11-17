<script setup>
    const user = useUserSession();
</script>

<template>
    <div class="w-screen h-20 px-8 flex justify-between items-center">
        <a href="/" class="text-3xl font-bold cursor-pointer">Devfolify - Alpha</a>
        <div class="flex gap-3">
            <p>{{ user.current.providerUid }}</p>
            <!-- Email and logout button if logged in user -->
            <div class="flex gap-3" v-if="user.current.value" >
                <NuxtLink href="/dashboard"class="btn w-24 text-white">
                    Dashboard
                </NuxtLink>
                <a href="/" class="btn w-24 text-white" type="button" @click="user.logout()">
                    Logout
                </a>
            </div>
            <!-- Login button if no user logged in -->
            <div class="flex gap-3" v-else >
                <NuxtLink href="/login" class="btn w-24 text-white">
                    Login
                </NuxtLink>
                <NuxtLink href="/login" class="btn btn-primary w-24 text-white">
                    Signup
                </NuxtLink>
            </div>
            
        </div>
    </div>
</template>
