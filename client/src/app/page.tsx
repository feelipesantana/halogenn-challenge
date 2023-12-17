"use client";

import { Department } from "@/components/Department";
import { Product } from "@/components/Product";
import { api } from "@/services/api";
import styles from "@/styles/home.module.scss";
import { useQuery } from "@tanstack/react-query";
import { FetchProductsType } from "../../types/FetchProductsType";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LayoutSkeleton } from "@/components/LayoutSkeleton";

export default function Home() {
  const { data, error, isLoading } = useQuery<FetchProductsType[]>({
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
            title="PRODUTOS"
            description="Vidrarias e Equipamentos"
            image="lab"
          />
          <Department
            title="QUÍMICOS"
            description="Materiais Químicos"
            image="bottle"
          />
          <Department
            title="LABORATÓRIOS"
            description="Ferramentas e utensílios"
            image="tools"
          />
        </div>
      </div>
      <div className="baseContainer">
        <div className={styles.productsContainer}>
          <h2>PRODUTOS</h2>

          <div className={styles.productsContent}>
            {isLoading ? (
              <SkeletonTheme baseColor="rgb(75, 85, 99)" highlightColor="#444">
                <LayoutSkeleton />
                <LayoutSkeleton />
                <LayoutSkeleton />
              </SkeletonTheme>
            ) : (
              data?.map((res) => {
                return (
                  <Product key={res.id} data={res} isLoading={isLoading} />
                );
              })
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
