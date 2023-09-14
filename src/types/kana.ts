export interface YomiReading {
  kana: string
  romaji: string
}

interface KanaCategory {
  combined: boolean
  vowel?: string
  consonant?: string
}

export interface KanaItem extends YomiReading, KanaCategory {}
export interface KanaTable extends Array<KanaItem> {}
