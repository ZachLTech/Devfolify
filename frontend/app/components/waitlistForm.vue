<script setup>
const email = ref('')
const loading = ref(false)
const message = ref('')
const success = ref(false)
const joiningStatus = ref('Joining...')

const handleSubmit = async () => {
  loading.value = true
  message.value = ''
  success.value = false

  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value }),
    })

    const data = await response.json()

    if (response.ok) {
      success.value = true
      joiningStatus.value = 'Joined!'
      message.value = 'Thanks for joining! Check your email for confirmation.'
      email.value = ''
    } else {
      message.value = data.error || 'Something went wrong. Please try again.'
    }
  } catch (error) {
    message.value = 'Something went wrong. Please try again.'
  } finally {
    if (success.value != true) {
      loading.value = false;
      joiningStatus.value = 'Joining...';
    }
  }
}
</script>

<template>
  <div class="w-full max-w-md mx-auto">
    <form @submit.prevent="handleSubmit" class="space-y-4 flex flex-col gap-2 justify-center items-center">
      <div class="space-y-4 flex gap-8 justify-center items-center">
        <div>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            :disabled="loading"
            class="w-full py-2 text-2xl text-gray-700 bg-transparent border-b-2 border-b-secondary border-opacity-50 focus:outline-none"
            required
          />
        </div>
        
        <div class="flex items-center space-x-2">
          <button
            type="submit"
            :disabled="loading"
            class="px-4 py-2 text-text-dark bg-primary rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {{ loading ? joiningStatus : 'Join Waitlist' }}
          </button>
        </div>
      </div>

      <div v-if="message" :class="['text-center text-sm', success ? 'text-green-500' : 'text-red-500']">
        {{ message }}
      </div>
    </form>
  </div>
</template>