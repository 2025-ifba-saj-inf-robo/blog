<template>
  <div class="number-converter">
    <h3>Conversor de Sistemas Numéricos</h3>
    
    <div class="input-group">
      <label for="decimal">Decimal (Base 10):</label>
      <input 
        id="decimal" 
        v-model="decimal" 
        @input="validateDecimal"
        placeholder="Ex: 42" 
        type="text"
      />
    </div>
    
    <div class="input-group">
      <label for="binary">Binário (Base 2):</label>
      <input 
        id="binary" 
        v-model="binary" 
        @input="validateBinary"
        placeholder="Ex: 101010" 
        type="text"
      />
    </div>
    
    <div class="input-group">
      <label for="octal">Octal (Base 8):</label>
      <input 
        id="octal" 
        v-model="octal" 
        @input="validateOctal"
        placeholder="Ex: 52" 
        type="text"
      />
    </div>
    
    <div class="input-group">
      <label for="hexadecimal">Hexadecimal (Base 16):</label>
      <input 
        id="hexadecimal" 
        v-model="hexadecimal" 
        @input="validateHexadecimal"
        placeholder="Ex: 2A" 
        type="text"
      />
    </div>
    
    <div class="button-group">
      <button @click="convert" class="convert-button">Converter</button>
      <button @click="clearAll" class="clear-button">Limpar</button>
    </div>
    
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumberConverter',
  data() {
    return {
      decimal: '',
      binary: '',
      octal: '',
      hexadecimal: '',
      error: '',
      activeField: null
    }
  },
  methods: {
    convert() {
      this.error = '';
      
      try {
        if (this.decimal) {
          this.convertFromDecimal();
        } else if (this.binary) {
          this.convertFromBinary();
        } else if (this.octal) {
          this.convertFromOctal();
        } else if (this.hexadecimal) {
          this.convertFromHexadecimal();
        } else {
          this.error = 'Por favor, insira um valor em pelo menos um dos campos.';
        }
      } catch (e) {
        this.error = 'Erro na conversão: ' + e.message;
      }
    },
    
    convertFromDecimal() {
      const num = parseInt(this.decimal, 10);
      if (isNaN(num)) {
        this.error = 'Valor decimal inválido';
        return;
      }
      
      this.binary = num.toString(2);
      this.octal = num.toString(8);
      this.hexadecimal = num.toString(16).toUpperCase();
    },
    
    convertFromBinary() {
      if (!/^[01]+$/.test(this.binary)) {
        this.error = 'Valor binário inválido';
        return;
      }
      
      const num = parseInt(this.binary, 2);
      this.decimal = num.toString(10);
      this.octal = num.toString(8);
      this.hexadecimal = num.toString(16).toUpperCase();
    },
    
    convertFromOctal() {
      if (!/^[0-7]+$/.test(this.octal)) {
        this.error = 'Valor octal inválido';
        return;
      }
      
      const num = parseInt(this.octal, 8);
      this.decimal = num.toString(10);
      this.binary = num.toString(2);
      this.hexadecimal = num.toString(16).toUpperCase();
    },
    
    convertFromHexadecimal() {
      if (!/^[0-9A-Fa-f]+$/.test(this.hexadecimal)) {
        this.error = 'Valor hexadecimal inválido';
        return;
      }
      
      const num = parseInt(this.hexadecimal, 16);
      this.decimal = num.toString(10);
      this.binary = num.toString(2);
      this.octal = num.toString(8);
    },
    
    validateDecimal() {
      this.activeField = 'decimal';
      this.clearOtherFields('decimal');
      if (this.decimal && !/^\d+$/.test(this.decimal)) {
        this.error = 'Decimal deve conter apenas dígitos de 0-9';
      } else {
        this.error = '';
      }
    },
    
    validateBinary() {
      this.activeField = 'binary';
      this.clearOtherFields('binary');
      if (this.binary && !/^[01]+$/.test(this.binary)) {
        this.error = 'Binário deve conter apenas 0 e 1';
      } else {
        this.error = '';
      }
    },
    
    validateOctal() {
      this.activeField = 'octal';
      this.clearOtherFields('octal');
      if (this.octal && !/^[0-7]+$/.test(this.octal)) {
        this.error = 'Octal deve conter apenas dígitos de 0-7';
      } else {
        this.error = '';
      }
    },
    
    validateHexadecimal() {
      this.activeField = 'hexadecimal';
      this.clearOtherFields('hexadecimal');
      if (this.hexadecimal && !/^[0-9A-Fa-f]+$/.test(this.hexadecimal)) {
        this.error = 'Hexadecimal deve conter apenas dígitos de 0-9 e letras de A-F';
      } else {
        this.error = '';
      }
    },
    
    clearOtherFields(activeField) {
      const fields = ['decimal', 'binary', 'octal', 'hexadecimal'];
      fields.forEach(field => {
        if (field !== activeField) {
          this[field] = '';
        }
      });
    },
    
    clearAll() {
      this.decimal = '';
      this.binary = '';
      this.octal = '';
      this.hexadecimal = '';
      this.error = '';
      this.activeField = null;
    }
  }
}
</script>

<style scoped>
.number-converter {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--bg-color-light, #f8f9fa);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

h3 {
  text-align: center;
  margin-bottom: 20px;
  color: var(--c-brand, #3eaf7c);
}

.input-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  color: var(--c-text, #2c3e50);
}

input {
  padding: 8px 12px;
  border: 1px solid var(--c-border, #ddd);
  border-radius: 4px;
  font-size: 16px;
  background-color: var(--bg-color, #fff);
  color: var(--c-text, #2c3e50);
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  flex: 1;
  transition: background-color 0.3s;
}

.convert-button {
  background-color: var(--c-brand, #3eaf7c);
  color: white;
}

.convert-button:hover {
  background-color: var(--c-brand-light, #4abf8a);
}

.clear-button {
  background-color: var(--c-danger, #e74c3c);
  color: white;
}

.clear-button:hover {
  background-color: var(--c-danger-light, #f55a4e);
}

.error-message {
  margin-top: 15px;
  color: var(--c-danger, #e74c3c);
  font-size: 14px;
  text-align: center;
}

@media (max-width: 480px) {
  .button-group {
    flex-direction: column;
  }
}
</style>
