import { colors } from "@styles/colorPlatte";
import Flex from "./Flex";

interface StepBarProps {
  step: number;
  currentStep: number;
}

function StepBar({ step, currentStep }: StepBarProps) {
  return (
    <Flex gap={4}>
      {Array(step)
        .fill("")
        .map((_, idx) => {
          const isSelected = currentStep > idx;
          return (
            <div
              key={idx}
              css={{
                width: `${100 / step}%`,
                backgroundColor: isSelected ? colors.black : colors.stepBarBg,
                height: 4,
                borderRadius: 5,
              }}
            ></div>
          );
        })}
    </Flex>
  );
}

export default StepBar;
