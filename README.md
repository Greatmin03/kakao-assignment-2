# File structure

```text
ASSIGNMENT-2/
└── src/
    ├── assets/             # 이미지, 폰트 등 정적 리소스 폴더
    │
    ├── components/         # 분리된 하위 컴포넌트 폴더
    │   ├── DateNavigator.jsx    # 날짜 네비게이션
    │   ├── TodoFilter.jsx      # 할 일 필터(전체/완료/미완료)
    │   ├── TodoInput.jsx       # 할 일 입력창
    │   ├── TodoItem.jsx        # 할 일 목록 개별 항목
    │   ├── TodoList.jsx        # 할 일 전체 목록 리스트
    │   └── WeekNavigator.jsx    # 주차별 네비게이션
    │
    ├── App.css             # 메인 앱(App.jsx) 스타일시트
    ├── App.jsx             # 최상위 루트 컴포넌트 (비즈니스 로직 중심)
    ├── index.css           # 프로젝트 전역 스타일시트
    └── main.jsx            # React 렌더링 시작점 (Entry Point)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
