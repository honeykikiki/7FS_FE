import { WebFolder } from "src/models/webFolder";
import apiClient from "./axios";

export const getFolder = async (upperFolderNo: string) => {
  const { data } = await apiClient.get("/webFolder/list?level=" + upperFolderNo);

  return {
    folder: data.folder as WebFolder[],
  };
};
