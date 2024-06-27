"use client";

import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import { Problem } from "@prisma/client";
import Playground from "./Playground/Playground";

type WorkspaceProps = {
  problem: Problem;
};

export default function Workspace({ problem }: WorkspaceProps) {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem={problem} />
      <Playground />
    </Split>
  );
}
