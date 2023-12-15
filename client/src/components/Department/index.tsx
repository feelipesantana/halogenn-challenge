import Image from "next/image";
import styles from "./styles.module.scss";
interface DepartmentProps {
  title: string;
  image: string;
  description: string;
}

export function Department({ title, image, description }: DepartmentProps) {
  return (
    <div className={styles.department}>
      <h3>{title}</h3>

      <div className={styles.departmentDescription}>
        <div className={styles.departmentDescriptionContent}>
          <Image
            src={`/assets/icons/${image}.svg`}
            width={23}
            height={23}
            alt="Icon"
          />
          {description}
        </div>
        <Image src="/assets/dots.svg" width={100} height={69} alt="Orçamento" />
      </div>
    </div>
  );
}
