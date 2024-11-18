<script setup>
    // const API_URL = 'http://localhost:3001/generate/'
    const user = useUserSession();

    /*
    To anyone reading this: the challenge of the week IS reactive and updates but I had to hard code it this time since the page wouldn't load until after the await function
    ...something I was going to fix with element skeletons but I didn't have enough time sadly
    
    // Refs for template 
    const skillLevel = ref();
    const techInterests = ref();
    const familiarLangs = ref();
    const projectType = ref();
    const wantToLearn = ref();
    const loading = ref(true);
    
    
    // Fetch & parse backend data
    async function getProchallenge() {
        const response = await $fetch(API_URL, {
            method: 'POST',
            body: {
                "skillLevel": skillLevel.value,
                "techInterests": techInterests.value,
                "familiarLangs": familiarLangs.value,
                "projectType": projectType.value,
                "wantToLearn": wantToLearn.value
            }
        });

        const proChallenge = (JSON.parse(response)).problem;
        loading.value = false;
        console.log(proChallenge);
        return proChallenge;
    }

    const challengeBoard = await getProchallenge();
    */

</script>

<template>
    <head>
      <title>Devfolify - Dashboard</title>
    </head>

    <Navdude />
    <div v-if="user.current.value">
        
        <section id="challengeOfTheWeek" class="flex justify-center items-center my-10">
            <div class="w-[60vw] h-[31vw] flex flex-col bg-accent rounded-2xl overflow-hidden shadow-xl">
                <div class="w-full h-[85%] flex flex-col justify-center items-center">
                    <div class="w-[280px] h-14 bg-[#00208E] flex self-start justify-center items-center text-center px-2 text-2xl top-4 left-4 relative rounded-xl shadow-xl">
                        Challenge of the week
                    </div>
                    <div class="w-full h-full text-4xl flex flex-col justify-center items-center max-w-[700px]">
                        <!-- 
                        To anyone reading this: the challenge of the week IS reactive and updates but I had to hard code it this time since the page wouldn't load until after the await function
                        ...something I was going to fix with element skeletons but I didn't have enough time sadly
                        {{ challengeBoard.example_scenarios[0].scenario }} -->
                        A retail store has sales data for millions of products but needs to identify top-selling items and understand customer preferences.
                    </div>
                    <div class="w-[200px] h-14 flex self-start items-center text-left px-2 text-2xl bottom-4 left-4 relative">
                        15 Days remain
                    </div>
                </div>
                <div class="w-full h-[15%] bg-secondary px-5 flex justify-between items-center">
                    <div class="flex gap-5">
                        <span class="text-2xl">0 ✅</span>
                        <span class="text-2xl">0 ⏳</span>
                    </div>
                    <div class="flex gap-5">
                        <a class="btn btn-primary btn-outline brightness-50 cursor-not-allowed">Help</a>
                        <NuxtLink href="/shareSolution" class="btn btn-primary">Submit Your Project</NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <section id="startHere" class="w-full flex flex-col justify-center items-center gap-5 flex-wrap mb-20">
            <div class="w-[60vw] flex flex-col gap-5 flex-wrap">
                <div class="flex items-center gap-5">
                    <h1 class="text-5xl">New Project</h1>
                    <p class="text-xl">Some features coming soon...</p>
                </div>
                <div class="w-full flex gap-5 flex-wrap">
                    <div id="resourceToolbox" class="w-72 h-80 rounded-lg bg-accent flex flex-col gap-5 justify-between items-center text-center overflow-hidden brightness-50 cursor-no-drop shadow-xl">
                        <div class="w-full h-8 bg-gradient-to-r from-green-500 to-lime-500 flex justify-center items-center py-1"></div>
                        <div class="flex flex-col gap-3">
                            <h1 class="text-3xl font-bold">Tutorial Project</h1>
                            <p class="text-xl">(Start Here)</p>
                        </div>
                        <p class="text-xl mb-8 mx-3">
                            Start here for a tutorial on how to use our platform
                        </p>
                    </div>

                    <div id="resourceToolbox" class="w-72 h-80 rounded-lg bg-accent flex flex-col gap-5 justify-between items-center text-center overflow-hidden brightness-50 cursor-no-drop shadow-xl">
                        <div class="w-full h-8 bg-gradient-to-r from-blue-500 to-cyan-500 flex justify-center items-center py-1"></div>
                        <div class="flex flex-col gap-3">
                            <h1 class="text-3xl font-bold">Resource Toolbox</h1>
                        </div>
                        <p class="text-xl mb-8 mx-3">
                            An adaptive list of resources you can explore and use based on your coding habits
                        </p>
                    </div>

                    <NuxtLink href="/creator" id="resourceToolbox" class="w-72 h-80 rounded-lg bg-accent flex flex-col gap-5 justify-between items-center text-center overflow-hidden cursor-pointer shadow-xl">
                        <div class="w-full h-8 bg-gradient-to-r from-red-500 to-orange-500 flex justify-center items-center py-1"></div>
                        <div class="flex flex-col gap-3">
                            <h1 class="text-3xl font-bold">Project Creator</h1>
                            <p class="text-xl">(New to Devfolify!)</p>
                        </div>
                        <p class="text-xl mb-8">
                            This feature is home to Devfolify as it's one of the main cores for our product
                        </p>
                    </NuxtLink>

                    <div class="w-48 h-80 flex justify-center items-center">
                        <p class="text-xl">More to come...</p>
                    </div>
                </div>
            </div>
            
        </section>

        <div class="w-screen h-24 px-8 bg-neutral flex justify-between items-center">
            <a class="text-3xl font-bold w-12 h-12 cursor-pointer"><img src="/github.svg" alt=""></a>
            <p class="text-lg font-bold">© 2024 Yaman. This project falls under the GNU GENERAL PUBLIC LICENSE</p>
            <a class="text-3xl font-bold w-12 h-12"></a>
        </div>
    </div>

    <div v-else>
        <div class="w-screen h-[50vh] flex flex-col gap-4 justify-center items-center">
            <h1 class="text-5xl">You seem to be lost...</h1>
            <p class="text-sm">This happens when you try accessing a page while not logged in</p>
            <div class="flex gap-3">
                <NuxtLink href="/" class="btn btn-primary w-28">Go Home</NuxtLink>
                <NuxtLink href="/login" class="btn btn-primary btn-outline border-2 w-28">Login</NuxtLink>
            </div>
        </div>
    </div>
</template>