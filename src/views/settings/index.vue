<template>
  <section>
    <h2 class="text-primary-dark-blue text-3xl my-5 font-bold">
      General Settings - Role Permission ✨
    </h2>
    <p class="mt-3">
      These permissions apply to all Programs settings. By default, all program
      identification, information, and program photo and image library are visible. To
      conceal individual details, press the toggle button to activate the show or hide
      setting.
    </p>

    <section class="border h-full w-full mt-10 rounded">
      <div class="border w-full px-3 py-4">
        <div class="flex justify-between items-center border-b pb-3">
          <h5 class="text-lg font-semibold text-primary-blue">Role</h5>
          <div class="flex items-center">
            <select
              id="limit"
              class="text-gray-900 outline-none focus:border-none text-sm rounded-lg w-[200px] block p-2 cursor-pointer"
              placeholder="Select Role"
              @change="onChangeRole($event.target.value)"
            >
              <option
                :value="role.value"
                :selected="role.value === selectedLimit"
                v-for="(role, index) in roles"
                :key="role.id"
              >
                {{ role.label }}
              </option>
            </select>
          </div>
        </div>

        <div class="mt-4">
          <div class="flex justify-between items-center mb-3">
            <h5 class="text-lg font-semibold text-primary-blue">Summary</h5>
            <span class="text-sm font-semibold text-primary-blue">Show / Hide</span>
          </div>
          <div class="flex justify-between items-center text-sm">
            <span class="flex max-w-[800px] pr-8"
              >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore. reprehenderit in voluptate velit esse cillum dolore. reprehenderit
              in voluptate velit esse cillum dolore. reprehenderit in voluptate velit esse
              cillum dolore. eprehenderit in voluptate velit esse cillum dolore.</span
            >
            <div class="flex items-center">
              <span
                class="text-xs flex mr-2"
                :class="
                  showInfo.alternative_phone_number ? 'text-[#059669]' : 'text-red-400'
                "
                >Show</span
              >
              <label class="switch inline-block">
                Show<input type="checkbox" v-model="showInfo.alternative_phone_number" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div class="flex justify-between items-center my-3">
            <h5 class="text-lg font-semibold text-primary-blue">Details</h5>
          </div>
          <div class="flex justify-between items-center text-sm border-b py-3">
            <span class="flex">Doing Business As</span>
            <div class="flex items-center">
              <span
                class="text-xs flex mr-2"
                :class="showInfo.doing_business_as ? 'text-[#059669]' : 'text-red-400'"
                >Show</span
              >
              <label class="switch inline-block">
                Show<input type="checkbox" v-model="showInfo.doing_business_as" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div class="flex justify-between items-center text-sm border-b py-3">
            <span class="flex">Hours of Operations</span>
            <div class="flex items-center">
              <span
                class="text-xs flex mr-2"
                :class="showInfo.hours_of_operations ? 'text-[#059669]' : 'text-red-400'"
                >Show</span
              >
              <label class="switch inline-block">
                Show<input type="checkbox" v-model="showInfo.hours_of_operations" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div class="flex justify-between items-center text-sm border-b py-3">
            <span class="flex">Operating Since</span>
            <div class="flex items-center">
              <span
                class="text-xs flex mr-2"
                :class="showInfo.operating_since ? 'text-[#059669]' : 'text-red-400'"
                >Show</span
              >
              <label class="switch inline-block">
                Show<input type="checkbox" v-model="showInfo.operating_since" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div class="flex justify-between items-center text-sm border-b py-3">
            <span class="flex">License Capacity</span>
            <div class="flex items-center">
              <span
                class="text-xs flex mr-2"
                :class="showInfo.license_capacity ? 'text-[#059669]' : 'text-red-400'"
                >Show</span
              >
              <label class="switch inline-block">
                Show<input type="checkbox" v-model="showInfo.license_capacity" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div class="flex justify-between items-center text-sm border-b py-3">
            <span class="flex">Enrollment (As of date): </span>
            <div class="flex items-center">
              <span
                class="text-xs flex mr-2"
                :class="showInfo.enrollment ? 'text-[#059669]' : 'text-red-400'"
                >Show</span
              >
              <label class="switch inline-block">
                Show<input type="checkbox" v-model="showInfo.enrollment" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div class="flex justify-between items-center text-sm border-b py-3">
            <span class="flex">Website</span>
            <div class="flex items-center">
              <span
                class="text-xs flex mr-2"
                :class="showInfo.website ? 'text-[#059669]' : 'text-red-400'"
                >Show</span
              >
              <label class="switch inline-block">
                Show<input type="checkbox" v-model="showInfo.website" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="flex justify-between items-center text-sm border-b py-3">
            <span class="flex">Vacancies</span>
            <div class="flex items-center">
              <span
                class="text-xs flex mr-2"
                :class="showInfo.vacancies ? 'text-[#059669]' : 'text-red-400'"
                >Show</span
              >
              <label class="switch inline-block">
                Show<input type="checkbox" v-model="showInfo.vacancies" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="flex justify-between items-center text-sm border-b py-3">
            <span class="flex">Age Group</span>
            <div class="flex items-center">
              <span
                class="text-xs flex mr-2"
                :class="showInfo.age_group ? 'text-[#059669]' : 'text-red-400'"
                >Show</span
              >
              <label class="switch inline-block">
                Show<input type="checkbox" v-model="showInfo.age_group" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        <div class="mt-20">
          <hr class="flex w-full border-b-1 my-6 border-[#64748B]" />
          <div class="flex justify-end items-end mt-5">
            <button
              type="button"
              class="flex items-center justify-center text-primary-blue py-3 px-4 border border-primary-blue rounded mr-5"
            >
              Cancel
            </button>
            <button
              type="button"
              class="flex items-center justify-center py-3 px-4 border border-primary-blue bg-primary-blue text-white rounded"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import IconEdit from '@/components/icons/IconEdit.vue'
import { ref } from 'vue'

const showInfo = ref({
  alternative_phone_number: false,
  doing_business_as: false,
  hours_of_operations: false,
  operating_since: false,
  license_capacity: false,
  enrollment: false,
  website: false,
  vacancies: false,
  age_group: false,
  image_gallery: false,
  image: false,
  summary: false,
})

const selectedRoles = ref('')
const roles = ref([
  {
    id: 1,
    label: 'All Programs',
    value: 'all_programs',
  },
  {
    id: 2,
    label: 'Family ',
    value: 'family ',
  },
  {
    id: 3,
    label: 'Parent',
    value: 'parent',
  },
  {
    id: 4,
    label: 'Consumer',
    value: 'consumer',
  },
])

const onChangeRole = (value) => {
  selectedRoles.value = value
}
</script>

<style>
.switch {
  position: relative;
  width: 54px;
  height: 28px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 30px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
