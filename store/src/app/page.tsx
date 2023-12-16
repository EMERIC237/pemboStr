'use client';
import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Topbar } from '@/components/layouts/Topbar';
import Sidebar from '@/components/layouts/Sidebar';
import React from 'react';
export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box display="flex">
      <CssBaseline />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Box flexGrow={1}>
        <Topbar open={open} handleDrawerOpen={handleDrawerOpen} />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <h1>Home</h1>
        </Box>
      </Box>
    </Box>
  )
}
