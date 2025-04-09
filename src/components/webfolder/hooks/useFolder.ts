import { useQuery } from "@tanstack/react-query";
import { getFolder } from "src/remote/folder";

function useFolder(upperFolderNo: number[]) {
  return useQuery({
    queryKey: ["folder", upperFolderNo],
    queryFn: () => getFolder(upperFolderNo[upperFolderNo.length - 1].toString()),
  });
}

export default useFolder;
