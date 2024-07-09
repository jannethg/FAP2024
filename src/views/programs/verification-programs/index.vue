<template>
  <section>
    <h2 class="text-primary-dark-blue text-3xl font-bold my-5">
      Verification Requests ✨
    </h2>

    <section class="bg-white rounded mb-10">
      <div class="py-2 px-3 bg-[#F59E0B] text-white border mb-2">
        <p class="text-lg font-semibold">My Pending Verification</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="border h-max relative rounded"
          v-for="item in programs"
          :key="item.id"
        >
          <div class="flex items-center pt-2 px-6">
            <div class="flex items-center w-full min-h-[80px]">
              <img src="@/assets/images/QR4.svg" alt="" />
              <div class="flex items-start flex-col ml-3 w-full">
                <span class="text-primary-blue text-sm mb-1 block">{{ item.type }}</span>
                <h5 class="text-primary-dark-blue font-semibold">
                  {{ item.title }}
                </h5>
              </div>
            </div>

            <!-- Action -->
            <div class="flex items-center justify-between space-x-3">
              <Menu as="div" class="ml-3 relative">
                <div>
                  <MenuButton
                    class="w-full rounded-full flex items-center text-sm focus:outline-none focus:ring-2 p-2 lg:rounded-md"
                  >
                    <IconOption />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <MenuItems
                    class="origin-top-right absolute right-0 mt-2 w-48 p-1 rounded-lg bg-[#ffffff] ring-1 ring-black/5 shadow-lg focus:outline-none"
                  >
                    <MenuItem disabled>
                      <button
                        class="bg-[#E3F2FD] text-primary-blue group flex w-full items-center rounded-md cursor-default px-2 py-2 text-sm font-medium mb-2"
                      >
                        <div class="flex items-center w-full justify-between">
                          <span class="flex items-center"
                            ><IconEdit class="mr-2" />Action</span
                          >

                          <IconChevron
                            class="w-4 h-4 text-primary-blue rotate-180 ml-2"
                          />
                        </div>
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-[#E3F2FD] text-primary-blue' : 'text-primary-blue',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium',
                        ]"
                      >
                        Approved Verification
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-[#E3F2FD] text-primary-blue' : 'text-primary-blue',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium',
                        ]"
                        @click="showModalReject = true"
                      >
                        Reject Verification
                      </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="mt-5 px-6 mb-5">
            <span class="text-sm">Requested by {{ item.request_by }}</span>
          </div>
          <div class="flex justify-between text-sm items-center">
            <RouterLink
              class="flex items-center justify-center text-primary-blue py-3 px-4 border-t w-full"
              :to="`/programs/detail/${item.id}`"
            >
              <IconViewDetail class="mr-1" />View Request</RouterLink
            >
            <RouterLink
              class="flex items-center justify-center text-primary-blue py-3 px-2 border-t border-l w-full"
              :to="`/programs/edit/${item.id}`"
            >
              <IconEdit class="mr-1" />Review Approval</RouterLink
            >
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white rounded">
      <div class="py-2 px-3 bg-primary-blue text-white border mb-2">
        <p class="text-lg font-semibold">My Approved Verification</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="border h-max relative rounded"
          v-for="item in programs"
          :key="item.id"
        >
          <div class="flex items-center pt-2 px-6">
            <div class="flex items-center w-full min-h-[80px]">
              <img src="@/assets/images/QR4.svg" alt="" />
              <div class="flex items-start flex-col ml-3 w-full">
                <span class="text-primary-blue text-sm mb-1 block">{{ item.type }}</span>
                <h5 class="text-primary-dark-blue font-semibold">
                  {{ item.title }}
                </h5>
              </div>
            </div>

            <!-- Action -->
            <div class="flex items-center justify-between space-x-3">
              <Menu as="div" class="ml-3 relative">
                <div>
                  <MenuButton
                    class="w-full rounded-full flex items-center text-sm focus:outline-none focus:ring-2 p-2 lg:rounded-md"
                  >
                    <IconOption />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <MenuItems
                    class="origin-top-right absolute right-0 mt-2 w-48 p-1 rounded-lg bg-[#ffffff] ring-1 ring-black/5 shadow-lg focus:outline-none"
                  >
                    <MenuItem disabled>
                      <button
                        class="bg-[#E3F2FD] text-primary-blue group flex w-full items-center rounded-md cursor-default px-2 py-2 text-sm font-medium mb-2"
                      >
                        <div class="flex items-center w-full justify-between">
                          <span class="flex items-center"
                            ><IconEdit class="mr-2" />Action</span
                          >

                          <IconChevron
                            class="w-4 h-4 text-primary-blue rotate-180 ml-2"
                          />
                        </div>
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-[#E3F2FD] text-primary-blue' : 'text-primary-blue',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium',
                        ]"
                      >
                        Approved Verification
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <router-link
                        :class="[
                          active ? 'bg-[#E3F2FD] text-primary-blue' : 'text-primary-blue',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium',
                        ]"
                        @click="showModalReject = true"
                      >
                        Reject Verification
                      </router-link>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="mt-5 px-6 mb-5">
            <span class="text-sm">Requested by {{ item.request_by }}</span>
          </div>
          <div class="flex justify-between text-sm items-center">
            <RouterLink
              class="flex items-center justify-center text-primary-blue py-3 px-4 border-t w-full"
              :to="`/programs/detail/${item.id}`"
            >
              <IconViewDetail class="mr-1" />View Request</RouterLink
            >
            <RouterLink
              class="flex items-center justify-center text-primary-blue py-3 px-2 border-t border-l w-full"
              :to="`/programs/edit/${item.id}`"
            >
              <IconEdit class="mr-1" />Review Approval</RouterLink
            >
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white rounded mt-10">
      <div class="py-2 px-3 bg-[#6B7280] text-white border mb-2">
        <p class="text-lg font-semibold">My Rejected Verification</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="border h-max relative rounded"
          v-for="item in programs"
          :key="item.id"
        >
          <div class="flex items-center pt-2 px-6">
            <div class="flex items-center w-full min-h-[80px]">
              <img src="@/assets/images/QR4.svg" alt="" />
              <div class="flex items-start flex-col ml-3 w-full">
                <span class="text-primary-blue text-sm mb-1 block">{{ item.type }}</span>
                <h5 class="text-primary-dark-blue font-semibold">
                  {{ item.title }}
                </h5>
              </div>
            </div>

            <!-- Action -->
            <div class="flex items-center justify-between space-x-3">
              <Menu as="div" class="ml-3 relative">
                <div>
                  <MenuButton
                    class="w-full rounded-full flex items-center text-sm focus:outline-none focus:ring-2 p-2 lg:rounded-md"
                  >
                    <IconOption />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <MenuItems
                    class="origin-top-right absolute right-0 mt-2 w-48 p-1 rounded-lg bg-[#ffffff] ring-1 ring-black/5 shadow-lg focus:outline-none"
                  >
                    <MenuItem disabled>
                      <button
                        class="bg-[#E3F2FD] text-primary-blue group flex w-full items-center rounded-md cursor-default px-2 py-2 text-sm font-medium mb-2"
                      >
                        <div class="flex items-center w-full justify-between">
                          <span class="flex items-center"
                            ><IconEdit class="mr-2" />Action</span
                          >

                          <IconChevron
                            class="w-4 h-4 text-primary-blue rotate-180 ml-2"
                          />
                        </div>
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-[#E3F2FD] text-primary-blue' : 'text-primary-blue',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium',
                        ]"
                      >
                        Approved Verification
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-[#E3F2FD] text-primary-blue' : 'text-primary-blue',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium',
                        ]"
                        @click="showModalReject = true"
                      >
                        Reject Verification
                      </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="mt-5 px-6 mb-5">
            <span class="text-sm">Requested by {{ item.request_by }}</span>
          </div>
          <div class="flex justify-between text-sm items-center">
            <RouterLink
              class="flex items-center justify-center text-primary-blue py-3 px-4 border-t w-full"
              :to="`/programs/detail/${item.id}`"
            >
              <IconViewDetail class="mr-1" />View Request</RouterLink
            >
            <RouterLink
              class="flex items-center justify-center text-primary-blue py-3 px-2 border-t border-l w-full"
              :to="`/programs/edit/${item.id}`"
            >
              <IconEdit class="mr-1" />Review Approval</RouterLink
            >
          </div>
        </div>
      </div>
    </section>
    <div class="text-center mx-auto">
      <Pagination :current="1" :current-total="0" :per-page="10" :total="100" />
    </div>

    <!-- Modal Reject -->
    <ModalReject
      :showModal="showModalReject"
      @close="showModalReject = false"
      @next="handleNext"
    >
      <template #body>
        <div
          class="bg-white mx-auto px-4 mb-24 pt-5 sm:p-6 sm:pb-4 overflow-y-scroll max-h-[600px]"
        >
          <img src="@/assets/images/reject-image.jpeg" alt="reject-image" />
          <div class="text-center my-10">
            <h5 class="font-semibold text-xl text-primary-indigo">Reject Verification</h5>
            <p class="text-sm text-[#475569]">
              I hereby reject this request for verification.
            </p>
          </div>

          <div>
            <div class="lg:grid grid-cols-3 items-start justify-start w-full">
              <label for="reason" class="text-[#475569]">Reason for Rejecting</label>
              <textarea
                name="reason"
                id="reason"
                rows="4"
                class="border rounded-md w-full col-span-2 px-3 py-2 text-primary-indigo text-sm"
              ></textarea>
            </div>
            <div class="lg:grid grid-cols-3 items-start justify-start w-full mt-7">
              <label for="reject_by" class="text-[#475569]">Rejected by </label>
              <div class="col-span-2 flex items-center justify-between">
                <input
                  type="text"
                  name="reject_by"
                  value="John Hopkins"
                  id="reject_by"
                  class="border rounded-md w-full col-span-2 px-3 py-2 text-primary-indigo bg-[#97979754] md:w-[200px]"
                  readonly
                />
                <label for="date" class="text-[#475569]">Date </label>
                <input
                  type="text"
                  name="date"
                  value="12/08/2023"
                  id="date"
                  class="border rounded-md w-full col-span-2 px-3 py-2 text-primary-indigo bg-[#97979754] md:w-[160px]"
                  readonly
                />
              </div>
            </div>
          </div></div></template
    ></ModalReject>
  </section>
</template>

<script setup>
import IconComment from '@/components/icons/IconComment.vue'
import IconOption from '@/components/icons/IconOption.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconViewDetail from '@/components/icons/IconViewDetail.vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import IconChevron from '@/components/icons/IconChevron.vue'
import Pagination from '@/components/ui/Pagination.vue'
import ModalReject from '@/components/modal/ModalReject.vue'
import { ref } from 'vue'

const showModalReject = ref(false)
const handleNext = () => {
  console.log('reject')
  showModalReject.value = false
}

const programs = [
  {
    id: 1,
    type: 'Child Care Center',
    title: 'Start Learning Center',
    location: 'Middle River, MD 21220',
    phone: '(443) 317-6105',
    icon: IconComment,
    request_by: ' Clark Kent',
  },
  {
    id: 2,
    type: 'Family Child Center',
    title: 'Above & Beyond Child Care, LLC',
    location: 'Baltimore, MD 21218',
    phone: '(410) 335-0176',
    icon: IconComment,
    request_by: ' Clark Kent',
  },
  {
    id: 3,
    type: 'School-Age Only',
    title: 'Our Lady Queen of Peace Child Care',
    location: 'Owings Mills, MD 21239',
    phone: '(410) 314-8794',
    icon: IconComment,
    request_by: ' Clark Kent',
  },
  {
    id: 4,
    type: 'Child Care Center',
    title: 'Caliday Before and After Care of Vincent Farms',
    location: 'Annapolis, MD 21220',
    phone: '(443) 317-6105',
    icon: IconComment,
    request_by: ' Clark Kent',
  },
]
</script>
