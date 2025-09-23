'use client';

import {
  BookOpen,
  Bookmark,
  House,
  LibraryBig,
} from 'lucide-react';


import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { TeamSwitcher } from './team-switcher';
import { NavMain } from './nav-main';

import SidebarLogo from '../public/logo/SidebarLogo.svg';

const defaultData = {
  user: {
    name: 'Khan Atik Faisal',
    email: '',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Scribbbleer',
      logo: SidebarLogo,
      plan: 'User',
    },
  ],
  navMain: [
    {
      title: 'Home',
      url: '/home',
      icon: House,
      isActive: true,
    },
    // {
    //   title: 'Draft',
    //   url: '/draft',
    //   icon: NotepadTextDashed,
    // },
    {
      title: 'Library',
      url: '/library',
      icon: LibraryBig, 
    },
    {
      title: 'Saved',
      url: '/saved',
      icon: Bookmark,
    },
    {
      title: 'My notes',
      url: '/my-notes',
      icon: BookOpen,
    },
    // {
    //   title: 'Community',
    //   url: '/community',
    //   icon: Earth,
    // },
    // {
    //   title: 'Bin',
    //   url: '/bin',
    //   icon: Trash2,
    // },
  ],
};

const isScreenBelowMd = () => {
  return window.matchMedia('(max-width: 768px)').matches;
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const { toggleSidebar } = useSidebar();
  // console.log("🚀 ~ AppSidebar ~ toggleSidebar:", toggleSidebar)

  useEffect(() => {
    const savedSelectedItem = localStorage.getItem('selectedItem');
    if (savedSelectedItem) {
      setSelectedItem(savedSelectedItem);
    } else {
      setSelectedItem('Dashboard');
    }
  }, []);

  useEffect(() => {
    const matchedItem = defaultData.navMain.find(item => pathname.startsWith(item.url));
    if (matchedItem) {
      setSelectedItem(matchedItem.title);
    }
  }, [pathname]);

  const handleItemClick = (title: string) => {
    setSelectedItem(title);
    localStorage.setItem('selectedItem', title);
    if (isScreenBelowMd()) {
      toggleSidebar();
    }
  };

  const userData = {
    name:defaultData.user.name,
    email:defaultData.user.email,
    avatar: defaultData.user.avatar,
  };

  const data = {
    ...defaultData,
    user: userData,
  };

  return (
    <Sidebar side='left' variant='sidebar' collapsible='icon' {...props} className='border-none'>
      <SidebarHeader className='bg-[#F1F5F9]'>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className='bg-[#F1F5F9]'>
        <NavMain items={data.navMain} selectedItem={selectedItem} onItemClick={handleItemClick} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}