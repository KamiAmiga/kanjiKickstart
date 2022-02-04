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
        <template v-for="(kana, index) in kanaTable"
          :key="index">
          <div v-if="!kana.consonant && kana.vowel && kana.vowel === tableCol"
            lang="jp">
            <div class="text-jp">{{ kana.kana }}</div>
            {{ kana.romaji }}
          </div>
        </template>
      </td>
    </tr>

    <tr v-for="(tableRow, index) in tableRows"
      :key="index">
      <td v-for="(tableCol, index) in tableCols"
        :key="index">
        <template v-for="(kana, index) in kanaTable"
          :key="index">
          <div v-if="kana.vowel === tableCol && kana.consonant === tableRow"
            lang="jp">
            <div class="text-jp">{{ kana.kana }}</div>
            {{ kana.romaji }}
          </div>
        </template>
      </td>
    </tr>

    <tr>
      <td>
        <template v-for="(kana, index) in kanaTable"
          :key="index">
          <div v-if="kana.consonant && !kana.vowel"
            lang="jp">
            <div class="text-jp">{{ kana.kana }}</div>
            {{ kana.romaji }}
          </div>
        </template>
      </td>
      <td colspan="4"></td>
    </tr>
  </table>
</template>

<style scoped>
</style>