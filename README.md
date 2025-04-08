# sns-fe
 project

# 기술 스택
코어: Next.js, TypeScript
상태 관리: React-Query, Recoil
스타일링: emotion
테스트: jest
패키지 매니저: Yarn Berry (with. pnp)

# Yarn Berry (with. pnp) 선택 이유
- 무거운 node_modules
- 비효울적인 의존성 검색
- 비효율적인 설치 (다른 버전의 패키지 중복 설치)
- 유령의존성

장점
- 효율적인 의존성 검색
- 엄격한 의존성 관리
- CI 시간 단축

# yarn berry 세팅
  npx create-next-app --example with-jest ./
  node_modules 삭제

  ❯ yarn set version stable
    - yarn berry 세팅
    - .yarnrc.yml 파일로 이동
    - nodeLinker: pnp > 작성
      - node_modules를 사용 하지않는다고 선언
  - yarn install
  - yarn dlx @yarnpkg/sdks vscode
  - .gitignore
  ```
  .pnp.*
  .yarn/*
  !.yarn/patches
  !.yarn/plugins
  !.yarn/releases
  !.yarn/sdks
  !.yarn/versions
  ```

# 세팅 순서
1. next.js
- npx create-next-app@latest --example with-jest with-jest-app

# ESLint 세팅
  - yarn add -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-simple-import-sort eslint-plugin-unused-imports
  @typescript-eslint/parser @typescript-eslint/eslint-plugin
  - Config 설정 분리
  <!-- - yarn add @yarnpkg/sdks vscode -->

  - .eslintrc 세팅
    - "package.json 에서 eslintConfig 내부에 내용을 지우고" 중요
    - .eslintrc 파일을 추가하고
    - 하단의 내용을 추가해준다.

    ``` json
    {
      "parser": "@typescript-eslint/parser",
      "extends": [
        "next",
        "next/core-web-vitals", 
        "prettier", 
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      "plugins": [
        "prettier", 
        "simple-import-sort", 
        "unused-imports", 
        "@typescript-eslint"
      ],
      "rules": {
        "prettier/prettier": "error",
        "import/order": [
          "error",
          {
            "groups": ["builtin", "external", "internal", ["parent", "type"], "sibling", "index", "object"],
            "alphabetize": {
              "order": "asc",
              "caseInsensitive": true
            }
          }
        ],    
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "error",
          {
            "vars": "all",
            "args": "none"
          }
        ],
        // 사용하지 않는 변수 경고로 변경      
        "no-unused-vars": "error",
        "@typescript-eslint/no-unused-vars": "error"
        // "eqeqeq": ["warn", "always"]
      }
    }



    ```

# Prettier 세팅
  - .prettierrc

  ``` json
  {
    "useTabs": false,
    "printWidth": 80,
    "tabWidth": 2,
    "singleQuote": false,
    "trailingComma": "all",
    "endOfLine": "lf",
    "semi": true,
    "arrowParens": "always"
  }
  ```

  - yarn dlx @yarnpkg/sdks vscode



# emotion 세팅
- yarn add @emotion/react @emotion/styled
- yarn add -D @emotion/babel-plugin @babel/preset-react

- babel 설정

    .babelrc
    ``` js
    {
      "presets": [
        [
          "next/babel",
          {
            "preset-react": {
              "runtime": "automatic",
              "importSource": "@emotion/react"
            }
          }
        ]
      ]
    }
    ```

    - tsconfig 설정

    tsconfig.json
    ```json
    "compilerOptions": {
      "jsxImportSource": "@emotion/react",
    }
    ```


# stack flow 기능 사용하기
## 앱처럼 페이지 이동 하는 기능 사용을 위해 당근 라이브러리 사용
- 앞서 설치한 스택 상태 관리 패키지
  - yarn add @stackflow/core @stackflow/react
- 기본적인 UI 구현을 위한 패키지
  - yarn add @stackflow/plugin-renderer-basic @stackflow/plugin-basic-ui

---------------------------------------------

# 오류 및 문제 해결

## 다크모드 사용 시 화면이 깜빡거림이 있음
- 문제 : 이전에 dark mode 사용 중이면 light mode 디폴드 값이라 화면이 깜빡거림이 있음 (ThemeProvider 에서 useEffect 로 localhost정보를 가져와서 로드 된 후 가져와 져서 문제가 됨)
- 해결 방법: 해당 방법음 dom 트리가 로드 되기전에 스크립트 태그를 이용해 먼저 localhost에서 theme 값을 가져와서 적용 시켜주면 깜빡거리는 문제가 해결 된다.
``` js
  const ScriptTag = () => {
    const codeToRunOnClient = `(function() {
      const storedTheme = localStorage.getItem("theme") || "light";
      document.documentElement.setAttribute("data-theme", storedTheme);
  })()`;

    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
  };
```

## 바텀시트 종료시 내려가는 animation
- 문제: 바텀시트 종료 할 경우 내려가는 animation이 필요한데 dom이 먼저 사라져 animation이 적용 안되는 문제
- 해결 방법: bottomSheetContext에 클로즈 할때 setTimeout을 3초뒤에 돔이 사라지게 만들어 내려가는 애니메이션이 보여진 후에 돔이 사라지게 수정 했다. (시간 계산을 잘 해야한다.)

## Duplicate atom key 에러 메시지 없애기
- 문제: recoil사용시 키 중복이라고 나오는 경고
- 해결 방법: https://github.com/facebookexperimental/Recoil/issues/733

``` ts
  import { RecoilEnv } from "recoil";

  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

```

## useLayoutEffect 서버사이드에서는 사용 경고
- 문제: recoil사용시 키 중복이라고 나오는 경고
- 해결 방법: https://github.com/facebookexperimental/Recoil/issues/733

## font-family 적용 문제

## SVG 사용하는 여러가지 방법
- 문제: SVG 아이콘을 불러와서 사이즈 조절 및 생상을 조절 해야하는데 Image태그로는 불가능 하다는 문제점이 있다
- 해결 방법: 
