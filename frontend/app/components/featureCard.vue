<template>
    <div class="sm:w-[22vw] m-2 border-secondary border-opacity-15 border-[1px] bg-secondary bg-opacity-10 dark:bg-opacity-5 rounded px-6 py-8 flex flex-col gap-2">
        <div class="flex w-full justify-between items-center">
            <p class="text-xl text-text dark:text-text-dark font-bold">{{ title }}</p>
            <Icon :name="icon" class="text-text text-xl dark:text-text-dark" />
        </div>
        <p>
            {{ description }}
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                required: false
            },
            description: {
                required: false
            },
            icon: {
                required: false
            }
        }
    }
</script>