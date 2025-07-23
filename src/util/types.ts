export interface IBlockchain {
  icon?: string
  name: string
  stake_url?: string
}

export interface ITextLink {
  label: string
  href: string
  target?: "_blank" | "self" | "_parent" | "_top" | string
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
}