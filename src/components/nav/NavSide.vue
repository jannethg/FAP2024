<template>
  <div>
    <ul class="text-sm">
      <li class="mb-3" v-for="(item, index) in navigatios" :key="index">
        <template v-if="checkRole(item.role)">
          <RouterLink
            :to="item.href"
            class="text-white w-full py-2.5 px-4 flex items-center justify-between"
            active-class="bg-special-dark"
          >
            <div class="flex items-center">
              <component
                :is="item.icon"
                class="mr-4 flex-shrink-0 h-6 w-6 text-sky-200"
                aria-hidden="true"
              />
              <span class="block">{{ item.name }}</span>
            </div>
            <IconChevron class="text-[#E2E8F0]" v-if="item.hasChevronDown" />
          </RouterLink>
        </template>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { navigatios } from '@/constants/navigations.js'
import IconChevron from '@/components/icons/IconChevron.vue'
import { onMounted, ref } from 'vue'

const authData = ref(null)
onMounted(() => {
  const localAuthData = localStorage.getItem('authData')
  if (localAuthData) {
    authData.value = JSON.parse(localAuthData)
  }
})

const checkRole = (roles) => {
  if (!authData.value || !authData.value.role) return false
  return roles.some((item) => item === authData.value.role)
}
</script>
<style lang=""></style>
