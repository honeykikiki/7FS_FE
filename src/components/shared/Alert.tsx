import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import Button from "./Button";

import Dimmed from "./Dimmed";
import Flex from "./Flex";
import Spacing from "./Spacing";
import MyText from "./Text";

export interface AlertProps {
  open: boolean;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirmClick?: () => void;
  onCancelClick?: () => void;
  bStretchButton?: boolean;
  bBackgroundClose?: boolean;
}

function Alert({
  open,
  title,
  description,
  confirmText = "확인",
  cancelText = "닫기",
  onConfirmClick,
  onCancelClick,
  bStretchButton = true,
  bBackgroundClose = true,
}: AlertProps) {
  if (open === false) {
    return null;
  }

  return (
    <Dimmed onClick={bBackgroundClose ? onCancelClick : () => {}}>
      <AlertContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Flex direction="column">
          <MyText typography="t3" fontWeight="bold">
            {title}
          </MyText>

          {description ? (
            <>
              <Spacing size="md" />
              <div
                css={{
                  overflowY: "scroll",
                  maxHeight: "50vh",
                }}
              >
                <MyText color="textSubColor">{description}</MyText>
              </div>
            </>
          ) : null}
        </Flex>

        <Spacing size="lg" />

        {bStretchButton ? (
          <Button.Group>
            <Button size="lg" color="gray" css={{ flex: 2 }} onClick={onCancelClick}>
              <MyText>{cancelText}</MyText>
            </Button>
            <Button size="lg" css={{ flex: 8 }} onClick={onConfirmClick}>
              {confirmText}
            </Button>
          </Button.Group>
        ) : (
          <Flex direction="column">
            <Button size="lg" full={true} onClick={onCancelClick}>
              {confirmText}
            </Button>
            <Spacing size="md" />
            <Button
              text={true}
              size="sm"
              full={true}
              color="gray"
              css={{ textAlign: "center" }}
              onClick={onConfirmClick}
            >
              {cancelText}
            </Button>
          </Flex>
        )}
      </AlertContainer>
    </Dimmed>
  );
}

const AlertContainer = styled.div`
  width: calc(100% - 60px);
  max-width: 420px;
  /* min-width: 330px; */
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  background-color: ${colors.background};
`;

export default Alert;
