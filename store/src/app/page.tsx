'use client';
import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
      Home page
    </Box>
  )
}
