'use client'

import Image from 'next/image'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '~/components/ui/menubar'
import {themes} from '~/constants'
import {useTheme} from '~/context/ThemeProvider'

export default function Theme() {
  const {mode, setMode} = useTheme()

  return (
    <Menubar className='relative border-none bg-transparent shadow-none'>
      <MenubarMenu>
        <MenubarTrigger className='focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200'>
          {mode === 'light' ? (
            <Image
              src='assets/icons/sun.svg'
              alt='sun'
              className='active-theme'
              height={20}
              width={20}
            />
          ) : (
            <Image
              src='assets/icons/moon.svg'
              alt='moon'
              className='active-theme'
              height={20}
              width={20}
            />
          )}
        </MenubarTrigger>

        <MenubarContent className='absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300'>
          {themes.map((theme) => (
            <MenubarItem
              key={theme.value}
              className='flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400'
              onClick={() => {
                setMode(theme.value)

                if (theme.value !== 'system') {
                  localStorage.theme = theme.value
                } else {
                  localStorage.removeItem('theme')
                }
              }}
            >
              <Image
                src={theme.icon}
                alt={theme.label}
                width={16}
                height={16}
                className={`${mode === theme.value && 'active-theme'}`}
              />
              <p
                className={`font-semibold text-light-500 ${
                  mode === theme.value
                    ? 'text-primary-500'
                    : 'text-dark100_light900'
                }`}
              >
                {theme.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
