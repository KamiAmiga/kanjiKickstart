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
export type KanaTable = Array<KanaItem>
