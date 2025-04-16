import { useQuery } from "@tanstack/react-query";
import { getDeptList } from "src/remote/org";

function useDeptList() {
  return useQuery({
    queryKey: ["deptList"],
    queryFn: getDeptList,
  });
}

export default useDeptList;
