<template>
  <div class="flex min-h-screen flex-1 flex-col justify-center px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleSubmit" method="POST">
        <span v-if="hasError && errorMessage" class="text-sm flex text-red-400">{{
          errorMessage
        }}</span>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              v-model="form.email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              v-model="form.password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-primary-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-dark-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const form = ref({
  email: '',
  password: '',
})
const errorMessage = ref('')
const hasError = ref(false)
const router = useRouter()

const users = reactive([
  {
    id: 1,
    email: 'admin@gmail.com',
    name: 'John',
    role: 'Administrator',
    password: 'administrator01',
  },
  {
    id: 2,
    email: 'provider@gmail.com',
    name: 'Jane',
    role: 'Provider',
    password: 'provider01',
  },
])

const handleSubmit = () => {
  // Check if form.email and form.password match any user in users data
  const user = users.find(
    (user) => user.email === form.value.email && user.password === form.value.password
  )

  if (user) {
    // User with matching email and password found
    console.log('Login successful! User:', user)
    localStorage.setItem(
      'authData',
      JSON.stringify({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      })
    )
    router.push('/')
    hasError.value = false
  } else {
    // No user found with matching email and password
    errorMessage.value = 'Invalid email or password.'
    hasError.value = true
  }
}
</script>
