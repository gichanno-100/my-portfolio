/**
 * Contact 섹션 연락처 설정
 *
 * TODO: 실제 이메일과 SNS 주소를 입력하세요.
 * 값이 비어 있으면 화면에 '준비 중'으로 표시되고 링크가 비활성화됩니다.
 */
export const CONTACT_EMAIL = '';

export const SOCIAL_LINKS = [
  { label: 'GitHub', url: '' },
  { label: 'Instagram', url: '' },
  { label: 'LinkedIn', url: '' },
];

/** 방명록에서 선택할 수 있는 이모지 (DB·서버 검증과 동일하게 유지) */
export const GUESTBOOK_EMOJIS = ['✨', '🔥', '💚', '🙌'];

export const NAME_MAX_LENGTH = 50;
export const MESSAGE_MAX_LENGTH = 500;

/** Contact 섹션 전용 컬러 (기존 무채색 테마와 분리) */
export const CONTACT_COLORS = {
  background: '#141416',
  card: '#252529',
  accent: '#C7F35C',
  text: '#FFFFFF',
  textMuted: 'rgba(255, 255, 255, 0.6)',
  border: 'rgba(255, 255, 255, 0.08)',
};
