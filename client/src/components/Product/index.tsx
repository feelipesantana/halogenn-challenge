import Image from "next/image";
import { FetchProductsType } from "../../../types/FetchProductsType";
import styles from "./styles.module.scss";

interface ProductsProps {
  data: FetchProductsType;
  isLoading: boolean;
}
export function Product({ data, isLoading }: ProductsProps) {
  return (
    <section className={styles.product}>
      <div className={styles.imgProduct}>
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + data.image}
          width={500}
          height={500}
          alt="Imagem Produto"
        />
      </div>

      <div className={styles.productContainerInfo}>
        <p>
          <h4>{data.name}</h4>
          <span>Nota: {data.rate}</span>
        </p>
        <span className={styles.productRate}>R$ {data.price}</span>
      </div>
    </section>
  );
}
