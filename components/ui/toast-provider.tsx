"use client";

import { Toaster as SonnerToaster } from "react-hot-toast";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SonnerToaster
        position="top-right"
        toastOptions={{
          className: "!bg-white/40 !backdrop-blur-md !border !border-white/60 !shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] !rounded-full !text-slate-900 !font-semibold !px-6 !py-3 !text-sm",
          success: {
            className: "!border-emerald-500/30 !bg-emerald-500/10 !text-emerald-900 !backdrop-blur-md",
          },
          error: {
            className: "!border-red-500/30 !bg-red-500/10 !text-red-900 !backdrop-blur-md",
          },
          loading: {
            className: "!border-sky-500/30 !bg-sky-500/10 !text-sky-900 !backdrop-blur-md",
          },
        }}
        gutter={8}
        containerStyle={{ top: '24px', right: '24px' }}
      />
    </>
  );
}