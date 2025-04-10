import { useState } from "react";
import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";
import Spacing from "@components/shared/Spacing";
import MyText from "@components/shared/Text";
import { css } from "@emotion/react";
import { colors } from "@styles/colorPlatte";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "src/context/AuthContext";
import { WebFolder } from "src/models/webFolder";
import FileUploadModal from "./FileUploadModal";

interface FolderSideProps {
  folder?: WebFolder[];
}

function FolderSide({ folder }: FolderSideProps) {
  const queryClient = useQueryClient();
  const { emp } = useAuthContext();
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <Flex direction="column" css={sidebarStyle}>
      {/*  현재 바라보고 있는 폴더 하위 폴더 선택만 가능했음 */}
      {/* 현재 폴더는 선택이 불가능 함 */}
      {showUploadModal && (
        <FileUploadModal
          folderList={folder ?? []}
          onUpload={async (files, folder) => {
            console.log("업로드할 파일:", files);
            console.log("대상 폴더:", folder);
            // await insertFiles(files, folder);
            queryClient.invalidateQueries({ queryKey: ["folder"] });
          }}
          onClose={() => setShowUploadModal(false)}
        />
      )}

      <Button
        full={true}
        size="lg"
        onClick={() => {
          setShowUploadModal(true);
        }}
      >
        파일 업로드
      </Button>

      <Spacing size="md" />
      <div css={folderTreeStyle}>
        <MyText typography="t5" fontWeight="500">
          자료실
        </MyText>
        <ul>
          <li>
            <MyText hoverColor="textColor">전사 자료실</MyText>
          </li>
          <li>
            <MyText color="textMutedColor" hoverColor="textColor">
              부서 자료실
            </MyText>
          </li>
        </ul>
        <Spacing size="md" />
        <MyText typography="t5" fontWeight="500">
          개인 자료실
        </MyText>
        <ul>
          <li>
            <MyText color="textMutedColor" hoverColor="textColor">
              {emp?.emplNm} 경영 참고
            </MyText>
          </li>
        </ul>
      </div>

      <Spacing size="md" />
      <Flex direction="column">
        <MyText hoverColor="primaryHover">전사 자료실 용량</MyText>

        <progress value={84.4} max={100} style={{ width: "100%" }} color={colors.primary}></progress>
        <small>10.0GB 중 84.4MB 사용</small>
      </Flex>
    </Flex>
  );
}

export default FolderSide;

const folderTreeStyle = css`
  margin-top: 1rem;
  font-size: 0.9rem;

  ul {
    list-style: none;
    padding-left: 1rem;

    li {
      margin: 0.4rem 0;
      color: ${colors.textMutedColor};
      cursor: pointer;

      &:hover {
        color: ${colors.primary};
      }
    }
  }
`;

const sidebarStyle = css`
  width: 260px;
  height: 84vh;
  background: ${colors.white};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
