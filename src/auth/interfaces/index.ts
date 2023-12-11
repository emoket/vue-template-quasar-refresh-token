export interface Username {
  username?: string;
  role?: string;
  accessToken?: string | undefined;
  durationTokenInMinutes?: number;
}

export interface Credentials {
  username: string;
  password: string;
}

export enum AuthorizeStatus {
  authorize = 'authorize',
  unauthorize = 'unauthorize',
}
