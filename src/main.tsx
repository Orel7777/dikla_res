import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";
import "./index.css";
import App from "./App.tsx";
import LoadingWithLogo from "./components/LoadingWithLogo.tsx";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // מציג את אנימציית הטעינה לפרק זמן קצוב
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 שניות של אנימציה

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <LoadingWithLogo /> : <App />;
};

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(<Main />);
