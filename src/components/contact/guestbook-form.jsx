import { useEffect, useRef, useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import {
  CONTACT_COLORS,
  GUESTBOOK_EMOJIS,
  MESSAGE_MAX_LENGTH,
  NAME_MAX_LENGTH,
} from '../../utils/contact-config.js';

const fieldSx = {
  '& .MuiInputBase-root': {
    color: CONTACT_COLORS.text,
    bgcolor: CONTACT_COLORS.background,
    borderRadius: 2,
  },
  '& .MuiInputLabel-root': { color: CONTACT_COLORS.textMuted },
  '& .MuiInputLabel-root.Mui-focused': { color: CONTACT_COLORS.accent },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: CONTACT_COLORS.border },
  '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: CONTACT_COLORS.textMuted,
  },
  '& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: CONTACT_COLORS.accent,
  },
  '& .MuiFormHelperText-root': { color: CONTACT_COLORS.textMuted, mx: 0.5 },
  '& .MuiFormHelperText-root.Mui-error': { color: '#FF8A80' },
};

const countChars = (value) => [...value.trim()].length;

/**
 * GuestbookForm 컴포넌트
 *
 * Props:
 * @param {function} onSubmit - 등록 요청 함수, { isSuccess, error }를 반환 [Required]
 *
 * Example usage:
 * <GuestbookForm onSubmit={submitMessage} />
 */
function GuestbookForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [emoji, setEmoji] = useState(null);
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);
  const [notice, setNotice] = useState(null);
  const startedAtRef = useRef(0);

  /** 폼이 처음 표시된 시각 기록 (너무 빠른 자동 제출 차단용) */
  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  const nameLength = countChars(name);
  const messageLength = countChars(message);
  const isNameValid = nameLength >= 1 && nameLength <= NAME_MAX_LENGTH;
  const isMessageValid = messageLength >= 1 && messageLength <= MESSAGE_MAX_LENGTH;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHasTriedSubmit(true);
    if (!isNameValid || !isMessageValid || isSubmitting) return;

    setIsSubmitting(true);
    const result = await onSubmit({
      name: name.trim(),
      message: message.trim(),
      emoji,
      website,
      startedAt: startedAtRef.current,
    });
    setIsSubmitting(false);

    if (result.isSuccess) {
      setName('');
      setMessage('');
      setEmoji(null);
      setHasTriedSubmit(false);
      startedAtRef.current = Date.now();
      setNotice({ severity: 'success', text: '메시지가 등록되었습니다! 승인 후 방명록에 공개됩니다.' });
    } else {
      setNotice({ severity: 'error', text: result.error });
    }
  };

  return (
    <Box component="form" noValidate onSubmit={ handleSubmit } sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <TextField
        label="이름"
        value={ name }
        onChange={ (event) => setName(event.target.value) }
        required
        fullWidth
        slotProps={{ htmlInput: { maxLength: NAME_MAX_LENGTH + 10 } }}
        error={ hasTriedSubmit && !isNameValid }
        helperText={ hasTriedSubmit && !isNameValid
          ? `이름은 1~${NAME_MAX_LENGTH}자로 입력해 주세요.`
          : `${nameLength} / ${NAME_MAX_LENGTH}` }
        sx={ fieldSx }
      />
      <TextField
        label="메시지"
        value={ message }
        onChange={ (event) => setMessage(event.target.value) }
        required
        fullWidth
        multiline
        minRows={ 4 }
        slotProps={{ htmlInput: { maxLength: MESSAGE_MAX_LENGTH + 10 } }}
        error={ hasTriedSubmit && !isMessageValid }
        helperText={ hasTriedSubmit && !isMessageValid
          ? `메시지는 1~${MESSAGE_MAX_LENGTH}자로 입력해 주세요.`
          : `${messageLength} / ${MESSAGE_MAX_LENGTH}` }
        sx={ fieldSx }
      />

      {/* 허니팟: 사람에게는 보이지 않는 입력칸 (봇 차단용) */}
      <Box aria-hidden="true" sx={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
        <input
          type="text"
          name="website"
          tabIndex={ -1 }
          autoComplete="off"
          value={ website }
          onChange={ (event) => setWebsite(event.target.value) }
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Typography sx={{ color: CONTACT_COLORS.textMuted, fontSize: '0.9rem' }}>
          이모지 (선택)
        </Typography>
        <ToggleButtonGroup
          exclusive
          value={ emoji }
          onChange={ (event, value) => setEmoji(value) }
          aria-label="이모지 선택"
        >
          {GUESTBOOK_EMOJIS.map((item) => (
            <ToggleButton
              key={ item }
              value={ item }
              aria-label={ item }
              sx={{
                fontSize: '1.25rem',
                px: 1.5,
                py: 0.5,
                borderColor: CONTACT_COLORS.border,
                transition: 'background-color 0.2s ease',
                '&:hover': { bgcolor: 'rgba(199, 243, 92, 0.08)' },
                '&.Mui-selected, &.Mui-selected:hover': {
                  bgcolor: 'rgba(199, 243, 92, 0.2)',
                  borderColor: CONTACT_COLORS.accent,
                },
              }}
            >
              { item }
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      <Button
        type="submit"
        size="large"
        disabled={ isSubmitting }
        startIcon={ isSubmitting ? <CircularProgress size={ 18 } sx={{ color: 'inherit' }} /> : null }
        sx={{
          alignSelf: { xs: 'stretch', sm: 'flex-start' },
          px: 4,
          py: 1.5,
          fontWeight: 700,
          letterSpacing: 1,
          borderRadius: 999,
          bgcolor: CONTACT_COLORS.accent,
          color: CONTACT_COLORS.background,
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            bgcolor: CONTACT_COLORS.accent,
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(199, 243, 92, 0.3)',
          },
          '&.Mui-disabled': { bgcolor: 'rgba(199, 243, 92, 0.5)', color: CONTACT_COLORS.background },
        }}
      >
        { isSubmitting ? '등록 중...' : '메시지 남기기' }
      </Button>

      <Snackbar
        open={ Boolean(notice) }
        autoHideDuration={ 5000 }
        onClose={ () => setNotice(null) }
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={ () => setNotice(null) }
          severity={ notice?.severity ?? 'success' }
          variant="filled"
          sx={{ width: '100%' }}
        >
          { notice?.text }
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default GuestbookForm;
