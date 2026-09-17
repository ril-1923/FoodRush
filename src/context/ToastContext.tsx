import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";

export type ToastKind = "success" | "error" | "info";

interface ToastMessage {
  id: number;
  text: string;
  kind: ToastKind;
}

interface ToastContextValue {
  showToast: (text: string, kind?: ToastKind) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const counter = useRef(0);

  const showToast = useCallback((text: string, kind: ToastKind = "success") => {
    const id = ++counter.current;
    setToasts((prev) => [...prev, { id, text, kind }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-stack" aria-live="polite" aria-atomic="true">
        {toasts.map((t) => (
          <div key={t.id} className={`fr-toast fr-toast-${t.kind}`} role="status">
            <i
              className={`bi ${
                t.kind === "success" ? "bi-check-circle-fill" : t.kind === "error" ? "bi-x-circle-fill" : "bi-info-circle-fill"
              }`}
            />
            <span>{t.text}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
