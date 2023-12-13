import { Department } from "@/components/Department";
import styles from "@/styles/home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="baseContainer">
        <div className={styles.departmentContainer}>
          <Department
            title="PRODUTOS"
            description="Vidrarias e Equipamentos"
            image="lab"
          />
          <Department
            title="QUÍMICOS"
            description="Vidrarias e Equipamentos"
            image="lab"
          />
          <Department
            title="LABORATÓRIOS"
            description="Vidrarias e Equipamentos"
            image="lab"
          />
        </div>
      </div>
    </main>
  );
}
