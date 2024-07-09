<template>
  <div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <slot name="top-actions" />
        <table class="min-w-full leading-normal text-sm">
          <thead>
            <tr>
              <th
                v-for="(field, index) in fields"
                :key="index"
                class="px-5 py-3 border-b border-gray-200 text-center font-semibold text-special-dark tracking-wide bg-[#F8FAFC]"
              >
                <div class="flex items-center">
                  <input
                    v-if="index == 0"
                    type="checkbox"
                    class="w-4 h-4 text-sky-primary bg-gray-200 rounded"
                    :checked="isSelectedAll"
                    @change="handleSelectAll"
                  />
                  <span class="flex items-center whitespace-nowrap">
                    {{ field.name }}
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-if="!items.length">
              <tr>
                <td
                  :colspan="fields.length"
                  class="px-5 py-5 border-b border-gray-200 bg-white text-center text-gray-700"
                >
                  <div v-if="loading" class="flex flex-col items-center justify-center">
                    <div
                      class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </template>
            <template v-else>
              <slot name="items" items="items" />
            </template>
          </tbody>
        </table>
        <div
          class="px-5 bg-transparent flex flex-col lg:flex-row mb-4 relative text-sm items-center justify-between"
        >
          <div class="flex items-center">
            <span class="text-black-primary"> Showing 1 to 10 of 248 results </span>
          </div>
          <div class="flex items-center justify-center mx-auto mt-2 xs:mt-0">
            <Pagination :current="1" :current-total="0" :per-page="10" :total="100" />
          </div>
          <div class="hidden justify-end items-end mt-5 lg:flex">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Pagination from '@/components/ui/Pagination.vue'
import IconArrow from '@/components/icons/IconArrow.vue'

const props = defineProps({
  fields: {
    type: Array,
    default: () => [],
  },
  items: { type: Array, default: () => [] },
})

// const emit = defineEmits(['on-change-page', 'search', 'on-sort', 'on-filter', 'revoke'])
// const route = useRoute()
// const queryParams = computed(() => route.query)
// const filter = computed(() =>
//   queryParams.value.filter ? queryParams.value.filter.toString() : props.fileType
// )
// const search = computed(() =>
//   queryParams.value.search ? queryParams.value.search.toString() : ''
// )
// const status = computed(() =>
//   queryParams.value.status ? queryParams.value.status.toString() : ''
// )

// const params = reactive<ParamsSearch>({
//   filter: filter.value,
//   search: search.value,
//   status: status.value,
//   sort: 'desc',
//   order: 'created_at',
// })

// const onSearch = () => {
//   emit('search', params)
// }

// const handlePagination = (page: number) => {
//   emit('on-change-page', page)
// }

// const onFilter = (e: any) => {
//   const value = e.target.value
//   params.filter = value
//   emit('on-filter', value)
// }

// const selectedSortingField = ref('')
</script>
<style lang=""></style>
