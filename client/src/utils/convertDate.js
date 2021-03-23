export const dateFirst = (birthdate) => {
  const date = new Date(birthdate)
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${dd}/${mm}/${yyyy}`
}

export const yearFirst = (birthdate) => {
  const dd = String(birthdate.getDate()).padStart(2, '0')
  const mm = String(birthdate.getMonth() + 1).padStart(2, '0')
  const yyyy = birthdate.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}
