import servers from "./ServerData.json";

export const stopPoints = [
  { value: 0, label: "all" },
  { value: 1, label: "250GB" },
  { value: 2, label: "500GB" },
  { value: 3, label: "1TB" },
  { value: 4, label: "2TB" },
  { value: 5, label: "3TB" },
  { value: 6, label: "4TB" },
  { value: 7, label: "8TB" },
  { value: 8, label: "12TB" },
  { value: 9, label: "24TB" },
  { value: 10, label: "48TB" },
  { value: 11, label: "72TB" },
];

export const ramValue = [
  "4GB",
  "8GB",
  "12GB",
  "16GB",
  "24GB",
  "32GB",
  "48GB",
  "64GB",
  "96GB",
];

export const hardDiskValue = ["SAS", "SATA", "SSD"];

export const locations = [...new Set(servers.map((server) => server.Location))];
