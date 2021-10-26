import { createContext, useContext } from 'react'
import { Theme } from '../themes/index'
import lightTheme from '../themes/light'

export type ThemeSwitchContextType = [
    getTheme: () => Theme,
    theme: Theme,
    setTheme: (Theme) => void
]

const ThemeSwitchContext = createContext<ThemeSwitchContextType>([() => null, lightTheme, () => null])
export const useThemeSwitch = () => useContext(ThemeSwitchContext)
export default ThemeSwitchContext