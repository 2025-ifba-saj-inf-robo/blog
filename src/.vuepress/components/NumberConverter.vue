<template>
  <div class="converter">
    <h2>Conversor Numérico: Decimal ↔ Binário ↔ Octal ↔ Hexadecimal</h2>

    <div class="field-group">
      <label for="decimal">Decimal:</label>
      <input
        id="decimal"
        type="text"
        v-model="decimal"
        @input="updateFrom('decimal')"
        placeholder="Ex: 255"
      />
    </div>

    <div class="field-group">
      <label for="binary">Binário:</label>
      <input
        id="binary"
        type="text"
        v-model="binary"
        @input="updateFrom('binary')"
        placeholder="Ex: 11111111"
      />
    </div>

    <div class="field-group">
      <label for="octal">Octal:</label>
      <input
        id="octal"
        type="text"
        v-model="octal"
        @input="updateFrom('octal')"
        placeholder="Ex: 377"
      />
    </div>

    <div class="field-group">
      <label for="hex">Hexadecimal:</label>
      <input
        id="hex"
        type="text"
        v-model="hex"
        @input="updateFrom('hex')"
        placeholder="Ex: FF"
      />
    </div>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const decimal = ref('')
const binary = ref('')
const octal = ref('')
const hex = ref('')
const error = ref('')

function updateFrom(base: 'decimal' | 'binary' | 'octal' | 'hex') {
  error.value = ''
  let value = ''
  let number: number | null = null

  try {
    switch (base) {
      case 'decimal':
        value = decimal.value.trim()
        number = parseInt(value, 10)
        break
      case 'binary':
        value = binary.value.trim()
        number = parseInt(value, 2)
        break
      case 'octal':
        value = octal.value.trim()
        number = parseInt(value, 8)
        break
      case 'hex':
        value = hex.value.trim()
        number = parseInt(value, 16)
        break
    }

    if (isNaN(number) || number < 0) {
      throw new Error('Número inválido.')
    }

    decimal.value = number.toString(10)
    binary.value = number.toString(2)
    octal.value = number.toString(8)
    hex.value = number.toString(16).toUpperCase()
  } catch {
    clearOthers(base)
    error.value = 'Valor inválido para o formato selecionado.'
  }
}

function clearOthers(except: string) {
  if (except !== 'decimal') decimal.value = ''
  if (except !== 'binary') binary.value = ''
  if (except !== 'octal') octal.value = ''
  if (except !== 'hex') hex.value = ''
}
</script>

<style scoped>
.converter {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fdfdfd;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  font-family: Arial, sans-serif;
}

.converter h2 {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.field-group {
  margin-bottom: 1rem;
}

.field-group label {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: bold;
  color: #444;
}

.field-group input {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.field-group input:focus {
  border-color: #007bff;
  outline: none;
}

.error {
  color: red;
  text-align: center;
  margin-top: 1rem;
}
</style>
