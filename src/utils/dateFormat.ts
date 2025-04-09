import dayjs from "dayjs";

interface dateFormatProps {
  date: string;
  format?: string;
}

function dateFormat({ date, format = "YYYY.MM.DD HH:MM" }: dateFormatProps) {
  const formatDate = dayjs(date).format(format);
  return formatDate;
}

export default dateFormat;
