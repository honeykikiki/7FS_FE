import { Employee } from "./employee";

export interface CommonCode {
  cmmnCodeGroup: string;
  cmmnCode: string;
  cmmnCodeNm: string;
  cmmnCodeDc: string;
  useYn: string;
  upperCmmnCode: string;
  cmmnCodeSn: number;
  lowerDeptList: CommonCode[];
  employeeList: Employee[];
}
