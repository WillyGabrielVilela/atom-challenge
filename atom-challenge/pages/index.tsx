import Head from 'next/head'
import { Header } from '@/components/Header'
import { ThemeProvider } from "styled-components";
import GlobalStyle from '@/styles/globals'
import { defaultTheme } from '@/styles/theme/default';
import { Posts } from '@/components/Posts';
import { Footer } from '@/components/Footer';
import { Navegation } from '@/components/Navegation';
import { Categories } from '@/components/Categories';
import { ButtonScroll } from '@/components/ButtonScroll';


export default function Home() {
  return (
    <>
      <Head>
        <title>RocketBlog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <Navegation />
        <section id="home">
        <Header />
        </section>
        <section id="posts">
        <Posts  />
        </section>
        <section id="categories">
        <Categories  />
        </section>
        <section id="footer">
        <Footer />
        </section>
        <ButtonScroll />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
