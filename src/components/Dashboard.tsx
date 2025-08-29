import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface DashboardProps {
  onNewVerification: () => void;
}

export function Dashboard({ onNewVerification }: DashboardProps) {
  const recentOperations = [
    { id: '1', type: 'Purchase', imei: '356789012345678', buyer: 'John Doe', status: 'completed', time: '2 hours ago' },
    { id: '2', type: 'Sale', imei: '356789012345679', seller: 'Jane Smith', status: 'pending', time: '4 hours ago' },
    { id: '3', type: 'Verification', imei: '356789012345680', status: 'verified', time: '6 hours ago' },
    { id: '4', type: 'Sale', imei: '356789012345681', seller: 'Mike Johnson', status: 'completed', time: '1 day ago' },
  ];

  const securityAlerts = [
    { id: '1', message: 'Stolen device attempted verification', severity: 'high', time: '30 min ago' },
    { id: '2', message: 'Suspicious activity detected', severity: 'medium', time: '2 hours ago' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="font-poppins text-2xl text-gray-900">Dashboard</h1>
          <p className="font-roboto text-gray-600 mt-1">Welcome back to your HYNS dashboard</p>
        </div>
        <Button 
          onClick={onNewVerification}
          className="bg-hyns-purple hover:bg-purple-700 font-roboto"
        >
          New Verification
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Smartphones Verified Card */}
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-poppins text-lg text-gray-700">Smartphones Verified</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-poppins text-hyns-purple mb-2">1,247</div>
            <p className="font-roboto text-sm text-gray-500">
              <span className="text-hyns-success">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        {/* Recent Operations Card */}
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-poppins text-lg text-gray-700">Recent Operations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentOperations.slice(0, 4).map((operation) => (
                <div key={operation.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-roboto text-sm">{operation.type}</span>
                      {operation.status === 'completed' && <CheckCircle className="h-3 w-3 text-hyns-success" />}
                      {operation.status === 'pending' && <Clock className="h-3 w-3 text-hyns-warning" />}
                      {operation.status === 'verified' && <CheckCircle className="h-3 w-3 text-hyns-success" />}
                    </div>
                    <p className="font-roboto text-xs text-gray-500">IMEI: {operation.imei}</p>
                  </div>
                  <span className="font-roboto text-xs text-gray-400">{operation.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security Alerts Card */}
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-poppins text-lg text-gray-700 flex items-center gap-2">
              Security Alerts
              {securityAlerts.length > 0 && (
                <Badge variant="destructive" className="bg-hyns-error">
                  {securityAlerts.length}
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {securityAlerts.length > 0 ? (
              <div className="space-y-3">
                {securityAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-2 p-2 rounded-lg bg-red-50 border border-red-200">
                    <AlertTriangle className="h-4 w-4 text-hyns-error mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-roboto text-sm text-gray-900">{alert.message}</p>
                      <p className="font-roboto text-xs text-gray-500 mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4">
                <CheckCircle className="h-8 w-8 text-hyns-success mx-auto mb-2" />
                <p className="font-roboto text-sm text-gray-500">No security alerts</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}