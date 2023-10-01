import React, { type ChangeEvent } from "react"

import * as S from "../style"

interface Element {
  x: number
  y: number
  // Add any other properties that elements have here
}

interface SelectDimensionsProps {
  width: number
  height: number
  setDimensions: (dimensions: { width: number; height: number }) => void
  setElements: any
  setShowBg: any
  showBg: boolean
}

const SelectDimensions: React.FC<SelectDimensionsProps> = ({
  width,
  height,
  setDimensions,
  setElements,
  setShowBg,
  showBg,
}) => {
  const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newWidth = parseInt(e.target.value, 10)
    setDimensions({ width: newWidth, height })

    setElements((old: Element[]) =>
      old.map((element: Element) => ({
        ...element,
        x: (element.x / width) * newWidth,
      }))
    )
  }

  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newHeight = parseInt(e.target.value, 10)
    setDimensions({ width, height: newHeight })

    setElements((old: Element[]) =>
      old.map((element: Element) => ({
        ...element,
        y: (element.y / height) * newHeight,
      }))
    )
  }

  return (
    <>
      <S.SwitchWrapper>
        <b>Show outside clip-path</b>
        <S.Switch className="switch" htmlFor="switchBg">
          <S.SwitchInput
            type="checkbox"
            id="switchBg"
            onChange={e => {
              setShowBg(e.target.checked)
            }}
            checked={showBg}
          />
          <S.SwitchSpan className="slider round"></S.SwitchSpan>
        </S.Switch>
      </S.SwitchWrapper>
      <S.SelectDimensionsWrapper>
        <label htmlFor="positiveNumber">Demo Size</label>
        <S.NumberInput
          type="number"
          id="positiveNumber"
          name="positiveNumber"
          min="100"
          max="500"
          value={width}
          onChange={handleWidthChange}
          required
        />
        x
        <S.NumberInput
          type="number"
          id="positiveNumber2"
          name="positiveNumber2"
          min="100"
          max="600"
          value={height}
          onChange={handleHeightChange}
          required
        />
      </S.SelectDimensionsWrapper>
    </>
  )
}

export default SelectDimensions
