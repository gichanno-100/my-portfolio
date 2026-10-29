import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from './navbar.jsx';

function MainLayout() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box
        component="main"
        sx={{
          flex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          py: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default MainLayout;
