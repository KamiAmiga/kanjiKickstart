import { reactive } from 'vue'
import { KanjiList } from '../types/kanji'

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
    translation: 'Un',
    examples: [
      {
        kanji: '一つ',
        romaji: 'hitotsu',
        translation: 'Un (compteur)',
      },
      {
        kanji: '一人',
        romaji: 'hitori',
        translation: 'Une personne',
      },
      {
        kanji: '一月',
        romaji: 'ichigatsu',
        translation: 'Janvier',
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
    translation: 'Deux',
    examples: [
      {
        kanji: '二つ',
        romaji: 'futatsu',
        translation: 'Deux (compteur)',
      },
      {
        kanji: '二人',
        romaji: 'futari',
        translation: 'Deux personnes',
      },
      {
        kanji: '二月',
        romaji: 'nigatsu',
        translation: 'Février',
      },
      {
        kanji: '二日',
        romaji: 'futsuka',
        translation: '2e jour du mois',
      },
      {
        kanji: '二つずつ',
        romaji: 'futatsuzutsu',
        translation: 'Deux par deux (choses)',
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
    translation: 'Trois',
    examples: [
      {
        kanji: '三つ',
        romaji: 'mittsu',
        translation: 'Trois (compteur)',
      },
      {
        kanji: '三人',
        romaji: 'sannin',
        translation: 'Trois personnes',
      },
      {
        kanji: '三月',
        romaji: 'sangatsu',
        translation: 'Mars',
      },
      {
        kanji: '三日',
        romaji: 'mikka',
        translation: '3e jour du mois',
      },
      {
        kanji: '三角',
        romaji: 'sankaku',
        translation: 'Triangle',
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
    translation: 'Quatre',
    examples: [
      {
        kanji: '四つ',
        romaji: 'yottsu',
        translation: 'Quatre (compteur)',
      },
      {
        kanji: '四人',
        romaji: 'yonin',
        translation: 'Quatre personnes',
      },
      {
        kanji: '四月',
        romaji: 'shigatsu',
        translation: 'Avril',
      },
      {
        kanji: '四日',
        romaji: 'yokka',
        translation: '4e jour du mois',
      },
      {
        kanji: '四季',
        romaji: 'shiki',
        translation: 'Les 4 saisons',
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
    translation: 'Cinq',
    examples: [
      {
        kanji: '五つ',
        romaji: 'itsutsu',
        translation: 'Cinq (compteur)',
      },
      {
        kanji: '五人',
        romaji: 'gonin',
        translation: 'Cinq personnes',
      },
      {
        kanji: '五月',
        romaji: 'gogatsu',
        translation: 'Avril',
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
    translation: 'Six',
    examples: [
      {
        kanji: '六つ',
        romaji: 'muttsu',
        translation: 'Six (compteur)',
      },
      {
        kanji: '六人',
        romaji: 'rokunin',
        translation: 'Six personnes',
      },
      {
        kanji: '六月',
        romaji: 'rokugatsu',
        translation: 'Juin',
      },
      {
        kanji: '六日',
        romaji: 'muika',
        translation: '6e jour du mois',
      },
      {
        kanji: '六ヶ月',
        romaji: 'rokkagetsu',
        translation: 'Semestre',
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
    translation: 'Sept',
    examples: [
      {
        kanji: '七つ',
        romaji: 'nanatsu',
        translation: 'Sept (compteur)',
      },
      {
        kanji: '七人',
        romaji: 'shichinin',
        translation: 'Sept personnes',
      },
      {
        kanji: '七月',
        romaji: 'shichigatsu',
        translation: 'Juillet',
      },
      {
        kanji: '七日',
        romaji: 'nanoka',
        translation: '7e jour du mois',
      },
      {
        kanji: '七夕',
        romaji: 'tanabata',
        translation: 'Fête des étoiles (du 7 juillet)',
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
    translation: 'Huit',
    examples: [
      {
        kanji: '八つ',
        romaji: 'yattsu',
        translation: 'Huit (compteur)',
      },
      {
        kanji: '八人',
        romaji: 'hachinin',
        translation: 'Huit personnes',
      },
      {
        kanji: '八月',
        romaji: 'hachigatsu',
        translation: 'Août',
      },
      {
        kanji: '八日',
        romaji: 'yôka',
        translation: '8e jour du mois',
      },
      {
        kanji: 'お八つ',
        romaji: 'oyatsu',
        translation: 'Goûter, quatre-heures',
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
    translation: 'Neuf',
    examples: [
      {
        kanji: '九つ',
        romaji: 'kokonotsu',
        translation: 'Neuf (compteur)',
      },
      {
        kanji: '九人',
        romaji: 'kyûnin',
        translation: 'Neuf personnes',
      },
      {
        kanji: '九月',
        romaji: 'kugatsu',
        translation: 'Septembre',
      },
      {
        kanji: '九日',
        romaji: 'kokonoka',
        translation: '9e jour du mois',
      },
      {
        kanji: ' 九々',
        romaji: 'kuku',
        translation: 'Tables de multiplication',
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
    translation: 'Dix',
    examples: [
      {
        kanji: '十',
        romaji: 'tô',
        translation: 'Dix (compteur)',
      },
      {
        kanji: '十人',
        romaji: 'jûnin',
        translation: 'Dix personnes',
      },
      {
        kanji: '十月',
        romaji: 'jûgatsu',
        translation: 'Octobre',
      },
      {
        kanji: '十日',
        romaji: 'tôka',
        translation: '10e jour du mois',
      },
      {
        kanji: '十字',
        romaji: 'jûji',
        translation: 'Croix, en forme de croix',
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
    translation: 'Cent',
    examples: [
      {
        kanji: '百',
        romaji: 'hyaku',
        translation: 'Cent (compteur)',
      },
      {
        kanji: '百人',
        romaji: 'hyakunin',
        translation: 'Cent personnes',
      },
      {
        kanji: '百',
        romaji: 'nanbyaku',
        translation: 'Des centaines',
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
        translation: 'Mille yens',
      }
    ]
  },
  {
    id: 12,
    kanji: '人',
    kunyomi: [
      {
        kana: 'ひと',
        romaji: 'hito'
      }
    ],
    onyomi: [
      {
        kana: 'ジン',
        romaji: 'jin'
      },
      {
        kana: 'ニン',
        romaji: 'nin'
      }
    ],
    translation: 'Être humain, personne',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 13,
    kanji: '女',
    kunyomi: [
      {
        kana: 'おんな',
        romaji: 'onna'
      }
    ],
    onyomi: [
      {
        kana: 'ジョ',
        romaji: 'jô'
      },
      {
        kana: 'ニョ',
        romaji: 'sho'
      }
    ],
    translation: 'Femme',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 14,
    kanji: '男',
    kunyomi: [
      {
        kana: 'おとこ',
        romaji: 'otoko'
      }
    ],
    onyomi: [
      {
        kana: 'ダン',
        romaji: 'dan'
      },
      {
        kana: 'ナン',
        romaji: 'tan'
      }
    ],
    translation: 'Homme',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 15,
    kanji: '子',
    kunyomi: [
      {
        kana: 'こ',
        romaji: 'ko'
      }
    ],
    onyomi: [
      {
        kana: 'ス',
        romaji: 'su'
      },
      {
        kana: 'シ',
        romaji: 'shi'
      }
    ],
    translation: 'Enfant',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 16,
    kanji: '上',
    kunyomi: [
      {
        kana: 'うえ',
        romaji: 'ue'
      },
      {
        kana: 'かみ',
        romaji: 'kami'
      },
      {
        kana: 'うわ',
        romaji: 'uwa'
      },
      {
        kana: 'のぼ',
        romaji: 'nobo'
      }
    ],
    onyomi: [
      {
        kana: 'ジョウ',
        romaji: 'jô'
      },
      {
        kana: 'ショウ',
        romaji: 'shô'
      }
    ],
    translation: 'Haut, dessus, monter',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 17,
    kanji: '下',
    kunyomi: [
      {
        kana: 'もと',
        romaji: 'moto'
      },
      {
        kana: 'した',
        romaji: 'shita'
      },
      {
        kana: 'しも',
        romaji: 'shimo'
      },
      {
        kana: 'さ',
        romaji: 'sa'
      },
      {
        kana: 'お',
        romaji: 'o'
      },
      {
        kana: 'くだ',
        romaji: 'kuda'
      }
    ],
    onyomi: [
      {
        kana: 'カ',
        romaji: 'ka'
      },
      {
        kana: 'ゲ',
        romaji: 'ge'
      }
    ],
    translation: 'Bas, dessous, descendre',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 18,
    kanji: '左',
    kunyomi: [
      {
        kana: 'ひだり',
        romaji: 'hidari'
      }
    ],
    onyomi: [
      {
        kana: 'サ',
        romaji: 'sa'
      }
    ],
    translation: 'Gauche',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 19,
    kanji: '右',
    kunyomi: [
      {
        kana: 'みぎ',
        romaji: 'migi'
      }
    ],
    onyomi: [
      {
        kana: 'ウ',
        romaji: 'u'
      },
      {
        kana: 'ユウ',
        romaji: 'yû'
      }
    ],
    translation: 'Droite',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 20,
    kanji: '中',
    kunyomi: [
      {
        kana: 'なか',
        romaji: 'naka'
      }
    ],
    onyomi: [
      {
        kana: 'チュウ',
        romaji: 'chû'
      },
      {
        kana: 'ジュウ',
        romaji: 'jû'
      }
    ],
    translation: 'Milieu, dans, intérieur',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 21,
    kanji: '金',
    kunyomi: [
      {
        kana: 'かね',
        romaji: 'kane'
      }
    ],
    onyomi: [
      {
        kana: 'キン',
        romaji: 'kin'
      },
      {
        kana: 'コン',
        romaji: 'kon'
      }
    ],
    translation: 'Métal, or, argent',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 22,
    kanji: '水',
    kunyomi: [
      {
        kana: 'みず',
        romaji: 'mizu'
      }
    ],
    onyomi: [
      {
        kana: 'スイ',
        romaji: 'sui'
      }
    ],
    translation: 'Eau',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 23,
    kanji: '火',
    kunyomi: [
      {
        kana: 'ひ',
        romaji: 'hi'
      }
    ],
    onyomi: [
      {
        kana: 'カ',
        romaji: 'ka'
      }
    ],
    translation: 'Feu',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 24,
    kanji: '土',
    kunyomi: [
      {
        kana: 'つち',
        romaji: 'tsuchi'
      }
    ],
    onyomi: [
      {
        kana: 'ド',
        romaji: 'do'
      }
    ],
    translation: 'Terre, sol',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 25,
    kanji: '木',
    kunyomi: [
      {
        kana: 'き',
        romaji: 'ki'
      }
    ],
    onyomi: [
      {
        kana: 'ボク',
        romaji: 'boku'
      },
      {
        kana: 'モク',
        romaji: 'moku'
      }
    ],
    translation: 'Bois, arbre',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 26,
    kanji: '月',
    kunyomi: [
      {
        kana: 'つき',
        romaji: 'tsuki'
      }
    ],
    onyomi: [
      {
        kana: 'ゲツ',
        romaji: 'getsu'
      },
      {
        kana: 'ガツ',
        romaji: 'gatsu'
      }
    ],
    translation: 'Lune, mois',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 27,
    kanji: '日',
    kunyomi: [
      {
        kana: 'ひ',
        romaji: 'hi'
      },
      {
        kana: 'び',
        romaji: 'bi'
      },
      {
        kana: 'か',
        romaji: 'ka'
      }
    ],
    onyomi: [
      {
        kana: 'ニチ',
        romaji: 'nichi'
      },
      {
        kana: 'ジツ',
        romaji: 'jutsu'
      }
    ],
    translation: 'Soleil, jour',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 28,
    kanji: '年',
    kunyomi: [
      {
        kana: 'とし',
        romaji: 'toshi'
      }
    ],
    onyomi: [
      {
        kana: 'ネン',
        romaji: 'nen'
      }
    ],
    translation: 'Année',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 29,
    kanji: '大',
    kunyomi: [
      {
        kana: 'おお',
        romaji: 'ô'
      }
    ],
    onyomi: [
      {
        kana: 'ダイ',
        romaji: 'dai'
      },
      {
        kana: 'タイ',
        romaji: 'tai'
      }
    ],
    translation: 'Grand, gros',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 30,
    kanji: '小',
    kunyomi: [
      {
        kana: 'ちい',
        romaji: 'sai'
      },
      {
        kana: 'こ',
        romaji: 'ko'
      }
    ],
    onyomi: [
      {
        kana: 'ショウ',
        romaji: 'shô'
      }
    ],
    translation: 'Petit',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 31,
    kanji: '早',
    kunyomi: [
      {
        kana: 'はや',
        romaji: 'haya'
      }
    ],
    onyomi: [
      {
        kana: 'ソウ',
        romaji: 'sô'
      },
      {
        kana: 'サ',
        romaji: 'sa'
      }
    ],
    translation: 'Rapide, tôt',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 32,
    kanji: '目',
    kunyomi: [
      {
        kana: 'め',
        romaji: 'me'
      }
    ],
    onyomi: [
      {
        kana: 'モク',
        romaji: 'moku'
      },
      {
        kana: 'ボク',
        romaji: 'boku'
      }
    ],
    translation: 'Œil',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 33,
    kanji: '耳',
    kunyomi: [
      {
        kana: 'みみ',
        romaji: 'mimi'
      }
    ],
    onyomi: [
      {
        kana: 'ジ',
        romaji: 'ji'
      }
    ],
    translation: 'Oreille',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 34,
    kanji: '口',
    kunyomi: [
      {
        kana: 'くち',
        romaji: 'kuchi'
      }
    ],
    onyomi: [
      {
        kana: 'コウ',
        romaji: 'kô'
      },
      {
        kana: 'ク',
        romaji: 'ku'
      }
    ],
    translation: 'Bouche',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 35,
    kanji: '手',
    kunyomi: [
      {
        kana: 'て',
        romaji: 'te'
      }
    ],
    onyomi: [
      {
        kana: 'シュ',
        romaji: 'shu'
      },
      {
        kana: 'ズ',
        romaji: 'zu'
      }
    ],
    translation: 'Main',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 36,
    kanji: '足',
    kunyomi: [
      {
        kana: 'あし',
        romaji: 'ashi'
      },
      {
        kana: 'た',
        romaji: 'ta'
      }
    ],
    onyomi: [
      {
        kana: 'ソク',
        romaji: 'soku'
      }
    ],
    translation: 'Jambe, pied, suffire, ajouter',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 37,
    kanji: '見',
    kunyomi: [
      {
        kana: 'み',
        romaji: 'mi'
      }
    ],
    onyomi: [
      {
        kana: 'ケン',
        romaji: 'ken'
      }
    ],
    translation: 'Voir, regarder',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 38,
    kanji: '音',
    kunyomi: [
      {
        kana: 'おと',
        romaji: 'oto'
      }
    ],
    onyomi: [
      {
        kana: 'オン',
        romaji: 'on'
      }
    ],
    translation: 'Son, bruit',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 39,
    kanji: '生',
    kunyomi: [
      {
        kana: 'い',
        romaji: 'i'
      },
      {
        kana: 'う',
        romaji: 'u'
      },
      {
        kana: 'なま',
        romaji: 'nama'
      }
    ],
    onyomi: [
      {
        kana: 'セイ',
        romaji: 'sei'
      },
      {
        kana: 'ショウ',
        romaji: 'shô'
      }
    ],
    translation: 'Vivre, vie, naître, accoucher, pousser, cru',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 40,
    kanji: '力',
    kunyomi: [
      {
        kana: 'ちから',
        romaji: 'chikara'
      }
    ],
    onyomi: [
      {
        kana: 'リョク',
        romaji: 'ryoku'
      },
      {
        kana: 'リキ',
        romaji: 'riki'
      }
    ],
    translation: 'Force',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 41,
    kanji: '気',
    kunyomi: [
      {
        kana: 'いき',
        romaji: 'iki'
      }
    ],
    onyomi: [
      {
        kana: 'キ',
        romaji: 'ki'
      },
      {
        kana: 'ケ',
        romaji: 'ke'
      }
    ],
    translation: 'Énergie, flux vital',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 42,
    kanji: '入',
    kunyomi: [
      {
        kana: 'はい',
        romaji: 'hai'
      },
      {
        kana: 'い',
        romaji: 'i'
      }
    ],
    onyomi: [
      {
        kana: 'ニュウ',
        romaji: 'nyû'
      }
    ],
    translation: 'Entrer, insérer',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 43,
    kanji: '出',
    kunyomi: [
      {
        kana: 'で',
        romaji: 'de'
      },
      {
        kana: 'だ',
        romaji: 'da'
      }
    ],
    onyomi: [
      {
        kana: 'シュツ',
        romaji: 'shutsu'
      },
      {
        kana: 'スイ',
        romaji: 'sui'
      }
    ],
    translation: 'Sortir',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 44,
    kanji: '立',
    kunyomi: [
      {
        kana: 'たつ',
        romaji: 'tatsu'
      }
    ],
    onyomi: [
      {
        kana: 'リツ',
        romaji: 'ritsu'
      },
      {
        kana: 'リユツ',
        romaji: 'ryutsu'
      }
    ],
    translation: 'Se lever, être debout',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 45,
    kanji: '休',
    kunyomi: [
      {
        kana: 'やす',
        romaji: 'yasu'
      }
    ],
    onyomi: [
      {
        kana: 'キュウ',
        romaji: 'kyû'
      }
    ],
    translation: 'Repos, vacances',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 46,
    kanji: '先',
    kunyomi: [
      {
        kana: 'さき',
        romaji: 'saki'
      }
    ],
    onyomi: [
      {
        kana: 'セン',
        romaji: 'sen'
      }
    ],
    translation: 'Avant, précédent',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 47,
    kanji: '夕',
    kunyomi: [
      {
        kana: 'ゆう',
        romaji: 'yû'
      }
    ],
    onyomi: [
      {
        kana: 'セキ',
        romaji: 'seki'
      }
    ],
    translation: 'Soir',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 48,
    kanji: '赤',
    kunyomi: [
      {
        kana: 'あか',
        romaji: 'aka'
      }
    ],
    onyomi: [
      {
        kana: 'セキ',
        romaji: 'seki'
      },
      {
        kana: 'シャク',
        romaji: 'shaku'
      }
    ],
    translation: 'Rouge',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 49,
    kanji: '青',
    kunyomi: [
      {
        kana: 'あお',
        romaji: 'ao'
      }
    ],
    onyomi: [
      {
        kana: 'セイ',
        romaji: 'sei'
      },
      {
        kana: 'ショウ',
        romaji: 'shô'
      }
    ],
    translation: 'Bleu, vert',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 50,
    kanji: '白',
    kunyomi: [
      {
        kana: 'しろ',
        romaji: 'shiro'
      },
      {
        kana: 'しら',
        romaji: 'shira'
      },
      {
        kana: 'もうす',
        romaji: 'môsu'
      }
    ],
    onyomi: [
      {
        kana: 'アク',
        romaji: 'aku'
      },
      {
        kana: 'ビャク',
        romaji: 'byaku'
      }
    ],
    translation: 'Blanc, vide',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 51,
    kanji: '林',
    kunyomi: [
      {
        kana: 'はやし',
        romaji: 'hayashi'
      }
    ],
    onyomi: [
      {
        kana: 'リン',
        romaji: 'rin'
      }
    ],
    translation: 'Bois, forêt',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 52,
    kanji: '森',
    kunyomi: [
      {
        kana: 'もり',
        romaji: 'mori'
      }
    ],
    onyomi: [
      {
        kana: 'シン',
        romaji: 'shin'
      }
    ],
    translation: 'Bois, forêt',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 53,
    kanji: '山',
    kunyomi: [
      {
        kana: 'やま',
        romaji: 'yama'
      }
    ],
    onyomi: [
      {
        kana: 'サン',
        romaji: 'sen'
      },
      {
        kana: 'セン',
        romaji: 'san'
      }
    ],
    translation: 'Montagne',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 54,
    kanji: '川',
    kunyomi: [
      {
        kana: 'かわ',
        romaji: 'kawa'
      }
    ],
    onyomi: [
      {
        kana: 'セン',
        romaji: 'sen'
      }
    ],
    translation: 'Rivière',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 55,
    kanji: '空',
    kunyomi: [
      {
        kana: 'そら',
        romaji: 'sora'
      },
      {
        kana: 'あ',
        romaji: 'a'
      },
      {
        kana: 'から',
        romaji: 'kara'
      }
    ],
    onyomi: [
      {
        kana: 'クウ',
        romaji: 'kû'
      }
    ],
    translation: 'Ciel, vide',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 56,
    kanji: '田',
    kunyomi: [
      {
        kana: 'た',
        romaji: 'ta'
      }
    ],
    onyomi: [
      {
        kana: 'デン',
        romaji: 'den'
      }
    ],
    translation: 'Champ',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 57,
    kanji: '花',
    kunyomi: [
      {
        kana: 'はな',
        romaji: 'hana'
      }
    ],
    onyomi: [
      {
        kana: 'カ',
        romaji: 'ka'
      }
    ],
    translation: 'Fleur',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 58,
    kanji: '雨',
    kunyomi: [
      {
        kana: 'あめ',
        romaji: 'ame'
      }
    ],
    onyomi: [
      {
        kana: 'ウ',
        romaji: 'u'
      }
    ],
    translation: 'Pluie',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 59,
    kanji: '天',
    kunyomi: [
      {
        kana: 'あめ',
        romaji: 'ame'
      },
      {
        kana: 'あま',
        romaji: 'ama'
      }
    ],
    onyomi: [
      {
        kana: 'テン',
        romaji: 'ten'
      }
    ],
    translation: 'Ciel',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 60,
    kanji: '円',
    kunyomi: [
      {
        kana: 'まる',
        romaji: 'maru'
      }
    ],
    onyomi: [
      {
        kana: 'エン',
        romaji: 'en'
      }
    ],
    translation: 'Cercle, yen',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 61,
    kanji: '本',
    kunyomi: [
      {
        kana: 'もと',
        romaji: 'moto'
      }
    ],
    onyomi: [
      {
        kana: 'ホン',
        romaji: 'hon'
      }
    ],
    translation: 'Origine, livre',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 62,
    kanji: '文',
    kunyomi: [
      {
        kana: 'ふみ',
        romaji: 'fumi'
      }
    ],
    onyomi: [
      {
        kana: 'ブン',
        romaji: 'bun'
      },
      {
        kana: 'モン',
        romaji: 'mon'
      }
    ],
    translation: 'Document, texte',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 63,
    kanji: '字',
    kunyomi: [
      {
        kana: 'あざ',
        romaji: 'aza'
      }
    ],
    onyomi: [
      {
        kana: 'ジ',
        romaji: 'ji'
      }
    ],
    translation: 'Caractère, lettre',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 64,
    kanji: '学',
    kunyomi: [
      {
        kana: 'まな',
        romaji: 'mana'
      }
    ],
    onyomi: [
      {
        kana: 'ガク',
        romaji: 'gaku'
      }
    ],
    translation: 'Étude',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 65,
    kanji: '校',
    onyomi: [
      {
        kana: 'コウ',
        romaji: 'kô'
      }
    ],
    translation: 'École',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 66,
    kanji: '村',
    kunyomi: [
      {
        kana: 'むら',
        romaji: 'mura'
      }
    ],
    onyomi: [
      {
        kana: 'ソン',
        romaji: 'son'
      }
    ],
    translation: 'Village',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 67,
    kanji: '町',
    kunyomi: [
      {
        kana: 'まち',
        romaji: 'machi'
      }
    ],
    onyomi: [
      {
        kana: 'チョウ',
        romaji: 'chô'
      }
    ],
    translation: 'Ville',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 68,
    kanji: '正',
    kunyomi: [
      {
        kana: 'ただ',
        romaji: 'tada'
      }
    ],
    onyomi: [
      {
        kana: 'セイ',
        romaji: 'sei'
      },
      {
        kana: 'ショウ',
        romaji: 'shô'
      }
    ],
    translation: 'Juste, correct, corriger',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 69,
    kanji: '名',
    kunyomi: [
      {
        kana: 'な',
        romaji: 'na'
      }
    ],
    onyomi: [
      {
        kana: 'メイ',
        romaji: 'mei'
      },
      {
        kana: 'ミョウ',
        romaji: 'myô'
      }
    ],
    translation: 'Nom, réputation',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 70,
    kanji: '王',
    kunyomi: [
      {
        kana: 'ノウ',
        romaji: 'nô'
      }
    ],
    onyomi: [
      {
        kana: 'オウ',
        romaji: 'ô'
      }
    ],
    translation: 'Roi, empereur',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 71,
    kanji: '玉',
    kunyomi: [
      {
        kana: 'たま',
        romaji: 'tama'
      }
    ],
    onyomi: [
      {
        kana: 'ギヨク',
        romaji: 'gyoku'
      }
    ],
    translation: 'Bijou, balle, bille, sphère',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 72,
    kanji: '草',
    kunyomi: [
      {
        kana: 'くさ',
        romaji: 'kusa'
      }
    ],
    onyomi: [
      {
        kana: 'ソウ',
        romaji: 'sô'
      }
    ],
    translation: 'Herbe',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 73,
    kanji: '虫',
    kunyomi: [
      {
        kana: 'むし',
        romaji: 'mushi'
      }
    ],
    onyomi: [
      {
        kana: 'チユウ',
        romaji: 'chû'
      },
      {
        kana: 'キ',
        romaji: 'ki'
      }
    ],
    translation: 'Insecte',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 74,
    kanji: '犬',
    kunyomi: [
      {
        kana: 'いぬ',
        romaji: 'inu'
      }
    ],
    onyomi: [
      {
        kana: 'ケン',
        romaji: 'ken'
      }
    ],
    translation: 'Chien',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 75,
    kanji: '石',
    kunyomi: [
      {
        kana: 'いし',
        romaji: 'ishi'
      }
    ],
    onyomi: [
      {
        kana: 'セキ',
        romaji: 'seki'
      },
      {
        kana: 'シャク',
        romaji: 'shaku'
      },
      {
        kana: 'コク',
        romaji: 'koku'
      }
    ],
    translation: 'Pierre, caillou',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 76,
    kanji: '竹',
    kunyomi: [
      {
        kana: 'たけ',
        romaji: 'take'
      }
    ],
    onyomi: [
      {
        kana: 'チク',
        romaji: 'chiku'
      }
    ],
    translation: 'Bambou',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 77,
    kanji: '糸',
    kunyomi: [
      {
        kana: 'いと',
        romaji: 'ito'
      }
    ],
    onyomi: [
      {
        kana: 'シ',
        romaji: 'shi'
      },
      {
        kana: 'ベキ',
        romaji: 'beki'
      }
    ],
    translation: 'Soie, fil',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 78,
    kanji: '貝',
    kunyomi: [
      {
        kana: 'かい',
        romaji: 'kai'
      }
    ],
    onyomi: [
      {
        kana: 'バイ',
        romaji: 'bai'
      }
    ],
    translation: 'Coquillage',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  },
  {
    id: 79,
    kanji: '車',
    kunyomi: [
      {
        kana: 'くるま',
        romaji: 'kuruma'
      }
    ],
    onyomi: [
      {
        kana: 'シャ',
        romaji: 'sha'
      }
    ],
    translation: 'Voiture, véhicule',
    examples: [
      {
        kanji: '',
        romaji: '',
        translation: '',
      }
    ]
  }
])