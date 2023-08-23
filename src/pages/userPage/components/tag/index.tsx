import { theme as T } from '@/ui/theme'
import { TagInternal } from '@/ui/styles'

export const Tag = ({ tagName }: any) => {
  const match = tagName !== null && T.colors[tagName]

  const content = match ? tagName : 'sorry  👎'
  const bg = match ? T.colors[tagName].bg : T.colors.noLanguage.bg
  const border = match ? T.colors[tagName].border : T.colors.noLanguage.border
  return (
    <TagInternal bg={bg} border={border}>
      {content}
    </TagInternal>
  )
}
