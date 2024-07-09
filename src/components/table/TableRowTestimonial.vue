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
        <img
          :src="item.avatar"
          alt=""
          class="mr-2 rounded-full h-[40px] object-cover w-[40px]"
        />
        <div class="flex flex-col items-start">
          <span class="whitespace-nowrap"> {{ item.author }}</span>
          <span class="whitespace-nowrap text-[#475569]"> {{ item.role }}</span>
        </div>
      </div>
    </td>
    <td class="px-5 py-5 capitalize">
      {{ item.description }}
    </td>
    <td class="px-5 py-5">
      <div class="flex items-center space-x-1">
        <IconStar :class="item.rating > 0 ? 'text-[#F59E0B]' : 'text-[#D9D9D9]'" />
        <IconStar :class="item.rating > 1 ? 'text-[#F59E0B]' : 'text-[#D9D9D9]'" />
        <IconStar :class="item.rating > 2 ? 'text-[#F59E0B]' : 'text-[#D9D9D9]'" />
        <IconStar :class="item.rating > 3 ? 'text-[#F59E0B]' : 'text-[#D9D9D9]'" />
        <IconStar :class="item.rating > 4 ? 'text-[#F59E0B]' : 'text-[#D9D9D9]'" />
      </div>
    </td>
    <td class="px-5 py-5">
      {{ item.program }}
    </td>
    <td class="px-5 py-5">
      {{ item.last_update }}
    </td>
    <td class="px-5 py-5 capitalize">
      <span
        class="rounded-full px-3 py-1.5 border border-primary-blue"
        :class="statusClasses()"
        >{{ item.status }}</span
      >
    </td>
    <td class="px-5 py-5 flex items-center justify-center space-x-2">
      <button type="button" class="rounded">
        <IconApprove />
      </button>
      <button type="button" class="rounded">
        <IconReject />
      </button>
      <button type="button" class="rounded">
        <IconDelete />
      </button>
    </td>
  </tr>
</template>

<script setup>
import IconDelete from '@/components/icons/IconDelete.vue'
import IconReject from '@/components/icons/IconReject.vue'
import IconApprove from '@/components/icons/IconApprove.vue'
import IconStar from '@/components/icons/IconStar.vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})

const statusClasses = () => {
  if (props.item.status === 'Enabled') {
    return `text-[#0D5C9B] bg-[#fff]`
  }
  if (props.item.status === 'Disabled') {
    return `text-[#0D5C9B] bg-[#94A3B82E]`
  }

  return `text-[#0D5C9B] bg-white`
}
</script>
