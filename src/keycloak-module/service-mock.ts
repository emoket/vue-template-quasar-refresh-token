/**
 * VITE_APP_KEYCLOAK_ENABLED=false 일 경우 본 파일을 사용한다.
 */
import type { KeycloakService } from '@/keycloak-module/types';
import type { UserStoreReturnType } from '@/keycloak-module/useUserStore';
import testUser from '@/keycloak-module/fixtures/test-user.json';

export class ServiceMock implements KeycloakService {
  constructor(protected userStore: UserStoreReturnType) {}

  async login(): Promise<void> {
    this.userStore.user = testUser;
    this.userStore.accessToken = 'token goes here';
    this.userStore.addRole('Observability Viewer');
  }

  logout(): void {
    // do nothing
  }
}
