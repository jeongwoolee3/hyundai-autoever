import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { worker } from "./mocks/browser";

async function bootstrap() {
  if (import.meta.env.DEV) {
    await worker.start();
  }
  const queryClient = new QueryClient();
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>
  );
}

bootstrap();
