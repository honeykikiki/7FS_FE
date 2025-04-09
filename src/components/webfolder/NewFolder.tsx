import { useEffect, useRef, useState } from "react";
import Alert from "@components/shared/Alert";
import Button from "@components/shared/Button";
import { InputFiled } from "@components/shared/InputFiled";
import { useQueryClient } from "@tanstack/react-query";
import { insertFolder } from "src/remote/folder";

function NewFolder({ upperFolderNo }: { upperFolderNo: number[] }) {
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [folderName, setFolderName] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = async () => {
    if (isSubmitting) return; // 중복 방지
    if (folderName.length === 0) {
      setHasError(true);
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("???");
      await insertFolder(folderName, upperFolderNo[upperFolderNo.length - 1].toString());

      queryClient.invalidateQueries({ queryKey: ["folder", upperFolderNo] });
      setFolderName("");
      setAlertOpen(false);
      setHasError(false);
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
            hasError={hasError && !folderName}
            helpMessage="폴더명을 2자 이상 입력해주세요"
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
          setHasError(false);
        }}
      />
      <Button
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
