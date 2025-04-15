import Flex from "@components/shared/Flex";
import Frame from "@components/shared/Frame";
import Spacing from "@components/shared/Spacing";
import FolderSide from "@components/webfolder/FolderSide";
import FolderTable from "@components/webfolder/FolderTable";
import useFolder from "@components/webfolder/hooks/useFolder";
import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { useAuthContext } from "src/context/AuthContext";
import { folderListState, selectDataRoomState } from "src/store/atom/folder";

function DataRoom() {
  const upperFolderNo = useRecoilValue(folderListState);
  // const [selectDataRoom, setSelectDataRoom] = useState<StorageType>(StorageType.COMPANY);
  const selectDataRoom = useRecoilValue(selectDataRoomState);
  const { emp } = useAuthContext();
  const { data } = useFolder(upperFolderNo, selectDataRoom, emp?.deptCode ?? "");

  return (
    <Frame title="자료실">
      <Flex>
        <FolderSide totalVolume={data?.totalVolume ?? 0} />
        <Spacing size="lg" direction="horizontal" />
        <Flex direction="column" css={wrapperStyle}>
          {/* 자료 목록 테이블 */}
          <FolderTable folder={data?.folder} files={data?.files} />
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
