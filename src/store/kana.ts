import { reactive } from 'vue'
import { type KanaTable, type KanaItem } from '../types/kana'

export const hiraganaTable: KanaTable = reactive([
  {
    kana: 'あ',
    romaji: 'a',
    combined: false,
    vowel: 'a'
  },
  {
    kana: 'い',
    romaji: 'i',
    combined: false,
    vowel: 'i'
  },
  {
    kana: 'う',
    romaji: 'u',
    combined: false,
    vowel: 'u'
  },
  {
    kana: 'え',
    romaji: 'e',
    combined: false,
    vowel: 'e'
  },
  {
    kana: 'お',
    romaji: 'o',
    combined: false,
    vowel: 'o'
  },
  {
    kana: 'か',
    romaji: 'ka',
    combined: false,
    vowel: 'a',
    consonant: 'k'
  },
  {
    kana: 'き',
    romaji: 'ki',
    combined: false,
    vowel: 'i',
    consonant: 'k'
  },
  {
    kana: 'く',
    romaji: 'ku',
    combined: false,
    vowel: 'u',
    consonant: 'k'
  },
  {
    kana: 'け',
    romaji: 'ke',
    combined: false,
    vowel: 'e',
    consonant: 'k'
  },
  {
    kana: 'こ',
    romaji: 'ko',
    combined: false,
    vowel: 'o',
    consonant: 'k'
  },
  {
    kana: 'さ',
    romaji: 'sa',
    combined: false,
    vowel: 'a',
    consonant: 's'
  },
  {
    kana: 'し',
    romaji: 'shi',
    combined: false,
    vowel: 'i',
    consonant: 's'
  },
  {
    kana: 'す',
    romaji: 'su',
    combined: false,
    vowel: 'u',
    consonant: 's'
  },
  {
    kana: 'せ',
    romaji: 'se',
    combined: false,
    vowel: 'e',
    consonant: 's'
  },
  {
    kana: 'そ',
    romaji: 'so',
    combined: false,
    vowel: 'o',
    consonant: 's'
  },
  {
    kana: 'ざ',
    romaji: 'za',
    combined: false,
    vowel: 'a',
    consonant: 'z'
  },
  {
    kana: 'じ',
    romaji: 'ji',
    combined: false,
    vowel: 'i',
    consonant: 'z'
  },
  {
    kana: 'ず',
    romaji: 'zu',
    combined: false,
    vowel: 'u',
    consonant: 'z'
  },
  {
    kana: 'ぜ',
    romaji: 'ze',
    combined: false,
    vowel: 'e',
    consonant: 'z'
  },
  {
    kana: 'ぞ',
    romaji: 'zo',
    combined: false,
    vowel: 'o',
    consonant: 'z'
  },
  {
    kana: 'た',
    romaji: 'ta',
    combined: false,
    vowel: 'a',
    consonant: 't'
  },
  {
    kana: 'ち',
    romaji: 'chi',
    combined: false,
    vowel: 'i',
    consonant: 't'
  },
  {
    kana: 'つ',
    romaji: 'tsu',
    combined: false,
    vowel: 'u',
    consonant: 't'
  },
  {
    kana: 'て',
    romaji: 'te',
    combined: false,
    vowel: 'e',
    consonant: 't'
  },
  {
    kana: 'と',
    romaji: 'to',
    combined: false,
    vowel: 'o',
    consonant: 't'
  },
  {
    kana: 'だ',
    romaji: 'da',
    combined: false,
    vowel: 'a',
    consonant: 'd'
  },
  {
    kana: 'ぢ',
    romaji: 'ji',
    combined: false,
    vowel: 'i',
    consonant: 'd'
  },
  {
    kana: 'づ',
    romaji: 'zu',
    combined: false,
    vowel: 'u',
    consonant: 'd'
  },
  {
    kana: 'で',
    romaji: 'de',
    combined: false,
    vowel: 'e',
    consonant: 'd'
  },
  {
    kana: 'ど',
    romaji: 'do',
    combined: false,
    vowel: 'o',
    consonant: 'd'
  },
  {
    kana: 'な',
    romaji: 'na',
    combined: false,
    vowel: 'a',
    consonant: 'n'
  },
  {
    kana: 'に',
    romaji: 'ni',
    combined: false,
    vowel: 'i',
    consonant: 'n'
  },
  {
    kana: 'ぬ',
    romaji: 'nu',
    combined: false,
    vowel: 'u',
    consonant: 'n'
  },
  {
    kana: 'ね',
    romaji: 'ne',
    combined: false,
    vowel: 'e',
    consonant: 'n'
  },
  {
    kana: 'の',
    romaji: 'no',
    combined: false,
    vowel: 'o',
    consonant: 'n'
  },
  {
    kana: 'は',
    romaji: 'ha',
    combined: false,
    vowel: 'a',
    consonant: 'h'
  },
  {
    kana: 'ひ',
    romaji: 'hi',
    combined: false,
    vowel: 'i',
    consonant: 'h'
  },
  {
    kana: 'ふ',
    romaji: 'fu',
    combined: false,
    vowel: 'u',
    consonant: 'h'
  },
  {
    kana: 'へ',
    romaji: 'he',
    combined: false,
    vowel: 'e',
    consonant: 'h'
  },
  {
    kana: 'ほ',
    romaji: 'ho',
    combined: false,
    vowel: 'o',
    consonant: 'h'
  },
  {
    kana: 'ば',
    romaji: 'ba',
    combined: false,
    vowel: 'a',
    consonant: 'b'
  },
  {
    kana: 'び',
    romaji: 'bi',
    combined: false,
    vowel: 'i',
    consonant: 'b'
  },
  {
    kana: 'ぶ',
    romaji: 'bu',
    combined: false,
    vowel: 'u',
    consonant: 'b'
  },
  {
    kana: 'べ',
    romaji: 'be',
    combined: false,
    vowel: 'e',
    consonant: 'b'
  },
  {
    kana: 'ぼ',
    romaji: 'bo',
    combined: false,
    vowel: 'o',
    consonant: 'b'
  },
  {
    kana: 'ぱ',
    romaji: 'pa',
    combined: false,
    vowel: 'a',
    consonant: 'p'
  },
  {
    kana: 'ぴ',
    romaji: 'pi',
    combined: false,
    vowel: 'i',
    consonant: 'p'
  },
  {
    kana: 'ぷ',
    romaji: 'pu',
    combined: false,
    vowel: 'u',
    consonant: 'p'
  },
  {
    kana: 'ぺ',
    romaji: 'pe',
    combined: false,
    vowel: 'e',
    consonant: 'p'
  },
  {
    kana: 'ぽ',
    romaji: 'po',
    combined: false,
    vowel: 'o',
    consonant: 'p'
  },
  {
    kana: 'ま',
    romaji: 'ma',
    combined: false,
    vowel: 'a',
    consonant: 'm'
  },
  {
    kana: 'み',
    romaji: 'mi',
    combined: false,
    vowel: 'i',
    consonant: 'm'
  },
  {
    kana: 'む',
    romaji: 'mu',
    combined: false,
    vowel: 'u',
    consonant: 'm'
  },
  {
    kana: 'め',
    romaji: 'me',
    combined: false,
    vowel: 'e',
    consonant: 'm'
  },
  {
    kana: 'も',
    romaji: 'mo',
    combined: false,
    vowel: 'o',
    consonant: 'm'
  },
  {
    kana: 'や',
    romaji: 'ya',
    combined: false,
    vowel: 'a',
    consonant: 'y'
  },
  {
    kana: 'ゆ',
    romaji: 'yu',
    combined: false,
    vowel: 'u',
    consonant: 'y'
  },
  {
    kana: 'よ',
    romaji: 'yo',
    combined: false,
    vowel: 'o',
    consonant: 'y'
  },
  {
    kana: 'ら',
    romaji: 'ra',
    combined: false,
    vowel: 'a',
    consonant: 'r'
  },
  {
    kana: 'り',
    romaji: 'ri',
    combined: false,
    vowel: 'i',
    consonant: 'r'
  },
  {
    kana: 'る',
    romaji: 'ru',
    combined: false,
    vowel: 'u',
    consonant: 'r'
  },
  {
    kana: 'れ',
    romaji: 're',
    combined: false,
    vowel: 'e',
    consonant: 'r'
  },
  {
    kana: 'ろ',
    romaji: 'ro',
    combined: false,
    vowel: 'o',
    consonant: 'r'
  },
  {
    kana: 'わ',
    romaji: 'wa',
    combined: false,
    vowel: 'a',
    consonant: 'w'
  },
  {
    kana: 'を',
    romaji: 'wo',
    combined: false,
    vowel: 'o',
    consonant: 'w'
  },
  {
    kana: 'ん',
    romaji: 'n',
    combined: false,
    consonant: 'n'
  }
])

export const katakanaTable: KanaTable = reactive([
  {
    kana: 'ア',
    romaji: 'a',
    combined: false,
    vowel: 'a'
  },
  {
    kana: 'イ',
    romaji: 'i',
    combined: false,
    vowel: 'i'
  },
  {
    kana: 'ウ',
    romaji: 'u',
    combined: false,
    vowel: 'u'
  },
  {
    kana: 'エ',
    romaji: 'e',
    combined: false,
    vowel: 'e'
  },
  {
    kana: 'オ',
    romaji: 'o',
    combined: false,
    vowel: 'o'
  },
  {
    kana: 'カ',
    romaji: 'ka',
    combined: false,
    vowel: 'a',
    consonant: 'k'
  },
  {
    kana: 'キ',
    romaji: 'ki',
    combined: false,
    vowel: 'i',
    consonant: 'k'
  },
  {
    kana: 'ク',
    romaji: 'ku',
    combined: false,
    vowel: 'u',
    consonant: 'k'
  },
  {
    kana: 'ケ',
    romaji: 'ke',
    combined: false,
    vowel: 'e',
    consonant: 'k'
  },
  {
    kana: 'コ',
    romaji: 'ko',
    combined: false,
    vowel: 'o',
    consonant: 'k'
  },
  {
    kana: 'サ',
    romaji: 'sa',
    combined: false,
    vowel: 'a',
    consonant: 's'
  },
  {
    kana: 'シ',
    romaji: 'shi',
    combined: false,
    vowel: 'i',
    consonant: 's'
  },
  {
    kana: 'ス',
    romaji: 'su',
    combined: false,
    vowel: 'u',
    consonant: 's'
  },
  {
    kana: 'セ',
    romaji: 'se',
    combined: false,
    vowel: 'e',
    consonant: 's'
  },
  {
    kana: 'ソ',
    romaji: 'so',
    combined: false,
    vowel: 'o',
    consonant: 's'
  },
  {
    kana: 'ザ',
    romaji: 'za',
    combined: false,
    vowel: 'a',
    consonant: 'z'
  },
  {
    kana: 'ジ',
    romaji: 'ji',
    combined: false,
    vowel: 'i',
    consonant: 'z'
  },
  {
    kana: 'ズ',
    romaji: 'zu',
    combined: false,
    vowel: 'u',
    consonant: 'z'
  },
  {
    kana: 'ゼ',
    romaji: 'ze',
    combined: false,
    vowel: 'e',
    consonant: 'z'
  },
  {
    kana: 'ゾ',
    romaji: 'zo',
    combined: false,
    vowel: 'o',
    consonant: 'z'
  },
  {
    kana: 'タ',
    romaji: 'ta',
    combined: false,
    vowel: 'a',
    consonant: 't'
  },
  {
    kana: 'チ',
    romaji: 'chi',
    combined: false,
    vowel: 'i',
    consonant: 't'
  },
  {
    kana: 'ツ',
    romaji: 'tsu',
    combined: false,
    vowel: 'u',
    consonant: 't'
  },
  {
    kana: 'テ',
    romaji: 'te',
    combined: false,
    vowel: 'e',
    consonant: 't'
  },
  {
    kana: 'ト',
    romaji: 'to',
    combined: false,
    vowel: 'o',
    consonant: 't'
  },
  {
    kana: 'ダ',
    romaji: 'da',
    combined: false,
    vowel: 'a',
    consonant: 'd'
  },
  {
    kana: 'ヂ',
    romaji: 'ji',
    combined: false,
    vowel: 'i',
    consonant: 'd'
  },
  {
    kana: 'ヅ',
    romaji: 'zu',
    combined: false,
    vowel: 'u',
    consonant: 'd'
  },
  {
    kana: 'デ',
    romaji: 'de',
    combined: false,
    vowel: 'e',
    consonant: 'd'
  },
  {
    kana: 'ド',
    romaji: 'do',
    combined: false,
    vowel: 'o',
    consonant: 'd'
  },
  {
    kana: 'ナ',
    romaji: 'na',
    combined: false,
    vowel: 'a',
    consonant: 'n'
  },
  {
    kana: 'ニ',
    romaji: 'ni',
    combined: false,
    vowel: 'i',
    consonant: 'n'
  },
  {
    kana: 'ヌ',
    romaji: 'nu',
    combined: false,
    vowel: 'u',
    consonant: 'n'
  },
  {
    kana: 'ネ',
    romaji: 'ne',
    combined: false,
    vowel: 'e',
    consonant: 'n'
  },
  {
    kana: 'ノ',
    romaji: 'no',
    combined: false,
    vowel: 'o',
    consonant: 'n'
  },
  {
    kana: 'ハ',
    romaji: 'ha',
    combined: false,
    vowel: 'a',
    consonant: 'h'
  },
  {
    kana: 'ヒ',
    romaji: 'hi',
    combined: false,
    vowel: 'i',
    consonant: 'h'
  },
  {
    kana: 'フ',
    romaji: 'fu',
    combined: false,
    vowel: 'u',
    consonant: 'h'
  },
  {
    kana: 'ヘ',
    romaji: 'he',
    combined: false,
    vowel: 'e',
    consonant: 'h'
  },
  {
    kana: 'ホ',
    romaji: 'ho',
    combined: false,
    vowel: 'o',
    consonant: 'h'
  },
  {
    kana: 'バ',
    romaji: 'ba',
    combined: false,
    vowel: 'a',
    consonant: 'b'
  },
  {
    kana: 'ビ',
    romaji: 'bi',
    combined: false,
    vowel: 'i',
    consonant: 'b'
  },
  {
    kana: 'ブ',
    romaji: 'bu',
    combined: false,
    vowel: 'u',
    consonant: 'b'
  },
  {
    kana: 'ベ',
    romaji: 'be',
    combined: false,
    vowel: 'e',
    consonant: 'b'
  },
  {
    kana: 'ボ',
    romaji: 'bo',
    combined: false,
    vowel: 'o',
    consonant: 'b'
  },
  {
    kana: 'パ',
    romaji: 'pa',
    combined: false,
    vowel: 'a',
    consonant: 'p'
  },
  {
    kana: 'ピ',
    romaji: 'pi',
    combined: false,
    vowel: 'i',
    consonant: 'p'
  },
  {
    kana: 'プ',
    romaji: 'pu',
    combined: false,
    vowel: 'u',
    consonant: 'p'
  },
  {
    kana: 'ペ',
    romaji: 'pe',
    combined: false,
    vowel: 'e',
    consonant: 'p'
  },
  {
    kana: 'ポ',
    romaji: 'po',
    combined: false,
    vowel: 'o',
    consonant: 'p'
  },
  {
    kana: 'マ',
    romaji: 'ma',
    combined: false,
    vowel: 'a',
    consonant: 'm'
  },
  {
    kana: 'ミ',
    romaji: 'mi',
    combined: false,
    vowel: 'i',
    consonant: 'm'
  },
  {
    kana: 'ム',
    romaji: 'mu',
    combined: false,
    vowel: 'u',
    consonant: 'm'
  },
  {
    kana: 'メ',
    romaji: 'me',
    combined: false,
    vowel: 'e',
    consonant: 'm'
  },
  {
    kana: 'モ',
    romaji: 'mo',
    combined: false,
    vowel: 'o',
    consonant: 'm'
  },
  {
    kana: 'ヤ',
    romaji: 'ya',
    combined: false,
    vowel: 'a',
    consonant: 'y'
  },
  {
    kana: 'ユ',
    romaji: 'yu',
    combined: false,
    vowel: 'u',
    consonant: 'y'
  },
  {
    kana: 'ヨ',
    romaji: 'yo',
    combined: false,
    vowel: 'o',
    consonant: 'y'
  },
  {
    kana: 'ラ',
    romaji: 'ra',
    combined: false,
    vowel: 'a',
    consonant: 'r'
  },
  {
    kana: 'リ',
    romaji: 'ri',
    combined: false,
    vowel: 'i',
    consonant: 'r'
  },
  {
    kana: 'ル',
    romaji: 'ru',
    combined: false,
    vowel: 'u',
    consonant: 'r'
  },
  {
    kana: 'レ',
    romaji: 're',
    combined: false,
    vowel: 'e',
    consonant: 'r'
  },
  {
    kana: 'ロ',
    romaji: 'ro',
    combined: false,
    vowel: 'o',
    consonant: 'r'
  },
  {
    kana: 'ワ',
    romaji: 'wa',
    combined: false,
    vowel: 'a',
    consonant: 'w'
  },
  {
    kana: 'ヲ',
    romaji: 'wo',
    combined: false,
    vowel: 'o',
    consonant: 'w'
  },
  {
    kana: 'ン',
    romaji: 'n',
    combined: false,
    consonant: 'n'
  }
])

export function kanaTableCols(kanaTable: Array<KanaItem>) {
  const vowels = new Array()
  kanaTable.forEach((kana) => {
    if (kana.vowel && !vowels.includes(kana.vowel)) {
      vowels.push(kana.vowel)
    }
  })
  return vowels
}

export function kanaTableRows(kanaTable: Array<KanaItem>) {
  const consonants = new Array()
  kanaTable.forEach((kana) => {
    if (kana.consonant && !consonants.includes(kana.consonant)) {
      consonants.push(kana.consonant)
    }
  })
  return consonants
}
