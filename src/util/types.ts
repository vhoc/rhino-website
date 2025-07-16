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