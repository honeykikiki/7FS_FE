import { WebFolder, WebFolderFile } from "src/models/webFolder";
import apiClient from "./axios";

export const getFolder = async (upperFolderNo: string) => {
  const { data } = await apiClient.get("/webFolder/list?upperFolderNo=" + upperFolderNo);

  return {
    folder: data.folder as WebFolder[],
    files: data.file as WebFolderFile[],
  };
};

export const downLoadFile = async (filePath: string) => {
  const { data } = await apiClient.get("/download?fileName=" + filePath);

  return data;
};

export const insertFolder = async (folderNm: string, upperFolderNo: string) => {
  const formData = new FormData();
  formData.append("folderNm", folderNm);
  formData.append("upperFolderNo", upperFolderNo);
  const { data } = await apiClient.post("/webFolder/insertFolder", formData);

  return {
    data: data as WebFolder,
  };
};
