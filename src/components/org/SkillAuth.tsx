import { useState } from "react";
import Flex from "@components/shared/Flex";
import Spacing from "@components/shared/Spacing";
import MyText from "@components/shared/Text";
import ToggleSwitch from "@components/shared/ToggleSwitch";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { spacing } from "@styles/spacingPalette";
import { SkillAuth, skillAuthList } from "src/models/skillAuth";

function SkillAuth({ skill }: { skill: SkillAuth }) {
  const [skillAuthCode, setSkillAuthCode] = useState(skill.skllAuthorCode);

  return (
    <Container checked={true} direction="column">
      <MyText typography="t4" fontWeight="bold">
        {skill.skillName}
      </MyText>

      {/* <Flex>{skill}</Flex> */}
      <Flex gap={spacing.lg}>
        {skillAuthList.map((item, idx) => {
          console.log(skillAuthCode.split(""));

          const checked = skillAuthCode.split("")[idx] === "1";

          return (
            <Flex direction="column" key={skill.emplNo + item + skill.skllCode}>
              <MyText typography="t6">{item}</MyText>
              <Spacing size="xs" />
              <ToggleSwitch
                isSelected={checked}
                onClick={() => {
                  const skillCode = skillAuthCode.split("");

                  skillCode[idx] = checked ? "0" : "1";

                  setSkillAuthCode(skillCode.join(""));
                  skill.skllAuthorCode = skillCode.join("");
                }}
              />
            </Flex>
          );
        })}
      </Flex>
    </Container>
  );
}

export const Container = styled(Flex)<{ checked: boolean }>`
  min-width: 400px;
  max-width: 400px;

  border-radius: 8px;
  border: 1px solid ${colors.grayBorder};
  padding: ${spacing.md}px ${spacing.layout}px;

  background-color: ${({ checked }) => (checked ? colors.hover : colors.headerColor)};
  &:hover {
    background: ${colors.hover};
  }
`;

export default SkillAuth;
