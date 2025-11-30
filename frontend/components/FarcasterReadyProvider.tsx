"use client";

import React, { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

interface Props {
  children: React.ReactNode;
}

export function FarcasterReadyProvider({ children }: Props) {
  useEffect(() => {
    (async () => {
      try {
        await sdk.actions.ready();
      } catch (error) {
        // Likely not running inside Farcaster miniapp; safe to ignore
        console.warn(
          "Farcaster ready() failed or not in miniapp context",
          error
        );
      }
    })();
  }, []);

  return <>{children}</>;
}
