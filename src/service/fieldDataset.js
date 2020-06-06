export const field = [
  { _id: "a", name: "Physics" },
  { _id: "b", name: "Chemistry" },
  { _id: "c", name: "Medicine" },
  { _id: "d", name: "Biology" }
];

export function getFields() {
  return field.filter(f => f);
}
