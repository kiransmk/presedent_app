export default function formatTimestamp(
  timestamp: string | number,
  template: string
): string {
  const date = new Date(timestamp);

  const placeholders: Record<string, string> = {
    YYYY: String(date.getFullYear()),
    YY: String(date.getFullYear()).slice(-2),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    DD: String(date.getDate()).padStart(2, "0"),
    HH: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
  };

  const formattedString = template.replace(
    /YYYY|YY|MM|DD|HH|mm|ss/g,
    (match) => {
      return placeholders[match];
    }
  );

  return formattedString;
}
