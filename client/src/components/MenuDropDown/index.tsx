import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Settings2, Thermometer } from "lucide-react";

export function MenuDropDown() {
  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={styles.menuDropDown}
    >
      <section>
        Catálogo completo <br />
        de itens para você
      </section>
      <section>
        <h3>Laborátório </h3>
        <ul>
          <section>
            <li>
              <Settings2 />
              Equipamentos
            </li>
            <li>
              <Thermometer />
              Termômetros
            </li>
          </section>
          <section>
            <li>
              <Image
                src="/assets/icons/glass.svg"
                width={20}
                height={20}
                alt="icons"
              />
              Acessórios
            </li>
          </section>
        </ul>
      </section>
      <section>
        <h3>Utensílios </h3>
        <ul>
          <section>
            <li>
              <Image
                src="/assets/icons/box.svg"
                width={20}
                height={20}
                alt="icons"
              />
              Inox e Ferragens
            </li>
            <li>
              <Image
                src="/assets/icons/box-outline.svg"
                width={20}
                height={20}
                alt="icons"
              />
              Plásticos
            </li>
          </section>
          <section>
            <li>
              <Image
                src="/assets/icons/chemistry.svg"
                width={20}
                height={20}
                alt="icons"
              />
              Vidrarias
            </li>
            <li>
              <Image
                src="/assets/icons/bowl.svg"
                width={20}
                height={20}
                alt="icons"
              />
              Porcelanas
            </li>
          </section>
        </ul>
      </section>
    </motion.div>
  );
}
