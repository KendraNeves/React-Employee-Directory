export const field = [
  { _id: "a", name: "Physics" },
  { _id: "b", name: "Chemistry" },
  { _id: "c", name: "Medicine" }
];

export function getGenres() {
  return field.filter(f => f);
}
