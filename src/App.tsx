import React, { useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import FileUpload from './components/FileUpload';
import Header from './components/Header';
import { ErrorLog } from './types';

function App() {
  const [errorLogs, setErrorLogs] = useState<ErrorLog[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [showAWSQuery, setShowAWSQuery] = useState(false);

  const handleDataLoaded = (data: ErrorLog[]) => {
    setErrorLogs(data);
    setIsDataLoaded(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onShowAWSQuery={() => setShowAWSQuery(true)} />
      {!isDataLoaded ? (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <FileUpload onDataLoaded={handleDataLoaded} />
          </div>
        </div>
      ) : (
        <DashboardLayout data={errorLogs} />
      )}
    </div>
  );
}

export default App;