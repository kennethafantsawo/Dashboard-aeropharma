import LoginForm from '@/components/auth/login-form';
import { Hospital } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="p-3 bg-primary/10 rounded-full">
            <Hospital className="h-10 w-10 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold font-headline text-center text-foreground">
            PharmaBoard Aéroport
          </h1>
          <p className="text-muted-foreground text-center mt-2">
            Connectez-vous à votre tableau de bord
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
