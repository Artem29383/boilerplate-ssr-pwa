import { useAction } from 'hooks/useAction';
import { actions } from 'models/user';
import { useSelector } from 'hooks/useSelector';
import { getAuthUserStatus } from 'models/user/selectors';
import useIsomorphicLayoutEffect from 'hooks/useIsomorphicLayoutEffect';

export const useAuthorized = () => {
  const userSessionCheck = useAction(actions.userSessionCheck);
  const isAuth = useSelector(getAuthUserStatus);
  useIsomorphicLayoutEffect(() => {
    if (isAuth === undefined) {
      userSessionCheck();
    }
  }, [userSessionCheck, isAuth]);

  return isAuth;
};
