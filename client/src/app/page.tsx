"use client";

import { Department } from "@/components/Department";
import { Product } from "@/components/Product";
import { api } from "@/services/api";
import styles from "@/styles/home.module.scss";
import { useQuery } from "@tanstack/react-query";
import { FetchProductsType } from "../../types/FetchProductsType";

export default function Home() {
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
            {data?.map((res) => {
              return <Product key={res.id} data={res} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
