import type { PropsWithChildren } from 'react'
import { Header } from '@/components/layout'

export function MainLayout({ children }: PropsWithChildren) { return <><Header /><main>{children}</main></> }
