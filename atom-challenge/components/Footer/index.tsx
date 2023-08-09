import Image from "next/image";
import logoImg from "../../images/logo.svg"
import { FooterContainer, FooterContent, SocialContainer } from "./styles";
import { LinkedinLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <FooterContainer>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                <FooterContent>
                    <Image
                        id="header-img"
                        src={logoImg}
                        width={161}
                        height={37}
                        alt="Logo do The Blog."
                    />

                    <footer>
                        <p>2023 TheBlog.</p>
                        <p>Todos os direitos reservados.</p>
                    </footer>
                </FooterContent>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
            >
                <SocialContainer>
                    <a href="#"><LinkedinLogo size={32} color="#fbf6ff" weight="fill" /></a>
                    <a href="#"><InstagramLogo size={32} color="#fbf6ff" weight="fill" /></a>
                    <a href="#"><WhatsappLogo size={32} color="#fbf6ff" weight="fill" /></a>
                </SocialContainer>
            </motion.div>
        </FooterContainer>
    )
}