import dict from '../dictionary/pages/sidebar.json'

// Mapping the first sub link to the nav link to avoid 404 error.
function getNav():{
  link: string
  text: string
  activeMatch: string
}[] {
  return dict.map((item) => ({
    ...item,
    link: item.link,
  }))
}

export const nav = getNav()
