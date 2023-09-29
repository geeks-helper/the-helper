/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: "The Helper",
  description: `Helpers tools`,
  author: "Fadi O. Ghali",
  siteUrl: "https://geeks-helper.github.io/",
  lang: "en",
  utterances: "geeks-helper/the-helper",

  links: {
    github: "https://github.com/geeks-helper/the-helper",
  },
  favicon: "src/images/icon.png",
}

// eslint-disable-next-line no-undef
module.exports = metaConfig
