import { CssBaseline, Box } from '@mui/material';
import { AuthProvider } from '@/context/AuthContext';
import { PokemonProvider } from '@/context/PokemonsContext';
import { Header } from '@/components/Header';
import { Suspense } from 'react';
import { Spinner } from '@/shared/Spinner';
import '../styles/global.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Spinner />}>
          <CssBaseline />
          <AuthProvider>
            <PokemonProvider>
              <Box className='root-layout'>
                <Header />
                <Box className='content-container'>{children}</Box>
              </Box>
            </PokemonProvider>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
