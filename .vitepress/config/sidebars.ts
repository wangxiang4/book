import logic from '../dictionary/pages/logic.json'
import math from '../dictionary/pages/math.json'
import en from '../dictionary/pages/en.json'
import writing from '../dictionary/pages/writing.json'
import resources from '../dictionary/pages/resources.json'
import concurrent from '../dictionary/pages/concurrent.json'
import spring from '../dictionary/pages/spring.json'


function getMathSideBar() {
  return Object.values(math).map((item) => mapPrefix(item, '/math'))
}

function getLogicSidebar() {
  return Object.values(logic).map((item) => mapPrefix(item, "/logic"))
}

function getEnSideBar() {
  return Object.values(en).map((item) => mapPrefix(item, '/en'))
}

function getWritingSideBar() {
  return Object.values(writing).map((item) => mapPrefix(item, '/writing'))
}

function getResourcesSideBar() {
  return Object.values(resources).map((item) => mapPrefix(item, '/resources'))
}

function getConcurrentSideBar() {
  return Object.values(concurrent).map((item) => mapPrefix(item, '/concurrent'))
}

function getSpringSideBar() {
  return Object.values(spring).map((item) => mapPrefix(item, '/spring'))
}

const getSidebars = () => {
  return {
    'logic': getLogicSidebar(),
    'math': getMathSideBar(),
    'en': getEnSideBar(),
    'writing': getWritingSideBar(),
    'resources': getResourcesSideBar(),
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
