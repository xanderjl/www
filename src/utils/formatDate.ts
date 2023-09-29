export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", { year: "numeric", month: "long" })
