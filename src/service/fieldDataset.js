export const field = [
  { _id: "a", name: "Physics" },
  { _id: "b", name: "Chemistry" },
  { _id: "c", name: "Medicine" },

];

export function getFields() {
  return field.filter(f => f);
}
