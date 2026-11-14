import { useEffect } from 'react';
import { SITE } from '../utils';

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE}` : `${SITE} — Portfolio`;
  }, [title]);
}
