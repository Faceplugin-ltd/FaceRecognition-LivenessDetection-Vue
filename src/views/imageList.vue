<template>
  <div>
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
        @click="show = !show"
        class="flex items-center px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none"
      >
        <span class="mr-4">Select Image</span>
        <svg
          class="w-5 h-5 text-indigo-100 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        v-show="show"
        class="
          absolute
          right-0
          py-2
          bg-gray-800
          shadow-xl
          w-44
        "
      >
        <button
          @click='selectImage1'
          class="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
          1.jpg
        </button>
        <button
          @click='selectImage2'
          class="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
          2.jpg
        </button>
        <button
          @click='selectImage3'
          class="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
          3.png
        </button>
        <button
          @click='selectImage4'
          class="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
          4.jpg
        </button>
        <button
          @click='selectImage5'
          class="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
          5.jpg
        </button>
        <button
          @click='selectImage6'
          class="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
          6.jpg
        </button>
        <button
          @click='selectImage7'
          class="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
          7.jpg
        </button>
        <button
          @click='selectImage8'
          class="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
          8.jpg
        </button>
        <button
          @click='selectImage9'
          class="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
          9.jpg
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        show: false,
      };
    },
  name: "imageList",
  methods: {
    selectImage1() {
      this.$emit('changeI', '1.jpg');
    },
    selectImage2() {
      this.$emit('changeI', '2.jpg');
    },
    selectImage3() {
      this.$emit('changeI', '3.png');
    },
    selectImage4() {
      this.$emit('changeI', '4.jpg');
    },
    selectImage5() {
      this.$emit('changeI', '5.jpg');
    },
    selectImage6() {
      this.$emit('changeI', '6.jpg');
    },
    selectImage7() {
      this.$emit('changeI', '7.jpg');
    },
    selectImage8() {
      this.$emit('changeI', '8.jpg');
    },
    selectImage9() {
      this.$emit('changeI', '9.jpg');
    }
  }
}
</script>

<style scoped>

</style>