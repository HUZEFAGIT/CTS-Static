import { useEffect, useMemo, useRef, useState } from "react";
import { ToastContext } from "../utils/toast-context";
import { IoCloseSharp } from "react-icons/io5";

function useTimeout(callbackFunction: () => void) {
  const savedCallback = useRef(callbackFunction);

  useEffect(() => {
    savedCallback.current = callbackFunction;
  }, [callbackFunction]);

  useEffect(() => {
    const functionId = setTimeout(() => savedCallback.current(), 3000);

    return () => clearTimeout(functionId);
  }, []);
}

type ToastProperties = {
  message: string;
  close: () => void;
};

export function Toast({ message, close }: ToastProperties) {
  useTimeout(() => {
    close();
  });

  return (
    <div className="relative p-4 w-[350px] bg-purple-100 text-purple-900 font-semibold border-l-8 border-purple-500 rounded-md animate-slide-in-right">
      <p>{message}</p>
      <button
        onClick={close}
        className="absolute top-4 right-4 text-2xl text-purple-500 cursor-pointer focus:outline-purple-400"
      >
        <IoCloseSharp />
      </button>
    </div>
  );
}

type ToastProviderProperties = {
  children: React.ReactElement;
};

type ToastType = {
  message: string;
  id: number;
};

export function ToastProvider({ children }: ToastProviderProperties) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  function openToast(message: string) {
    const newToast = {
      id: Date.now(), //unique ID
      message: message,
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  }

  function closeToast(id: number) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }

  const contextValue = useMemo(
    () => ({
      open: openToast,
      close: closeToast,
    }),
    []
  );

  return (
    <>
      <ToastContext.Provider value={contextValue}>
        {children}
        <div className="fixed bottom-2 right-2 flex flex-col gap-2 md:bottom-4 md:right-4">
          {toasts &&
            toasts.map((toast) => {
              return (
                <Toast
                  key={toast.id}
                  message={toast.message}
                  close={() => closeToast(toast.id)}
                />
              );
            })}
        </div>
      </ToastContext.Provider>
    </>
  );
}
