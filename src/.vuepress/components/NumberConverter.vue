<template>
  <div class="max-w-md mx-auto p-4 rounded-2xl shadow bg-white space-y-4">
    <h2 class="text-xl font-bold text-center">Conversor Decimal ↔ Binário</h2>

    <div>
      <label class="block text-sm font-medium text-gray-700">Decimal</label>
      <input
        type="text"
        v-model="decimalInput"
        @input="convertToBinary"
        class="mt-1 block w-full p-2 border rounded"
        placeholder="Digite um número decimal"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Binário</label>
      <input
        type="text"
        v-model="binaryOutput"
        class="mt-1 block w-full p-2 border rounded bg-gray-100"
        readonly
      />
    </div>

    <div v-if="error" class="text-red-600 text-sm">{{ error }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const decimalInput = ref('')
const binaryOutput = ref('')
const error = ref('')

const convertToBinary = () => {
  const value = decimalInput.value.trim()
  const number = parseInt(value, 10)

  if (isNaN(number)) {
    binaryOutput.value = ''
    error.value = 'Digite um número decimal válido.'
    return
  }

  error.value = ''
  binaryOutput.value = number.toString(2)
}
</script>

<style scoped>
input:read-only {
  cursor: not-allowed;
}
</style>
