export interface KeycloakJsConfigType {
  url: string;
  realm: string;
  clientId: string;
}

export interface ServiceConfigType {
  refreshTokenMilliseconds: number;
}

/**
 * Keycloak 활성화 여부 확인
 * @returns true or false
 */
export const getEnableKeycloak = (): boolean => {
  const raw = import.meta.env.VITE_APP_KEYCLOAK_ENABLED;
  if (raw) {
    return JSON.parse(raw);
  }
  return false;
};

export const keycloakJsConfig: KeycloakJsConfigType = {
  url: import.meta.env.VITE_APP_KEYCLOAK_JS_URL ?? '',
  realm: import.meta.env.VITE_APP_KEYCLOAK_JS_REALM ?? '',
  clientId: import.meta.env.VITE_APP_KEYCLOAK_JS_CLIENT_ID ?? '',
};

export const serviceConfig: ServiceConfigType = {
  refreshTokenMilliseconds: import.meta.env.VITE_APP_REFRESH_TOKEN_MS ?? 60000,
};
