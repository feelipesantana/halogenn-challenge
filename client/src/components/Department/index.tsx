import Image from "next/image";
import styles from "./styles.module.scss";
interface DepartmentProps {
  title: string;
  image?: string;
  description: string;
}

export function Department({ title, image, description }: DepartmentProps) {
  return (
    <div className={styles.department}>
      <h3>{title}</h3>

      <div className={styles.departmentDescription}>
        <div className={styles.departmentDescriptionContent}>
          <div className={styles.imgIconContainer}>
            {title === "QUÍMICOS" && (
              <Image
                src={`/assets/icons/${image}.svg`}
                width={26}
                height={26}
                alt="Icon"
              />
            )}

            <div className="min-h-[2.4rem] min-w-[2.4rem]">
              <Image
                src={`/assets/icons/${image}.svg`}
                width={23}
                height={23}
                alt="Icon"
                className={styles.imgIcon}
              />
            </div>
          </div>
          <span>{description}</span>
        </div>
        <Image
          className={styles.imageDots}
          src="/assets/dots.svg"
          width={100}
          height={69}
          alt="Pontilhados"
        />
      </div>
    </div>
  );
}
