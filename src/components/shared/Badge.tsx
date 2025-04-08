import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { BadgeSize, badgeSizeMap } from "@styles/components/badge";

interface BadgeProps {
  size?: BadgeSize;
}

export const BaseBadge = styled.div<BadgeProps>(
  {
    backgroundColor: colors.primary,
    color: colors.onlyWhite,
    width: "fit-content",
    lineHeight: 1.4,
    borderRadius: 20,
  },
  ({ size = "md" }) => badgeSizeMap[size],
);

const Badge = BaseBadge as typeof BaseBadge & {};

export default Badge;
