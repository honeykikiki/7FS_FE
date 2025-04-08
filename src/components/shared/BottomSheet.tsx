import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SlideDown, SlideUp } from "@styles/animation/Blank";
import { colors } from "@styles/colorPlatte";
import Dimmed from "./Dimmed";
import { wrapperMaxWidth } from "./Wrapper";

interface BottomSheetProps {
  open?: boolean;
  closeAnimation?: boolean;
  body: React.ReactNode;
  onClick?: () => void;
}

const BottomSheet = ({ open, body, onClick, closeAnimation }: BottomSheetProps) => {
  if (open === false) {
    return null;
  }

  return (
    <Dimmed onClick={onClick}>
      <SheetContainer
        closeAnimation={closeAnimation ?? false}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {body}
      </SheetContainer>
    </Dimmed>
  );
};

const SheetContainer = styled.div<{ closeAnimation: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colors.background};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px 18px;
  box-sizing: border-box;
  z-index: var(--bottom-sheet-z-index);

  ${wrapperMaxWidth}

  animation: ${({ closeAnimation }) =>
    closeAnimation
      ? css`
          ${SlideDown} 0.15s ease-out
        `
      : css`
          ${SlideUp} 0.15s ease-out
        `};
`;

export default BottomSheet;
