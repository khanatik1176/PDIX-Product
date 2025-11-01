'use client';
import React, { useEffect, useRef, useState } from 'react';
import AvatarMenu from '@/components/AvatarMenu';
import { Bell, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SearchHeaderProps } from '@/types/Global.types';
import NotificationPanel from '@/components/NotificationPanel';

const SearchHeaderComponent: React.FC<SearchHeaderProps> = ({ title, userData }) => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  // sample / placeholder notifications - replace with real data when available
  const notifications = [
    { id: '1', title: 'New comment on your note', body: 'Nice work!', date: '2h ago', unread: true },
    { id: '2', title: 'File processed', body: 'Your upload is ready', date: '1d ago' },
  ];

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const el = containerRef.current;
      if (!el.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className="flex items-center justify-between py-4 pb-6 lg:pt-2">
      <div className="flex items-center">
        <button
          type="button"
          aria-label="Go back"
          onClick={() => router.back()}
          className="mr-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#CE7411] text-white hover:bg-[#b55f0d] focus:outline-none focus:ring-2 focus:ring-[#CE7411]/50 focus:ring-offset-2"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <h1 className="truncate text-base font-semibold leading-tight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {title}
        </h1>
      </div>

      <div ref={containerRef} className="relative hidden items-center gap-4 pr-2 md:flex">
        <button
          type="button"
          aria-haspopup="dialog"
          aria-label="Notifications"
          onClick={() => setOpen((s) => !s)}
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none"
        >
          <Bell className="h-5 w-5 cursor-pointer text-black" />
          {/* small unread dot */}
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* panel positioned under the bell, right-aligned */}
        {open && (
          <div className="absolute right-0 top-full mt-2 z-50">
            <NotificationPanel notifications={notifications} onClose={() => setOpen(false)} />
          </div>
        )}

        <AvatarMenu userData={userData} />
      </div>
    </div>
  );
};

export default SearchHeaderComponent;