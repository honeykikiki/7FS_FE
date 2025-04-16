import { StorageType, WebFolder, WebFolderFile } from "src/models/webFolder";
import apiClient from "./axios";

export const getFolder = async (upperFolderNo: string, selectDataRoom: StorageType, deptCode: string) => {
  try {
    const param = new URLSearchParams();
    param.append("upperFolderNo", upperFolderNo);
    param.append("folderTy", selectDataRoom.toString());
    param.append("deptCode", deptCode);

    const { data } = await apiClient.get("/api/webFolder/list?" + param);

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
    const { data } = await apiClient.post("/api/webFolder/insertFolder", formData);

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

    const { data } = await apiClient.post("/api/webFolder/insertFiles", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFolderList = async (selectDataRoom: StorageType, deptCode: string) => {
  const param = new URLSearchParams();
  param.append("folderTy", selectDataRoom.toString());
  param.append("deptCode", deptCode);

  try {
    const { data } = await apiClient.get("/api/webFolder/folderList?" + param);

    return {
      folderList: data.folderList as WebFolder[],
    };
  } catch (error) {
    console.log(error);
  }
};

export const deleteFiles = async (webFolderFiles: WebFolderFile[]) => {
  try {
    const { data } = await apiClient.post("/api/webFolder/deleteFiles", webFolderFiles);
    return {
      data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const deleteFolders = async (webFolder: WebFolder[]) => {
  try {
    const { data } = await apiClient.post("/api/webFolder/deleteFolders", webFolder);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDownLoadFolder = async (folderNo: number, folderName: string) => {
  try {
    const data = await apiClient.get("/api/webFolder/download-folder?", {
      params: {
        folderNo: folderNo.toString(),
        folderName: folderName,
      },
      responseType: "blob",
    });

    const blob = new Blob([data.data], { type: "application/zip" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", `${folderName}.zip`);
    document.body.append(link);
    link.click();
    link.remove();
  } catch (error) {
    console.log(error);
  }
};

export const getDownLoadFile = async (fileNoList: number[], folderName: string) => {
  try {
    const params = new URLSearchParams();
    params.append("folderName", folderName);
    fileNoList.forEach((item) => params.append("fileNoList", item.toString()));

    console.log(params);

    const data = await apiClient.get("/api/webFolder/download-file?" + params, {
      responseType: "blob",
    });

    const blob = new Blob([data.data], { type: "application/zip" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", `${folderName}.zip`);
    document.body.append(link);
    link.click();
    link.remove();
  } catch (error) {
    console.log(error);
  }
};

export const updateFileMove = async (targetFolder: WebFolder, moveFile: WebFolderFile) => {
  const { data } = await apiClient.post("/api/webFolder/file-move", { targetFolder, moveFile });

  return data;
};

export const updateFolderMove = async (targetFolder: WebFolder, moveFolder: WebFolder) => {
  const { data } = await apiClient.post("/api/webFolder/folder-move", { targetFolder, moveFolder });
  console.log(data);

  return data;
};
