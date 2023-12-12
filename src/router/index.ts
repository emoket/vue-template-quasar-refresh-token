import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { AuthorizeStatus } from '../auth/interfaces';
import { useUserStore } from '../store/useUserStore';
import { IsDevMode, VITE_PATH_BUILD } from '../config/environment';

const buildPath: string = IsDevMode ? '/' : VITE_PATH_BUILD;

const router = createRouter({
  history: createWebHistory(buildPath),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: routes,
});

router.beforeEach(async (to, from, next) => {
  // 사용자 상태
  const isAuthenticated =
    sessionStorage.getItem('user') === AuthorizeStatus.authorize;
  console.log('isAuthenticated', isAuthenticated);

  // 해당 경로에 대한 인증이 필요한지 여부
  const requiredAuth = to.meta.requiresAuth;
  // 토큰을 얻기 위한 User store
  const userStore = useUserStore();
  console.log('Initial:', {
    requiredAuth,
    isAuthenticated,
    token: userStore.userToken,
  });
  // 토큰이 메모리에 있고 사용자가 인증되어 있는 경우
  if (requiredAuth && userStore.userToken !== undefined) {
    console.log('토큰이 있고 인증이 필요함', {
      JWT: userStore.userToken,
    });
    return next();
  }
  // 토큰이 없고 사용자가 인증되어 있는 경우 (사이트가 새로 고쳐짐)
  else if (
    requiredAuth &&
    isAuthenticated &&
    userStore.userToken === undefined
  ) {
    console.log(
      '사이트 다시로드 -> 토큰이 없지만 사용자가 인증됨 :: onRefreshToken ⚡',
      { requiredAuth, isAuthenticated, token: userStore.userToken },
    );
    await userStore.refreshToken(); // refresh를 다시 호출
    if (userStore.userToken !== undefined && isAuthenticated && requiredAuth) {
      // 사용자가 Store에 제대로 배치됨
      console.log('사용자 및 유효한 refresh를 얻음', {
        refreshJWT: userStore.userToken,
      });
      return next();
    }
    // 오류가 발생하고 사용자를 Store에 넣을 수 없음
    console.error('유효한 refresh 및 사용자를 얻을 수 없습니다');
    userStore.logoutUser(); // 사용자를 로그아웃함
    return next({ name: 'login' });
  }
  // 사용자가 인증되어 있고 로그인으로 이동하려는 경우
  else if (!requiredAuth && isAuthenticated && to.name === 'login') {
    console.log(
      '인증이 필요하지 않지만 사용자가 로그인하고 로그인으로 이동하려고 함',
    );
    return next({ name: 'home' });
  }
  // 보호된 경로에 들어가려고하면서 사용자가 인증되어 있지 않은 경우
  else if (requiredAuth && !isAuthenticated) {
    userStore.logoutUser(); // 사용자를 로그아웃함
    return next({ name: 'login' });
  } else {
    console.log('유효성 검사를 위한 데이터가 없습니다');
    // 뷰를 계속 진행
    return next();
  }
});

export default router;
