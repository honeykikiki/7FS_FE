import { AttachFile } from "./attachFile";

export enum StorageType {
  COMPANY = 0, // 전사 자료실
  DEPARTMENT = 1, // 부서 자료실
  PERSONAL = 2, // 개인 자료실
}

export interface WebFolder {
  folderPath: string;
  folderTy: string;
  deptCode: string | null;
  folderCreatDt: string | null;
  folderUpdtDt: string | null;
  folderDeleteYn: string | null;
  folderCreatEmpno: string;
  folderNo: number;
  upperFolderNo: number;
  folderNm: string;

  fileList: WebFolderFile[] | null;
}

export interface WebFolderFile {
  folderNo: number;
  atchFileNo: number;
  fileDwldCo: number;
  fileUploadEmpno: string;

  attachFileVO: AttachFile;
}
