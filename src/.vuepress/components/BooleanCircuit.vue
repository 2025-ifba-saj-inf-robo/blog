<template>
  <div v-html="animatedSvg" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  equation: {
    type: String,
    required: true
  }
})

function getSvgForEquation(equation) {
  const eq = equation.toUpperCase().replace(/\s+/g, '');

  if (eq === 'AANDB') return andGateSvg()
  if (eq === 'AORB') return orGateSvg()
  if (eq === 'NOTA') return notGateSvg()
  if (eq === 'ANANDB') return nandGateSvg()
  return `<svg><text x="10" y="20">Equação não suportada</text></svg>`
}

function andGateSvg() {
  return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .wire { stroke: black; stroke-width: 2; }
    .signal0 { fill: #ccc; }
    .signal1 { fill: #4CAF50; }
    .label { font: 14px sans-serif; }
  </style>

  <circle id="in1" cx="30" cy="60" r="10" class="signal0" />
  <circle id="in2" cx="30" cy="100" r="10" class="signal0" />
  <line x1="40" y1="60" x2="90" y2="60" class="wire" />
  <line x1="40" y1="100" x2="90" y2="100" class="wire" />
  <path d="M90,40 h30 a30,30 0 0,1 0,80 h-30 z" fill="lightgray" stroke="black" stroke-width="2"/>
  <text x="105" y="95" text-anchor="middle" class="label">AND</text>
  <circle id="out" cx="150" cy="80" r="10" class="signal0" />
  <line x1="120" y1="80" x2="140" y2="80" class="wire" />
  <text x="10" y="65" class="label">A</text>
  <text x="10" y="105" class="label">B</text>
  <text x="160" y="85" class="label">Saída</text>

  <animate xlink:href="#in1" attributeName="class"
           values="signal0;signal0;signal1;signal1;signal0"
           keyTimes="0;0.25;0.5;0.75;1"
           dur="8s" repeatCount="indefinite" />
  <animate xlink:href="#in2" attributeName="class"
           values="signal0;signal1;signal0;signal1;signal0"
           keyTimes="0;0.25;0.5;0.75;1"
           dur="8s" repeatCount="indefinite" />
  <animate xlink:href="#out" attributeName="class"
           values="signal0;signal0;signal0;signal1;signal0"
           keyTimes="0;0.25;0.5;0.75;1"
           dur="8s" repeatCount="indefinite" />
</svg>
`
}

function orGateSvg() {
  return `
<!-- OR gate animation SVG here (igual ao anterior, adaptado para OR) -->
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<!-- mesmo estilo e animações, apenas ajusta as saídas para OR -->
<text x="10" y="20">Porta OR</text>
</svg>
`
}

function notGateSvg() {
  return `
<svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">
  <style>
    .wire { stroke: black; stroke-width: 2; }
    .signal0 { fill: #ccc; }
    .signal1 { fill: #4CAF50; }
    .label { font: 14px sans-serif; }
  </style>

  <circle id="not_in" cx="30" cy="80" r="10" class="signal0" />
  <line x1="40" y1="80" x2="90" y2="80" class="wire" />
  <polygon points="90,60 120,80 90,100" fill="lightgray" stroke="black" stroke-width="2"/>
  <circle cx="125" cy="80" r="5" fill="white" stroke="black" stroke-width="2"/>
  <text x="100" y="75" class="label">NOT</text>
  <circle id="not_out" cx="150" cy="80" r="10" class="signal1" />
  <line x1="130" y1="80" x2="140" y2="80" class="wire" />
  <text x="10" y="85" class="label">A</text>
  <text x="160" y="85" class="label">Saída</text>

  <animate xlink:href="#not_in" attributeName="class"
           values="signal0;signal1;signal0;signal1;signal0"
           keyTimes="0;0.25;0.5;0.75;1"
           dur="8s" repeatCount="indefinite"/>
  <animate xlink:href="#not_out" attributeName="class"
           values="signal1;signal0;signal1;signal0;signal1"
           keyTimes="0;0.25;0.5;0.75;1"
           dur="8s" repeatCount="indefinite"/>
</svg>
`
}

function nandGateSvg() {
  return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<!-- NAND gate SVG igual ao anterior, com sinal invertido -->
<text x="10" y="20">Porta NAND</text>
</svg>
`
}

const animatedSvg = computed(() => getSvgForEquation(props.equation))
</script>