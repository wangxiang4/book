import logic from '../dictionary/pages/logic.json'
import math from '../dictionary/pages/math.json'
import en from '../dictionary/pages/en.json'
import writing from '../dictionary/pages/writing.json'
import materials from '../dictionary/pages/materials.json'
import concurrent from '../dictionary/pages/concurrent.json'
import spring from '../dictionary/pages/spring.json'


function getMathSideBar() {
  return Object.values(math as Item[]).map((item) => mapPrefix(item, '/math'))
}

function getLogicSidebar() {
  return Object.values(logic as Item[]).map((item) => mapPrefix(item, "/logic"))
}

function getEnSideBar() {
  return Object.values(en as Item[]).map((item) => mapPrefix(item, '/en'))
}

function getWritingSideBar() {
  return Object.values(writing as Item[]).map((item) => mapPrefix(item, '/writing'))
}

function getMaterialsSideBar() {
  return Object.values(materials as Item[]).map((item) => mapPrefix(item, '/materials'))
}

function getConcurrentSideBar() {
  return Object.values(concurrent as Item[]).map((item) => mapPrefix(item, '/concurrent'))
}

function getSpringSideBar() {
  return Object.values(spring as Item[]).map((item) => mapPrefix(item, '/spring'))
}

const getSidebars = () => {
  return {
    'logic': getLogicSidebar(),
    'math': getMathSideBar(),
    'en': getEnSideBar(),
    'writing': getWritingSideBar(),
    'materials': getMaterialsSideBar(),
    'concurrent': getConcurrentSideBar(),
    'spring': getSpringSideBar(),
  }
}

type Item = {
  text?: string
  children?: Item[]
  link?: string
}

function mapPrefix(item: Item, prefix = '') {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      children: item.children.map((child) => mapPrefix(child, prefix)),
    }
  }
  return {
    ...item,
    link: `${prefix}${item.link}`,
  }
}

export const sidebars = getSidebars()
