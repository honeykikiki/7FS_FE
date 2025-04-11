import { WebFolder, WebFolderFile } from "src/models/webFolder";
import apiClient from "./axios";

export const getFolder = async (upperFolderNo: string) => {
  try {
    console.log(upperFolderNo);

    const { data } = await apiClient.get("/webFolder/list?upperFolderNo=" + upperFolderNo);

    return {
      totalVolume: data.totalVolume as number,
      folder: data.folder as WebFolder[],
      files: data.file as WebFolderFile[],
    };
  } catch (error) {
    console.log(error);
  }
};

export const downLoadFile = async (filePath: string) => {
  try {
    const { data } = await apiClient.get("/download?fileName=" + filePath);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const insertFolder = async (folderNm: string, upperFolderNo: string) => {
  try {
    const formData = new FormData();
    formData.append("folderNm", folderNm);
    formData.append("upperFolderNo", upperFolderNo);
    const { data } = await apiClient.post("/webFolder/insertFolder", formData);

    return {
      data: data as WebFolder,
    };
  } catch (error) {
    console.log(error);
  }
};

export const insertFiles = async (files: File[], folder: WebFolder) => {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("uploadFile", file);
    });
    formData.append("folderNo", folder.folderNo.toString());
    formData.append("folderPath", folder.folderPath ?? "/");

    const { data } = await apiClient.post("/webFolder/insertFiles", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFolderList = async () => {
  try {
    const { data } = await apiClient.get("/webFolder/folderList");

    return {
      folderList: data.folderList as WebFolder[],
    };
  } catch (error) {
    console.log(error);
  }
};

export const deleteFiles = async (webFolderFiles: WebFolderFile[]) => {
  try {
    const { data } = await apiClient.post("/webFolder/deleteFiles", webFolderFiles);
    return {
      data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const deleteFolders = async (webFolder: WebFolder[]) => {
  try {
    const { data } = await apiClient.post("/webFolder/deleteFolders", webFolder);
    return data;
  } catch (error) {
    console.log(error);
  }
};
