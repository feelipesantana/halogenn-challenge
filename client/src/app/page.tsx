import { Department } from "@/components/Department";
import { Product } from "@/components/Product";
import styles from "@/styles/home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="baseContainer">
        <div className={styles.departmentContainer}>
          <div className={styles.departmentContent}>
            <Department
              title="PRODUTOS"
              description="Vidrarias e Equipamentos"
              image="lab"
            />
            <Department
              title="QUÍMICOS"
              description="Materiais
            Químicos"
              image="lab"
            />
            <Department
              title="LABORATÓRIOS"
              description="Ferramentas
            e utensílios"
              image="lab"
            />
          </div>
        </div>

        <div className={styles.productsContainer}>
          <h2>PRODUTOS</h2>

          <div className={styles.productsContent}>
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </main>
  );
}
