"use client";
import React from "react";
import dynamic from "next/dynamic";

import Label from "@/components/bootstrap/button/labelButton";

const ModalContainer = dynamic(
  () => import("@/components/bootstrap/container/modalContainer"),
  { ssr: false },
);

export default function Home() {
  const [state, setState] = React.useState<boolean>(true);
  return (
    <div className="w-full h-h-header bg-fg-focus">
      {state && (
        <ModalContainer onClose={() => setState(false)}>
          <Label
            text="클릭zzzzzzzz"
            size="mid"
            bgColorClass="bg-fg-focus"
            textColorClass="text-white"
          />
        </ModalContainer>
      )}
    </div>
  );
}
