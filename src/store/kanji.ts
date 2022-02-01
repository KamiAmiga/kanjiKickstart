import { reactive } from 'vue'
import { YomiReading } from './kana'

interface KanjiExample {
  kanji: string,
  romaji: string,
  translation: string
}

export interface KanjiItem {
  id: number,
  kanji: string,
  kunyomi: Array<YomiReading>,
  onyomi: Array<YomiReading>,
  translation: string,
  examples: Array<KanjiExample>
}

interface KanjiList extends Array<KanjiItem>{}

export const kanjiList: KanjiList = reactive([
  {
    id: 0,
    kanji: '一',
    kunyomi: [
      {
        kana: 'ひと',
        romaji: 'hito'
      }
    ],
    onyomi: [
      {
        kana:'イチ',
        romaji: 'ichi'
      },
      {
        kana:'イツ',
        romaji: 'itsu'
      }
    ],
    translation: 'un',
    examples: [
      {
        kanji: '一つ',
        romaji: 'hitotsu',
        translation: 'un (compteur)',
      },
      {
        kanji: '一人',
        romaji: 'hitori',
        translation: 'une personne',
      },
      {
        kanji: '一月',
        romaji: 'ichigatsu',
        translation: 'janvier',
      },
      {
        kanji: '一日',
        romaji: 'tsuitachi',
        translation: '1er jour du mois',
      },
      {
        kanji: '十一時',
        romaji: 'jûichiji',
        translation: '11 heures',
      },
    ]
  },
  {
    id: 1,
    kanji: '二',
    kunyomi: [
      {
        kana: 'ふた',
        romaji: 'futa'
      }
    ],
    onyomi: [
      {
        kana: 'ニ',
        romaji: 'ni'
      }
    ],
    translation: 'deux',
    examples: [
      {
        kanji: '二つ',
        romaji: 'futatsu',
        translation: 'deux (compteur)',
      },
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
        kanji: '二日',
        romaji: 'futsuka',
        translation: '2e jour du mois',
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
    kunyomi: [
      {
        kana: 'み',
        romaji: 'mi'
      }
    ],
    onyomi: [
      {
        kana: 'サン',
        romaji: 'san'
      }
    ],
    translation: 'trois',
    examples: [
      {
        kanji: '三つ',
        romaji: 'mittsu',
        translation: 'trois (compteur)',
      },
      {
        kanji: '三人',
        romaji: 'sannin',
        translation: 'trois personnes',
      },
      {
        kanji: '三月',
        romaji: 'sangatsu',
        translation: 'mars',
      },
      {
        kanji: '三日',
        romaji: 'mikka',
        translation: '3e jour du mois',
      },
      {
        kanji: '三角',
        romaji: 'sankaku',
        translation: 'triangle',
      },
    ]
  },
  {
    id: 3,
    kanji: '四',
    kunyomi: [
      {
        kana: 'よん',
        romaji: 'yon'
      },
      {
        kana: 'よ',
        romaji: 'yo'
      }
    ],
    onyomi: [
      {
        kana: 'シ',
        romaji: 'shi'
      }
    ],
    translation: 'quatre',
    examples: [
      {
        kanji: '四つ',
        romaji: 'yottsu',
        translation: 'quatre (compteur)',
      },
      {
        kanji: '四人',
        romaji: 'yonin',
        translation: 'quatre personnes',
      },
      {
        kanji: '四月',
        romaji: 'shigatsu',
        translation: 'avril',
      },
      {
        kanji: '四日',
        romaji: 'yokka',
        translation: '4e jour du mois',
      },
      {
        kanji: '四季',
        romaji: 'shiki',
        translation: 'les 4 saisons',
      }
    ]
  },
  {
    id: 4,
    kanji: '五',
    kunyomi: [
      {
        kana: 'いつ',
        romaji: 'itsu'
      }
    ],
    onyomi: [
      {
        kana: 'ゴ',
        romaji: 'go'
      }
    ],
    translation: 'cinq',
    examples: [
      {
        kanji: '五つ',
        romaji: 'itsutsu',
        translation: 'cinq (compteur)',
      },
      {
        kanji: '五人',
        romaji: 'gonin',
        translation: 'cinq personnes',
      },
      {
        kanji: '五月',
        romaji: 'gogatsu',
        translation: 'avril',
      },
      {
        kanji: '五日',
        romaji: 'itsuka',
        translation: '5e jour du mois',
      },
      {
        kanji: '五分',
        romaji: 'gobu',
        translation: '50%, moitié',
      }
    ]
  },
  {
    id: 5,
    kanji: '六',
    kunyomi: [
      {
        kana: 'む',
        romaji: 'mu'
      },
      {
        kana: 'むい',
        romaji: 'mui'
      }
    ],
    onyomi: [
      {
        kana: 'ロク',
        romaji: 'roku'
      },
      {
        kana: 'リク',
        romaji: 'riku'
      }
    ],
    translation: 'six',
    examples: [
      {
        kanji: '六つ',
        romaji: 'muttsu',
        translation: 'six (compteur)',
      },
      {
        kanji: '六人',
        romaji: 'rokunin',
        translation: 'six personnes',
      },
      {
        kanji: '六月',
        romaji: 'rokugatsu',
        translation: 'juin',
      },
      {
        kanji: '六日',
        romaji: 'muika',
        translation: '6e jour du mois',
      },
      {
        kanji: '六ヶ月',
        romaji: 'rokkagetsu',
        translation: 'semestre',
      }
    ]
  },
  {
    id: 6,
    kanji: '七',
    kunyomi: [
      {
        kana: 'なな',
        romaji: 'nana'
      },
      {
        kana: 'なの',
        romaji: 'nano'
      }
    ],
    onyomi: [
      {
        kana: 'シチ',
        romaji: 'shichi'
      }
    ],
    translation: 'sept',
    examples: [
      {
        kanji: '七つ',
        romaji: 'nanatsu',
        translation: 'sept (compteur)',
      },
      {
        kanji: '七人',
        romaji: 'shichinin',
        translation: 'sept personnes',
      },
      {
        kanji: '七月',
        romaji: 'shichigatsu',
        translation: 'juillet',
      },
      {
        kanji: '七日',
        romaji: 'nanoka',
        translation: '7e jour du mois',
      },
      {
        kanji: '七夕',
        romaji: 'tanabata',
        translation: 'fête des étoiles (du 7 juillet)',
      }
    ]
  },
  {
    id: 7,
    kanji: '八',
    kunyomi: [
      {
        kana: 'や',
        romaji: 'ya'
      },
      {
        kana: 'よう',
        romaji: 'yô'
      }
    ],
    onyomi: [
      {
        kana: 'ハチ',
        romaji: 'hachi'
      }
    ],
    translation: 'huit',
    examples: [
      {
        kanji: '八つ',
        romaji: 'yattsu',
        translation: 'huit (compteur)',
      },
      {
        kanji: '八人',
        romaji: 'hachinin',
        translation: 'huit personnes',
      },
      {
        kanji: '八月',
        romaji: 'hachigatsu',
        translation: 'août',
      },
      {
        kanji: '八日',
        romaji: 'yôka',
        translation: '8e jour du mois',
      },
      {
        kanji: 'お八つ',
        romaji: 'oyatsu',
        translation: 'goûter, quatre-heures',
      }
    ]
  },
  {
    id: 8,
    kanji: '九',
    kunyomi: [
      {
        kana: 'ここの',
        romaji: 'kokono'
      }
    ],
    onyomi: [
      {
        kana: 'ク',
        romaji: 'ku'
      },
      {
        kana: 'キュウ',
        romaji: 'kyû'
      }
    ],
    translation: 'neuf',
    examples: [
      {
        kanji: '九つ',
        romaji: 'kokonotsu',
        translation: 'neuf (compteur)',
      },
      {
        kanji: '九人',
        romaji: 'kyûnin',
        translation: 'neuf personnes',
      },
      {
        kanji: '九月',
        romaji: 'kugatsu',
        translation: 'septembre',
      },
      {
        kanji: '九日',
        romaji: 'kokonoka',
        translation: '9e jour du mois',
      },
      {
        kanji: ' 九々',
        romaji: 'kuku',
        translation: 'tables de multiplication',
      }
    ]
  },
  {
    id: 9,
    kanji: '十',
    kunyomi: [
      {
        kana: 'とお',
        romaji: 'tô'
      }
    ],
    onyomi: [
      {
        kana: 'ジ',
        romaji: 'ji'
      },
      {
        kana: 'ジュウ',
        romaji: 'jû'
      }
    ],
    translation: 'dix',
    examples: [
      {
        kanji: '十',
        romaji: 'tô',
        translation: 'dix (compteur)',
      },
      {
        kanji: '十人',
        romaji: 'jûnin',
        translation: 'dix personnes',
      },
      {
        kanji: '十月',
        romaji: 'jûgatsu',
        translation: 'octobre',
      },
      {
        kanji: '十日',
        romaji: 'tôka',
        translation: '10e jour du mois',
      },
      {
        kanji: '十字',
        romaji: 'jûji',
        translation: 'croix, en forme de croix',
      }
    ]
  },
  {
    id: 10,
    kanji: '百',
    kunyomi: [
      {
        kana: 'もも',
        romaji: 'momo'
      }
    ],
    onyomi: [
      {
        kana: 'ヒャク',
        romaji: 'hyaku'
      }
    ],
    translation: 'cent',
    examples: [
      {
        kanji: '百',
        romaji: 'hyaku',
        translation: 'cent (compteur)',
      },
      {
        kanji: '百人',
        romaji: 'hyakunin',
        translation: 'cent personnes',
      },
      {
        kanji: '百',
        romaji: 'nanbyaku',
        translation: 'des centaines',
      }
    ]
  },
  {
    id: 11,
    kanji: '千',
    kunyomi: [
      {
        kana: 'ち',
        romaji: 'chi'
      }
    ],
    onyomi: [
      {
        kana: 'セン',
        romaji: 'sen'
      }
    ],
    translation: 'mille',
    examples: [
      {
        kanji: '千',
        romaji: 'sen',
        translation: 'mille (compteur)',
      },
      {
        kanji: '千人',
        romaji: 'sennin',
        translation: 'mille personnes',
      },
      {
        kanji: '千円',
        romaji: 'sen en',
        translation: 'mille yens',
      }
    ]
  },
])