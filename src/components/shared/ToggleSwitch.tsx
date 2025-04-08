import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";

// ToggleButton 타입 정의
interface ToggleButtonProps {
  isSelected: boolean;
}

const ToggleSwitch = styled.div<ToggleButtonProps>(
  {
    width: "60px",
    height: "30px",
    borderRadius: "15px",
    position: "relative",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  ({ isSelected }) => ({
    backgroundColor: isSelected ? colors.primary : colors.buttonBgColor,

    "&:before": {
      content: "''",
      position: "absolute",
      width: "26px",
      height: "26px",
      borderRadius: "50%",
      backgroundColor: colors.onlyWhite,
      top: "2px",
      left: isSelected ? "32px" : "2px",
      transition: "left 0.3s ease",
    },

    // "&:after": {
    //   content: `"${isSelected ? "on" : "off"}"`,
    //   position: "absolute",
    //   top: "50%",

    //   transform: "translate(0, -50%)",
    //   left: isSelected ? "6px" : "30px",
    //   transition: "left 0.3s ease",
    //   fontSize: "16px",
    // },
  }),
);

export default ToggleSwitch;
