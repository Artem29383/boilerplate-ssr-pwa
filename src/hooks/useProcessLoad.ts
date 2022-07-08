import { useActionWithPayload } from 'hooks/useAction';
import { actions } from 'models/app';
import { useCallback } from 'react';
import { useSelector } from 'hooks/useSelector';
import { getLoadProcess } from 'models/app/selectors';

export const useProcessLoad = (key: string) => {
  const setLoadProcess = useActionWithPayload(actions.setLoadProcess);
  const process = useSelector(getLoadProcess);

  const handleLoadProcess = useCallback(
    (load: boolean, message?: string) => {
      setLoadProcess({ key, load, message });
    },
    [key, setLoadProcess]
  );

  return {
    setLoadProcess: handleLoadProcess,
    process: process[key] || { load: false },
  };
};
