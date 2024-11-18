<script setup>
    // const user = useUserSession();
</script>

<template>
    <div class="w-screen h-20 px-8 flex justify-between items-center bg-bg dark:bg-bg-dark sm:bg-transparent">
        <a href="/" class="text-3xl cursor-pointer">Devfolify</a>
        <a href="https://github.com/ZachLTech/Devfolify" target="_blank">
            <Icon name="mdi:github" class="w-12 h-12 cursor-pointer text-[#000] dark:text-[#fff]" />
        </a>
        <!-- <div class="flex gap-3">
            <p>{{ user.current.providerUid }}</p>
            <div class="flex gap-3" v-if="user.current.value" >
                <NuxtLink href="/dashboard"class="btn w-24 text-white">
                    Dashboard
                </NuxtLink>
                <a href="/" class="btn w-24 text-white" type="button" @click="user.logout()">
                    Logout
                </a>
            </div>
            <div class="flex gap-3" v-else >
                <NuxtLink href="/login" class="btn w-24 text-white">
                    Login
                </NuxtLink>
                <NuxtLink href="/login" class="btn btn-primary w-24 text-white">
                    Signup
                </NuxtLink>
            </div>
            
        </div> -->
    </div>
</template>
