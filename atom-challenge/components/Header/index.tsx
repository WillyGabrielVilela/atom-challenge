import Image from "next/image";
import { ButtonSearch, HeaderContainer, HeaderContent, NavContainer, SearchInput } from "./styles";
import logoImg from "../../images/logo.svg"
import searchImg from "../../images/search.svg"
import arrowRight from "../../images/arrow-right.svg"
import featuredImg from "../../images/featured-image.png"
import { Poppins, Roboto } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/theme/default";
import { motion } from "framer-motion";

const poppins = Poppins({ subsets: ['latin'], weight: "700" })
const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"] })



export const Header = () => {
    return (
        <>
            <HeaderContainer className={roboto.className}>
                <NavContainer>
                    <Image
                        id="header-img"
                        src={logoImg}
                        width={161}
                        height={37}
                        alt="Logo do The Blog."
                    />
                    <ul>
                        <li> <a href="#home">Home</a></li>
                        <li> <a href="#posts">Posts</a></li>
                        <li> <a href="#categories">Categorias</a></li>
                        <li> <a href="#footer">Contato</a></li>
                    </ul>

                    <SearchInput>
                        <input
                            type="search"
                            className="searchInput"
                            placeholder="Buscar"
                        />
                        <ThemeProvider theme={defaultTheme}>
                            <ButtonSearch type="submit">
                                <Image
                                    src={searchImg}
                                    width={24}
                                    height={24}
                                    alt="Lupa de Pesquisa"
                                />
                            </ButtonSearch>
                        </ThemeProvider>
                    </SearchInput>

                </NavContainer>

                <HeaderContent id="#home">
                    <motion.div
                        className="w-full lg:max-w-[530px]"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >

                        <div className="text-content">
                            <h1 id="#home" className={poppins.className}>
                                Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nibh nibh eu in aliquet ut adipiscing neque.
                                Sed volutpat aenean sit vitae, sed tristique placerat hac.
                            </p>
                            <div className="look-more">
                                <a href="#">Veja mais</a>
                                <Image
                                    src={arrowRight}
                                    width={24}
                                    height={24}
                                    alt="Seta para direita"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 200, scale: 0.5 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 200, scale: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={featuredImg}
                            width={570}
                            height={346}
                            alt="Notebook com código de programação digitado"
                        />
                    </motion.div>
                </HeaderContent>
            </HeaderContainer>
        </>
    )
}