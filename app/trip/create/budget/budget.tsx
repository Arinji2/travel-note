"use client";

import { useState } from "react";
import SetBudget from "./preplanned";
import BudgetCounter from "./budgetCounter";
import SaveButon from "./saveButton";

function BudgetGroup() {
  const [preBudget, hasPreBudget] = useState(true);
  return (
    <div className="w-full md:w-[60%] h-full flex flex-col items-center justify-center md:pt-0 pt-10 md:gap-0 gap-20">
      <SetBudget budget={preBudget} setBudget={hasPreBudget} />
      <BudgetCounter flag={preBudget} />
      <SaveButon />
    </div>
  );
}

export default BudgetGroup;
