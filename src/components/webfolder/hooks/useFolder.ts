import { useQuery } from "@tanstack/react-query";
import { StorageType } from "src/models/webFolder";
import { getFolder } from "src/remote/folder";

function useFolder(upperFolderNo: number[], selectDataRoom: StorageType, deptCode: string) {
  return useQuery({
    queryKey: ["folder", upperFolderNo, selectDataRoom, deptCode],
    queryFn: () => getFolder(upperFolderNo[upperFolderNo.length - 1].toString(), selectDataRoom, deptCode),
  });
}

export default useFolder;
