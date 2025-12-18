"use client";

import React from "react";
import { Button } from "../ui/button";
import { Clipboard } from "lucide-react";
import { StepContentProps } from "@/types";
import { MarkdownPreview } from "../MdPreview";
const Step3Content: React.FC<StepContentProps> = ({
  appState,
  setAppState,
}) => {
  return (
    <div className="h-full flex flex-col mt-4">
      <div className="flex flex-col h-full justify-center">
        <MarkdownPreview content={appState.finalMarkdown || ""} />
      </div>
      <Button
        disabled={appState.selectedSections.length === 0}
        className="mt-auto mx-auto w-1/2"
        onClick={() => {
          navigator.clipboard.writeText(appState.finalMarkdown || "");
        }}
      >
        Copy to Clipboard
        <Clipboard className="ml-2" />
      </Button>
    </div>
  );
};

export { Step3Content };
