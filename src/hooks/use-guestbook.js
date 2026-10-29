import { useCallback, useEffect, useState } from 'react';
import { FunctionsHttpError } from '@supabase/supabase-js';
import { supabase } from '../utils/supabase.js';

const NOT_CONFIGURED = '방명록 연결 설정이 필요합니다.';

/**
 * 방명록 조회·등록 훅
 * - 목록: 승인된 메시지만 최신순 (RLS로 서버에서 보장)
 * - 등록: Edge Function을 통해 서버 측 검증 후 승인 대기로 저장
 */
function useGuestbook() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(Boolean(supabase));
  const [loadError, setLoadError] = useState(supabase ? '' : NOT_CONFIGURED);

  useEffect(() => {
    if (!supabase) return undefined;
    let isActive = true;

    supabase
      .from('contact_messages')
      .select('id, name, message, emoji, created_at')
      .eq('is_approved', true)
      .order('created_at', { ascending: false })
      .limit(50)
      .then(({ data, error }) => {
        if (!isActive) return;
        setLoadError(error ? '방명록을 불러오지 못했습니다.' : '');
        setMessages(data ?? []);
        setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const submitMessage = useCallback(async (payload) => {
    if (!supabase) return { isSuccess: false, error: NOT_CONFIGURED };

    const { error } = await supabase.functions.invoke('submit-contact-message', { body: payload });
    if (!error) return { isSuccess: true };

    let message = '메시지 등록에 실패했습니다. 잠시 후 다시 시도해 주세요.';
    if (error instanceof FunctionsHttpError) {
      const body = await error.context.json().catch(() => null);
      if (body?.error) message = body.error;
    }
    return { isSuccess: false, error: message };
  }, []);

  return { messages, isLoading, loadError, submitMessage };
}

export default useGuestbook;
