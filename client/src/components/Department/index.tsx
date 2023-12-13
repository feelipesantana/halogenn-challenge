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
      {title}

      <div>
        <Image
          src={`/assets/icons/${image}.svg`}
          width={15}
          height={15}
          alt="Icon"
        />
        {description}
      </div>
    </div>
  );
}
