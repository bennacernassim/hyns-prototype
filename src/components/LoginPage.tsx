import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation for demo
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="font-poppins text-3xl text-hyns-purple mb-2">HYNS</h1>
          <p className="font-roboto text-gray-600">Smartphone Management Platform</p>
        </div>
        
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-poppins text-xl">Sign in to your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="font-roboto">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 font-roboto"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <Label htmlFor="password" className="font-roboto">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 font-roboto"
                  placeholder="Enter your password"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-hyns-purple hover:bg-purple-700 font-roboto"
              >
                Sign in
              </Button>
              
              <div className="text-center">
                <a href="#" className="text-hyns-purple hover:text-purple-700 font-roboto">
                  Create an account
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}