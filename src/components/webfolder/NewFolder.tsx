import { useEffect, useRef, useState } from "react";
import Alert from "@components/shared/Alert";
import Button from "@components/shared/Button";
import { InputFiled } from "@components/shared/InputFiled";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { WebFolder } from "src/models/webFolder";
import { insertFolder } from "src/remote/folder";
import { folderListState } from "src/store/atom/folder";

interface NewFolderProps {
  // upperFolderNo: number[];
  // setUpperFolderNo: Dispatch<SetStateAction<number[]>>;
  folder?: WebFolder[];
}

function NewFolder({ folder }: NewFolderProps) {
  const upperFolderNo = useRecoilValue(folderListState);
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [folderName, setFolderName] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [hasError, setHasError] = useState({
    error: false,
    helpMessage: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = async () => {
    if (isSubmitting) return; // 중복 방지
    console.log(folderName.length);

    if (folderName.length <= 1) {
      setHasError({
        error: true,
        helpMessage: "폴더명을 2자 이상 입력해주세요",
      });
      return;
    }

    if (folder?.filter((item) => item.folderNm === folderName).length ?? 0 > 0) {
      setHasError({
        error: true,
        helpMessage: "이미 있는 폴더명 입니다",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await insertFolder(folderName, upperFolderNo[upperFolderNo.length - 1].toString());

      queryClient.invalidateQueries({ queryKey: ["folder", upperFolderNo] });
      setFolderName("");
      setAlertOpen(false);
      setHasError((prev) => ({
        ...prev,
        error: false,
      }));
      return true;
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (alertOpen) {
      inputRef.current?.focus();
    }
  }, [alertOpen]);

  return (
    <>
      <Alert
        open={alertOpen}
        title="새폴더 추가"
        description={
          <InputFiled
            ref={inputRef}
            value={folderName}
            placeholder="새 폴더 명을 입력해주세요."
            hasError={hasError.error}
            helpMessage={hasError.helpMessage}
            onChange={(e) => {
              setFolderName(e.target.value.trim());
            }}
            maxLength={10}
            enterClick={handleConfirm}
          />
        }
        onConfirmClick={handleConfirm}
        onCancelClick={() => {
          setFolderName("");
          setAlertOpen(false);
          setHasError((prev) => ({
            ...prev,
            error: false,
          }));
        }}
      />
      <Button
        size="xs"
        onClick={() => {
          setAlertOpen(true);
        }}
      >
        새폴더
      </Button>
    </>
  );
}

export default NewFolder;
