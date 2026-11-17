import { useEffect } from 'react';
import { SITE } from '../utils';

export function useDocumentTitle(title?: string, skip = false) {
  useEffect(() => {
    if (skip) return;
    document.title = title ? `${title} — ${SITE}` : `${SITE} — Portfolio`;
  }, [title, skip]);
}
