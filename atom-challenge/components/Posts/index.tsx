import Image from "next/image";
import { Roboto } from 'next/font/google'
import imgPost1 from "../../images/post-1.png"
import { PostsContainer } from "./styles";
import { motion } from "framer-motion";

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"] })

export const Posts = () => {
    return (
        <>
            <PostsContainer className={roboto.className}>
                <motion.div
                    className="figure"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >


                    <figure>
                        <Image
                            src={imgPost1}
                            width={569}
                            height={342}
                            alt="Notebook em cima de uma mesa"
                        />
                        <figcaption>Janeiro 04, 2022</figcaption>
                    </figure>
                    <h2>Começando no ReactJS em 2022</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
                        sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
                        sed tristique. Sed volutpat aenean.
                    </p>

                </motion.div>
                <motion.div
                    className="section"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <section>
                        <p>Janeiro 04, 2022</p>
                        <h2>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nibh nibh eu in aliquet ut adipiscing neque.
                            Sed volutpat aenean sit vitae, sed tristique.
                        </p>
                    </section>
                    <section>
                        <p>Janeiro 04, 2022</p>
                        <h2>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nibh nibh eu in aliquet ut adipiscing neque.
                            Sed volutpat aenean sit vitae, sed tristique.
                        </p>
                    </section>
                </motion.div>

            </PostsContainer>

            
        </>
    )
}