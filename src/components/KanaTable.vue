<script setup lang="ts">
import { KanaItem } from '../types/kana'
interface Props {
  kanaTable: Array<KanaItem>;
  tableCols: Array<string>;
  tableRows: Array<string>;
}

defineProps<Props>()
</script>

<template>
  <table>
    <tr>
      <td v-for="(tableCol, index) in tableCols"
        :key="index">
        <template v-for="(hiragana, index) in kanaTable"
          :key="index">
          <div v-if="!hiragana.consonant && hiragana.vowel && hiragana.vowel === tableCol">
            {{ hiragana.kana }}<br/>
            {{ hiragana.romaji }}
          </div>
        </template>
      </td>
    </tr>

    <tr v-for="(tableRow, index) in tableRows"
      :key="index">
      <td v-for="(tableCol, index) in tableCols"
        :key="index">
        <template v-for="(hiragana, index) in kanaTable"
          :key="index">
          <div v-if="hiragana.vowel === tableCol && hiragana.consonant === tableRow">
            {{ hiragana.kana }}<br/>
            {{ hiragana.romaji }}
          </div>
        </template>
      </td>
    </tr>

    <tr>
      <td>
        <template v-for="(hiragana, index) in kanaTable"
          :key="index">
          <div v-if="hiragana.consonant && !hiragana.vowel">
            {{ hiragana.kana }}<br/>
            {{ hiragana.romaji }}
          </div>
        </template>
      </td>
      <td colspan="4"></td>
    </tr>
  </table>
</template>

<style scoped>
</style>