export const container = {
  xs: { width: "36px", height: "36px" },
  sm: { width: "56px", height: "56px" },
  md: { width: "78px", height: "78px" },
  lg: { width: "160px", height: "160px" },
};

export type ContainerSize = keyof typeof container;
