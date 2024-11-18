<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center bg-bg dark:bg-bg-dark gap-12">
        <h1 class="text-5xl font-mono text-text dark:text-text-dark">Page Not Found</h1>
        <NuxtLink to="/" class="px-5 cursor-pointer flex items-center justify-center gap-2 py-3 bg-primary hover:bg-primary/90 text-[#fff] dark:text-[#fff] rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Go Home
            <svg class="w-6 h-4 pt-[3px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
              <path 
                d="M16 0L14.59 1.41L19.17 6H0V8H19.17L14.59 12.59L16 14L23 7L16 0Z" 
                fill="currentColor"
              />
            </svg>
        </NuxtLink>
    </div>
</template>