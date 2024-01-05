import Keycloak from 'keycloak-js';
import { keycloakJsConfig, serviceConfig } from '@/keycloak-module/config';
import type { KeycloakService } from '@/keycloak-module/types';
import type { UserStoreReturnType } from '@/keycloak-module/useUserStore';
import { ServiceMock } from '@/keycloak-module/service-mock';
import { Service } from '@/keycloak-module/service';

let s: KeycloakService | null = null;

export function createKeycloakInstance(): Keycloak {
  return new Keycloak(keycloakJsConfig);
}

export function serviceFactory(
  enableKeycloak: boolean,
  userStore: UserStoreReturnType,
): KeycloakService {
  if (s === null) {
    if (enableKeycloak) {
      s = new Service(createKeycloakInstance(), userStore, serviceConfig);
    } else {
      s = new ServiceMock(userStore);
    }
  }
  return s;
}
