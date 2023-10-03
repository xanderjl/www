export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
