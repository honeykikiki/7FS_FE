import { atom } from "recoil";

const folderListDefaultValue = [1];

type Item = typeof folderListDefaultValue;

export const folderListState = atom<Item>({
  key: "folder/upperFolderNo",
  default: folderListDefaultValue,
});

const upperFolderNameDefaultValue = ["루트"];

type Item2 = typeof upperFolderNameDefaultValue;

export const upperFolderNameState = atom<Item2>({
  key: "folder/upperFolderName",
  default: upperFolderNameDefaultValue,
});
