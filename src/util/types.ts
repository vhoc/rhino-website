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