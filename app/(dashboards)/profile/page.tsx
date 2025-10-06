'use client';
import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import PageHeader from '@/components/PageHeader';
import PageHeading from '@/components/pageHeading';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';
import { UserDetails } from '@/contexts/UserContext';
import { Avatar } from '@/components/ui/avatar';

const dummyUser = {
  full_name: 'John Doe',
  email: 'john.doe@email.com',
  bio: 'Lifelong learner and passionate note-taker.',
  joined: '2023-01-15',
  uploadedDocs: 12,
  completedNotes: 34,
  phone: '+1 555-123-4567',
  location: 'San Francisco, CA, USA',
  department: 'Product Management',
  position: 'Senior Product Manager',
  avatar: '', // Optionally use a profile image
};

const Profile = () => {
  const { userData } = UserDetails() || {};
  const identity = userData?.identities?.[0]?.identity_data || dummyUser;

  // Handlers for edit and delete
  const handleEditProfile = () => {
    alert('Edit Profile functionality coming soon!');
  };
  const handleDeleteProfile = () => {
    if (window.confirm('Are you sure you want to delete your profile? This action cannot be undone.')) {
      alert('Delete Profile functionality coming soon!');
    }
  };

  return (
    <div>
      <PageHeader title="Profile • Scribbbleer" />
      <BreadcrumbWithAvatar initialData="Profile" initialLink="/profile" userData={userData} />
      <div className="px-3 sm:px-4 md:px-8 lg:px-6 xl:px-6">
        <PageHeading title="Profile" className="pl-2 pt-3" />
        <div className="flex flex-col gap-8 items-center py-6 w-full">
          {/* Profile Image and Name */}
          <div className="w-full max-w-[380px] sm:max-w-full rounded-xl bg-white p-6 shadow-md flex flex-col items-center gap-4">
            <Avatar className="h-32 w-32 text-5xl border-4 border-white shadow-lg bg-gray-100">
              {identity.avatar ? (
                <img
                  src={identity.avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                identity.full_name[0]
              )}
            </Avatar>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-black text-center">{identity.full_name}</h2>
            <p className="text-base text-gray-500 text-center">{identity.position ?? dummyUser.position}</p>
            <div className="flex gap-4 mt-2">
              <Button className="bg-primary px-6" onClick={handleEditProfile}>Edit Profile</Button>
              <Button variant="destructive" className="px-6" onClick={handleDeleteProfile}>Delete Profile</Button>
            </div>
          </div>

          {/* User Info & Contact */}
          <div className="w-full  max-w-[380px] sm:max-w-full rounded-xl bg-white p-6 shadow-md flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-black mb-1">About</h3>
            <p className="text-gray-700">{identity.bio}</p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-600">
                <span className="font-medium">Department:</span>
                <span>{identity.department ?? dummyUser.department}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="font-medium">Location:</span>
                <span>{identity.location ?? dummyUser.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="font-medium">Phone:</span>
                <span>{identity.phone ?? dummyUser.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="font-medium">Email:</span>
                <span>{identity.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="font-medium">Joined:</span>
                <span>{identity.joined ? new Date(identity.joined).toLocaleDateString() : new Date(dummyUser.joined).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="w-full max-w-[380px]sm:max-w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white p-6 shadow flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">{identity.uploadedDocs ?? dummyUser.uploadedDocs}</span>
              <span className="text-sm text-gray-500 mt-1">Uploaded Documents</span>
            </div>
            <div className="rounded-xl bg-white p-6 shadow flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">{identity.completedNotes ?? dummyUser.completedNotes}</span>
              <span className="text-sm text-gray-500 mt-1">Completed Notes</span>
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

          {/* Security Section */}
          <div className="w-full  max-w-[380px]sm:max-w-full rounded-xl bg-white p-6 shadow-md flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black mb-2">Security & Login</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-3">
                <label className="text-sm font-medium text-gray-700">Change Password</label>
                <Input type="password" placeholder="Current Password" className="w-full" />
                <Input type="password" placeholder="New Password" className="w-full" />
                <Input type="password" placeholder="Confirm New Password" className="w-full" />
                <Button className="w-full bg-primary mt-2">Update Password</Button>
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <label className="text-sm font-medium text-gray-700">Two-Factor Authentication</label>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="text-sm text-gray-700">Enabled</span>
                </div>
                <Button variant="outline" className="w-full">Manage 2FA</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;