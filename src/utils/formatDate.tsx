export default function formatUnixTimestamp(unixTimestamp: number) {
  const date = new Date(unixTimestamp);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return `${formattedDate} at ${formattedTime}`;
}
