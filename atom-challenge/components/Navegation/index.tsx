import { useRouter } from 'next/router';
import logoImg from "../../images/logo.svg"
import searchImg from "../../images/search.svg"
import Image from "next/image";
import { ButtonSearch, NavContainer, SearchInput } from './styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/theme/default';

export const Navegation: React.FC = () => {
    const router = useRouter();
    return (
        <NavContainer>
            <Image
                id="header-img"
                src={logoImg}
                width={161}
                height={37}
                alt="Logo do The Blog."
            />
            <ul>
                <li>
                    <a onClick={() => router.push('#home')}>Home</a>
                </li>
                <li>
                    <a onClick={() => router.push('#posts')}>Posts</a>
                </li>
                <li>
                    <a onClick={() => router.push('#categories')}>Categorias</a>
                </li>
                <li>
                    <a onClick={() => router.push('#footer')}>Contato</a>
                </li>
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
    );
};







