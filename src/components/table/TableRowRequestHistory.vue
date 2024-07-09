<template>
  <tr class="border-b border-gray-200 bg-white">
    <td class="px-5 flex items-center justify-center py-5">
      <input
        type="checkbox"
        class="w-4 h-4 text-sky-primary rounded"
        :checked="isSelectedAll"
        @change="handleSelectAll"
      />
    </td>
    <td class="px-5 py-5">
      <div class="flex items-center">
        <img src="@/assets/images/QR4.svg" alt="" class="mr-2 w-[40px]" />
        <span class="whitespace-break-spaces"> {{ item.name }}</span>
      </div>
    </td>
    <td class="px-5 py-5 capitalize">
      {{ item.type }}
    </td>
    <td class="px-5 py-5">
      {{ item.city }}
    </td>
    <td class="px-5 py-5">
      {{ item.requested_by }}
    </td>
    <td class="px-5 py-5">
      {{ item.updated_on }}
    </td>
    <td class="px-5 py-5 capitalize">
      <span class="rounded-full px-3 py-1" :class="statusClasses()">{{
        item.status
      }}</span>
    </td>
    <td class="px-5 py-5 flex items-center justify-center space-x-3">
      <button type="button" class="border rounded p-2">
        <IconEdit />
      </button>
      <button
        type="button"
        @click="$emit('view-note', item.id)"
        class="border rounded p-2"
      >
        <IconNote />
      </button>
    </td>
  </tr>
</template>

<script setup>
import IconEdit from '@/components/icons/IconEdit.vue'
import IconNote from '@/components/icons/IconNote.vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})

const statusClasses = () => {
  if (props.item.status === 'pending') {
    return `text-[#D97706] bg-[#FEF3C7]`
  }
  if (props.item.status === 'approved') {
    return `text-[#059669] bg-[#D1FAE5]`
  }
  if (props.item.status === 'rejected') {
    return `text-[#334155] bg-[#F43F5E47]`
  }
  if (props.item.status === 'disassociated') {
    return `text-[#334155] bg-[#9797973D]`
  }

  return `text-[#334155] bg-white`
}
</script>
