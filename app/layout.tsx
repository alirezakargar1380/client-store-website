import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
// import Cards from '@/components/cards/cards'
import Image from 'next/image'
import NextHead from 'next/head'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App !',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/icons/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/icons/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/icons/favicon-16x16.png"></link>
        <link rel="manifest" href="/assets/images/icons/site.webmanifest"></link>
        <link rel="mask-icon" href="/assets/images/icons/safari-pinned-tab.svg" color="#666666"></link>
        <link rel="shortcut icon" href="/assets/images/icons/favicon.ico"></link>
        <meta name="apple-mobile-web-app-title" content="Molla"></meta>
        <meta name="application-name" content="Molla"></meta>
        <meta name="msapplication-TileColor" content="#cc9966"></meta>
        <meta name="msapplication-config" content="/assets/images/icons/browserconfig.xml"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="stylesheet" href="/assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css"></link>
        {/* <!-- Plugins CSS File --> */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="/assets/css/bootstrap-rtl.min.css"></link>
        <link rel="stylesheet" href="/assets/css/plugins/owl-carousel/owl.carousel.css"></link>
        <link rel="stylesheet" href="/assets/css/plugins/magnific-popup/magnific-popup.css"></link>
        <link rel="stylesheet" href="/assets/css/plugins/jquery.countdown.css"></link>
        {/* <!-- Main CSS File --> */}
        <link rel="stylesheet" href="/assets/css/style.css"></link>
        <link rel="stylesheet" href="/assets/css/skins/skin-demo-4.css"></link>
        <link rel="stylesheet" href="/assets/css/demos/demo-4.css"></link>
        {/* <!-- Plugins JS File --> */}
        <Script src="/assets/js/jquery.min.js"></Script>
        <Script src="/assets/js/jquery.hoverIntent.min.js"></Script>
        <Script src="/assets/js/jquery.waypoints.min.js"></Script>
        <Script src="/assets/js/superfish.min.js"></Script>
        <Script src="/assets/js/owl.carousel.min.js"></Script>
        <Script src="/assets/js/jquery.elevateZoom.min.js"></Script>
        <Script src="/assets/js/bootstrap-input-spinner.js"></Script>
        <Script src="/assets/js/jquery.plugin.min.js"></Script>
        <Script src="/assets/js/jquery.magnific-popup.min.js"></Script>
        <Script src="/assets/js/jquery.countdown.min.js"></Script>
        <Script src="/assets/js/bootstrap.bundle.min.js"></Script>
        {/* <!-- Main JS File --> */}
        <Script src="/assets/js/main.js"></Script>
        <Script src="/assets/js/demos/demo-4.js"></Script>
        <Script src='/test.js' />
      </head>
      <body>
        <h1>lay</h1>
        {children}
      </body >
    </html >
  )
}
