import { motion } from "framer-motion";
import styles from "./styles.module.scss";

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
      <section>Catálogo completo de itens para você</section>
      <section>
        <h3>Laborátório </h3>
        <ul>
          <li>Equipamentos</li>
          <li>Termômetros</li>
          <li>Acessórios</li>
        </ul>
      </section>
      <section>
        <h3>Utensílios </h3>
        <ul>
          <li>Inox e Ferragens</li>
          <li>Vidrarias</li>
          <li>Plásticos</li>
          <li>Porcelanas</li>
        </ul>
      </section>
    </motion.div>
  );
}
