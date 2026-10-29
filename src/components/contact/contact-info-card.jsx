import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CONTACT_COLORS } from '../../utils/contact-config.js';

/**
 * ContactInfoCard 컴포넌트
 *
 * Props:
 * @param {string} label - 카드 상단 라벨 (예: 'EMAIL ME') [Required]
 * @param {node} icon - 라벨 옆 아이콘 [Optional]
 * @param {node} children - 카드 본문 [Required]
 *
 * Example usage:
 * <ContactInfoCard label="EMAIL ME" icon={<MailOutlineIcon />}>...</ContactInfoCard>
 */
function ContactInfoCard({ label, icon, children }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        p: { xs: 3, md: 4 },
        bgcolor: CONTACT_COLORS.card,
        color: CONTACT_COLORS.text,
        border: '1px solid',
        borderColor: CONTACT_COLORS.border,
        borderRadius: 3,
        transition: 'transform 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: CONTACT_COLORS.accent,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 2,
          color: CONTACT_COLORS.accent,
        }}
      >
        { icon }
        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2, lineHeight: 1.4 }}>
          { label }
        </Typography>
      </Box>
      { children }
    </Card>
  );
}

export default ContactInfoCard;
