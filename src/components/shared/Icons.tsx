import { Colors, colors } from "@styles/colorPlatte";

interface IconsProps {
  color?: Colors;
  size?: number;
}

function Home({ color = "icon", size = 28 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 28 28">
      <rect width={size} height={size} fill="none" />
      <path
        d="M160-800.514v-11.314a2.5,2.5,0,0,1,.267-1.131,2.411,2.411,0,0,1,.739-.88l7.543-5.657a2.423,2.423,0,0,1,1.509-.5,2.422,2.422,0,0,1,1.509.5l7.543,5.657a2.412,2.412,0,0,1,.739.88,2.5,2.5,0,0,1,.267,1.131v11.314a2.421,2.421,0,0,1-.739,1.776A2.421,2.421,0,0,1,177.6-798h-3.771a1.217,1.217,0,0,1-.9-.361,1.216,1.216,0,0,1-.361-.9v-6.286a1.216,1.216,0,0,0-.361-.9,1.217,1.217,0,0,0-.9-.361H168.8a1.217,1.217,0,0,0-.9.361,1.216,1.216,0,0,0-.361.9v6.286a1.216,1.216,0,0,1-.361.9,1.217,1.217,0,0,1-.9.361h-3.771a2.421,2.421,0,0,1-1.776-.739,2.421,2.421,0,0,1-.731-1.775Z"
        transform="translate(-156 823)"
        fill={colors[color]}
      />
    </svg>
  );
}

function Class({ color = "icon", size = 28 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 28 28">
      <rect width={size} height={size} fill="none" />
      <path
        d="M40-783.2a3.727,3.727,0,0,1,.557-1.988,3.712,3.712,0,0,1,1.479-1.385,18.9,18.9,0,0,1,4.009-1.479,17.5,17.5,0,0,1,4.136-.494,17.5,17.5,0,0,1,4.136.494,18.9,18.9,0,0,1,4.009,1.479,3.712,3.712,0,0,1,1.479,1.385,3.728,3.728,0,0,1,.557,1.988v1.018a2.451,2.451,0,0,1-.747,1.8,2.451,2.451,0,0,1-1.8.748H42.545a2.452,2.452,0,0,1-1.8-.748,2.451,2.451,0,0,1-.747-1.8Zm22.209,3.564a4.644,4.644,0,0,0,.524-1.226,5.073,5.073,0,0,0,.176-1.32v-1.273a5.12,5.12,0,0,0-.779-2.688,6.874,6.874,0,0,0-2.212-2.211,16.06,16.06,0,0,1,3.055.652,15.927,15.927,0,0,1,2.673,1.13,5.637,5.637,0,0,1,1.75,1.416,2.719,2.719,0,0,1,.6,1.7v1.273a2.451,2.451,0,0,1-.748,1.8,2.452,2.452,0,0,1-1.8.748ZM50.182-789.818a4.9,4.9,0,0,1-3.6-1.5,4.9,4.9,0,0,1-1.5-3.6,4.9,4.9,0,0,1,1.5-3.6,4.9,4.9,0,0,1,3.6-1.5,4.9,4.9,0,0,1,3.6,1.5,4.9,4.9,0,0,1,1.5,3.6,4.9,4.9,0,0,1-1.5,3.6,4.9,4.9,0,0,1-3.6,1.5Zm12.727-5.091a4.9,4.9,0,0,1-1.5,3.6,4.9,4.9,0,0,1-3.6,1.5,6.361,6.361,0,0,1-.891-.079,7.757,7.757,0,0,1-.891-.175,7.567,7.567,0,0,0,1.321-2.259,7.337,7.337,0,0,0,.461-2.577,7.335,7.335,0,0,0-.462-2.577,7.569,7.569,0,0,0-1.32-2.259,3.875,3.875,0,0,1,.891-.206,8.306,8.306,0,0,1,.891-.049,4.9,4.9,0,0,1,3.6,1.5,4.9,4.9,0,0,1,1.5,3.6Z"
        transform="translate(-40 803.818)"
        fill={colors[color]}
      />
    </svg>
  );
}

function User({ color = "icon", size = 28 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 28 28">
      <rect width={size} height={size} fill="none" />
      <path
        d="M171-789a5.3,5.3,0,0,1-3.884-1.615A5.3,5.3,0,0,1,165.5-794.5a5.3,5.3,0,0,1,1.616-3.884A5.3,5.3,0,0,1,171-800a5.3,5.3,0,0,1,3.884,1.616A5.3,5.3,0,0,1,176.5-794.5a5.3,5.3,0,0,1-1.616,3.884A5.3,5.3,0,0,1,171-789Zm-11,8.25v-1.1a4.028,4.028,0,0,1,.6-2.148,4.009,4.009,0,0,1,1.6-1.5,20.407,20.407,0,0,1,4.331-1.6,18.912,18.912,0,0,1,4.469-.533,18.909,18.909,0,0,1,4.469.533,20.41,20.41,0,0,1,4.331,1.6,4.009,4.009,0,0,1,1.6,1.5,4.027,4.027,0,0,1,.6,2.148v1.1a2.648,2.648,0,0,1-.808,1.942,2.648,2.648,0,0,1-1.942.808h-16.5a2.648,2.648,0,0,1-1.942-.808A2.648,2.648,0,0,1,160-780.75Z"
        transform="translate(-157 803)"
        fill={colors[color]}
      />
    </svg>
  );
}

function PostAdd({ color = "onlyWhite", size = 24 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
      <path
        d="M11.284,5.332l.309.309a.612.612,0,0,1,0,.867l-.744.747L9.669,6.076l.744-.745a.612.612,0,0,1,.867,0ZM5.368,10.38,8.8,6.944l1.18,1.18L6.545,11.557a.612.612,0,0,1-.266.156l-1.5.424.427-1.5a.612.612,0,0,1,.156-.266ZM9.546,4.464,4.5,9.51a1.828,1.828,0,0,0-.468.8L3.3,12.865a.614.614,0,0,0,.76.76l2.558-.732a1.849,1.849,0,0,0,.8-.468l5.048-5.047a1.843,1.843,0,0,0,0-2.6l-.309-.309A1.842,1.842,0,0,0,9.546,4.464Zm-7.293,1A2.253,2.253,0,0,0,0,7.717v6.96A2.253,2.253,0,0,0,2.253,16.93H9.213a2.253,2.253,0,0,0,2.253-2.253V11.808a.614.614,0,1,0-1.228,0v2.866A1.024,1.024,0,0,1,9.214,15.7H2.253A1.024,1.024,0,0,1,1.23,14.674V7.717A1.024,1.024,0,0,1,2.253,6.691h2.86a.614.614,0,1,0,0-1.227Z"
        transform="translate(1.5 -2.425)"
        // fill="#fff"
        fill={colors[color]}
      />
      <rect width="16" height="16" fill="none" />
    </svg>
  );
}

function Main({ color = "primary", size = 28 }: IconsProps) {
  return (
    <svg height={size} viewBox="0 0 24 24" fill={colors[color]} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 10H10M14 16H18M14 10H18M6 16H10M10 20H14V7L12 4L10 7V20ZM2 20H6V7L4 4L2 7V20ZM18 20H22V7L20 4L18 7V20Z"
        stroke={colors.primary}
      />
    </svg>
  );
}

function Back({ color = "black", size = 24 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 320 512" fill={colors[color]}>
      {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
  );
}

function ArrowRight({ color = "icon", size = 24 }: IconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 320 512"
      fill={colors[color]}
      transform="scale(-1, 1)"
      css={{ transformOrigin: "center" }} // 중심을 기준으로 반전
    >
      {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
  );
}

function Add({ color = "onlyWhite", size = 24 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18">
      <g transform="translate(473.5 -1023.5)">
        <path
          d="M-472.292,1031.1h16"
          transform="translate(-0.208 1.399)"
          fill="none"
          stroke={colors[color]}
          strokeWidth="2"
        />
        <path
          d="M0,0H16"
          transform="translate(-464.5 1024.5) rotate(90)"
          fill="none"
          stroke={colors[color]}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

function Badge({ color = "black", size = 24 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 448 512" fill={colors[color]}>
      <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
    </svg>
  );
}

function Image({ color = "icon", size = 24 }: IconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={colors[color]}
      // viewBox="0 0 512 512"
      viewBox="0 0 576 512"
    >
      {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      {/* <path d="M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" /> */}
      <path d="M160 80l352 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-21.2 0L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336 160 336c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zM96 96l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </svg>
  );
}

function Xmark({ color = "icon", size = 16 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={colors[color]} viewBox="0 0 384 512">
      {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
    </svg>
  );
}

function Share({ color = "icon", size = 22 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 448 512" fill={colors[color]}>
      {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z" />
    </svg>
  );
}
function Ellipsis({ color = "icon", size = 24 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 128 512" fill={colors[color]}>
      {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
    </svg>
  );
}

function Comment({ color = "icon", size = 24 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={size} fill={colors[color]}>
      {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z" />
    </svg>
  );
}

function Heart({ color = "icon", size = 24 }: IconsProps) {
  return color === "danger" ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={size} fill={colors[color]}>
      {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={size} fill={colors[color]}>
      {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
    </svg>
  );
}

function Clock({ color = "icon", size = 12 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={size} fill={colors[color]}>
      {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </svg>
  );
}

function ArrowBottom({ color = "black", size = 12 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={size} fill={colors[color]}>
      {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </svg>
  );
}

function Check({ color = "black", size = 18 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11.4" height={size} fill={colors[color]}>
      <path
        id="check"
        d="M14.2,5.091a1.067,1.067,0,0,1,1.558-.016,1.191,1.191,0,0,1,.015,1.631L9.907,14.376a1.068,1.068,0,0,1-1.586.031L4.436,10.339A1.188,1.188,0,0,1,4.12,9.211a1.128,1.128,0,0,1,.795-.832,1.07,1.07,0,0,1,1.078.331l3.076,3.218,5.1-6.8a.357.357,0,0,1,.029-.034Z"
        transform="translate(-4.085 -4.745)"
      />
    </svg>
  );
}

function Vote({ color = "icon", size = 24 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height={size} fill={colors[color]}>
      {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M96 80c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48l0 304L96 384 96 80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48l16 0 0 128 448 0 0-128 16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-96z" />
    </svg>
  );
}

function Map({ color = "icon", size = 24 }: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height={size} fill={colors[color]}>
      {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M565.6 36.2C572.1 40.7 576 48.1 576 56l0 336c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456L0 120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5l0 284.6 120-45.7 0-284.6L48 136.5zM360 422.7l0-285.4-144-48 0 285.4 144 48zm48-1.5l120-45.7 0-284.6L408 136.5l0 284.6z" />
    </svg>
  );
}

const Icons = {
  Home,
  Class,
  User,
  PostAdd,
  Main,
  Back,
  Add,
  ArrowRight,
  Badge,
  Image,
  Xmark,
  Share,
  Ellipsis,
  Comment,
  Heart,
  Clock,
  ArrowBottom,
  Check,
  Vote,
  Map,
};

export default Icons;
