import ScrollToTop from '@/components/Button/ScrollToTop';
import Head from 'next/head'
import Herosection from '@/components/HeroSection/Herosection';
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
    <Head>

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
  integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
  crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link
  href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700&family=Raleway:wght@200;300;400;500;600;700;800;900&family=Rambla:wght@400;700&display=swap"
  rel="stylesheet"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
<link href="/dist/output.css" rel="stylesheet"/>
<title>PowerTheWeb-Home of Web dev</title>
    </Head>
    <main>
<Herosection/>
    <ScrollToTop />
    </main>
    </>
  )
}
