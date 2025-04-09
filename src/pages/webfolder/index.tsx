import { useState } from "react";
import Flex from "@components/shared/Flex";
import Frame from "@components/shared/Frame";
import Spacing from "@components/shared/Spacing";
import FolderSide from "@components/webfolder/FolderSide";
import FolderTable from "@components/webfolder/FolderTable";
import useFolder from "@components/webfolder/hooks/useFolder";
import { css } from "@emotion/react";

function DataRoom() {
  const [upperFolderNo, setUpperFolderNo] = useState(2);
  const { data } = useFolder(upperFolderNo.toString());

  console.log(data);

  return (
    <Frame title="자료실">
      <Flex>
        <FolderSide />
        <Spacing size="lg" direction="horizontal" />
        <Flex direction="column" css={wrapperStyle}>
          {/* 자료 목록 테이블 */}
          <FolderTable level={upperFolderNo} folder={data?.folder} />
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
