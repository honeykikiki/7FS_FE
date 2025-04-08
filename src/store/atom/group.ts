import { atom } from "recoil";

const defaultGroup = {
  name: "",
  introduce: "",
  address: "",
  approveYn: "true",
  bApproveQuestion: false,
};

type Item = typeof defaultGroup;

export const groupNewAtom = atom<Item>({
  key: "group/new",
  default: defaultGroup,
});
