import { useQuery } from "@tanstack/react-query";
import { getFolder } from "src/remote/folder";

function useFolder(upperFolderNo: string) {
  return useQuery({ queryKey: ["folder", upperFolderNo], queryFn: () => getFolder(upperFolderNo) });
}

export default useFolder;
