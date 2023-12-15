"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Department } from "../Department";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function Header() {
  const blockData = useSelector((state: RootState) => state.department);

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
          <div className={styles.buttonsHeader}>
            <button>
              <Image
                src="/assets/icons/list.svg"
                width={21}
                height={21}
                alt="Orçamento"
              />

              <span>Orçamento</span>
            </button>
            <button className={styles.menuHamburger}>
              <Image
                src="/assets/icons/icon-menu-mobile.svg"
                width={28}
                height={28}
                alt="Orçamento"
              />
            </button>
          </div>
        </div>
        <div className={styles.about}>
          <h2>
            Qualidade e expertise em produtos <span>químicos e acessórios</span>
          </h2>
          <p>
            Estamos preparados para te entender e atender da melhor forma para
            suprir todas as suas demandas em químicos e similares.
          </p>
        </div>
      </div>

      <div className={styles.departmentContainer}>
        <div className={styles.departmentContent}>
          <Department
            title={blockData.firstBlock.title}
            description={blockData.firstBlock.description}
            image={blockData.firstBlock.image}
          />
          <Department
            title={blockData.secondBlock.title}
            description={blockData.secondBlock.description}
            image={blockData.secondBlock.image}
          />
          <Department
            title={blockData.thirdBlock.title}
            description={blockData.thirdBlock.description}
          />
        </div>
      </div>
    </header>
  );
}
