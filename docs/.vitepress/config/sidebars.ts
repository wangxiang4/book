import logic from '../i18n/pages/logic.json'
import math from '../i18n/pages/math.json'
import english from '../i18n/pages/english.json'
import writing from '../i18n/pages/writing.json'
import resources from '../i18n/pages/resources.json'
import spring from '../i18n/pages/java/spring.json'
import javaConcurrentProgramming from '../i18n/pages/java/java-concurrent-programming.json'

function getMathSideBar() {
  return Object.fromEntries(
    Object.entries(math).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/math')),
    ])
  )
}

function getLogicSidebar() {
  return Object.fromEntries(
    Object.entries(logic).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, "/logic")),
    ])
  )
}

function getEnglishSideBar() {
  return Object.fromEntries(
    Object.entries(english).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/english')),
    ])
  )
}

function getWritingSideBar() {
  return Object.fromEntries(
    Object.entries(writing).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/writing')),
    ])
  )
}

function getResourcesSideBar() {
  return Object.fromEntries(
    Object.entries(resources).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/resources')),
    ])
  )
}

function getJavaConcurrentProgrammingSideBar() {
  return Object.fromEntries(
    Object.entries(javaConcurrentProgramming).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/java/1 Java Concurrent Programming')),
    ])
  )
}

function getSpringSideBar() {
  return Object.fromEntries(
    Object.entries(spring).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/java/2 Spring')),
    ])
  )
}

// return sidebar with language configs.
// this might create duplicated data, but the overhead is ignorable
const getSidebars = () => {
  return {
    '/logic/': getLogicSidebar(),
    '/math/': getMathSideBar(),
    '/english/': getEnglishSideBar(),
    '/writing/': getWritingSideBar(),
    '/resources/': getResourcesSideBar(),
    '/java/1 Java Concurrent Programming/': getJavaConcurrentProgrammingSideBar(),
    '/java/2 Spring/': getSpringSideBar(),
  }
}

type Item = {
  text?: string
  children?: Item[]
  link?: string
}

function mapPrefix(item: Item, lang: string, prefix = '') {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      children: item.children.map((child) => mapPrefix(child, lang, prefix)),
    }
  }
  return {
    ...item,
    link: `${prefix}${item.link}`,
  }
}

export const sidebars = getSidebars()
