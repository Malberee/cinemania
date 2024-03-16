export type PayloadCreatorProps = {
  type: 'popular' | 'byQuery' | 'queue' | 'watched'
  query?: string
}