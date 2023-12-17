"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { MenuDropDown } from "../MenuDropDown";

export function Header() {
  const [active, setActive] = useState(false);

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
            <div className="min-h-[2.4rem] min-w-[12rem] ">
              <Image
                src="/assets/logo.svg"
                width={160}
                height={35}
                alt="Halogenn"
              />
            </div>
            <ul className={styles.menu}>
              <li>
                <Link href="/">Início</Link>
              </li>
              <li
                onClick={() => setActive(!active)}
                className={`cursor-pointer flex items-center gap-2`}
              >
                <span className={`${active && "text-orange-600"} `}>
                  Produtos{" "}
                </span>
                <ChevronDownIcon
                  width={15}
                  height={15}
                  className={`text-gray-darker ${
                    active ? "rotate-180 txransform text-orange-600" : ""
                  } ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180`}
                  aria-hidden
                />
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
              <div className="min-h-[2.1rem] min-w-[2.1rem] ">
                <Image
                  src="/assets/icons/list.svg"
                  width={21}
                  height={21}
                  alt="Orçamento"
                />
              </div>
              <span>Orçamento</span>
            </button>
            <button
              className={styles.menuHamburger}
              onClick={() => setActive(!active)}
            >
              <div className="min-h-[2.1rem] min-w-[2.1rem] ">
                <Image
                  src="/assets/icons/icon-menu-mobile.svg"
                  width={28}
                  height={28}
                  alt="Orçamento"
                />
              </div>
            </button>
          </div>
        </div>

        {active && <MenuDropDown />}

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
    </header>
  );
}
