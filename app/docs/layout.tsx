import { DocsLayout } from 'next-docs-ui/layout'
import type { ReactNode } from 'react'
import { tree } from '../source'
import 'next-docs-ui/style.css'
export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
          <DocsLayout tree={tree} nav={{ title: '雙龍體育幫助中心' }}  enableSidebar={pathname.startsWith('/docs/') || pathname === '/docs'}>
      {children}
    </DocsLayout>
    </div>
  )
}