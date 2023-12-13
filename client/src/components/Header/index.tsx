import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Image
        src="/assets/layout-dots.svg"
        width={311}
        height={343}
        alt="pontos no layout"
        className={styles.layoutDots}
      />
      <div className="baseContainer">
        <div className={styles.headerBase}>
          <div className={styles.menuContainer}>
            <Image
              src="/assets/logo.svg"
              width={160}
              height={35}
              alt="Halogenn"
            />
            <ul className={styles.menu}>
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/">Produtos</Link>
              </li>
              <li>
                <Link href="/">Laudos</Link>
              </li>
              <li>
                <Link href="/">Sobre nós</Link>
              </li>
              <li>
                <Link href="/">Certificações</Link>
              </li>
              <li>
                <Link href="/">Contato</Link>
              </li>
            </ul>
          </div>
          <button>
            <Image
              src="/assets/icons/list.svg"
              width={15}
              height={15}
              alt="Orçamento"
            />
            Orçamento
          </button>
        </div>
      </div>
    </header>
  );
}
