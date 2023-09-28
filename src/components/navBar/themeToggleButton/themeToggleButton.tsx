import React, { useContext } from "react"

import { DARK } from "~/src/constants/theme"
import type { UseThemeReturnType } from "~/src/hooks/useTheme"
import ThemeContext from "~/src/stores/themeContext"

import * as S from "./style"
import ThemeIcon from "./themeIcon"

interface ThemeToggleButtonProps {
  themeToggler: UseThemeReturnType["themeToggler"]
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  themeToggler,
}) => {
  const theme = useContext(ThemeContext)
  const LABEL_TEXT = theme === DARK ? "Light theme" : "Dark theme"

  return (
    <S.Button onClick={themeToggler}>
      <S.ButtonBackground />
      <S.Content>
        <S.Icon version="1.1" x="0px" y="0px" viewBox="0 0 24 24">
          <ThemeIcon theme={theme} />
        </S.Icon>
        <S.Text>{LABEL_TEXT}</S.Text>
      </S.Content>
    </S.Button>
  )
}

export default ThemeToggleButton
