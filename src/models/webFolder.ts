import { AttachFile } from "./attachFile";

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
