<template>
    <head>
        <title>Devfolify</title>
    </head>

    <div>
        <Navdude class="z-[500] fixed" />
        <section class="flex justify-center items-center">
            <div class="absolute w-full right-0 top-0 inset-0 text-secondary overflow-hidden">
                <svg class="w-[110vw] h-screen absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.15"/>
                        </pattern>
                        
                        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:currentColor;stop-opacity:0.1"/>
                        <stop offset="50%" style="stop-color:currentColor;stop-opacity:0.3"/>
                        <stop offset="100%" style="stop-color:currentColor;stop-opacity:0.1"/>
                        </linearGradient>

                        <!-- Fixed bottom fade gradient -->
                        <linearGradient id="fadeGradient" x1="0%" y1="70%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:rgba(0,0,0,0.1);stop-opacity:1"/>
                        <stop offset="100%" style="stop-color:rgba(0,0,0,0.1);stop-opacity:0"/>
                        </linearGradient>
                    </defs>

                    <!-- Base content -->
                    <g>
                        <!-- Background with denser dot pattern -->
                        <rect width="100%" height="100%" fill="url(#dots)"/>
                        
                        <!-- Multiple flowing lines representing different solution paths -->
                        <path d="M-100,100 Q100,50 300,200 T700,100" 
                            fill="none" stroke="url(#flowGradient)" stroke-width="2"/>
                        
                        <path d="M-50,200 Q150,150 350,300 T750,200" 
                            fill="none" stroke="url(#flowGradient)" stroke-width="2"/>
                            
                        <path d="M-150,300 Q50,250 250,400 T650,300" 
                            fill="none" stroke="url(#flowGradient)" stroke-width="2"/>
                            
                        <path d="M100,0 Q200,100 150,200 T300,400" 
                            fill="none" stroke="url(#flowGradient)" stroke-width="2"/>
                            
                        <path d="M500,0 Q600,100 550,200 T700,400" 
                            fill="none" stroke="url(#flowGradient)" stroke-width="2"/>

                        <!-- Major nodes -->
                        <circle cx="200" cy="200" r="8" fill="currentColor" opacity="0.7"/>
                        <circle cx="400" cy="300" r="10" fill="currentColor" opacity="0.8"/>
                        <circle cx="600" cy="150" r="8" fill="currentColor" opacity="0.7"/>
                        <circle cx="300" cy="100" r="7" fill="currentColor" opacity="0.6"/>
                        <circle cx="500" cy="250" r="9" fill="currentColor" opacity="0.75"/>

                        <!-- Minor nodes -->
                        <circle cx="150" cy="150" r="4" fill="currentColor" opacity="0.5"/>
                        <circle cx="250" cy="250" r="3" fill="currentColor" opacity="0.4"/>
                        <circle cx="450" cy="200" r="4" fill="currentColor" opacity="0.5"/>
                        <circle cx="550" cy="300" r="3" fill="currentColor" opacity="0.4"/>
                        <circle cx="650" cy="200" r="4" fill="currentColor" opacity="0.5"/>
                        <circle cx="350" cy="350" r="3" fill="currentColor" opacity="0.4"/>
                        
                        <!-- Major connecting lines -->
                        <line x1="200" y1="200" x2="300" y2="100" stroke="currentColor" stroke-width="1" opacity="0.2"/>
                        <line x1="300" y1="100" x2="400" y2="300" stroke="currentColor" stroke-width="1" opacity="0.2"/>
                        <line x1="400" y1="300" x2="500" y2="250" stroke="currentColor" stroke-width="1" opacity="0.2"/>
                        <line x1="500" y1="250" x2="600" y2="150" stroke="currentColor" stroke-width="1" opacity="0.2"/>
                        
                        <!-- Minor connecting lines -->
                        <line x1="150" y1="150" x2="200" y2="200" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
                        <line x1="250" y1="250" x2="400" y2="300" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
                        <line x1="450" y1="200" x2="500" y2="250" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
                        <line x1="550" y1="300" x2="600" y2="150" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
                        <line x1="350" y1="350" x2="400" y2="300" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
                    </g>

                    <!-- Overlay fade gradient -->
                    <rect width="100%" height="100%" fill="url(#fadeGradient)" style="mix-blend-mode: multiply"/>
                </svg>
            </div>
            <hero :location="'#waitlist'" class="z-50 backdrop-blur-sm" />
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

                I want to help support people with envisioning and creating new innovative projects for the benefit of society and the open source community all the while allowing users to build their experience and expand their knowledge.
            </p>
        </section> -->
        <section id="features" class="w-screen sm:h-[60vh] flex justify-center items-center">
            <div class="max-w-[1500px] flex justify-center flex-wrap">
                <!--   Kickstart project ideation with the a library of cool ideas and people -->
                <featureCard :title="'Ideate'" :icon="'fluent:people-community-12-filled'" :description="'Envision new projects as we help facilitate brainstorming with personalized suggestions'" />
                <featureCard :title="'Create'" :icon="'fluent:people-community-12-filled'" :description="'Build new creations and gain experience with onboard assistance for new programmers'" />
                <featureCard :title="'Share'" :icon="'fluent:people-community-12-filled'" :description="'Share your innovative solutions with the community and gain reputation for projects'" />
                <featureCard :title="'Community'" :icon="'fluent:people-community-12-filled'" :description="'Join a community of developers creating new projects and expanding their experience'" />
                <featureCard :title="'Challenges'" :icon="'fluent:people-community-12-filled'" :description="'Challenge yourself to solve real world problems in unique & creative ways'" />
                <featureCard :title="'Competitions'" :icon="'fluent:people-community-12-filled'" :description="'Monthly unofficial mini-hackathons with curated themes & topics from any industry'" />
            </div>
        </section>
        <!-- <section class="flex flex-col gap-5 justify-center items-center h-screen">
            <h1 class="text-6xl font-bold">Enjoy!</h1>
            <div class="flex gap-3">
                <NuxtLink href="/login" class="btn w-24 text-white">Log In</NuxtLink>
                <NuxtLink href="/login"class="btn w-24 btn-primary text-white">Signup</NuxtLink>
            </div>
        </section> -->
        <section id="waitlist" class="w-screen h-[50vh] flex flex-col gap-2 justify-center items-center">
            <h1 class="text-5xl font-bold text-text dark:text-text-dark">
                Join the Waitlist
            </h1>
            <p class="text-text dark:text-text-dark text-lg text-center">Get notified when our platform launches for new users!</p>
            <waitlistForm class="mt-8 mb-12" />
        </section>
        <!-- <div class="w-screen h-24 px-8 flex justify-center items-center">
            <p class="text-lg text-text dark:text-text-dark">This project falls under the MIT License</p>
        </div> -->
        <div class="flex items-center justify-center mt-12 pb-5 px-12 gap-4">
            <div class="h-[1px] bg-bg-dark dark:bg-bg bg-opacity-30 dark:bg-opacity-30"></div>
        </div>
    </div>
</template>