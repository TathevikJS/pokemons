'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { AppBarText } from "@/helpers/constants";
import { useAuth } from "@/hooks/useAuth";
import { logout } from "@/services/auth.service";
import './styles.scss';

export const Header = () => {
  const { dispatch, state } = useAuth();
  const router = useRouter();

  const { isAuthenticated } = state

  const handleLogout = useCallback(async () => {
    try {
      await logout(dispatch);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }, [dispatch, router])

  return (
    <AppBar className="header">
      <Toolbar className="toolbar">
        <Typography
          variant="h6"
          className="title"
        >
          {AppBarText.TITLE}
        </Typography>
        {isAuthenticated && (
          <Button className="logout-button" onClick={handleLogout}>
            {AppBarText.LOGOUT_BUTTON}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
