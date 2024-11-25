'use client'

import {ThemeProvider as NextThemeProvider} from 'next-themes'
import {ComponentProps} from 'react'

type ThemeProviderProps = ComponentProps<typeof NextThemeProvider>

function ThemeProvider({children, ...props}: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}

export default ThemeProvider
