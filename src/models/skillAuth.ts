export const skillAuthList = ["읽기", "쓰기", "수정", "삭제"] as const;
export type SkillAuthType = (typeof skillAuthList)[number];

export enum SkillAuthCode {
  READ = 0, // 읽기
  WRITE = 1, // 쓰기
  UPDATE = 2, // 수정
  DELETE = 3, // 삭제
}

export interface SkillAuth {
  emplNo: string;
  skllCode: string;
  skllAuthorCode: string;
  skillName: string;
}
