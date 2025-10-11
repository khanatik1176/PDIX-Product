'use client';
import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import PageHeader from '@/components/PageHeader';
import PageHeading from '@/components/pageHeading';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';
import { UserDetails } from '@/contexts/UserContext';
import { Avatar } from '@/components/ui/avatar';
import { Mail, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const dummyUser = {
  full_name: 'John Doe',
  email: 'john.doe@email.com',
  joined: '2023-01-15',
  uploadedDocs: 12,
  educationLevel: 'Masters',
  phone: '+1 555-123-4567',
  location: 'San Francisco, CA, USA',
  department: 'Product Management',
  avatar: '',
  provider: 'email', // or 'google'
  providerEmail: 'john.doe@email.com',
};

const getInitials = (name: string) => {
  if (!name) return 'U';
  const parts = name.split(' ');
  return parts.length === 1
    ? parts[0][0].toUpperCase()
    : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Profile = () => {
  const { userData } = UserDetails() || {};
  const identity = userData?.identities?.[0]?.identity_data || dummyUser;
  const provider = userData?.identities?.[0]?.provider || dummyUser.provider;
  const providerEmail = userData?.email || dummyUser.providerEmail;

  // Handlers for edit and delete
  const handleEditProfile = () => {
    alert('Edit Profile functionality coming soon!');
  };
  const handleDeleteProfile = () => {
    if (
      window.confirm(
        'Are you sure you want to delete your profile? This action cannot be undone.'
      )
    ) {
      alert('Delete Profile functionality coming soon!');
    }
  };

  return (
    <div>
      <PageHeader title="Profile • Scribbbleer" />
      <BreadcrumbWithAvatar
        initialData="Profile"
        initialLink="/profile"
        userData={userData}
      />
      <div className="px-3 sm:px-4 md:px-8 lg:px-6 xl:px-6">
        <PageHeading title="Profile" className="pl-2 pt-3" />
        <div className="flex flex-col gap-8 items-center py-6 w-full">
          {/* Profile Image and Name */}
          <div className="w-full max-w-[380px] sm:max-w-full rounded-xl bg-white p-6 shadow-md flex flex-col items-center gap-4">
            <Avatar className="h-32 w-32 text-5xl border-4 border-white shadow-lg bg-gray-100 overflow-hidden">
              {identity.avatar ? (
                <Image
                  src={identity.avatar}
                  alt="Avatar"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="flex items-center justify-center w-full h-full rounded-full bg-primary text-white text-5xl font-bold">
                  {getInitials(identity.full_name)}
                </span>
              )}
            </Avatar>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-black text-center">{identity.full_name}</h2>
            <div className="flex gap-4 mt-2">
              <Button className="bg-primary px-6" onClick={handleEditProfile}>Edit Profile</Button>
              <Button variant="destructive" className="px-6" onClick={handleDeleteProfile}>Delete Profile</Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="w-full max-w-[380px] sm:max-w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white p-6 shadow flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">{identity.uploadedDocs ?? dummyUser.uploadedDocs}</span>
              <span className="text-sm text-gray-500 mt-1">Uploaded Documents</span>
            </div>
            <div className="rounded-xl bg-white p-6 shadow flex flex-col items-center">
              <GraduationCap className="h-6 w-6 text-primary mb-1" />
              <span className="text-xl font-bold text-primary">{identity.educationLevel ?? dummyUser.educationLevel}</span>
              <span className="text-sm text-gray-500 mt-1">Education Level</span>
            </div>
            <div className="rounded-xl bg-white p-6 shadow flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">
                {identity.joined
                  ? new Date(identity.joined).getFullYear()
                  : new Date(dummyUser.joined).getFullYear()}
              </span>
              <span className="text-sm text-gray-500 mt-1">Member Since</span>
            </div>
          </div>

          {/* Security and 2FA Section Side by Side */}
          <div className="w-full max-w-[380px] sm:max-w-full flex flex-col sm:flex-row gap-4">
            {/* Security Section */}
            <div className="flex-1 rounded-xl bg-white p-6 shadow-md flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-black mb-2">Security</h3>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-medium text-gray-700">Logged in using:</span>
                {provider === 'google' ? (
                  <>
                    <Image
                      src="/google-logo.svg"
                      alt="Google"
                      width={20}
                      height={20}
                      className="inline-block"
                    />
                    <span className="text-gray-800 font-semibold">{providerEmail}</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-gray-800 font-semibold">{providerEmail}</span>
                  </>
                )}
              </div>
              {provider === 'email' && (
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-gray-700">Change Password</label>
                  <Input type="password" placeholder="Current Password" className="w-full" />
                  <Input type="password" placeholder="New Password" className="w-full" />
                  <Input type="password" placeholder="Confirm New Password" className="w-full" />
                  <Button className="w-full bg-primary mt-2">Update Password</Button>
                </div>
              )}
            </div>
            {/* Two-Factor Authentication Section */}
            <div className="flex-1 rounded-xl bg-white p-6 shadow-md flex flex-col gap-3">
              <label className="text-lg font-semibold text-black mb-2">Two-Factor Authentication</label>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-sm text-gray-700">Enabled</span>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => alert('Two-Factor Authentication management coming soon!')}
              >
                Manage 2FA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;