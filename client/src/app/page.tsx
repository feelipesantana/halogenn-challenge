"use client";

import { Department } from "@/components/Department";
import { Product } from "@/components/Product";
import { api } from "@/services/api";
import styles from "@/styles/home.module.scss";
import { useQuery } from "@tanstack/react-query";
import { FetchProductsType } from "../../types/FetchProductsType";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Home() {
  const blockData = useSelector((state: RootState) => state.department);

  const { data, error } = useQuery<FetchProductsType[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  async function getProducts() {
    try {
      const response = await api.get("/products");
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className={styles.main}>
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
            image={blockData.thirdBlock.image}
          />
        </div>
      </div>
      <div className="baseContainer">
        <div className={styles.productsContainer}>
          <h2>PRODUTOS</h2>

          <div className={styles.productsContent}>
            {data?.map((res) => {
              return <Product key={res.id} data={res} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
