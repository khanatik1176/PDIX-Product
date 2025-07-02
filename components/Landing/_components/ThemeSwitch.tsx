import * as React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeSwitchProps {
  isDarkMode: boolean;
  toggleMode: () => void;
}

export function ThemeSwitch({ isDarkMode, toggleMode }: ThemeSwitchProps) {
  return (
    <div className='flex items-center'>
      <div className='relative h-10 w-[88px] rounded-md border-2 border-secondary'>
        {/* Highlighted rectangle */}
        <div
          className={`pointer-events-none absolute left-2 top-2 z-50 h-6 w-6 rounded-md bg-secondary transition-transform duration-300`}
          style={{
            transform: isDarkMode ? 'translateX(44px)' : 'translateX(0px)',
          }}
        >
          {/* White border on left for light, right for dark */}
          <div
            className={`absolute top-[2px] z-[100] ${isDarkMode ? 'right-1 rounded-r-md border-r-2 border-black' : 'left-1 rounded-l-md border-l-2 border-white'} h-5 w-1`}
          />
        </div>
        {/* Switch content */}
        <button
          aria-label='Toggle theme'
          onClick={toggleMode}
          className='bg-background relative flex h-full w-full items-center justify-between rounded-md px-2 transition-colors'
          style={{ zIndex: 2 }}
        >
          <span className='flex h-6 w-6 items-center justify-center'>
            <Moon
              size={20}
              className={`transition-colors ${
                !isDarkMode ? 'text-white' : 'text-muted-foreground'
              }`}
            />
          </span>
          <span className='flex h-6 w-6 items-center justify-center'>
            <Sun
              size={20}
              className={`transition-colors ${
                isDarkMode ? 'text-white' : 'text-muted-foreground'
              }`}
            />
          </span>
        </button>
      </div>
    </div>
  );
}
