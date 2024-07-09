<template>
  <section>
    <h2 class="text-primary-dark-blue text-3xl font-bold my-5">
      Testimonials Management ✨
    </h2>

    <div>
      <Table :fields="fields" :items="data">
        <template #top-actions>
          <div
            class="py-2 px-3 text-primary-dark-blue border-b border-gray-200 flex justify-between items-center w-full"
          >
            <p class="text-lg font-semibold">All Programs {{ data.length }}</p>
            <div class="flex items-center border border-primary-blue rounded px-3 py-2">
              <label for="sort" class="block text-sm font-medium text-primary-blue"
                >Sort by</label
              >
            </div>
          </div>
        </template>
        <template #items>
          <TableRowTestimonial
            v-for="item in data"
            :key="item.id"
            :item="item"
            @view-note="handleViewNote"
          />
        </template>
      </Table>
    </div>
  </section>
</template>

<script setup>
import Table from '@/components/table/Table.vue'
import TableRowTestimonial from '@/components/table/TableRowTestimonial.vue'

const fields = [
  {
    name: '',
    value: 'mark',
  },
  {
    name: 'Author',
    value: 'Author',
  },
  {
    name: 'Testimonial',
    value: 'Testimonial',
  },
  {
    name: 'Rating',
    value: 'Rating',
  },
  {
    name: 'Program',
    value: 'Program',
  },
  {
    name: 'Last Update',
    value: 'Last Update',
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

const data = [
  {
    id: 1,
    author: 'Clark Kent',
    role: 'Program',
    description:
      "Starry, starry night. Paint your palette blue and grey.  Look out on a summer's dayWith eyes that know the darkness in my soul",
    avatar:
      'https://images.unsplash.com/photo-1482849297070-f4fae2173efe?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    last_update: '11/01/2023',
    status: 'Enabled',
    program: 'Caliday Before and After Care of Vincent Farms',
    rating: 5,
  },
  {
    id: 2,
    author: 'Clark Kent',
    role: 'Program',
    description:
      "Starry, starry night. Paint your palette blue and grey.  Look out on a summer's dayWith eyes that know the darkness in my soul",
    avatar:
      'https://images.unsplash.com/photo-1482849297070-f4fae2173efe?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    last_update: '11/01/2023',
    status: 'Enabled',
    program: 'Caliday Before and After Care of Vincent Farms',
    rating: 4,
  },
  {
    id: 3,
    author: 'Clark Kent',
    role: 'Family',
    description:
      "Starry, starry night. Paint your palette blue and grey.  Look out on a summer's dayWith eyes that know the darkness in my soul",
    avatar:
      'https://images.unsplash.com/photo-1482849297070-f4fae2173efe?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    last_update: '11/01/2023',
    status: 'Enabled',
    program: 'Caliday Before and After Care of Vincent Farms',
    rating: 3,
  },
  {
    id: 4,
    author: 'Clark Kent',
    role: 'Provider',
    description:
      "Starry, starry night. Paint your palette blue and grey.  Look out on a summer's dayWith eyes that know the darkness in my soul",
    avatar:
      'https://images.unsplash.com/photo-1482849297070-f4fae2173efe?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    last_update: '11/01/2023',
    status: 'Disabled',
    program: 'Caliday Before and After Care of Vincent Farms',
    rating: 2,
  },
]
</script>
