import { type YomiReading } from './kana'

interface KanjiExample {
  kanji: string
  romaji: string
  translation: string
}

export interface KanjiItem {
  id: number
  kanji: string
  kunyomi?: Array<YomiReading>
  onyomi?: Array<YomiReading>
  translation: string
  examples: Array<KanjiExample>
}

export type KanjiList = Array<KanjiItem>
