export type LoginResponse = {
  token: string;
  role: string[];
};

export type UserProps = {
  id: string;
  name: string;
  username: string;
  Email: string;
  longitude: number;
  latitude: number;
  telp_number: string;
  role: string;
  image_url: string;
  is_verified: boolean;
  is_token: boolean;
  referral_code: string;
};

export type UserStore = {
  authToken: string;
  role: string;
  username?: string;
  Email?: string;
  longitude?: number;
  latitude?: number;
  telp_number?: string;
  image_url?: string;
  is_verified?: boolean;
  is_token?: boolean;
  referral_code?: string;
};
