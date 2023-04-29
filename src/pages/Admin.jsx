import React from 'react';
import { useDispatch } from 'react-redux';
import LeadGenerationForm from '../components/LeadGenerationForm';
import { setLeadGenerationSettings } from '../features/leadSettingsSlice';


const Admin = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    dispatch(setLeadGenerationSettings(formData));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Admin Configuration Page</h2>
        </div>
        <div className="mt-5">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Lead Generation Settings</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Configure your lead generation settings here.</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0 ">
              <LeadGenerationForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;