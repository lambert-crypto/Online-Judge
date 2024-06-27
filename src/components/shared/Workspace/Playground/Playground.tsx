"use client";

import React from "react";
import PreferenceNav from "./PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

export default function Playground() {
  return (
    <div className="flex flex-col relative">
      <PreferenceNav />
      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <CodeMirror
            value="int a = 5;"
            theme={tokyoNight}
            extensions={[cpp()]}
            style={{ fontSize: 16 }}
          ></CodeMirror>
        </div>
        <div>Test Cases</div>
      </Split>
    </div>
  );
}
