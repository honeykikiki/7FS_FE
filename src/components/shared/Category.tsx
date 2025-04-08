import { CSSProperties, MouseEvent, useState } from "react";
import Button from "@components/shared/Button";
import ScrollContainer from "@components/shared/ScrollContainer";
import { spacing } from "@styles/spacingPalette";

interface CategoryProps {
  onChange: (category: string[]) => void;
  defaultCategoryList?: string[];
  style?: CSSProperties;
}

const categories = [
  "아동부",
  "유치부",
  "초등",
  "대학부",
  "청년부",
  "1교구",
  "2교구",
  "3교구",
  "4교구",
  "5교구",
  "6교구",
  "7교구",
  "8교구",
  "9교구",
  "10교구",
  "11교구",
];

function Category({ onChange, defaultCategoryList, style }: CategoryProps) {
  const [categoryList, setCategoryList] = useState<string[]>(defaultCategoryList ?? []);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const category = event.currentTarget.name;

    let newCategoryList = [];

    if (categoryList.includes(category)) {
      // 들어있으면 제외 하고 추가
      newCategoryList = categoryList.filter((item) => item !== category);
    } else {
      newCategoryList = [...categoryList, category];
    }

    setCategoryList(newCategoryList);
    onChange(newCategoryList);
  };

  return (
    <ScrollContainer gap={spacing.md} style={style}>
      {categories.map((category, idx) => {
        const select = categoryList.includes(category);

        return (
          <Button
            key={category + idx}
            weak={select ? false : true}
            size="xs"
            color={select ? "primary" : "gray"}
            // onClick={select ? undefined : () => onNext(category)}
            aria-selected={select}
            onClick={handleClick}
            name={category}
            style={{ borderRadius: 16 }}
          >
            {category}
          </Button>
        );
      })}
    </ScrollContainer>
  );
}

export default Category;
