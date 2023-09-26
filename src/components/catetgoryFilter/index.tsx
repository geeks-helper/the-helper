import React, { useMemo, useRef } from "react"

import { type GatsbyLinkProps } from "gatsby"
import kebabCase from "lodash/kebabCase"

import * as S from "./styles"
import useScrollCenter from "./useScrollCenter"

const ACTIVE = "active"
const ALL_CATEGORY_NAME = "All"

interface CategoryFilterProps {
  categoryList: readonly Queries.MarkdownRemarkGroupConnection[]
}

type LinkPropsGetter = GatsbyLinkProps<unknown>["getProps"]

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categoryList }) => {
  const categoryRef = useRef<HTMLUListElement>(null)
  const isActive: LinkPropsGetter = ({ isCurrent }) =>
    isCurrent ? { id: ACTIVE, tabIndex: -1 } : {}

  useScrollCenter({ ref: categoryRef, targetId: ACTIVE })

  const sortedCategoryList = useMemo(
    () => [...categoryList].sort((a, b) => b.totalCount - a.totalCount),
    [categoryList]
  )

  return (
    <S.Nav aria-label="Category Filter">
      <S.CategoryTitle>Category</S.CategoryTitle>
      <S.CategoryButton getProps={isActive} to="/">
        {ALL_CATEGORY_NAME}
      </S.CategoryButton>
      <S.Divider />
      <S.CategoryUl ref={categoryRef} className="invisible-scrollbar">
        {sortedCategoryList.map(category => {
          const { fieldValue } = category
          return (
            <li key={fieldValue}>
              <S.CategoryButton
                getProps={isActive}
                to={`/category/${kebabCase(fieldValue!)}/`}
              >
                {fieldValue}
              </S.CategoryButton>
            </li>
          )
        })}
      </S.CategoryUl>
    </S.Nav>
  )
}

export default CategoryFilter
