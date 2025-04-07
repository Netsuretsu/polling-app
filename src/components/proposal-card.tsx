import React from "react";

export default function ProposalCard() {
  return (
    <div className="border-b py-4 flex flex-col space-y-4">
      <h4 className="font-bold">Election du nouveau Bureau des étudiants</h4>
      <div className="flex items-center space-x-2 text-sm font-medium">
        <span>#abcd par 0xBdoE...Edcx</span>
        <span className="font-bold">·</span>
        <span>50 votes</span>
        <span className="font-bold">·</span>
        <span>Il y a 4jrs</span>
      </div>
    </div>
  );
}
