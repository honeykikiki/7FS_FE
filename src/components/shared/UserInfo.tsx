import { Colors } from "@styles/colorPlatte";
import { spacing } from "@styles/spacingPalette";
import Badge from "./Badge";
import Flex from "./Flex";
import Icons from "./Icons";
import ImageBox from "./ImageBox";
import Spacing from "./Spacing";
import MyText from "./Text";

interface UserInfoProps {
  name: string;
  nameColor: Colors;
  badgeText?: string;
  subContent?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement> | undefined) => void;
}
// e: React.MouseEvent<HTMLDivElement>
function UserInfo({ name, nameColor, badgeText, subContent, onClick }: UserInfoProps) {
  return (
    <Flex align="center" css={{ padding: `0 ${spacing.layout}px`, cursor: "pointer" }} onClick={onClick}>
      <ImageBox size="xs" shape="circle" src="" fallback={<Icons.User />} />
      <Spacing size="sm" direction="horizontal" />
      <Flex direction="column">
        <Flex>
          <MyText typography="t6" fontWeight="500" color={nameColor}>
            {name}
          </MyText>
          {badgeText !== undefined ? (
            <>
              <Spacing size="sm" direction="horizontal" />
              <Badge size="sm">온라인</Badge>
            </>
          ) : null}
        </Flex>
        {subContent !== undefined ? (
          <MyText typography="t7" color="textMutedColor">
            {subContent}
          </MyText>
        ) : null}
      </Flex>
    </Flex>
  );
}

export default UserInfo;
