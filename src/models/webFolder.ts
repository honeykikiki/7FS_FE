import { AttachFile } from "./attachFile";

export interface WebFolder {
  folderPath: string;
  folderTy: string;
  deptCode: string;
  folderCreatDt: string;
  folderUpdtDt: string;
  folderDeleteYn: string;
  folderCreatEmpno: string;
  folderNo: number;
  upperFolderNo: number;
  folderNm: string;

  fileList: WebFolderFile[];
}

export interface WebFolderFile {
  folderNo: number;
  atchFileNo: number;
  fileDwldCo: number;
  fileUploadEmpno: string;

  attachFileVO: AttachFile;
}
