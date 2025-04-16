import { useQuery } from "@tanstack/react-query";
import { getSkillAuth } from "src/remote/org";

function useSkillAuthList(emplNo: string) {
  return useQuery({
    queryKey: ["skillAuth", emplNo],
    queryFn: () => getSkillAuth(emplNo),
  });
}

export default useSkillAuthList;
