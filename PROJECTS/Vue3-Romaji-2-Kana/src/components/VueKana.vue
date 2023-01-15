<script setup>
import { ref, reactive } from "vue";

import kanaHashJSON from "@/assets/kana.json";

// Romaji Input
const romajiInput = ref("");
const romaji = ref("");
const initialVals = {
  h: "",
  k: "",
};

const input = reactive({ ...initialVals });
const output = reactive({ ...initialVals });
// Hash Max Len Kana Exists
const kanaHash = ref(kanaHashJSON);
const hashMaxLen = ref(5);
const hashExists = ref(false);
const start = ref(0);


function resetInput() {
  Object.assign(input, initialVals);
}

function findHash() {
  while (hashMaxLen.value > 0 && !hashExists.value) {
    const end = start.value + hashMaxLen.value,
      hashKey = romaji.value.substring(start.value, end),
      hashItem = kanaHash.value[hashKey];

    if (hashItem != null) {
      input.h += hashItem.h;
      input.k += hashItem.k;
      start.value += hashMaxLen.value;
      hashExists.value = true;
    }

    hashMaxLen.value--;
  }
}

function resetVars() {
  romaji.value = romajiInput.value.toLowerCase();
  start.value = 0;
  resetInput();
  romaji.value = romaji.value.toLowerCase();
}

function assignVars() {
  input.h += romaji.value.charAt(start.value);
  input.k += romaji.value.charAt(start.value);
  start.value++;
}

function ensureVarsRange() {
  if (romaji.value.length - start.value < hashMaxLen.value) {
    hashMaxLen.value = romaji.value.length - start.value;
  }
}

function convert() {
  resetVars();
  const inputArr = [...romaji.value];
  inputArr.forEach(() => {
    hashMaxLen.value = 5;
    hashExists.value = false;
    ensureVarsRange();
    findHash();
    if (!hashExists.value) {
      assignVars();
    }
  });

  output.h = input.h;
  output.k = input.k;
}
</script>

<template>
  <div class="wrapper flex">
    <div class="box-panel">
      <h1>Romaji 2 Kana</h1>
      <form>
        <div class="col">
          <label>Romaji</label>
          <input class="input" id="romaji" name="romaji" v-model="romajiInput" v-on:keyup="convert" />
        </div>

        <div class="col">
          <label>Hiragana</label>
          <div class="output">{{ output.h }}</div>
        </div>

        <div class="col">
          <label>Katakana</label>
          <div class="output">{{ output.k }}</div>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
:root {
  --light-gray: #cbd5e0;
}

body * {
  box-sizing: border-box;
}

.wrapper {
  height: 100vh;
  width: 100%;
}

.flex {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}

.box-panel {
  width: 600px;
  padding: 2rem 4rem 4rem 4rem;
  border: 1px solid var(--light-gray);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

h1 {
  margin: 0 auto 2rem auto;
}

label {
  width: 100%;
  display: block;
  padding: 10px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}

.input {
  display: block;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  height: 3rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
}

.output {
  width: 100px;
  border: 1px solid var(--light-gray);
  width: 100%;
  height: 3rem;
  font-size: 1.2rem;
  line-height: 3rem;
}
</style>
