<template>
  <section>
    <h2 class="text-primary-dark-blue text-3xl font-bold my-5">Requests History ✨</h2>

    <div>
      <Table :fields="fields" :items="programs">
        <template #top-actions>
          <div
            class="py-2 px-3 text-primary-dark-blue border-b border-gray-200 flex justify-between items-center w-full"
          >
            <p class="text-lg font-semibold">All Programs {{ programs.length }}</p>
            <div class="flex items-center space-x-4">
              <div class="flex items-center">
                <label for="limit" class="block text-sm font-medium text-primary-blue"
                  >Show {{ selectedLimit }} Users</label
                >
                <select
                  id="limit"
                  class="text-gray-900 outline-none focus:border-none text-sm rounded-lg w-[20px] block p-2 cursor-pointer"
                  @change="onChangeLimit($event.target.value)"
                >
                  <option
                    :value="limit"
                    :selected="limit === selectedLimit"
                    v-for="(limit, index) in limitOptions"
                    :key="index"
                  >
                    {{ limit }}
                  </option>
                </select>
              </div>
              <div class="flex items-center border border-primary-blue rounded px-3 py-2">
                <label for="sort" class="block text-sm font-medium text-primary-blue"
                  >Sort by</label
                >
              </div>
            </div>
          </div>
        </template>
        <template #items>
          <TableRowRequestHistory
            v-for="item in programs"
            :key="item.id"
            :item="item"
            @view-note="handleViewNote"
          />
        </template>
      </Table>
    </div>

    <!-- Modal -->

    <ModalNote :showModal="showModalNote" @close="showModalNote = false" />
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
import ModalNote from '@/components/modal/ModalNote.vue'
import Table from '@/components/table/Table.vue'
import { ref } from 'vue'
import TableRowRequestHistory from '@/components/table/TableRowRequestHistory.vue'

const selectedLimit = ref(10)
const limitOptions = ref([10, 50, 100, 200, 500])
const onChangeLimit = (value) => {
  selectedLimit.value = value
}

const showModalNote = ref(false)

const handleViewNote = () => {
  showModalNote.value = true
}

const fields = [
  {
    name: '',
    value: 'mark',
  },
  {
    name: 'Name',
    value: 'name',
  },
  {
    name: 'Type',
    value: 'type',
  },
  {
    name: 'City',
    value: 'city',
  },
  {
    name: 'Requested by',
    value: 'requested_by',
  },
  {
    name: 'Updated On',
    value: 'updated_on',
  },
  {
    name: 'Status',
    value: 'status',
  },
  {
    name: 'ACTIONS',
    value: 'actions',
  },
]

const programs = [
  {
    id: 1,
    name: 'Caliday Before and After Care of Vincent Farms',
    type: 'Child Care Center',
    city: 'Baltimore, MD',
    icon: IconComment,
    requested_by: ' Clark Kent',
    updated_on: '11/01/2023',
    status: 'pending',
  },
  {
    id: 2,
    name: 'Caliday Before and After Care of Vincent Farms',
    type: 'Child Care Center',
    city: 'Baltimore, MD',
    icon: IconComment,
    requested_by: ' Clark Kent',
    updated_on: '11/01/2023',
    status: 'approved',
  },
  {
    id: 3,
    name: 'Caliday Before and After Care of Vincent Farms',
    type: 'Child Care Center',
    city: 'Baltimore, MD',
    icon: IconComment,
    requested_by: ' Clark Kent',
    updated_on: '11/01/2023',
    status: 'rejected',
  },
  {
    id: 4,
    name: 'Caliday Before and After Care of Vincent Farms',
    type: 'Child Care Center',
    city: 'Baltimore, MD',
    icon: IconComment,
    requested_by: ' Clark Kent',
    updated_on: '11/01/2023',
    status: 'disassociated',
  },
  {
    id: 5,
    name: 'Caliday Before and After Care of Vincent Farms',
    type: 'Child Care Center',
    city: 'Baltimore, MD',
    icon: IconComment,
    requested_by: ' Clark Kent',
    updated_on: '11/01/2023',
    status: 'pending',
  },
  {
    id: 6,
    name: 'Caliday Before and After Care of Vincent Farms',
    type: 'Child Care Center',
    city: 'Baltimore, MD',
    icon: IconComment,
    requested_by: ' Clark Kent',
    updated_on: '11/01/2023',
    status: 'pending',
  },
]
</script>
