<script setup>
const email = ref('')
const loading = ref(false)
const message = ref('')
const success = ref(false)

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
      message.value = 'Thanks for joining! Check your email for confirmation.'
      email.value = ''
    } else {
      message.value = data.error || 'Something went wrong. Please try again.'
    }
  } catch (error) {
    message.value = 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="w-full max-w-md mx-auto">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          :disabled="loading"
          class="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-primary"
          required
        />
      </div>
      
      <div class="flex items-center space-x-2">
        <button
          type="submit"
          :disabled="loading"
          class="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {{ loading ? 'Joining...' : 'Join Waitlist' }}
        </button>
      </div>

      <div v-if="message" :class="['text-center text-sm', success ? 'text-green-500' : 'text-red-500']">
        {{ message }}
      </div>
    </form>
  </div>
</template>