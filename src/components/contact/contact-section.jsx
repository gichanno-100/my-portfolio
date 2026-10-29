import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PublicIcon from '@mui/icons-material/Public';
import ContactInfoCard from './contact-info-card.jsx';
import GuestbookForm from './guestbook-form.jsx';
import GuestbookList from './guestbook-list.jsx';
import useGuestbook from '../../hooks/use-guestbook.js';
import { CONTACT_COLORS, CONTACT_EMAIL, SOCIAL_LINKS } from '../../utils/contact-config.js';

const pendingSx = { color: CONTACT_COLORS.textMuted, fontSize: '1rem' };

/**
 * ContactSection 컴포넌트
 * Home 탭 안의 Contact 섹션 (이메일 · SNS · 공개 방명록)
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  const { messages, isLoading, loadError, submitMessage } = useGuestbook();
  const socialLinks = SOCIAL_LINKS.filter((link) => link.url);

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        width: '100%',
        bgcolor: CONTACT_COLORS.background,
        color: CONTACT_COLORS.text,
        borderRadius: 3,
        borderTop: '4px solid',
        borderTopColor: CONTACT_COLORS.accent,
        px: { xs: 2.5, md: 6 },
        py: { xs: 6, md: 10 },
      }}
    >
      {/* 헤더 */}
      <Typography
        variant="overline"
        sx={{ display: 'block', color: CONTACT_COLORS.accent, fontWeight: 700, letterSpacing: 2 }}
      >
        Section 05 · Contact
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4.2rem' },
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          mt: 1,
          mb: 3,
        }}
      >
        HAVE AN IDEA?
        <Box component="span" sx={{ display: 'block', color: CONTACT_COLORS.accent }}>
          LET&apos;S TALK.
        </Box>
      </Typography>
      <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, color: CONTACT_COLORS.textMuted, lineHeight: 1.6, mb: { xs: 5, md: 7 } }}>
        새로운 프로젝트나 협업 제안, 가벼운 인사도 환영합니다.
      </Typography>

      {/* 이메일 · SNS 카드: PC 가로 / 모바일 세로 */}
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 2, md: 3 } }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ContactInfoCard label="EMAIL ME" icon={ <MailOutlinedIcon fontSize="small" /> }>
            {CONTACT_EMAIL ? (
              <Button
                href={ `mailto:${CONTACT_EMAIL}` }
                endIcon={ <ArrowOutwardIcon /> }
                sx={{
                  p: 0,
                  color: CONTACT_COLORS.text,
                  fontSize: { xs: '1.05rem', md: '1.25rem' },
                  fontWeight: 700,
                  textTransform: 'none',
                  wordBreak: 'break-all',
                  justifyContent: 'flex-start',
                  '&:hover': { bgcolor: 'transparent', color: CONTACT_COLORS.accent },
                }}
              >
                { CONTACT_EMAIL }
              </Button>
            ) : (
              <Typography sx={ pendingSx }>이메일 주소 준비 중입니다.</Typography>
            )}
          </ContactInfoCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ContactInfoCard label="FIND ME" icon={ <PublicIcon fontSize="small" /> }>
            {socialLinks.length > 0 ? (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {socialLinks.map((link) => (
                  <Button
                    key={ link.label }
                    href={ link.url }
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={ <ArrowOutwardIcon fontSize="small" /> }
                    sx={{
                      color: CONTACT_COLORS.text,
                      border: '1px solid',
                      borderColor: CONTACT_COLORS.border,
                      borderRadius: 999,
                      px: 2,
                      textTransform: 'none',
                      fontWeight: 500,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: CONTACT_COLORS.accent,
                        borderColor: CONTACT_COLORS.accent,
                        color: CONTACT_COLORS.background,
                      },
                    }}
                  >
                    { link.label }
                  </Button>
                ))}
              </Box>
            ) : (
              <Typography sx={ pendingSx }>SNS 링크 준비 중입니다.</Typography>
            )}
          </ContactInfoCard>
        </Grid>
      </Grid>

      {/* 공개 방명록 */}
      <Box
        sx={{
          bgcolor: CONTACT_COLORS.card,
          border: '1px solid',
          borderColor: CONTACT_COLORS.border,
          borderRadius: 3,
          p: { xs: 3, md: 4 },
        }}
      >
        <Typography variant="overline" sx={{ display: 'block', color: CONTACT_COLORS.accent, fontWeight: 700, letterSpacing: 2 }}>
          LEAVE YOUR MARK
        </Typography>
        <Typography sx={{ color: CONTACT_COLORS.textMuted, fontSize: '0.95rem', mb: 3 }}>
          남겨주신 메시지는 바로 공개됩니다. 링크 등이 포함되면 확인 후 공개돼요.
        </Typography>
        <GuestbookForm onSubmit={ submitMessage } />
        <Box sx={{ borderTop: '1px solid', borderColor: CONTACT_COLORS.border, mt: 4, pt: 4 }}>
          <GuestbookList messages={ messages } isLoading={ isLoading } error={ loadError } />
        </Box>
      </Box>
    </Box>
  );
}

export default ContactSection;
