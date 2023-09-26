import React from "react"

import { Link } from "gatsby"
import { isNil } from "lodash"

import type { UseSiteMetaDataReturnType } from "~/src/hooks/useSiteMetadata"

import type { UseMenuReturnType } from "./useMenu"

const ROOT = "/"
const EXTERNAL_LINK_EXP =
  /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w-]*)?(\?[^\s]*)?/gi

interface LinkListProps extends Pick<UseMenuReturnType, "setToggle"> {
  links: UseSiteMetaDataReturnType["menuLinks"]
}

const LinkList: React.FC<LinkListProps> = ({ links, setToggle }) => {
  const generateLink = (props: Queries.SiteSiteMetadataMenuLinks | null) => {
    if (isNil(props)) {
      return
    }

    const { link, name } = props
    const safeLink = isNil(link) ? "" : link
    const isExternalLink = EXTERNAL_LINK_EXP.test(safeLink)
    console.log({ name, link, safeLink })
    if (safeLink === ROOT) {
      console.log("1111")
      return (
        <li key={name}>
          <Link to={safeLink} onClick={() => setToggle(false)}>
            {name}
          </Link>
        </li>
      )
    }
    if (isExternalLink) {
      console.log("2222")

      return (
        <li key={name}>
          <a target="_blank" rel="noopener noreferrer" href={safeLink}>
            {name}
          </a>
        </li>
      )
    }
    console.log("33333333333")
    return (
      <li key={name}>
        <Link to={safeLink}>{name}</Link>
      </li>
    )
  }

  return <>{links?.map(generateLink)}</>
}

export default LinkList
