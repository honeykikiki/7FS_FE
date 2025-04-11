import { useQuery } from "@tanstack/react-query";
import { getFolderList } from "src/remote/folder";

function useFolderList() {
  return useQuery({
    queryKey: ["folderList"],
    queryFn: getFolderList,
  });
}

export default useFolderList;
