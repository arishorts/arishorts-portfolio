export const mediums = [
  { _id: "Word of Mouth", name: "Word of Mouth" },
  { _id: "Internet Search", name: "Internet Search" },
  { _id: "LinkedIn", name: "LinkedIn" },
  { _id: "Github", name: "Github" },
  { _id: "Networking", name: "Networking" },
];

export function getMediums() {
  return mediums.filter((g) => g);
}
