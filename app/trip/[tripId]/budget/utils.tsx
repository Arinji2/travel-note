import { Spending } from "@/utils/types";

export function sortGroup({ spendingData }: { spendingData: Spending[] }) {
  let groups = [] as {
    name: string;
    total: string;
  }[];
  for (const spending of spendingData) {
    const existingGroup = groups.find((group) => group.name === spending.group);

    if (existingGroup) {
      existingGroup.total = (
        parseInt(existingGroup.total) + spending.amount
      ).toString();
    } else {
      groups.push({
        name: spending.group,
        total: spending.amount.toString(),
      });
    }
  }

  return groups;
}

export function sortCategory({ spendingData }: { spendingData: Spending[] }) {
  let categories = [] as {
    name: string;
    total: string;
  }[];

  for (const spending of spendingData) {
    const existingGroup = categories.find(
      (category) => category.name === spending.category
    );

    if (existingGroup) {
      existingGroup.total = (
        parseInt(existingGroup.total) + spending.amount
      ).toString();
    } else {
      categories.push({
        name: spending.category,
        total: spending.amount.toString(),
      });
    }
  }

  return categories;
}

export function getColor({
  spendingData,
}: {
  spendingData: {
    color: string;
  };
}) {
  let color = "";
  if (spendingData.color === "violet") color = "#8b5cf6";
  else if (spendingData.color === "green") color = "#22c55e";
  else if (spendingData.color === "yellow") color = "#eab308";

  return color;
}
