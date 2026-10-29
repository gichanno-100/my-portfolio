import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// variant: 'default' | 'highlight' (primary 배경) | 'tint' (연한 primary 배경)
const VARIANT_STYLES = {
  default: {
    bgcolor: 'background.paper',
    color: 'text.primary',
    labelColor: 'primary.main',
  },
  highlight: {
    bgcolor: 'primary.main',
    color: 'primary.contrastText',
    labelColor: 'secondary.light',
  },
  tint: {
    bgcolor: 'var(--color-surface-tint)',
    color: 'text.primary',
    labelColor: 'primary.main',
  },
};

/**
 * SectionCard 컴포넌트
 *
 * Props:
 * @param {string} id - 섹션 앵커 id [Optional]
 * @param {string} label - 제목 위 작은 라벨 텍스트 [Required]
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 섹션 설명 문구 [Required]
 * @param {string} variant - 카드 색상 스타일 ('default' | 'highlight' | 'tint') [Optional, 기본값: 'default']
 * @param {object} minHeight - 카드 최소 높이 (반응형 객체 가능) [Optional]
 *
 * Example usage:
 * <SectionCard label="Section 01" title="Hero" description="..." variant="highlight" />
 */
function SectionCard({ id, label, title, description, variant = 'default', minHeight }) {
  const style = VARIANT_STYLES[variant];

  return (
    <Card
      id={id}
      component="section"
      elevation={0}
      sx={{
        width: '100%',
        minHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        bgcolor: style.bgcolor,
        color: style.color,
        border: '1px solid',
        borderColor: 'divider',
        borderTop: '4px solid',
        borderTopColor: 'secondary.main',
      }}
    >
      <CardContent sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, md: 4 } }}>
        <Typography
          variant="overline"
          sx={{ color: style.labelColor, fontWeight: 700, letterSpacing: 2 }}
        >
          {label}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, fontWeight: 700, mb: 2, lineHeight: 1.3 }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6,
            opacity: variant === 'highlight' ? 0.9 : 1,
            color: variant === 'highlight' ? 'inherit' : 'text.secondary',
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SectionCard;
