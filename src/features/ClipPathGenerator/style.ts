import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  width: ${({ width }) => `${width || 500}px`};
  height: ${({ height }) => `${height || 600}px`};
  border: 1px solid #ccc;
  overflow: hidden;
  padding: 10px;
  background-image: ${({ img }) => `
  linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url(${img})`};
`

export const DraggableCircle = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;

  /* Hide the close button by default */
  .close-button {
    display: none;
  }

  /* Show the close button on hover */
  &:hover .close-button {
    display: block;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  /* top: -15px; */
  /* right: -15px; */
  width: 14px;
  height: 14px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 8px;
  padding: 0;
`

export const ClipPathText = styled.div`
  margin-top: 10px;
  font-size: 14px;
`

export const ButtonContainer = styled.div`
  margin-top: 10px;
`

export const SelectDimensionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 24px 0;
`

export const NumberInput = styled.input`
  height: 42px;
  display: inline-block;
  font: inherit;
  position: relative;
  text-align: center;

  min-width: 2rem;
  padding: 0.5rem 0.25rem;
  border-radius: 2rem;
  box-shadow: inset 0 0.125rem #d3d0c9, inset -0.125rem 0 #d3d0c9,
    inset 0 -0.125rem #d3d0c9;
  cursor: pointer;
  -webkit-transition: background 0.25s;
  transition: background 0.25s;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  font-family: inherit;
  font-size: 1.1rem;
  border-radius: 2rem;
  box-shadow: inset 0 0 0 0.125rem #d3d0c9;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  box-shadow: inset 0 0.125rem #d3d0c9, inset 0.125rem 0 #d3d0c9,
    inset -0.125rem 0 #d3d0c9, inset 0 -0.125rem #d3d0c9;
  :hover {
    background: #d3d0c9;
    -webkit-transition: background 0;
    transition: background 0;
  }
  :focus {
    background: #100a09;
    z-index: 100;
    color: #d3d0c9;
    outline: 0;
    box-shadow: inset 0 0 0 0.125rem #100a09, 0 0 0 0.125rem #100a09;
  }
`

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`
export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  :checked + .slider {
    background-color: #2196f3;
  }
  :focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  :checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`

export const SwitchSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  :before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`

export const SwitchWrapper = styled.div`
  width: 100%;
  margin: 24px 0;
  justify-content: space-around;
  display: flex;
  align-items: center;
`
