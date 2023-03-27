import { useEffect, useState, ChangeEvent } from 'react'
const THEME_DARK = 'dark'
const THEME_LIGHT = 'light'
const DARK_MODE =
  'invert(90%) hue-rotate(180deg) contrast(0.9) brightness(0.96)'
  
const Theme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  useEffect(() => {
    const root = document.documentElement
    if (theme === THEME_DARK) {
      root.style.filter = DARK_MODE
    } else {
      root.style.filter = ''
    }
  }, [theme])
  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setTheme(target.value as 'light' | 'dark')
  }
  return (
    <div>
      Theme:
      <input
        type='radio'
        id={THEME_DARK}
        value={THEME_DARK}
        name='theme'
        checked={theme === THEME_DARK}
        onChange={handlerChange}
      />
      dark
      <input
        type='radio'
        id={THEME_LIGHT}
        value={THEME_LIGHT}
        name='theme'
        checked={theme === THEME_LIGHT}
        onChange={handlerChange}
      />
      light
    </div>
  )
}
export default Theme
