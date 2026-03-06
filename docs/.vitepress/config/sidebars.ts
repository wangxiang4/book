import logic from '../dictionary/pages/logic.json'
import math from '../dictionary/pages/math.json'
import english from '../dictionary/pages/english.json'
import writing from '../dictionary/pages/writing.json'
import resources from '../dictionary/pages/resources.json'
import concurrent from '../dictionary/pages/java/concurrent.json'
import spring from '../dictionary/pages/java/spring.json'


function getMathSideBar() {
  return Object.values(math).map((item) => mapPrefix(item, '/math'))
}

function getLogicSidebar() {
  return Object.values(logic).map((item) => mapPrefix(item, "/logic"))
}

function getEnglishSideBar() {
  return Object.values(english).map((item) => mapPrefix(item, '/english'))
}

function getWritingSideBar() {
  return Object.values(writing).map((item) => mapPrefix(item, '/writing'))
}

function getResourcesSideBar() {
  return Object.values(resources).map((item) => mapPrefix(item, '/resources'))
}

function getConcurrentSideBar() {
  return Object.values(concurrent).map((item) => mapPrefix(item, '/java/concurrent'))
}

function getSpringSideBar() {
  return Object.values(spring).map((item) => mapPrefix(item, '/java/spring'))
}

const getSidebars = () => {
  return {
    'logic': getLogicSidebar(),
    'math': getMathSideBar(),
    'english': getEnglishSideBar(),
    'writing': getWritingSideBar(),
    'resources': getResourcesSideBar(),
    'java/concurrent': getConcurrentSideBar(),
    'java/spring': getSpringSideBar(),
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
