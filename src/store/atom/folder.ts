import { atom } from "recoil";
import { StorageType, WebFolder, WebFolderFile } from "src/models/webFolder";

const folderListDefaultValue = [1];

type Item = typeof folderListDefaultValue;

export const folderListState = atom<Item>({
  key: "folder/upperFolderNo",
  default: folderListDefaultValue,
});

// ---------------
const upperFolderNameDefaultValue = ["루트"];

type Item2 = typeof upperFolderNameDefaultValue;

export const upperFolderNameState = atom<Item2>({
  key: "folder/upperFolderName",
  default: upperFolderNameDefaultValue,
});

// -----

export const selectDataRoomState = atom<StorageType>({
  key: "folder/selectDataRoomState",
  default: StorageType.COMPANY,
});

// -----

export const setSelectFoldersState = atom<WebFolder[]>({
  key: "folder/setSelectFoldersState",
  default: [],
});

// -----

export const setSelectFilesState = atom<WebFolderFile[]>({
  key: "folder/setSelectFilesState",
  default: [],
});
