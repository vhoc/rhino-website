import { type z } from "zod";
import { type ContactFormSchema } from "./validations"

export interface IBlockchain {
  icon?: string
  name: string
  stake_url?: string
}

export interface ITextLink {
  label: string
  href: string
  target?: "_blank" | "self" | "_parent" | "_top"
}

export interface INetwork {
  id: string
  slug: string
  name: string
  active: boolean
  blockchainurl?: string
  stakeurl?: string
  logo?: {
    url: string
  }
  logoMark?: { url: string }
}

export interface INetworksResponse {
  data: {
    networks: INetwork[]
  } | null,
  errors?: { message: string }[]
}

export interface IResource {
  stage: string
  publishedAt: string
  createdAt: string
  updatedAt: string
  id: string
  slug: string
  name: string
  description?: string
  active: boolean
  url?: string
  logo?: {
    url: string
  },
  aboutChain?: {
    html: string
  }
}

export interface IResourcesResponse {
  data: {
    resources: IResource[]
  } | null,
  errors?: { message: string }[]
}

export type ContactFormData = z.infer<typeof ContactFormSchema>;

type PagerDutyBaseResponse = {
  message: string;
  status: string;
}

type PagerDutySuccessResponse = PagerDutyBaseResponse & {
  dedup_key: string;
  errors: never;
}

type PagerDutyErrorResponse = {
  errors: string[];
  dedup_key: never;
}

export type PagerDutyResponse = PagerDutySuccessResponse | PagerDutyErrorResponse;

export interface ICaptchaResponse {
  success: boolean;
  challenge_ts?: string; // timestamp of the challenge
  hostname?: string; // hostname of the site where the reCAPTCHA was solved
  score?: number; // score for v3 reCAPTCHA
  action?: string; // action name for v3 reCAPTCHA
  error_codes?: string[]; // error codes if any
}

export interface IResourceEnvironment {
  chain_id: string;
  endpoints?: { html: string; };
  environment: string;
  nodeLocations?: string;
  rateLimit?: string;
  backingNodes?: string;
  snapshotName?: string;
  status_badge?: string;
  resource?: {
    slug: string;
    name: string;
  };
}

export interface IResourceEnvironmentResponse {
  data: {
    resourceEnvironments: IResourceEnvironment[]
  } | null,
  errors?: { message: string }[]
}

export interface ISnapshot {
  name: string;
  url: string;
  size: number;
  last_modified: string;
  app_hash: string;
  chain_id: string;
  last_block_height: string;
  resourceName: string;
}

export type ISnapshotsResponse = {
  result: {
    last_update: string;
  };

} & Record<Exclude<string, "result">, ISnapshot[]>;