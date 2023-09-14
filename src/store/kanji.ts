import { reactive } from 'vue'
import { type KanjiList } from '../types/kanji'

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
        kana: 'イチ',
        romaji: 'ichi'
      },
      {
        kana: 'イツ',
        romaji: 'itsu'
      }
    ],
    translation: 'Un',
    examples: [
      {
        kanji: '一つ',
        romaji: 'hitotsu',
        translation: 'Un (compteur)'
      },
      {
        kanji: '一人',
        romaji: 'hitori',
        translation: 'Une personne'
      },
      {
        kanji: '一月',
        romaji: 'ichigatsu',
        translation: 'Janvier'
      },
      {
        kanji: '一日',
        romaji: 'tsuitachi',
        translation: '1er jour du mois'
      },
      {
        kanji: '十一時',
        romaji: 'jûichiji',
        translation: '11 heures'
      }
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
        translation: 'Deux (compteur)'
      },
      {
        kanji: '二人',
        romaji: 'futari',
        translation: 'Deux personnes'
      },
      {
        kanji: '二月',
        romaji: 'nigatsu',
        translation: 'Février'
      },
      {
        kanji: '二日',
        romaji: 'futsuka',
        translation: '2e jour du mois'
      },
      {
        kanji: '二つずつ',
        romaji: 'futatsuzutsu',
        translation: 'Deux par deux (choses)'
      }
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
        translation: 'Trois (compteur)'
      },
      {
        kanji: '三人',
        romaji: 'sannin',
        translation: 'Trois personnes'
      },
      {
        kanji: '三月',
        romaji: 'sangatsu',
        translation: 'Mars'
      },
      {
        kanji: '三日',
        romaji: 'mikka',
        translation: '3e jour du mois'
      },
      {
        kanji: '三角',
        romaji: 'sankaku',
        translation: 'Triangle'
      }
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
        translation: 'Quatre (compteur)'
      },
      {
        kanji: '四人',
        romaji: 'yonin',
        translation: 'Quatre personnes'
      },
      {
        kanji: '四月',
        romaji: 'shigatsu',
        translation: 'Avril'
      },
      {
        kanji: '四日',
        romaji: 'yokka',
        translation: '4e jour du mois'
      },
      {
        kanji: '四季',
        romaji: 'shiki',
        translation: 'Les 4 saisons'
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
        translation: 'Cinq (compteur)'
      },
      {
        kanji: '五人',
        romaji: 'gonin',
        translation: 'Cinq personnes'
      },
      {
        kanji: '五月',
        romaji: 'gogatsu',
        translation: 'Avril'
      },
      {
        kanji: '五日',
        romaji: 'itsuka',
        translation: '5e jour du mois'
      },
      {
        kanji: '五分',
        romaji: 'gobu',
        translation: '50%, moitié'
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
        translation: 'Six (compteur)'
      },
      {
        kanji: '六人',
        romaji: 'rokunin',
        translation: 'Six personnes'
      },
      {
        kanji: '六月',
        romaji: 'rokugatsu',
        translation: 'Juin'
      },
      {
        kanji: '六日',
        romaji: 'muika',
        translation: '6e jour du mois'
      },
      {
        kanji: '六ヶ月',
        romaji: 'rokkagetsu',
        translation: 'Semestre'
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
        translation: 'Sept (compteur)'
      },
      {
        kanji: '七人',
        romaji: 'shichinin',
        translation: 'Sept personnes'
      },
      {
        kanji: '七月',
        romaji: 'shichigatsu',
        translation: 'Juillet'
      },
      {
        kanji: '七日',
        romaji: 'nanoka',
        translation: '7e jour du mois'
      },
      {
        kanji: '七夕',
        romaji: 'tanabata',
        translation: 'Fête des étoiles (du 7 juillet)'
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
        translation: 'Huit (compteur)'
      },
      {
        kanji: '八人',
        romaji: 'hachinin',
        translation: 'Huit personnes'
      },
      {
        kanji: '八月',
        romaji: 'hachigatsu',
        translation: 'Août'
      },
      {
        kanji: '八日',
        romaji: 'yôka',
        translation: '8e jour du mois'
      },
      {
        kanji: 'お八つ',
        romaji: 'oyatsu',
        translation: 'Goûter, quatre-heures'
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
        translation: 'Neuf (compteur)'
      },
      {
        kanji: '九人',
        romaji: 'kyûnin',
        translation: 'Neuf personnes'
      },
      {
        kanji: '九月',
        romaji: 'kugatsu',
        translation: 'Septembre'
      },
      {
        kanji: '九日',
        romaji: 'kokonoka',
        translation: '9e jour du mois'
      },
      {
        kanji: ' 九々',
        romaji: 'kuku',
        translation: 'Tables de multiplication'
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
        translation: 'Dix (compteur)'
      },
      {
        kanji: '十人',
        romaji: 'jûnin',
        translation: 'Dix personnes'
      },
      {
        kanji: '十月',
        romaji: 'jûgatsu',
        translation: 'Octobre'
      },
      {
        kanji: '十日',
        romaji: 'tôka',
        translation: '10e jour du mois'
      },
      {
        kanji: '十字',
        romaji: 'jûji',
        translation: 'Croix, en forme de croix'
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
        translation: 'Cent (compteur)'
      },
      {
        kanji: '百人',
        romaji: 'hyakunin',
        translation: 'Cent personnes'
      },
      {
        kanji: '百',
        romaji: 'nanbyaku',
        translation: 'Des centaines'
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
        translation: 'Mille (compteur)'
      },
      {
        kanji: '千人',
        romaji: 'sennin',
        translation: 'Mille personnes'
      },
      {
        kanji: '千円',
        romaji: 'sen en',
        translation: 'Mille yens'
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
        kanji: '人',
        romaji: 'hito',
        translation: 'Être humain, personne'
      },
      {
        kanji: '百人',
        romaji: 'hyakunin',
        translation: 'Cent personnes'
      },
      {
        kanji: '男の人',
        romaji: 'otokonohito',
        translation: 'Homme'
      },
      {
        kanji: 'フランス人',
        romaji: 'furansujin',
        translation: 'Français'
      },
      {
        kanji: '人々',
        romaji: 'hitobito',
        translation: 'Les gens'
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
        kanji: '女',
        romaji: 'onna',
        translation: 'Femme'
      },
      {
        kanji: '女の人',
        romaji: 'onnanohito',
        translation: 'Femme'
      },
      {
        kanji: '男女',
        romaji: 'danjo',
        translation: 'Homme et femme'
      },
      {
        kanji: '女性',
        romaji: 'josei',
        translation: 'Femme, genre féminin'
      },
      {
        kanji: '少女',
        romaji: 'shôjo',
        translation: 'Petite fille, fillette'
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
        kanji: '男',
        romaji: 'otoko',
        translation: 'Homme'
      },
      {
        kanji: '男の人',
        romaji: 'otokonohito',
        translation: 'Homme'
      },
      {
        kanji: '男性',
        romaji: 'dansei',
        translation: 'Homme, genre masculin'
      },
      {
        kanji: '山男',
        romaji: 'yamaotoko',
        translation: 'Montagnard, alpiniste'
      },
      {
        kanji: '長男',
        romaji: 'chônan',
        translation: 'Fils aîné'
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
        kanji: '子',
        romaji: 'ko',
        translation: 'Enfant'
      },
      {
        kanji: '男子',
        romaji: 'danshi',
        translation: 'Jeune home, adolescent'
      },
      {
        kanji: '女の子',
        romaji: 'onnanoko',
        translation: 'Fille, jeune fille'
      },
      {
        kanji: '親子',
        romaji: 'oyako',
        translation: 'Parent et enfant'
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
        kanji: '上',
        romaji: 'ue',
        translation: 'Dessus, en haut'
      },
      {
        kanji: '以上',
        romaji: 'ijô',
        translation: 'Au minimum, à partir de'
      },
      {
        kanji: '上手',
        romaji: 'jôzu',
        translation: 'Adroit, habile'
      },
      {
        kanji: '上がる',
        romaji: 'agaru',
        translation: `Monter, s'élever, se lever`
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
        kanji: '下',
        romaji: 'shita',
        translation: 'Dessous, en bas, sous'
      },
      {
        kanji: '上下',
        romaji: 'jôge',
        translation: 'Haut et bas, verticalement'
      },
      {
        kanji: '下る',
        romaji: 'kudaru',
        translation: 'Descendre'
      },
      {
        kanji: '下手',
        romaji: 'heta',
        translation: 'Maladroit, peu doué'
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
        kanji: '左',
        romaji: 'hidari',
        translation: 'Gauche'
      },
      {
        kanji: '左手',
        romaji: 'hidarite',
        translation: 'Main gauche'
      },
      {
        kanji: '左方',
        romaji: 'sahô',
        translation: 'Côté gauche'
      },
      {
        kanji: '左側',
        romaji: 'hidarigawa',
        translation: 'Côté gauche'
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
        kanji: '右',
        romaji: 'migi',
        translation: 'Droite'
      },
      {
        kanji: '右方',
        romaji: 'uhô',
        translation: 'Côté droit'
      },
      {
        kanji: '左右',
        romaji: 'sayû',
        translation: 'Gauche et droite, Influence'
      },
      {
        kanji: '右側',
        romaji: 'migigawa',
        translation: 'Côté droit'
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
        kanji: '中',
        romaji: 'naka',
        translation: 'Milieu, dans, intérieur'
      },
      {
        kanji: '一日中',
        romaji: 'ichinichijû',
        translation: 'Toute la journée'
      },
      {
        kanji: '中国',
        romaji: 'chûgokû',
        translation: 'Chine'
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
        kanji: '金',
        romaji: 'kin',
        translation: 'Métal, or, argent'
      },
      {
        kanji: 'お金',
        romaji: 'okane',
        translation: 'Argent'
      },
      {
        kanji: '金髪',
        romaji: 'kinpatsu',
        translation: 'Blond'
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
        kanji: '水',
        romaji: 'sui',
        translation: 'Eau'
      },
      {
        kanji: '水色',
        romaji: 'mizuiro',
        translation: 'Bleu clair'
      },
      {
        kanji: '水曜日',
        romaji: 'suiyôbi',
        translation: 'Mercredi'
      },
      {
        kanji: '水気',
        romaji: 'mizuke',
        translation: 'Humidité'
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
        kanji: '火',
        romaji: 'hi',
        translation: 'Feu, flamme'
      },
      {
        kanji: '火の玉',
        romaji: 'hinotama',
        translation: 'Boule de feu, feu follet'
      },
      {
        kanji: '火曜日',
        romaji: 'kayôbi',
        translation: 'Mardi'
      },
      {
        kanji: '火災',
        romaji: 'kasai',
        translation: 'Incendie'
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
        kanji: '土',
        romaji: 'tsuchi',
        translation: 'Terre, sol'
      },
      {
        kanji: '土台',
        romaji: 'dodai',
        translation: 'Fondation, base'
      },
      {
        kanji: '土曜日',
        romaji: 'doyôbi',
        translation: 'Samedi'
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
        kanji: '木',
        romaji: 'ki',
        translation: 'arbre'
      },
      {
        kanji: '木材',
        romaji: 'mokuzai',
        translation: 'Bois (matériau)'
      },
      {
        kanji: '木刀',
        romaji: 'bokutô',
        translation: 'Sabre en bois'
      },
      {
        kanji: '木曜日',
        romaji: 'mokuyôbi',
        translation: 'Jeudi'
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
        kanji: '月',
        romaji: 'tsuki',
        translation: 'Lune, mois'
      },
      {
        kanji: '一ヶ月',
        romaji: 'ikkagetsu',
        translation: 'Un mois (durée)'
      },
      {
        kanji: '十一月',
        romaji: 'jûichigatsu',
        translation: 'Novembre'
      },
      {
        kanji: '月曜日',
        romaji: 'getsuyoubi',
        translation: 'Lundi'
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
        romaji: 'jitsu'
      }
    ],
    translation: 'Soleil, jour',
    examples: [
      {
        kanji: '日',
        romaji: 'hi',
        translation: 'Soleil, jour'
      },
      {
        kanji: '今日',
        romaji: 'kyô',
        translation: `Aujourd'hui`
      },
      {
        kanji: '日曜日',
        romaji: 'nichiyôbi',
        translation: 'Dimanche'
      },
      {
        kanji: '三日',
        romaji: 'mikka',
        translation: 'Le 3e jour du mois'
      },
      {
        kanji: '休日',
        romaji: 'kyûjitsu',
        translation: 'Jour de congé, jour férié'
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
        kanji: '年',
        romaji: 'toshi',
        translation: 'Année, âge'
      },
      {
        kanji: '年',
        romaji: 'nen',
        translation: 'Année (compteur)'
      },
      {
        kanji: '年間',
        romaji: 'nenkan',
        translation: 'Année (durée)'
      },
      {
        kanji: '今年',
        romaji: 'kotoshi',
        translation: 'Cette année'
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
        kanji: '大きい',
        romaji: 'ôkii',
        translation: 'Grand, gros'
      },
      {
        kanji: '大阪',
        romaji: 'ôsaka',
        translation: 'Ôsaka'
      },
      {
        kanji: '大変',
        romaji: 'taihen',
        translation: 'Important, grave, très'
      },
      {
        kanji: '大学生',
        romaji: 'daigakusei',
        translation: `Étudiant à l'université`
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
      },
      {
        kana: 'お',
        romaji: 'o'
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
        kanji: '小さい',
        romaji: 'chiisai',
        translation: 'Petit'
      },
      {
        kanji: '小川',
        romaji: 'ogawa',
        translation: 'Ruisseau, petite rivière'
      },
      {
        kanji: '小鳥',
        romaji: 'kotori',
        translation: 'Petit oiseau'
      },
      {
        kanji: '大小',
        romaji: 'daishô',
        translation: 'Grand et petit, de différentes tailles'
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
        kanji: '早い',
        romaji: 'hayai',
        translation: 'Rapide, tôt'
      },
      {
        kanji: '早朝',
        romaji: 'sôchô',
        translation: 'De bon matin'
      },
      {
        kanji: '早急',
        romaji: 'sakkyû',
        translation: 'Urgent'
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
        kanji: '目',
        romaji: 'me',
        translation: 'Œil'
      },
      {
        kanji: '目上',
        romaji: 'meue',
        translation: 'Supérieur (hiérarchique)'
      },
      {
        kanji: '目的',
        romaji: 'mokuteki',
        translation: 'But, objectif'
      },
      {
        kanji: '面目無い',
        romaji: 'menbokunai',
        translation: 'Honteux, honteuse'
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
        kanji: '耳',
        romaji: 'mimi',
        translation: 'Oreille'
      },
      {
        kanji: '耳目',
        romaji: 'jimoku',
        translation: `Œil et oreille, attention (de quelqu'un)`
      },
      {
        kanji: '中耳',
        romaji: 'chûji',
        translation: 'Tympan'
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
        kanji: '口',
        romaji: 'kuchi',
        translation: 'Bouche'
      },
      {
        kanji: '人口',
        romaji: 'jinkô',
        translation: 'Population'
      },
      {
        kanji: '口授',
        romaji: 'kuju',
        translation: 'Enseignement oral'
      },
      {
        kanji: '入口',
        romaji: 'iriguchi',
        translation: 'Entrée'
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
      },
      {
        kana: 'た',
        romaji: 'ta'
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
        kanji: '手',
        romaji: 'te',
        translation: 'Main'
      },
      {
        kanji: '手紙',
        romaji: 'tegami',
        translation: 'Lettre'
      },
      {
        kanji: '歌手',
        romaji: 'kashu',
        translation: 'Chanteur, chanteuse'
      },
      {
        kanji: '上手',
        romaji: 'jôzu',
        translation: 'Habile'
      },
      {
        kanji: '下手',
        romaji: 'heta',
        translation: 'Maladroit, peu doué'
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
        kanji: '足',
        romaji: 'ashi',
        translation: 'Pied, jambe'
      },
      {
        kanji: '足す',
        romaji: 'tasu',
        translation: 'Additionner, Ajouter'
      },
      {
        kanji: '遠足',
        romaji: 'ensoku',
        translation: 'Excursion, sortie en groupe'
      },
      {
        kanji: '手足',
        romaji: 'teashi',
        translation: 'Bras et jambes, membres'
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
        kanji: '見る',
        romaji: 'miru',
        translation: 'Voir, regarder'
      },
      {
        kanji: '意見',
        romaji: 'iken',
        translation: 'Avis, opinion'
      },
      {
        kanji: '見せる',
        romaji: 'miseru',
        translation: 'Montrer'
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
      },
      {
        kana: 'ね',
        romaji: 'ne'
      }
    ],
    onyomi: [
      {
        kana: 'オン',
        romaji: 'on'
      },
      {
        kana: 'イン',
        romaji: 'in'
      }
    ],
    translation: 'Son, bruit',
    examples: [
      {
        kanji: '音',
        romaji: 'oto',
        translation: 'Son, bruit'
      },
      {
        kanji: '音楽',
        romaji: 'ongaku',
        translation: 'Musique'
      },
      {
        kanji: '子音',
        romaji: 'shiin',
        translation: 'Consonne'
      },
      {
        kanji: '足音',
        romaji: 'ashioto',
        translation: 'Bruit de pas'
      },
      {
        kanji: '本音',
        romaji: 'honne',
        translation: 'Intention véritable'
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
        kanji: '生',
        romaji: 'nama',
        translation: 'Cru'
      },
      {
        kanji: '先生',
        romaji: 'sensei',
        translation: 'Professeur'
      },
      {
        kanji: '生きる',
        romaji: 'ikiru',
        translation: 'Vivre'
      },
      {
        kanji: '一生',
        romaji: 'isshô',
        translation: 'Toute une vie'
      },
      {
        kanji: '生まれる',
        romaji: 'umareru',
        translation: 'Être né'
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
        kanji: '力',
        romaji: 'chikara',
        translation: 'Force'
      },
      {
        kanji: '力士',
        romaji: 'rikishi',
        translation: 'Lutteur (sumo)'
      },
      {
        kanji: '水力',
        romaji: 'suiryoku',
        translation: 'Force hydraulique'
      },
      {
        kanji: '力添え',
        romaji: 'chikarazoe',
        translation: 'Aide, assistance'
      }
    ]
  },
  {
    id: 41,
    kanji: '気',
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
    translation: 'Énergie, flux vital, âme',
    examples: [
      {
        kanji: '気',
        romaji: 'ki',
        translation: 'Esprit, humeur'
      },
      {
        kanji: '電気',
        romaji: 'denki',
        translation: 'Électricité'
      },
      {
        kanji: '気色',
        romaji: 'keshiki',
        translation: 'Indication, signe'
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
        kanji: '入る',
        romaji: 'iru / hairu',
        translation: 'Entrer'
      },
      {
        kanji: '入学',
        romaji: 'nyûgaku',
        translation: 'Admission (dans une école)'
      },
      {
        kanji: '入れる',
        romaji: 'ireru',
        translation: 'Insérer, Mettre'
      },
      {
        kanji: '入日',
        romaji: 'irihi',
        translation: 'Soleil couchant'
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
        kanji: '出る',
        romaji: 'deru',
        translation: 'Sortie'
      },
      {
        kanji: '出す',
        romaji: 'dasu',
        translation: 'Faire sortir, envoyer'
      },
      {
        kanji: '出現',
        romaji: 'shutsugen',
        translation: 'Apparition'
      },
      {
        kanji: '出発',
        romaji: 'shuppatsu',
        translation: 'Départ'
      },
      {
        kanji: '出納',
        romaji: 'Suitô',
        translation: 'Recettes et dépenses, comptes'
      }
    ]
  },
  {
    id: 44,
    kanji: '立',
    kunyomi: [
      {
        kana: 'た',
        romaji: 'ta'
      }
    ],
    onyomi: [
      {
        kana: 'リツ',
        romaji: 'ritsu'
      },
      {
        kana: 'リュウ',
        romaji: 'ryû'
      }
    ],
    translation: 'Se lever, être debout',
    examples: [
      {
        kanji: '立つ',
        romaji: 'tatsu',
        translation: 'Se lever, se mettre debout'
      },
      {
        kanji: '立てる',
        romaji: 'tateru',
        translation: 'Bâtir, construire'
      },
      {
        kanji: '立案',
        romaji: 'ritsuan',
        translation: 'Brouillon, ébauche'
      },
      {
        kanji: '立米',
        romaji: 'ryûbei',
        translation: 'Mètre cube'
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
        kanji: '休み',
        romaji: 'yasumi',
        translation: 'Repos, vacances'
      },
      {
        kanji: '休む',
        romaji: 'yasumu',
        translation: 'Se reposer, être absent'
      },
      {
        kanji: '休火山',
        romaji: 'kyûkazan',
        translation: 'Volcan éteint'
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
        kanji: '先',
        romaji: 'saki',
        translation: `Avant, d'abord`
      },
      {
        kanji: '先月',
        romaji: 'sengetsu',
        translation: 'Le mois dernier'
      },
      {
        kanji: '先生',
        romaji: 'sensei',
        translation: 'Professeur, maître'
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
    translation: 'Soir, soirée',
    examples: [
      {
        kanji: '夕',
        romaji: 'yû',
        translation: 'Soir, soirée'
      },
      {
        kanji: '一夕',
        romaji: 'isseki',
        translation: 'Un soir'
      },
      {
        kanji: '夕食',
        romaji: 'yûshoku',
        translation: 'Le dîner, le souper'
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
        kanji: '赤',
        romaji: 'aka',
        translation: 'Rouge'
      },
      {
        kanji: '赤い',
        romaji: 'akai',
        translation: 'Rouge (adjectif)'
      },
      {
        kanji: '赤外',
        romaji: 'sekigai',
        translation: 'Infrarouge'
      },
      {
        kanji: '赤銅',
        romaji: 'shakudô',
        translation: `Alliage de cuivre et d'or`
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
    translation: 'Bleu, vert, inexpérience',
    examples: [
      {
        kanji: '青',
        romaji: 'ao',
        translation: 'Bleu, vert'
      },
      {
        kanji: '青い',
        romaji: 'aoi',
        translation: 'Bleu, vert (adjectif)'
      },
      {
        kanji: '青年',
        romaji: 'seinen',
        translation: 'Jeunes gens'
      },
      {
        kanji: '緑青',
        romaji: 'rokushô',
        translation: 'Vert-de-gris'
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
      }
    ],
    onyomi: [
      {
        kana: 'ハク',
        romaji: 'haku'
      },
      {
        kana: 'ビャク',
        romaji: 'byaku'
      }
    ],
    translation: 'Blanc, vide',
    examples: [
      {
        kanji: '白',
        romaji: 'shiro',
        translation: 'Blanc'
      },
      {
        kanji: '白い',
        romaji: 'shiroi',
        translation: 'Blanc (adjectif)'
      },
      {
        kanji: '白紙',
        romaji: 'hakushi',
        translation: 'Papier blanc, feuille vierge'
      },
      {
        kanji: '白む',
        romaji: 'shiramu',
        translation: `Blanchir, s'éclaircir`
      },
      {
        kanji: '白業',
        romaji: 'byakugô',
        translation: 'Bienfait, bonne action'
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
        kanji: '林',
        romaji: 'hayashi',
        translation: 'Bois, forêt'
      },
      {
        kanji: '林学',
        romaji: 'ringaku',
        translation: 'Sylviculture'
      },
      {
        kanji: '林立',
        romaji: 'rinritsu',
        translation: 'Dressé en rangs serrés'
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
        kanji: '森',
        romaji: 'mori',
        translation: 'Bois, forêt'
      },
      {
        kanji: '森閑',
        romaji: 'shinkan',
        translation: 'Silence'
      },
      {
        kanji: '森森',
        romaji: 'shinshin',
        translation: 'Forêt dense'
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
        kana: 'セン',
        romaji: 'san'
      }
    ],
    translation: 'Montagne',
    examples: [
      {
        kanji: '山',
        romaji: 'yama',
        translation: 'Montagne'
      },
      {
        kanji: '山水',
        romaji: 'sansui',
        translation: 'paysage'
      },
      {
        kanji: '山道',
        romaji: 'sandô',
        translation: 'Sentier, route de montagne'
      },
      {
        kanji: '山刀',
        romaji: 'yamakawa',
        translation: 'Hache'
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
    translation: 'Rivière, fleuve',
    examples: [
      {
        kanji: '川',
        romaji: 'kawa',
        translation: 'Rivière, fleuve'
      },
      {
        kanji: '小川',
        romaji: 'ogawa',
        translation: 'Ruisseau'
      },
      {
        kanji: '河川',
        romaji: 'kasen',
        translation: 'Fleuves et rivières'
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
        kanji: '空',
        romaji: 'sora',
        translation: 'Ciel'
      },
      {
        kanji: '空',
        romaji: 'kara',
        translation: 'Vide, creux'
      },
      {
        kanji: '空気',
        romaji: 'kûki',
        translation: 'Air, atmosphère'
      },
      {
        kanji: '空ける',
        romaji: 'akeru',
        translation: 'Vider, faire de la place'
      },
      {
        kanji: '空手',
        romaji: 'karate',
        translation: 'Karaté'
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
    translation: 'Rizière',
    examples: [
      {
        kanji: '田',
        romaji: 'ta',
        translation: 'Rizière'
      },
      {
        kanji: '田園',
        romaji: 'Denen',
        translation: 'Quartiers ruraux, terres cultivées'
      },
      {
        kanji: '田畑',
        romaji: 'tahata',
        translation: 'Rizières et champs'
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
        kanji: '花',
        romaji: 'hana',
        translation: 'Fleur'
      },
      {
        kanji: '花火',
        romaji: 'hanabi',
        translation: `Feu d'artifice`
      },
      {
        kanji: '花形',
        romaji: 'kakei',
        translation: 'Arrangement floral'
      },
      {
        kanji: '花屋',
        romaji: 'hanaya',
        translation: 'Fleuriste'
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
        kanji: '雨',
        romaji: 'ame',
        translation: 'Pluie'
      },
      {
        kanji: '雨水',
        romaji: 'amamizu',
        translation: 'Eau de pluie'
      },
      {
        kanji: '風雨',
        romaji: 'fûu',
        translation: 'Vent et pluie'
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
    translation: 'Ciel, paradis',
    examples: [
      {
        kanji: '天',
        romaji: 'ame',
        translation: 'Ciel, paradis'
      },
      {
        kanji: '天気',
        romaji: 'tenki',
        translation: 'Temps, climat'
      },
      {
        kanji: '天使',
        romaji: 'tenshi',
        translation: 'Ange'
      },
      {
        kanji: '天の川',
        romaji: 'amanogawa',
        translation: 'Voie lactée'
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
        kanji: '円い',
        romaji: 'marui',
        translation: 'Rond, circulaire'
      },
      {
        kanji: '円',
        romaji: 'en',
        translation: 'Yen (monnaie japonaise)'
      },
      {
        kanji: '円満',
        romaji: 'enman',
        translation: 'Harmonie'
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
        kanji: '本',
        romaji: 'hon',
        translation: 'Livre, principal, compteur pour les objets cylindriques'
      },
      {
        kanji: '本々',
        romaji: 'motomoto',
        translation: `À l'origine`
      },
      {
        kanji: '本当',
        romaji: 'hontô',
        translation: 'Vraiment'
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
        kanji: '文',
        romaji: 'fumi',
        translation: 'Lettre, note'
      },
      {
        kanji: '文',
        romaji: 'bun',
        translation: 'Phrase, écrit'
      },
      {
        kanji: '文字',
        romaji: 'monji',
        translation: `Lettre, caractère (de l'alphabet)`
      },
      {
        kanji: '文学',
        romaji: 'bungaku',
        translation: 'Littérature'
      },
      {
        kanji: '文明',
        romaji: 'bunmei',
        translation: 'Civilisation, culture'
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
        kanji: '字',
        romaji: 'aza',
        translation: `Hameau, partie d'un village`
      },
      {
        kanji: '字',
        romaji: 'ji',
        translation: 'Caractère, lettre'
      },
      {
        kanji: '字書',
        romaji: 'jisho',
        translation: 'Dictionnaire'
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
        kanji: '学ぶ',
        romaji: 'manabu',
        translation: 'Étudier'
      },
      {
        kanji: '学生',
        romaji: 'gakusei',
        translation: 'Étudiant, élève'
      },
      {
        kanji: '科学',
        romaji: 'kagaku',
        translation: 'Science'
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
        kanji: '学校',
        romaji: 'gakkou',
        translation: 'École'
      },
      {
        kanji: '校長',
        romaji: 'kôchô',
        translation: `Directeur d'école`
      },
      {
        kanji: '休校',
        romaji: 'kyûkô',
        translation: 'Congés scolaires'
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
        kanji: '村',
        romaji: 'mura',
        translation: 'Village'
      },
      {
        kanji: '村会',
        romaji: 'sonkai',
        translation: 'Conseil municipal'
      },
      {
        kanji: '村人',
        romaji: 'murabito',
        translation: 'Villageois'
      },
      {
        kanji: '村長',
        romaji: 'sonchô',
        translation: `Maire d'un village`
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
        kanji: '町',
        romaji: 'machi',
        translation: 'Ville'
      },
      {
        kanji: '町人',
        romaji: 'chônin',
        translation: `Habitant d'une ville, citadins`
      },
      {
        kanji: '下町',
        romaji: 'shitamachi',
        translation: 'Ville basse, quartier populaire'
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
      },
      {
        kana: 'まさ',
        romaji: 'masa'
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
        kanji: '正す',
        romaji: 'tadasu',
        translation: 'Corriger, vérifier'
      },
      {
        kanji: '正に',
        romaji: 'masani',
        translation: 'Justement, précisément'
      },
      {
        kanji: '正時',
        romaji: 'shôji',
        translation: `À l'heure pile`
      },
      {
        kanji: '不正',
        romaji: 'fusei',
        translation: 'Injustice'
      },
      {
        kanji: '正直',
        romaji: 'shôjiki',
        translation: 'Honnêteté, franchise'
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
        kanji: '名',
        romaji: 'na',
        translation: 'Nom, prénom'
      },
      {
        kanji: '名前',
        romaji: 'namae',
        translation: 'Nom'
      },
      {
        kanji: '大名',
        romaji: 'daimyou',
        translation: 'Seigneur féodal'
      },
      {
        kanji: '名人',
        romaji: 'meijin',
        translation: 'Maître, virtuose'
      }
    ]
  },
  {
    id: 70,
    kanji: '王',
    onyomi: [
      {
        kana: 'オウ',
        romaji: 'ô'
      }
    ],
    translation: 'Roi, empereur',
    examples: [
      {
        kanji: '王',
        romaji: 'ô',
        translation: 'Roi'
      },
      {
        kanji: '女王',
        romaji: 'joô',
        translation: 'Reine'
      },
      {
        kanji: '王子',
        romaji: 'ôji',
        translation: 'Prince'
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
        kana: 'ギョク',
        romaji: 'gyoku'
      }
    ],
    translation: 'Bijou, balle, bille, sphère',
    examples: [
      {
        kanji: '玉',
        romaji: 'tama',
        translation: 'Boule, balle'
      },
      {
        kanji: '玉',
        romaji: 'gyoku',
        translation: 'Jade, pierre précieuse'
      },
      {
        kanji: '玉子',
        romaji: 'tamago',
        translation: ''
      },
      {
        kanji: '玉座',
        romaji: 'gyokuza',
        translation: 'trône'
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
        kanji: '草',
        romaji: 'kusa',
        translation: 'Herbe'
      },
      {
        kanji: '猫草',
        romaji: 'nekogusa',
        translation: 'Herbe à chat'
      },
      {
        kanji: '草原',
        romaji: 'sôgen',
        translation: 'Prairie'
      },
      {
        kanji: '草案',
        romaji: 'sôan',
        translation: 'Avant-projet, plan, ébauche'
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
      }
    ],
    translation: 'Insecte, ver',
    examples: [
      {
        kanji: '虫',
        romaji: 'mushi',
        translation: 'Insecte'
      },
      {
        kanji: '虫歯',
        romaji: 'mushiba',
        translation: 'Dent cariée'
      },
      {
        kanji: '昆虫学',
        romaji: 'konchûgaku',
        translation: 'Entomologie'
      },
      {
        kanji: '虫垂',
        romaji: 'chûsui',
        translation: 'Appendice'
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
        kanji: '犬',
        romaji: 'inu',
        translation: 'Chien'
      },
      {
        kanji: '犬小屋',
        romaji: 'inugoya',
        translation: 'Niche à chien'
      },
      {
        kanji: '番犬',
        romaji: 'banken',
        translation: 'Chien de garde'
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
        kanji: '石',
        romaji: 'ishi',
        translation: 'Pierre, rocher'
      },
      {
        kanji: '石',
        romaji: 'koku',
        translation: 'Unité de volume japonsaise'
      },
      {
        kanji: '木石',
        romaji: 'bokuseki',
        translation: 'Arbre et pierre, insensibilité'
      },
      {
        kanji: '磁石',
        romaji: 'jishaku',
        translation: 'Aimant'
      },
      {
        kanji: '小石',
        romaji: 'koishi',
        translation: 'Caillou, galet'
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
        kanji: '竹',
        romaji: 'take',
        translation: 'Bambou'
      },
      {
        kanji: '竹林',
        romaji: 'chikurin',
        translation: 'Forêt de bambou'
      },
      {
        kanji: '竹の子',
        romaji: 'takenoko',
        translation: 'Pousse de bambou'
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
      }
    ],
    translation: 'Soie, fil',
    examples: [
      {
        kanji: '糸',
        romaji: 'ito',
        translation: 'Fil'
      },
      {
        kanji: '糸状',
        romaji: 'shijô',
        translation: 'Filiforme, filamenteux'
      },
      {
        kanji: '糸巻き',
        romaji: 'itomaki',
        translation: 'Bobine de fil'
      },
      {
        kanji: '金糸',
        romaji: 'kinshi',
        translation: `Fil d'or`
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
    translation: 'Coquillage',
    examples: [
      {
        kanji: '貝',
        romaji: 'kai',
        translation: 'Coquillage, coquille'
      },
      {
        kanji: '貝類',
        romaji: 'kairui',
        translation: 'Coquillages'
      },
      {
        kanji: '貽貝',
        romaji: 'mûrugai',
        translation: 'Moule'
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
        kanji: '車',
        romaji: 'kuruma',
        translation: 'Voiture, automobile'
      },
      {
        kanji: '電車',
        romaji: 'densha',
        translation: 'Train (électrique)'
      },
      {
        kanji: '下車',
        romaji: 'gesha',
        translation: `Descendre (d'un train, d'une voiture)`
      },
      {
        kanji: '車屋',
        romaji: 'kurumaya',
        translation: 'Concessionnaire'
      }
    ]
  }
])
