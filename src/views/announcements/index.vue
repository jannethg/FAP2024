<template>
  <section>
    <div class="lg:flex justify-between items-center my-5">
      <h2 class="text-primary-dark-blue text-3xl font-bold">Announcements ✨</h2>
      <button
        v-if="authData.role === 'Administrator'"
        class="px-5 py-2.5 flex bg-primary-blue rounded shadow-lg text-white font-medium"
        type="button"
      >
        + Add Entry
      </button>
    </div>

    <hr class="flex w-full border-b-1 my-6 border-[#64748B]" />

    <section class="mx-auto max-w-[800px]">
      <div class="flex items-center justify-center space-x-6 mx-auto">
        <button
          type="button"
          class="rounded-full text-sm px-4 py-2 bg-[#6366F1] text-white"
        >
          View All
        </button>
        <button
          type="button"
          class="rounded-full text-sm px-4 py-2 bg-[#FEF3C7] text-[#A56802]"
        >
          Announcements
        </button>
        <button
          type="button"
          class="rounded-full text-sm px-4 py-2 bg-[#FFE4E6] text-[#930317]"
        >
          System Update
        </button>
        <button
          type="button"
          class="rounded-full text-sm px-4 py-2 bg-[#D1FAE5] text-[#034932]"
        >
          Program
        </button>
        <button
          type="button"
          class="rounded-full text-sm px-4 py-2 bg-[#E0F2FE] text-primary-dark-blue"
        >
          Exciting news
        </button>
      </div>

      <div class="mt-14">
        <div
          class="flex items-start space-x-10"
          v-for="announcement in announcements"
          :key="announcement.id"
        >
          <span
            class="text-special-dark uppercase block min-w-[200px] text-right mt-2 text-sm font-semibold"
          >
            {{ announcement.date }}</span
          >
          <div class="w-full">
            <h5 class="text-primary-dark-blue text-[25px] font-semibold">
              {{ announcement.title }}
            </h5>
            <div class="flex items-center rounded-md my-4">
              <img
                :src="announcement.user.image"
                :alt="announcement.user.name"
                class="h-[30px] w-[30px] rounded-full"
              />
              <span class="flex ml-4 text-primary-blue">{{
                announcement.user.name
              }}</span>
              <button
                type="button"
                class="rounded-full ml-6 text-xs px-2 py-1"
                :class="typeClasses(announcement.type)"
              >
                {{ announcement.type }}
              </button>
            </div>
            <p class="text-[#475569]">
              {{ announcement.description }}
            </p>
            <hr class="flex w-full border-b-1 my-6 border-[#E2E8F0]" />
          </div>

          <div class="flex items-center space-x-2">
            <button
              type="button"
              class="p-1.5 bg-white rounded border outline-none mt-4"
              v-if="authData.role === 'Administrator'"
            >
              <IconEdit />
            </button>
            <button type="button" class="p-1 bg-white rounded border outline-none mt-4">
              <IconTrash />
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-end items-end mt-5">
        <button
          class="flex items-center justify-center text-primary-blue py-3 px-4 border border-primary-blue rounded mr-5"
          :to="`/programs/edit/1`"
        >
          <IconArrow class="mr-2 rotate-180" /> Previous
        </button>
        <button
          class="flex items-center justify-center text-primary-blue py-3 px-4 border border-primary-blue rounded"
          :to="`/programs/edit/1`"
        >
          Next <IconArrow class="ml-2" />
        </button>
      </div>
    </section>
  </section>
</template>

<script setup>
import IconArrow from '@/components/icons/IconArrow.vue'
import IconTrash from '../../components/icons/IconTrash.vue'
import { ref } from 'vue'
import IconEdit from '@/components/icons/IconEdit.vue'

const announcements = [
  {
    id: 1,
    title: 'Program Achievements',
    date: '8 JULY, 2023',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    type: 'program',
    user: {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Bruce Wayne',
    },
  },
  {
    id: 2,
    title: 'The Maryland EXCELS FAP is now public 🎉',
    date: '6 JULY, 2023',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    type: 'announcement',
    user: {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Clark Kent',
    },
  },
  {
    id: 3,
    title: 'Bugs fixed, issues, and more',
    date: '8 JULY, 2023',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    type: 'bug fix',
    user: {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Bruce Wayne',
    },
  },
  {
    id: 4,
    title: 'Thanks, everyone 🙌',
    date: '2 JULY, 2023',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    type: 'exciting news',
    user: {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Tony Starks',
    },
  },
]

const typeClasses = (type) => {
  if (type === 'program') {
    return 'bg-[#D1FAE5] text-[#059669]'
  }

  if (type === 'announcement') {
    return 'bg-[#FEF3C7] text-[#D97706]'
  }
  if (type === 'bug fix') {
    return 'bg-[#FFE4E6] text-[#F43F5E]'
  }
  if (type === 'exciting news') {
    return 'bg-[#E0F2FE] text-[#0284C7]'
  }

  return 'bg-[#D1FAE5] text-[#059669]'
}

const authData = ref(null)

const localAuthData = localStorage.getItem('authData')
if (localAuthData) {
  authData.value = JSON.parse(localAuthData)
}
</script>
