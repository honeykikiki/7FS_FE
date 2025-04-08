import { css } from "@emotion/react";
import { spacing } from "@styles/spacingPalette";
import DaumPostcode from "react-daum-postcode";
import Dimmed from "./Dimmed";

interface DaumAddressProps {
  onComplete: (data: any) => void;
  onClick: () => void;
}

function DaumAddress({ onComplete, onClick }: DaumAddressProps) {
  const onCompletePost = (data: any) => {
    onComplete(data);
    onClick();
  };

  return (
    <Dimmed onClick={onClick}>
      <div
        css={css`
          margin: 0 20px;
        `}
      >
        <DaumPostcode
          onComplete={onCompletePost}
          css={{
            maxWidth: "var(--max-width)",
            position: "absolute",
            // height: "auto",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            margin: `0 ${spacing.layout}`,
          }}
        />
      </div>
    </Dimmed>
  );
}

export default DaumAddress;
