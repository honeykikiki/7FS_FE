import { useState } from "react";
import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";
import InputCheckbox from "@components/shared/InputCheckBox";
import Selected, { itemListProps } from "@components/shared/Selected";
import Spacing from "@components/shared/Spacing";
import { css } from "@emotion/react";
import { colors } from "@styles/colorPlatte";
import { spacing } from "@styles/spacingPalette";
import { WebFolder } from "src/models/webFolder";

interface FolderTableProps {
  level: number;
  folder?: WebFolder[];
}

function FolderTable({ level, folder }: FolderTableProps) {
  const [select, setSelect] = useState<itemListProps>({ key: "20개씩", value: 20 });

  return (
    <div css={layoutStyle}>
      {/* 메인 컨텐츠 */}
      <main css={mainStyle}>
        <Flex justify="space-between">
          <Flex gap={spacing.md}>
            <Button>다운로드</Button>
            <Button>복사</Button>
            <Button>삭제</Button>
            <Button>이동</Button>
          </Flex>
          <Selected
            title="20개씩"
            currentItem={select}
            setCurrentItem={setSelect}
            itemList={[{ key: "20개씩", value: 20 }]}
          />
        </Flex>
        <Spacing size="lg" />

        <table css={tableStyle}>
          <thead>
            <tr>
              <th style={{ width: "10%" }}></th>
              <th>이름</th>
              <th>크기</th>
              <th>확장자</th>
              <th>등록날짜</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* 폴더 내부 인 경우 */}
            {level > 1 ? (
              <tr>
                <td colSpan={6}>
                  <a>...상위폴더</a>
                </td>
              </tr>
            ) : null}

            {/* 폴더 인 경우 */}
            {folder?.map((item) => (
              <tr key={item.folderNo}>
                <td colSpan={6}>
                  <a>📁 {item.folderNm}</a>
                </td>
              </tr>
            ))}

            <tr>
              <td>
                <InputCheckbox
                  checked
                  onChange={(e) => {
                    console.log(e.target.checked);
                  }}
                />
              </td>
              <td>1.jpeg</td>
              <td>925.1KB</td>
              <td>jpeg</td>
              <td>2025.04.08</td>
              <td>
                {/* <button css={actionBtnStyle}>미리보기</button> */}
                <button css={actionBtnStyle}>다운로드</button>
              </td>
            </tr>
            {/* 추가 행들 */}
          </tbody>
        </table>
      </main>
    </div>
  );
}

const layoutStyle = css`
  display: flex;
  height: 100vh;
  background-color: ${colors.background};
`;

const mainStyle = css`
  flex: 1;
  overflow-x: auto;
  background-color: ${colors.background};
`;

const tableHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const actionBtnStyle = css`
  background-color: ${colors.white};
  border: 1px solid ${colors.grayBorder};
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.hover};
  }
`;

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  background-color: ${colors.white};
  border: 1px solid ${colors.grayBorder};
  border-radius: 10px;
  overflow: hidden;

  th,
  td {
    padding: 1rem;
    border-bottom: 1px solid ${colors.grayBorder};
    font-size: 0.875rem;
  }

  th {
    background-color: ${colors.gray};
    text-align: left;
  }

  tbody tr:hover {
    background-color: ${colors.hover};
  }
`;

export default FolderTable;
