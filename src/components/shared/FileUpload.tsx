import { useRef, useState, useCallback } from "react";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import Flex from "./Flex";
import Icons from "./Icons";
import ImageBox from "./ImageBox";

interface FileUploadProps {
  returnFile: (file: File) => void;
}

function FileUpload({ returnFile }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }

      const file = e.target.files[0];

      // 기존 파일 URL을 해제하여 메모리 누수 방지
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }

      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      returnFile(file);
    },
    [previewImage, returnFile],
  );

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.click();
  }, []);

  const onClickImageRemove = useCallback(() => {
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }

    if (inputRef.current) {
      inputRef.current.value = ""; // input 값 리셋
    }

    setPreviewImage("");
  }, [previewImage]);

  return (
    <>
      <Flex gap={10}>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onUploadImage}
          css={{ display: "none" }} // 숨기기
        />

        <ImageBox icon={<Icons.Image />} alt="미리보기 이미지" size="md" onClick={onUploadImageButtonClick} />

        {/* 이미지 미리보기 */}
        {previewImage && (
          <ImageContainer>
            <ImageBox src={previewImage} alt="미리보기 이미지" size="md" />
            <Close onClick={onClickImageRemove}>
              <Icons.Xmark color="white" />
            </Close>
          </ImageContainer>
        )}
      </Flex>
    </>
  );
}
const ImageContainer = styled.div`
  position: relative;
`;

const Close = styled.div`
  position: absolute;
  right: -5px;
  top: -5px;
  background-color: ${colors.black};
  border-radius: 50%;
  padding: 3px;
  width: 16px;
  height: 16px;
`;

export default FileUpload;
