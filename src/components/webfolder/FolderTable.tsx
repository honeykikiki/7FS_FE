import { Dispatch, SetStateAction, useState } from "react";
import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";
import Selected, { itemListProps } from "@components/shared/Selected";
import Spacing from "@components/shared/Spacing";
import MyText from "@components/shared/Text";
import { css } from "@emotion/react";
import { colors } from "@styles/colorPlatte";
import { spacing } from "@styles/spacingPalette";
import { WebFolder, WebFolderFile } from "src/models/webFolder";
import NewFolder from "./NewFolder";
import WebFile from "./WebFile";

interface FolderTableProps {
  upperFolderNo: number[];
  setUpperFolderNo: Dispatch<SetStateAction<number[]>>;
  folder?: WebFolder[];
  files?: WebFolderFile[];
}

function FolderTable({ upperFolderNo, setUpperFolderNo, folder, files }: FolderTableProps) {
  const [select, setSelect] = useState<itemListProps>({ key: "20개씩", value: 20 });

  return (
    <div css={layoutStyle}>
      <main css={mainStyle}>
        <Flex justify="space-between">
          <Flex gap={spacing.md}>
            <NewFolder upperFolderNo={upperFolderNo} />
            <Button>다운로드</Button>
            <Button>복사</Button>
            <Button>삭제</Button>
            <Button>이동</Button>
            <Button onClick={() => setUpperFolderNo([1])}>처음으로</Button>
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
              <th></th>
              <th>이름</th>
              <th>크기</th>
              <th>확장자</th>
              <th>등록일</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* 폴더 내부 인 경우 */}
            {upperFolderNo.length > 1 ? (
              <tr
                css={css`
                  cursor: pointer;
                `}
                onClick={() => {
                  const newUpperFolderNo = [...upperFolderNo.slice(0, -1)];
                  setUpperFolderNo(newUpperFolderNo);
                }}
              >
                <td colSpan={6}>
                  <MyText>...상위폴더</MyText>
                </td>
              </tr>
            ) : null}

            {/* 폴더 인 경우 */}
            {folder?.map((item) => (
              <tr
                css={css`
                  cursor: pointer;
                `}
                key={item.folderNo}
                onClick={() => {
                  if (upperFolderNo.includes(item.folderNo)) return;

                  setUpperFolderNo((prevList) => [...prevList, item.folderNo]);
                  // 이전 상위 폴더로 가기
                }}
              >
                <td>📁</td>
                <td colSpan={5}>
                  <MyText> {item.folderNm}</MyText>
                </td>
              </tr>
            ))}

            {files?.map((file) => <WebFile key={file.atchFileNo} {...file} />)}
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
