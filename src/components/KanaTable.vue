<script setup lang="ts">
import { type KanaItem } from '../types/kana'
import CardWrapper from '../components/CardWrapper.vue'

interface Props {
  kanaTable: Array<KanaItem>
  tableCols: Array<string>
  tableRows: Array<string>
  combined: boolean
}

defineProps<Props>()
</script>

<template>
  <CardWrapper>
    <table class="kana-table">
      <template v-if="!combined">
        <tr class="kana-table__row">
          <td v-for="(tableCol, index) in tableCols" :key="index" class="kana-table__cell">
            <template v-for="(kana, index) in kanaTable" :key="index">
              <div v-if="!kana.consonant && kana.vowel && kana.vowel === tableCol" lang="jp">
                <div class="kana-table__cell__kana text-jp">{{ kana.kana }}</div>
                <div class="kana-table__cell__romaji">{{ kana.romaji }}</div>
              </div>
            </template>
          </td>
        </tr>
      </template>

      <tr v-for="(tableRow, index) in tableRows" :key="index" class="kana-table__row">
        <td v-for="(tableCol, index) in tableCols" :key="index" class="kana-table__cell">
          <template v-for="(kana, index) in kanaTable" :key="index">
            <div v-if="kana.vowel === tableCol && kana.consonant === tableRow && kana.combined === combined" lang="jp">
              <div class="kana-table__cell__kana text-jp">{{ kana.kana }}</div>
              <div class="kana-table__cell__romaji">{{ kana.romaji }}</div>
            </div>
          </template>
        </td>
      </tr>

      <template v-if="!combined">
        <tr class="kana-table__row">
          <td class="kana-table__cell">
            <template v-for="(kana, index) in kanaTable" :key="index">
              <div v-if="kana.consonant && !kana.vowel" lang="jp">
                <div class="kana-table__cell__kana text-jp">{{ kana.kana }}</div>
                <div class="kana-table__cell__romaji">{{ kana.romaji }}</div>
              </div>
            </template>
          </td>
          <td class="kana-table__cell"></td>
          <td class="kana-table__cell"></td>
          <td class="kana-table__cell"></td>
          <td class="kana-table__cell"></td>
        </tr>
      </template>
    </table>
  </CardWrapper>
</template>

<style scoped lang="scss">
@use '../scss/abstracts' as *;

.kana-table {
  flex-grow: 1;
  border: none;
  border-collapse: collapse;
  text-align: center;

  &__row,
  &__cell {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      opacity: 0.6;
    }

    &:last-child {
      &::after {
        content: none;
      }
    }
  }

  &__row {
    &::after {
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background: repeating-linear-gradient(to right,
          $default-dark,
          $default-dark 0.4rem,
          transparent 0.4rem,
          transparent 1rem);
    }
  }

  &__cell {
    &::after {
      width: 1px;
      height: 100%;
      top: 0;
      right: 0;
      background: repeating-linear-gradient(to bottom,
          $default-dark,
          $default-dark 0.4rem,
          transparent 0.4rem,
          transparent 1rem);
    }

    &__kana {
      padding: 0.5rem;
    }

    &__romaji {
      padding: 0.25rem 0.5rem 0.5rem 0.5rem;
    }
  }
}
</style>
