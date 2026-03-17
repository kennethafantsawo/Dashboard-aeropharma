"use client"; 

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <h2 className="text-2xl font-bold font-headline mb-4">
        Quelque chose s'est mal passé !
      </h2>
      <p className="text-muted-foreground mb-6 text-center">
        Une erreur inattendue est survenue. Veuillez réessayer.
      </p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Réessayer
      </Button>
    </div>
  );
}
