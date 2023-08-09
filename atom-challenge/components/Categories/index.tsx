import { Roboto } from 'next/font/google'
import Image from "next/image";
import imgCategorie1 from "../../images/post-2.png"
import imgCategorie2 from "../../images/post-3.png"
import imgCategorie3 from "../../images/post-4.png"
import { CategoriesContainer } from './styles';
import { motion } from "framer-motion";

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"] })

export const Categories = () => {
    return (
        <CategoriesContainer className={roboto.className}>
                <motion.div
                    className="categories"
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="categorie-box">

                        <figure>
                            <Image
                                src={imgCategorie1}
                                width={370}
                                height={260}
                                alt="Pessoa digitando em um notebook"
                            />
                            <figcaption>Janeiro 04, 2022</figcaption>
                        </figure>
                        <h2>10 dicas para conseguir a vaga desejada</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nibh nibh eu in aliquet ut adipiscing neque.
                            Sed volutpat aenean sit vitae, sed tristique.
                        </p>
                    </div>
                    <div className="categorie-box">
                        <figure>
                            <Image
                                src={imgCategorie2}
                                width={370}
                                height={260}
                                alt="Linhas de código de programação em uma tela"
                            />
                            <figcaption>Janeiro 04, 2022</figcaption>
                        </figure>
                        <h2>Deixe seu código mais semântico com essas dicas</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nibh nibh eu in aliquet ut adipiscing neque.
                            Sed volutpat aenean sit vitae, sed tristique.
                        </p>
                    </div>
                    <div className="categorie-box">
                        <figure>
                            <Image
                                src={imgCategorie3}
                                width={370}
                                height={260}
                                alt="Luz refletindo em um smartphone"
                            />
                            <figcaption>Janeiro 04, 2022</figcaption>
                        </figure>
                        <h2>Use essas dicas nas suas aplicações mobile</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nibh nibh eu in aliquet ut adipiscing neque.
                            Sed volutpat aenean sit vitae, sed tristique.
                        </p>
                    </div>
                </motion.div>
            </CategoriesContainer >
    )
}