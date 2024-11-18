<script setup>
    const API_URL = 'https://api.devfolify.com/generate/'
    const user = useUserSession();

    // Refs for template 
    const skillLevel = ref();
    const techInterests = ref();
    const familiarLangs = ref();
    const projectType = ref();
    const wantToLearn = ref();
    const submitClicked = ref(false);
    const proChallengeArrived = ref(false);
    const proChallenge = ref({});

    const showLangs = ref(false);
    const showTools = ref(false);
    const showIdeas = ref(false);

    const loading = ref('display: none;');

    // Fetch & parse backend data
    async function getProchallenge() {
        if (submitClicked.value == true) return;
        loading.value = 'display: flex;'

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

        proChallenge.value = (JSON.parse(response)).problem;
        proChallengeArrived.value = true;
        console.log(proChallenge);
        return proChallenge;
    }

    function revealLangs(){
        showLangs.value = true
    }
    function revealTools(){
        showTools.value = true
    }
    function revealIdeas(){
        showIdeas.value = true
    }

</script>

<template>
    <head>
      <title>Devfolify - Creator</title>
    </head>

    <Navdude />
    <!--FORM SECTION-->
    <div v-if="user.current.value">
        <section v-if="proChallengeArrived == false" class="flex flex-col gap-8 justify-center items-center py-12">
            <div :style="loading" class="w-24 h-24 fixed flex justify-center z-10 -translate-y-[150px] items-center bg-[rgba(0,0,0,0.5)] rounded-3xl">
                <span class="loading loading-infinity loading-lg"></span>
            </div>
            <h1 class="text-3xl font-bold">A few questions are needed to continue...</h1>
            <div class="flex flex-col gap-8">
                <label class="form-control w-[30vw]">
                    <div class="label">
                        <span class="label-text">What is your current level of coding knowledge?</span>
                        <span class="label-text text-right text-xs text-gray-600">You can type freely for each answer, but try to follow how the examples below are</span>
                    </div>
                    <input v-model="skillLevel" type="text" placeholder="Question 1" class="input input-bordered w-full" />
                    <div class="label">
                        <span class="label-text-alt text-gray-600">(Beginner, Expert beginner, Intermediate, Advanced, Expert)</span>
                    </div>
                </label>

                <label class="form-control w-[30vw]">
                    <div class="label">
                        <span class="label-text">What are your primary areas of interest in technology?</span>
                    </div>
                    <input v-model="techInterests" type="text" placeholder="Question 2" class="input input-bordered w-full" />
                    <div class="label">
                        <span class="label-text-alt text-gray-600">(Web development, Data science, Cybersecurity, Game development, Machine learning, etc.)</span>
                    </div>
                </label>

                <label class="form-control w-[30vw]">
                    <div class="label">
                        <span class="label-text">Which programming languages are you familiar with?</span>
                    </div>
                    <input v-model="familiarLangs" type="text" placeholder="Question 3" class="input input-bordered w-full" />
                    <div class="label">
                        <span class="label-text-alt text-gray-600">(Python, JavaScript, Java, etc.)</span>
                    </div>
                </label>

                <label class="form-control w-[30vw]">
                    <div class="label">
                        <span class="label-text">What type of projects are you interested in working on?</span>
                    </div>
                    <input v-model="projectType" type="text" placeholder="Question 4" class="input input-bordered w-full" />
                    <div class="label">
                        <span class="label-text-alt text-gray-600">(healthcare, fiction, education, etc.)</span>
                        <span class="label-text-alt text-gray-600">(any industry you take interest in)</span>
                    </div>
                </label>

                <label class="form-control w-[30vw]">
                    <div class="label">
                        <span class="label-text">Are there any specific technologies, programming languages, or tools you want to learn?</span>
                    </div>
                    <input v-model="wantToLearn" type="text" placeholder="Question 5" class="input input-bordered w-full" />
                    <div class="label">
                        <span class="label-text-alt text-gray-600">(e.g., Git, Docker, AWS)</span>
                    </div>
                </label>

                <button @click="getProchallenge" :disabled="submitClicked" class="btn btn-primary">Completed!</button>
            </div>
        </section>
        <!--DISPLAY SECTION-->
        <section v-if="proChallengeArrived == true" class="flex flex-col gap-8 justify-center items-center py-12">
            <h1 class="text-6xl font-bold">Your Project Challenge</h1>
            <div class="flex flex-col h-auto gap-8 justify-center items-center">
                <div class="flex w-[45vw] h-full flex-col gap-3">
                    <div class="w-full min-h-[10%] bg-accent rounded-xl flex justify-between items-center p-5">
                        <div class="flex flex-wrap gap-3 max-w-[40%]">
                            <div class="w-auto h-[50%] px-2 bg-secondary flex justify-center items-center text-center rounded-lg">{{ proChallenge.field }}</div>
                            <div class="w-auto h-[50%] px-2 bg-secondary flex justify-center items-center text-center rounded-lg">{{ proChallenge.target_level }}</div>
                            <div v-for="areas in proChallenge.areas_of_interest" class="w-auto h-[50%] px-2 bg-secondary flex justify-center items-center text-center rounded-lg">{{ areas }}</div>
                        </div>
                        <div class="flex gap-3">
                            <a class="btn brightness-50 btn-primary cursor-not-allowed">Safe for Later</a>
                            <NuxtLink href="/dashboard" class="btn btn-primary">Back to Dashboard</NuxtLink>
                            <NuxtLink href="/shareSolution" class="btn btn-primary">Post Solution</NuxtLink>
                        </div>
                    </div>
                    <div class="w-full min-h-[35%] bg-accent rounded-xl flex justify-center items-center flex-col gap-5 p-[20px]">
                        <h1 class="text-2xl relative self-start">The general issue</h1>
                        <p class="text-4xl p-8 bg-secondary rounded-lg h-[70%] flex items-center">{{ proChallenge.description }}</p>
                        <p class="text-4xl p-8 bg-secondary rounded-lg h-[70%] flex items-center">Your goal is to make some sort of project that solves a problem around this topic. Below are also specific occurances that happen to people which might help you get an idea of what to build</p>
                    </div>
                    <div class="w-full min-h-[55%] bg-accent rounded-xl p-[20px] flex flex-col justify-center items-center gap-3">
                        <h1 class="text-2xl relative self-start">Occurances</h1>
                        <div v-for="example in proChallenge.example_scenarios" class="text-4xl p-8 bg-secondary rounded-lg flex items-center">
                            {{ example.scenario }}
                        </div>
                    </div>
                </div>
                <div class="flex w-[45vw] h-full flex-col gap-3">
                    <div class="w-full h-auto bg-accent rounded-xl flex flex-col p-8 gap-4">
                        <div class="w-full h-[30%] p-[20px] bg-secondary rounded-xl flex justify-between items-center">
                            <div class="w-[50%] flex flex-col gap-3 justify-center items-center">
                                <h1 class="text-2xl">Suggested Languages</h1>
                                <div class="flex flex-col gap-2">
                                    <div v-if="showLangs == false">
                                        <button @click="revealLangs" class="btn btn-primary">Reveal</button>
                                    </div>
                                    <div v-if="showLangs == true" v-for="language in proChallenge.suggested_languages" class="text-3xl p-5 bg-[rgba(0,0,0,0.3)] rounded-2xl text-center w-full">
                                        {{ language }} <br>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="w-[2px] h-full bg-white"></div>

                            <div class="w-[50%] flex flex-col gap-3 justify-center items-center">
                                <h1 class="text-2xl">Suggested Tooling</h1>
                                <div class="flex flex-col justify-center items-center gap-2">
                                    <div v-if="showTools == false">
                                        <button @click="revealTools" class="btn btn-primary">Reveal</button>
                                    </div>
                                    <div v-if="showTools == true" v-for="tool in proChallenge.suggested_tools" class="text-3xl p-5 bg-[rgba(0,0,0,0.3)] rounded-2xl text-center max-w-[85%] flex justify-center items-center">
                                        {{ tool }} <br>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="w-full h-auto bg-secondary rounded-xl flex flex-col justify-center items-center p-5">
                            <h1 class="text-4xl text-center">Possible Ideas</h1>
                            <div v-if="showIdeas == false">
                                <button @click="revealIdeas" class="btn btn-primary">Reveal</button>
                            </div>
                            <div v-if="showIdeas == true" v-for="example in proChallenge.example_scenarios" class="text-3xl p-5 text-center max-w-[85%] flex flex-col gap-2">
                                <div v-for="idea in example.possible_solutions" class="bg-[rgba(0,0,0,0.3)] rounded-2xl p-4">
                                    {{ idea }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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