"use client";

import { Toaster as SonnerToaster } from "react-hot-toast";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SonnerToaster
        position="bottom-right"
        toastOptions={{
          className: "bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-2xl text-slate-700",
          success: {
            className: "!border-green-500/30 !bg-green-50/40",
          },
          error: {
            className: "!border-red-500/30 !bg-red-50/40",
          },
          loading: {
            className: "!border-blue-500/30 !bg-blue-50/40",
          },
        }}
        gutter={8}
        containerStyle={{ bottom: '24px', right: '24px' }}
      />
    </>
  );
}