<template>
  <TransitionRoot as="template" :show="showModal">
    <Dialog as="div" class="relative z-[9999]">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex flex-col min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-2 sm:w-full sm:max-w-4xl text-sm"
            >
              <div
                class="bg-white mx-auto px-4 mb-24 pt-5 sm:p-6 sm:pb-4 overflow-y-scroll max-h-[600px]"
              >
                <img src="@/assets/images/reject-image.jpeg" alt="reject-image" />
                <div class="text-center my-10">
                  <h5 class="font-semibold text-xl text-primary-indigo">History Notes</h5>
                </div>

                <div>
                  <div class="lg:grid grid-cols-3 items-start justify-start w-full">
                    <span class="text-special-dark font-semibold">8 JULY, 2023</span>
                    <div class="col-span-2 border-b pb-3">
                      <p class="text-primary-blue">Request Rejected</p>
                      <div class="w-full mt-3">
                        <span>Reason: </span>
                        <span class="text-[#475569]"
                          >Can't verify Provider's documentation. Please resubmit request.
                        </span>
                      </div>
                      <div class="w-full mt-3">
                        <span>Submitted by: </span>
                        <span class="text-[#475569]">Clark Kent </span>
                      </div>
                    </div>
                  </div>
                  <div class="lg:grid grid-cols-3 items-start justify-start w-full mt-8">
                    <span class="text-special-dark font-semibold">8 JULY, 2023</span>
                    <div class="col-span-2 border-b pb-3">
                      <p class="text-primary-blue">Request Submitted</p>
                      <div class="w-full mt-3">
                        <span>Reason: </span>
                        <span class="text-[#475569]"
                          >I would like to claim this Program.
                        </span>
                      </div>
                      <div class="w-full mt-3">
                        <span>Submitted by: </span>
                        <span class="text-[#475569]">Loki Laufeyson </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-5 w-full sm:flex uppercase justify-center items-center sm:px-6 bg-white space-x-8"
              >
                <button
                  class="px-10 py-2.5 bg-primary-blue rounded shadow-lg text-white font-medium"
                  type="button"
                  @click="onCloseModal"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close', 'next'])

const next = () => {
  emit('next')
}

const onCloseModal = () => {
  emit('close')
}
</script>
