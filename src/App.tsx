import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { IMEIVerification } from './components/IMEIVerification';
import { SalePurchase } from './components/SalePurchase';
import { SecurityAdmin } from './components/SecurityAdmin';

type UserRole = 'merchant' | 'admin';
type View = 'dashboard' | 'imei-verification' | 'operations' | 'marketplace' | 'settings' | 'security';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>('merchant');
  const [activeView, setActiveView] = useState<View>('dashboard');

  const handleLogin = () => {
    setIsLoggedIn(true);
    // For demo purposes, randomly assign role
    setUserRole(Math.random() > 0.5 ? 'admin' : 'merchant');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveView('dashboard');
  };

  const handleViewChange = (view: string) => {
    setActiveView(view as View);
  };

  const handleNewVerification = () => {
    setActiveView('imei-verification');
  };

  const handleRegisterSale = () => {
    setActiveView('operations');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard onNewVerification={handleNewVerification} />;
      case 'imei-verification':
        return <IMEIVerification onRegisterSale={handleRegisterSale} />;
      case 'operations':
        return <SalePurchase />;
      case 'security':
        return <SecurityAdmin />;
      case 'marketplace':
        return (
          <div className="p-6 bg-gray-50 min-h-full">
            <div className="text-center py-12">
              <h1 className="font-poppins text-2xl text-gray-900 mb-4">Marketplace</h1>
              <p className="font-roboto text-gray-600">Marketplace functionality coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6 bg-gray-50 min-h-full">
            <div className="text-center py-12">
              <h1 className="font-poppins text-2xl text-gray-900 mb-4">Settings</h1>
              <p className="font-roboto text-gray-600">Settings panel coming soon...</p>
            </div>
          </div>
        );
      default:
        return <Dashboard onNewVerification={handleNewVerification} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        activeView={activeView}
        onViewChange={handleViewChange}
        onLogout={handleLogout}
        userRole={userRole}
      />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}