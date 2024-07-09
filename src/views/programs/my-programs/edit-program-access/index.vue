<template>
  <section>
    <h2 class="text-primary-dark-blue text-3xl my-5 font-bold">Program Access ✨</h2>

    <section class="bg-white flex justify-between mt-10">
      <div class="w-full">
        <div class="flex items-center w-full">
          <img src="@/assets/images/QR4.svg" alt="" />
          <div class="flex items-start flex-col ml-3 w-full">
            <span class="text-primary-blue text-sm mb-1 block">CHILD CARE CENTER</span>
            <h5 class="text-primary-dark-blue font-semibold">
              All-Stars Learning Center ✨
            </h5>
            <div class="flex items-center mt-3 font-medium">
              <span
                class="px-2 py-1 block mr-3 text-center text-xs rounded bg-[#E0F2FE] text-primary-blue"
                >Quality Rating 1</span
              >
              <span class="px-2 py-1 text-xs rounded bg-[#D1FAE5] text-green-600"
                >Scholarship</span
              >
            </div>
          </div>
        </div>
        <div class="text-sm text-[#64748B] flex mt-10">
          <span class="block w-full"
            >2800 N. Charles St. <br />
            Baltimore, MD 21218
          </span>
          <div class="block w-full">
            <span class="block">(443) 562-2397</span>
            <span class="text-[#6366F1] block">carolinmcneail.com</span>
          </div>
        </div>
      </div>
      <div class="w-full self-end text-right">
        <div class="inline-flex items-start flex-col">
          <h5 class="text-primary-dark-blue w-full font-semibold text-base">
            LIcense # 257449
          </h5>
          <p class="w-full">Lead Contact</p>
          <div class="text-sm text-[#64748B]">
            Clark Kent <br />
            kclark@gmail.com <br />
            410-967-3589 (mobile) <br />
          </div>
        </div>
        <div class="text-sm text-[#1EA379] font-medium flex mt-8">
          <span class="block w-full"
            >✨ Eligible to accept Child Care Scholarship voucher
          </span>
        </div>
      </div>
    </section>
    <hr class="flex w-full border-b-1 my-6 border-[#64748B]" />

    <section class="border h-full flex flex-col lg:flex-row">
      <div class="lg:w-[250px] border px-3 py-7 w-full">
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1712325632272-b0cbb2a27db6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="w-full"
          />
          <div class="flex items-center mx-auto justify-center mt-3">
            <span
              class="text-xs flex mr-2"
              :class="showInfo.image ? 'text-[#059669]' : 'text-red-400'"
              >Show</span
            >
            <label class="switch inline-block">
              Show<input type="checkbox" v-model="showInfo.image" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div class="mt-5">
          <p class="text-sm">Summary</p>
          <textarea
            name="summary"
            id="summary"
            rows="10"
            class="border rounded w-full p-2 mt-3 text-[#475569] text-sm"
            v-model="summary"
          ></textarea>
          <div class="flex items-center mx-auto justify-center mt-3">
            <span
              class="text-xs flex mr-2"
              :class="showInfo.summary ? 'text-[#059669]' : 'text-red-400'"
              >Show</span
            >
            <label class="switch inline-block">
              Show<input type="checkbox" v-model="showInfo.summary" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>
      <div class="border w-full px-3 py-7">
        <div class="flex justify-between items-center">
          <h5 class="text-lg font-semibold text-primary-blue">Edit Program Access</h5>
          <button
            class="flex items-center justify-center text-primary-blue py-2 px-4 border border-primary-blue rounded"
          >
            <IconEdit class="mr-1" />Edit
          </button>
        </div>

        <div class="border rounded mt-4 p-3">
          <div class="flex justify-between items-center mb-3">
            <h5 class="text-lg font-semibold text-primary-blue">
              Program Identification
            </h5>
            <span class="text-sm font-semibold text-primary-blue">Show / Hide</span>
          </div>
          <div class="flex justify-between items-center text-sm">
            <span class="flex">Alternative Phone Number</span>
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
            <h5 class="text-lg font-semibold text-primary-blue">Program Information</h5>
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
              <span class="text-[#475569] flex mr-8 text-right"
                >Monday - Friday: 9:00 am - 5:00 pm
              </span>
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
              <span class="text-[#475569] flex mr-8 text-right">July 20, 2023 </span>
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
              <span class="text-[#475569] flex mr-8 text-right"> 30 </span>
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
            <span class="flex">Enrollment (As of Date)</span>
            <div class="flex items-center">
              <span class="text-[#475569] flex mr-8 text-right">January 30, 2023 </span>
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
              <span class="text-[#475569] flex mr-8 text-right"
                >http://www.google.com
              </span>
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
              <span class="text-[#475569] flex mr-8 text-right">30 </span>
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
              <span class="text-[#475569] flex mr-8 text-right">18 -75 </span>
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
          <div class="flex justify-between items-center">
            <h5 class="text-lg font-semibold text-primary-dark-blue">
              Image Gallery (6)
            </h5>
            <div class="flex items-center">
              <span
                class="text-xs flex mr-2"
                :class="showInfo.image_gallery ? 'text-[#059669]' : 'text-red-400'"
                >Show</span
              >
              <label class="switch inline-block">
                Show<input type="checkbox" v-model="showInfo.image_gallery" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div class="border bg-[#F1F5F9] mt-5 rounded">
            <div class="flex items-center mx-auto justify-center space-x-2 p-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1712325632272-b0cbb2a27db6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="h-[70px]"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1712325632272-b0cbb2a27db6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="h-[70px]"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1712325632272-b0cbb2a27db6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="h-[70px]"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1712325632272-b0cbb2a27db6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="h-[70px]"
              />
            </div>
            <span
              class="text-[#64748B] text-center flex items-center my-5 justify-center w-full"
              >We accept PNG, GIF, JPEG, and JPG files .</span
            >
          </div>
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

const summary = ref(
  "Starry, starry night. Paint your palette blue and gray.  Look out on a summer's day. With eyes that know the darkness in my soul Shadows on the hills. Sketch the trees and the  daffodils Catch the breeze and the winter chills In colors on the snowy, linen land. Now, I understand."
)
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
