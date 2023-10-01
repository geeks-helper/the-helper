import React, { useState } from "react"

import Tree from "../../images/tree.jpeg"

import SelectDimensions from "./SelectDimensions"
import * as S from "./style"

const getRandomLightColor = (): string => {
  const randomColor: number = Math.floor(Math.random() * 360) // Generate a random hue value
  return `hsl(${randomColor}, 70%, 80%)` // Use HSL to ensure light backgrounds
}

const getRandomPosition = ({ width, height }): { x: number; y: number } => {
  // Generate random X and Y coordinates within the container's dimensions
  const x: number = Math.random() * (width - 40)
  const y: number = Math.random() * (height - 40)
  return { x, y }
}
// Calculate percentages based on the container's dimensions

const ClipPathGenerator = () => {
  const [dimensions, setDimensions] = useState({ width: 500, height: 600 })
  const [showBg, setShowBg] = useState(true)
  const [elements, setElements] = useState([
    {
      id: "element1",
      ...getRandomPosition({
        width: dimensions.width,
        height: dimensions.height,
      }),
      backgroundColor: getRandomLightColor(),
    },
    {
      id: "element2",
      ...getRandomPosition({
        width: dimensions.width,
        height: dimensions.height,
      }),
      backgroundColor: getRandomLightColor(),
    },
    {
      id: "element3",
      ...getRandomPosition({
        width: dimensions.width,
        height: dimensions.height,
      }),
      backgroundColor: getRandomLightColor(),
    },
    // Add more elements as needed
  ])

  // Function to calculate clip-path value
  const calculateClipPath = points => {
    if (points.length < 3) {
      return ""
    }

    const polygonPoints = points
      .map(point => {
        const xPercent = (point.x / dimensions.width) * 100
        const yPercent = (point.y / dimensions.height) * 100
        return `${xPercent.toFixed(2)}% ${yPercent.toFixed(2)}%`
      })
      .join(", ")

    return polygonPoints
  }

  const clipPathValue = calculateClipPath(elements)

  const handleMouseDown = (event, elementIndex) => {
    event.preventDefault()

    const element = elements[elementIndex]

    // Calculate the offset from the center of the circle
    const offsetX = event.clientX - element.x
    const offsetY = event.clientY - element.y

    const onMouseMove = event => {
      const updatedElements = [...elements]
      updatedElements[elementIndex] = {
        ...element,
        x: Math.min(
          Math.max(0, event.clientX - offsetX),
          dimensions.width - 10
        ),
        y: Math.min(
          Math.max(0, event.clientY - offsetY),
          dimensions.height - 10
        ),
      }
      setElements(updatedElements)
    }

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)
  }

  const handleAddCircle = () => {
    // Add a new circle element with random background color and position
    const newElement = {
      id: `element${elements.length + 1}`,
      ...getRandomPosition({
        width: dimensions.width,
        height: dimensions.height,
      }),
      backgroundColor: getRandomLightColor(),
    }

    setElements([...elements, newElement])
  }

  const handleRemoveCircle = elementIndex => {
    // Remove the circle element at the specified index
    const updatedElements = elements.filter(
      (_, index) => index !== elementIndex
    )
    setElements(updatedElements)
  }
  return (
    <div
      style={{
        border: "1px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <SelectDimensions
        setDimensions={setDimensions}
        width={dimensions.width}
        height={dimensions.height}
        setElements={setElements}
        showBg={showBg}
        setShowBg={setShowBg}
      />
      <S.Container
        width={dimensions.width}
        height={dimensions.height}
        img={showBg ? Tree : null}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "red",
            clipPath: ` polygon(${clipPathValue})`,
            backgroundImage: `url(${Tree})`,
          }}
        ></div>
        {elements.map((element, index) => (
          <S.DraggableCircle
            key={element.id}
            style={{
              left: element.x - 10 + "px",
              top: element.y - 10 + "px",
              backgroundColor: element.backgroundColor,
            }}
            onMouseDown={event => handleMouseDown(event, index)}
          >
            <S.CloseButton
              className="close-button"
              onClick={() => handleRemoveCircle(index)}
            >
              X
            </S.CloseButton>
          </S.DraggableCircle>
        ))}
      </S.Container>
      <S.ClipPathText>clip-path: polygon({clipPathValue})</S.ClipPathText>
      <S.ButtonContainer>
        <button onClick={handleAddCircle}>Add Circle</button>
      </S.ButtonContainer>
    </div>
  )
}

export default ClipPathGenerator
