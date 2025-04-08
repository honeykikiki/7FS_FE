import styled from "@emotion/styled";
import { LoaderAnimation } from "@styles/animation/Loader";
import Dimmed from "./Dimmed";

function Loader({ open }: { open: boolean }) {
  if (open === false) {
    return null;
  }

  return (
    <Dimmed>
      <LoaderContainer />
    </Dimmed>
  );
}

const LoaderContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(circle closest-side, #fff 90%, #0000);
  background:
    var(--_g) 0% 50%,
    var(--_g) 50% 50%,
    var(--_g) 100% 50%;
  background-size: calc(100% / 3) 100%;

  animation: ${LoaderAnimation} 1s infinite linear;
`;

export default Loader;
