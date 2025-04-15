import { useQuery } from "@tanstack/react-query";
import { StorageType } from "src/models/webFolder";
import { getFolderList } from "src/remote/folder";

function useFolderList(selectDataRoom: StorageType, deptCode: string) {
  return useQuery({
    queryKey: ["folderList"],
    queryFn: () => getFolderList(selectDataRoom, deptCode),
  });
}

export default useFolderList;
