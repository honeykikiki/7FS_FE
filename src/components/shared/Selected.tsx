import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { Typography } from "@styles/typography";
import { useBottomSheetContext } from "src/context/BottomSheetContext";
import Button from "./Button";
import Flex from "./Flex";
import Icons from "./Icons";
import Spacing from "./Spacing";
import MyText from "./Text";

type SelectType = "xs" | "sm" | "md" | "lg";

const SelectContainer = styled.div<{ size: SelectType }>`
  display: inline-flex;
  align-items: center;
  background-color: ${colors.selectedBg};
  border-radius: 8px;
  width: fit-content;
  cursor: pointer;
  color: #666;

  ${({ size }) => {
    switch (size) {
      case "xs":
        return "padding: 6px 10px;";
      case "sm":
        return "padding: 8px 12px;";
      case "md":
        return "padding: 10px 14px;";

      // lg
      default:
        return "padding: 10px 18px;";
    }
  }}
`;

export interface itemListProps {
  key: string;
  value: string | number;
}

interface SelectedProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  currentItem: itemListProps;
  setCurrentItem: Dispatch<SetStateAction<itemListProps>>;
  itemList: itemListProps[];
  size?: SelectType;
}

function Selected({ title, currentItem, setCurrentItem, itemList, size = "md", ...props }: SelectedProps) {
  const { open, close } = useBottomSheetContext();

  const Typography: Typography = size === "xs" ? "t7" : size === "sm" ? "t6" : size === "md" ? "t5" : "t4";

  return (
    <SelectContainer
      size={size}
      role="button"
      aria-haspopup="listbox"
      aria-expanded="false"
      onClick={() => {
        open({
          body: (
            <Flex direction="column" role="listbox">
              <MyText typography="t4" fontWeight="bold">
                {title}
              </MyText>
              <Spacing size={14} />
              {itemList.map((item, idx) => {
                const bSelected = item === currentItem;
                return (
                  <SelectedItem
                    key={item.key + idx}
                    bSelected={bSelected}
                    item={item}
                    onClick={(item) => {
                      setCurrentItem(item);
                      close();
                    }}
                  />
                );
              })}
            </Flex>
          ),
        });
      }}
      {...props}
    >
      <MyText typography={Typography}>{currentItem.key}</MyText>
      <Spacing size="md" direction="horizontal" />
      <Icons.ArrowBottom />
    </SelectContainer>
  );
}

interface SelectedItemProps {
  item: itemListProps;
  bSelected: boolean;
  onClick: (item: itemListProps) => void;
}

function SelectedItem({ item, bSelected, onClick }: SelectedItemProps) {
  return (
    <Button text={true} role="option" aria-selected={bSelected} full={true} onClick={() => onClick(item)}>
      <Flex justify="space-between" align="center">
        <MyText color={bSelected ? "primary" : "textColor"} fontWeight={bSelected ? "bold" : "normal"}>
          {item.key}
        </MyText>
        {bSelected && <Icons.Check color="primary" />}
      </Flex>
    </Button>
  );
}

export default Selected;
