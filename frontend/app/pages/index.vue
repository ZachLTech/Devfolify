<template>
    <head>
        <title>Devfolify</title>
    </head>

    <div>
        <Navdude />
        <section class="flex justify-center items-center">
            <hero />
        </section>
        <!-- <section id="about" class="flex flex-col justify-center items-center gap-[100px]">
            <h1 class="text-6xl font-bold">About & Mission</h1>
            <p class="text-3xl max-w-[1100px]">
                We don't want to simply give you a plain old boring list of beginner or even
                advanced projects to complete when you're lost, but instead we want to
                understand your skill level and provide unique challenges which give you the
                chance to brainstorm and create your own way of solving a problem in the 
                form of a coding project 😊
                <br><br>
                Not only does this enable you to bring out true creativity, but it allows you
                to form novel projects which in turn gives you a new project on your list of
                accomplishments, heightened skill, real world problem solving skills, and maybe 
                even that idea of a lifetime which could take you to great places!
            </p>
        </section> -->
        <section class="flex flex-col gap-5 justify-center items-center h-screen">
            <h1 class="text-6xl font-bold">Enjoy!</h1>
            <div class="flex gap-3">
                <NuxtLink href="/login" class="btn w-24 text-white">Log In</NuxtLink>
                <NuxtLink href="/login"class="btn w-24 btn-primary text-white">Signup</NuxtLink>
            </div>
        </section>
        <div class="w-screen h-24 px-8 bg-neutral flex justify-between items-center">
            <a class="text-3xl font-bold w-12 h-12 cursor-pointer"><img src="/github.svg" alt=""></a>
            <!-- <p class="text-lg font-bold">© 2024 Yaman. This project falls under the MIT License</p> -->
            <a class="text-3xl font-bold w-12 h-12"></a>
        </div>
    </div>
</template>