"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ReduxProvider } from "./ReduxProvider";

export function AppProvider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <ReduxProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ReduxProvider>
  );
}
