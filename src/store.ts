// use typescript, type & interface
// kanjiItem VS kanjiList ?

import { reactive } from 'vue'

type KanjiList = Array<KanjiItem>

interface KanjiExample {
  kanji: string,
  romaji: string,
  translation: string,
}

interface KanjiItem {
  id: number,
  kanji: string,
  onyomi: Array<string>,
  kunyomi: Array<string>,
  translation: string,
  examples: Array<KanjiExample>
}

export const kanjiList: KanjiList = reactive([
  {
    id: 0,
    kanji: '一',
    onyomi: [
      'ひと',
    ],
    kunyomi: [
      'イチ',
      'イツ',
    ],
    translation: 'un',
    examples: [
      {
        kanji: '一人',
        romaji: 'hitori',
        translation: 'une personne',
      },
      {
        kanji: '一つ',
        romaji: 'hitotsu',
        translation: 'une unité',
      },
      {
        kanji: '一々',
        romaji: 'ichi-ichi',
        translation: 'un par un',
      },
    ]
  },
  {
    id: 1,
    kanji: '二',
    onyomi: [
      'ふた',
    ],
    kunyomi: [
      'ニ',
    ],
    translation: 'deux',
    examples: [
      {
        kanji: '二人',
        romaji: 'futari',
        translation: 'deux personnes',
      },
      {
        kanji: '二月',
        romaji: 'nigatsu',
        translation: 'février',
      },
      {
        kanji: '二千',
        romaji: 'nisen',
        translation: '2000',
      },
      {
        kanji: '二つずつ',
        romaji: 'futatsuzutsu',
        translation: 'deux par deux (choses)',
      },
    ]
  },
  {
    id: 2,
    kanji: '三',
    onyomi: [],
    kunyomi: [],
    translation: 'trois',
    examples: []
  },
])