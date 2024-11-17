<template>
    <div class="relative flex justify-center items-center w-full min-h-screen">
      <div 
        class="flex flex-col justify-center items-center gap-14 max-w-[900px] px-6 py-12 rounded-2xl z-10"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 2800 }"
      >
        <h1 
          class="text-5xl md:text-7xl font-semibold font-sans text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1 }"
          :transition="{ delay: 300 }"
        >
          Personalized Challenges.
          <br />
          Unique Creations.
        </h1>
  
        <div 
          class="w-full flex flex-col justify-center items-center gap-8"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1 }"
          :transition="{ delay: 600 }"
        >
          <p class="text-xl md:text-2xl text-center max-w-[800px] text-gray-700 dark:text-gray-300">
            Use real-world problems to build unique projects and share your solutions with the community.
          </p>
          
          <NuxtLink 
            to="/login"
            class="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get early access
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>