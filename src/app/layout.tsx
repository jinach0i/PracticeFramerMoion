import type { Metadata } from 'next'
import { nanumMyeongjo } from '@/app/ui/fonts';
import '@/app/ui/globals.css'
import Header from '@/components/Header'
import React from 'react'

export const metadata: Metadata = {
  title: 'FramerMotion연습기록',
  description: 'YouTuber Olivier Larose 영상을 참조하여 연습',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" data-theme="cupcake">
      <body className={nanumMyeongjo.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
