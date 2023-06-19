export const stringNullCheck = (input: string | null): boolean => {
  if (input === null) return false
  if (input === undefined) return false
  if (input.length === 0) return false
  if (input.startsWith('default')) return false
  else return true
}
