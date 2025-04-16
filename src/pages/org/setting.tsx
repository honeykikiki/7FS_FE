import { useState } from "react";
import DeptRow from "@components/org/DeptRows";
import EmpRows from "@components/org/EmpRows";
import OrgFrame from "@components/org/OrgFrame";
import SkillAuth from "@components/org/SkillAuth";
import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";
import Frame from "@components/shared/Frame";
import MyText from "@components/shared/Text";
import useDeptList from "@components/skillAuth/hooks/useDeptList";
import useSkillAuthList from "@components/skillAuth/hooks/useSkillAuthList";
import { css } from "@emotion/react";
import { spacing } from "@styles/spacingPalette";
import { useAlertContext } from "src/context/AlertContext";
import { useLoaderContext } from "src/context/LoaderContext";
import { CommonCode } from "src/models/commonCode";
import apiClient from "src/remote/axios";

function Setting() {
  const { data } = useDeptList();
  const { open } = useAlertContext();
  const { loader } = useLoaderContext();
  const [selectDept, setSelectDept] = useState<CommonCode | null>(null);
  const [selectLowDept, setSelectLowDept] = useState<CommonCode | null>(null);
  const [emplNo, setEmplNo] = useState("");
  const { data: skillAuthList } = useSkillAuthList(emplNo);

  return (
    <Frame title="권한 관리">
      <Flex
        gap={spacing.lg}
        css={css`
          max-height: 85vh;
        `}
      >
        {/* 상위 부서 */}
        <OrgFrame title="🗂️ 부서 목록">
          {data !== undefined && data.deptList?.length > 0 ? (
            data.deptList.map((dept) => {
              const checked = dept === selectDept;

              return (
                <DeptRow
                  key={dept.cmmnCode + dept.cmmnCodeNm}
                  checked={checked}
                  subText={
                    <MyText typography="t6" color="textMutedColor">
                      하위 부서
                      <MyText fontWeight="bold" typography="t6">
                        {" " + dept?.lowerDeptList.length}
                      </MyText>
                      개
                    </MyText>
                  }
                  onClick={() => {
                    setSelectLowDept(null);
                    setEmplNo("");

                    if (checked) {
                      setSelectDept(null);
                      return;
                    }

                    setSelectDept(dept);
                  }}
                  dept={dept}
                />
              );
            })
          ) : (
            <p className="text-gray-400">부서 정보가 없습니다</p>
          )}
        </OrgFrame>

        {/* 하위 부서 */}
        {selectDept !== null && selectDept?.lowerDeptList?.length > 0 ? (
          <OrgFrame title="🗂️ 하위 부서 목록">
            {selectDept.lowerDeptList.map((dept) => {
              const checked = dept === selectLowDept;

              return (
                <DeptRow
                  key={dept.cmmnCode + dept.cmmnCodeNm}
                  subText={
                    <MyText typography="t6" color="textMutedColor">
                      사원
                      <MyText fontWeight="bold" typography="t6">
                        {" " + dept?.employeeList.length}
                      </MyText>
                      명
                    </MyText>
                  }
                  onClick={() => {
                    setEmplNo("");

                    if (checked) {
                      setSelectLowDept(null);
                      return;
                    }

                    setSelectLowDept(dept);
                  }}
                  dept={dept}
                  checked={checked}
                />
              );
            })}
          </OrgFrame>
        ) : null}

        <OrgFrame title="👥 하위 부서 목록">
          {selectLowDept === null || selectLowDept.employeeList.length === 0
            ? "사원이 없습니다."
            : selectLowDept?.employeeList.map((emp) => {
                const checked = emp.emplNo === emplNo;

                return (
                  <EmpRows
                    key={emp.emplNo}
                    emp={emp}
                    checked={checked}
                    onClick={() => {
                      if (checked) {
                        setEmplNo("");
                        return;
                      }
                      setEmplNo(emp.emplNo);
                    }}
                  />
                );
              })}
        </OrgFrame>

        <OrgFrame
          title="권한 관리 화면"
          style={{
            minWidth: "440px",
          }}
          subContent={
            <Button
              onClick={async () => {
                loader(true);
                const { data } = await apiClient.post("/api/skill/update", skillAuthList?.skillAuth);
                loader(false);
                if (data.success === true) {
                  open({
                    title: "권한 수정 완료",
                  });
                }
              }}
            >
              수정
            </Button>
          }
        >
          {skillAuthList !== undefined && skillAuthList?.skillAuth.length > 0
            ? skillAuthList.skillAuth.map((skill) => <SkillAuth key={skill.skllCode + skill.emplNo} skill={skill} />)
            : "사원을 선택해주세요."}
        </OrgFrame>
      </Flex>
    </Frame>
  );
}

// const Container = styled(Flex)`

//   border-radius: 8px;
//   border: 1px solid ${colors.grayBorder};
//   padding: ${spacing.layout}px;
//   background-color: ${colors.white};
//   ${boxShadow}
// `;

export default Setting;
