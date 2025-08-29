import { 
  LayoutDashboard, 
  Shield, 
  Settings, 
  ShoppingCart, 
  Smartphone,
  LogOut 
} from 'lucide-react';
import { Button } from './ui/button';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  onLogout: () => void;
  userRole: 'merchant' | 'admin';
}

export function Sidebar({ activeView, onViewChange, onLogout, userRole }: SidebarProps) {
  const merchantMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'imei-verification', label: 'IMEI Verification', icon: Shield },
    { id: 'operations', label: 'Operations', icon: Smartphone },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingCart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const adminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const menuItems = userRole === 'admin' ? adminMenuItems : merchantMenuItems;

  return (
    <div className="w-64 bg-white shadow-lg h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="font-poppins text-2xl text-hyns-purple">HYNS</h1>
        <p className="font-roboto text-sm text-gray-600 mt-1">
          {userRole === 'admin' ? 'Admin Panel' : 'Merchant Dashboard'}
        </p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Button
                  variant={activeView === item.id ? "default" : "ghost"}
                  className={`w-full justify-start font-roboto ${
                    activeView === item.id 
                      ? 'bg-hyns-purple hover:bg-purple-700 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => onViewChange(item.id)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:bg-gray-100 font-roboto"
          onClick={onLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}