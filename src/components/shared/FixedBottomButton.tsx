import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { createPortal } from "react-dom";
import Button from "./Button";

interface FixedBottomButtonProps {
  leftLabel?: string;
  onLeftClick?: () => void;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

function FixedBottomButton({ leftLabel, onLeftClick, label, onClick, disabled }: FixedBottomButtonProps) {
  // const $portalRoot = document.querySelector("#root-portal");
  const $portalRoot = typeof window === "undefined" ? null : document.querySelector("#root-portal");

  if ($portalRoot === null) {
    return null;
  }

  return createPortal(
    <Container>
      <div css={buttonStyle}>
        <Button.Group>
          {leftLabel !== undefined ? (
            <Button onClick={onLeftClick} color="gray" size="lg">
              {leftLabel}
            </Button>
          ) : null}
          <Button onClick={onClick} full={true} size="lg" disabled={disabled}>
            {label}
          </Button>
        </Button.Group>
      </div>
    </Container>,
    $portalRoot,
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  max-width: var(--max-width);
  background-color: ${colors.white};
`;

const buttonStyle = css`
  border-radius: 8px;
  padding: 10px 20px;
`;

export default FixedBottomButton;
