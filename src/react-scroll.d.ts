declare module 'react-scroll' {
  export interface LinkProps {
    to: string
    spy?: boolean
    smooth?: boolean
    offset?: number
    duration?: number
    delay?: number
    onClick?: () => void
    children?: React.ReactNode
    className?: string
  }

  export const Link: React.FC<LinkProps>
  export const Element: React.FC<any>
  export const Events: any
  export const scroll: any
  export const animateScroll: any
}
