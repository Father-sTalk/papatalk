import React from "react";

import { useSosTabStore } from "@/store/store_sos_tab";
interface Tab {
  text: string;
  value: SosTabs;
}
const tabs: Tab[] = [
  { text: "전체", value: "all" },
  { text: "답변을 기다리는 질문", value: "wait" },
  { text: "해결된 질문", value: "solved" },
];

const SosTabs: React.FC = () => {
  const { currentTab, setTab } = useSosTabStore();

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => {
        const fontStyle =
          currentTab === tab.value ? "text-secondary-500 font-bold" : "";
        const boxStyle =
          currentTab === tab.value ? "border-b-1 border-secondary-500" : "";
        return (
          <div
            key={tab.value}
            className={`p-2 ${boxStyle}`}
            onClick={() => setTab(tab.value)}
            role="button"
          >
            <span
              className={`h-5 flex items-center justify-center ${fontStyle}`}
            >
              {tab.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SosTabs;
