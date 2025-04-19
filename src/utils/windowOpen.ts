import { DEFAULT_URL } from "src/remote/axios";

function windowOpen(url: string, path: string) {
  const width = 800;
  const height = 600;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  window.open(
    DEFAULT_URL + url + encodeURIComponent(path),
    "_blank",
    `width=${width},height=${height},left=${left},top=${top},resizable=no,toolbar=no,menubar=no,scrollbars=yes,status=no`,
  );
}

export default windowOpen;
