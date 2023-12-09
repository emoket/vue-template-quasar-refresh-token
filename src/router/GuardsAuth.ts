import { AuthorizeStatus } from '../auth/interfaces';
import { useUserStore } from '../store/useUserStore';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const requiereAuthGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const useStore = useUserStore();
  const userStatus = localStorage.getItem('user') === AuthorizeStatus.authorize;
  useStore.loadingUser = true;
  // 만약 메모리에 토큰이 이미 존재한다면
  if (useStore.userToken !== undefined && userStatus) {
    console.log('토큰 새로 고침 요청이 수행되지 않습니다', useStore.userData);
    useStore.loadingUser = false;
    return next();
  }
  // 토큰이 갱신되고 소멸된 경우
  if (useStore.userToken === undefined && userStatus) {
    console.log('onRefreshToken ⚡', { userStatus });
    await useStore.refreshToken(); // 다시 업데이트를 요청합니다.
    // 사용자 또는 토큰을 검증합니다. 새로 고침으로 토큰을 얻어야 합니다.
    if (useStore.userToken !== null) {
      // 갱신된 사용자가 존재합니다.
      useStore.loadingUser = false;
      return next();
    }
    // 검증할 데이터가 없습니다. 리프레시 토큰에 새로운 사용자가 설정되지 않았습니다.
    console.log('검증할 데이터가 없습니다');
    useStore.loadingUser = false;
    useStore.logoutUser();
    return next({ name: 'login' });
  }
  console.log(
    '어떤 유효성 검사도 통과하지 못했습니다. 유효한 로컬 저장소가 없습니다.',
  );
  useStore.logoutUser();
  useStore.loadingUser = false;
  return next();
};
