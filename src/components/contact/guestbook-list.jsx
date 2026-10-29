import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { CONTACT_COLORS } from '../../utils/contact-config.js';

const dateFormatter = new Intl.DateTimeFormat('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

/**
 * GuestbookList 컴포넌트
 *
 * Props:
 * @param {array} messages - 승인된 방명록 목록 (최신순) [Required]
 * @param {boolean} isLoading - 목록 로딩 여부 [Optional, 기본값: false]
 * @param {string} error - 로딩 실패 안내 문구 [Optional, 기본값: '']
 *
 * Example usage:
 * <GuestbookList messages={messages} isLoading={isLoading} error={loadError} />
 */
function GuestbookList({ messages, isLoading = false, error = '' }) {
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress size={ 28 } sx={{ color: CONTACT_COLORS.accent }} />
      </Box>
    );
  }

  if (error || messages.length === 0) {
    return (
      <Typography sx={{ color: CONTACT_COLORS.textMuted, textAlign: 'center', py: 4 }}>
        { error || '아직 공개된 메시지가 없어요. 첫 번째 흔적을 남겨 주세요!' }
      </Typography>
    );
  }

  return (
    <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      {messages.map((item) => (
        <Box
          component="li"
          key={ item.id }
          sx={{
            display: 'flex',
            gap: 2,
            p: { xs: 2, md: 2.5 },
            bgcolor: CONTACT_COLORS.background,
            border: '1px solid',
            borderColor: CONTACT_COLORS.border,
            borderRadius: 2,
            transition: 'border-color 0.2s ease',
            '&:hover': { borderColor: 'rgba(199, 243, 92, 0.4)' },
          }}
        >
          <Box sx={{ fontSize: '1.5rem', lineHeight: 1.2, flexShrink: 0, width: 32, textAlign: 'center' }}>
            { item.emoji || '💬' }
          </Box>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
              <Box component="span" sx={{ fontWeight: 700, color: CONTACT_COLORS.text }}>
                { item.name }
              </Box>
              <Box component="time" dateTime={ item.created_at } sx={{ fontSize: '0.8rem', color: CONTACT_COLORS.textMuted }}>
                { dateFormatter.format(new Date(item.created_at)) }
              </Box>
            </Box>
            <Box sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              { item.message }
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default GuestbookList;
