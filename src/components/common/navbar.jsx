import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

function Navbar() {
  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'primary.main' }}>
      <Container maxWidth="md">
        <Toolbar
          disableGutters
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            gap: { xs: 1, sm: 0 },
            py: { xs: 1, sm: 0 },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
            My<Box component="span" sx={{ color: 'secondary.main' }}>Portfolio</Box>
          </Typography>
          <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 } }}>
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                end
                sx={{
                  color: 'primary.contrastText',
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                  borderBottom: '2px solid transparent',
                  borderRadius: 0,
                  '&.active': {
                    color: 'secondary.light',
                    borderBottomColor: 'secondary.main',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
