import { CommonCode } from "src/models/commonCode";
import { SkillAuth } from "src/models/skillAuth";
import apiClient from "./axios";

export const getDeptList = async () => {
  const { data } = await apiClient.get("/api/org/deptList");

  return {
    deptList: data.deptList as CommonCode[],
  };
};

export const getSkillAuth = async (emplNo: string) => {
  const param = new URLSearchParams();
  param.append("emplNo", emplNo);

  const { data } = await apiClient.get("/api/skill/getAuth?" + param);

  return {
    skillAuth: data.skillAuth as SkillAuth[],
  };
};
