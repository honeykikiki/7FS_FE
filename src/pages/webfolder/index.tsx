import { useState } from "react";
import Flex from "@components/shared/Flex";
import Frame from "@components/shared/Frame";
import Spacing from "@components/shared/Spacing";
import FolderSide from "@components/webfolder/FolderSide";
import FolderTable from "@components/webfolder/FolderTable";
import useFolder from "@components/webfolder/hooks/useFolder";
import { css } from "@emotion/react";

function DataRoom() {
  const [upperFolderNo, setUpperFolderNo] = useState([1]);
  const { data } = useFolder(upperFolderNo);

  return (
    <Frame title="자료실">
      <Flex>
        <FolderSide folder={data?.folder} />
        <Spacing size="lg" direction="horizontal" />
        <Flex direction="column" css={wrapperStyle}>
          {/* 자료 목록 테이블 */}
          <FolderTable
            upperFolderNo={upperFolderNo}
            setUpperFolderNo={setUpperFolderNo}
            folder={data?.folder}
            files={data?.files}
          />
        </Flex>
      </Flex>
    </Frame>
  );
}

export default DataRoom;

const wrapperStyle = css`
  width: 100%;
  gap: 20px;
`;
