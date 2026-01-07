# Stroybook 라이브러리 사용 가이드

이 문서는 `stroybook` 패키지를 npm 라이브러리로 소비(사용)하는 방법을 설명합니다.

## 1. 설치 (Installation)

패키지를 프로젝트에 설치합니다.

```bash
npm install stroybook
```

**참고**: 로컬에서 개발 중인 패키지를 테스트하려면 `npm link`를 사용하거나, `npm install /local/path/to/stroybook` 명령어를 사용할 수 있습니다.

### Peer Dependencies

이 라이브러리는 `react`와 `react-dom` 버전 19 이상을 필요로 합니다.
프로젝트의 `package.json`에 해당 의존성이 있는지 확인해주세요.

```bash
npm install react@^19.0.0 react-dom@^19.0.0
```

## 2. 스타일 설정 (Styles Setup)

컴포넌트의 스타일이 올바르게 표시되려면, **CSS 파일을 반드시 import** 해야 합니다.
프로젝트의 최상위 진입점 (예: `src/main.tsx`, `src/App.tsx`, 또는 Next.js의 `app/layout.tsx`) 윗부분에 다음 코드를 추가하세요.

```tsx
import 'stroybook/dist/index.css';
```

## 3. 컴포넌트 사용 (Usage)

설정과 스타일 import가 완료되면, 컴포넌트를 자유롭게 가져와서 사용할 수 있습니다.

```tsx
import { Button, GlobalModal } from 'stroybook';

export default function App() {
  return (
    <div className="p-8 space-y-4">
      <h1>Stroybook Library Test</h1>
      
      {/* 버튼 컴포넌트 사용 */}
      <Button variant="default" onClick={() => console.log('Clicked!')}>
        Click Me
      </Button>

      <Button variant="outline">
        Secondary Action
      </Button>
      
      {/* 모달 등 다른 컴포넌트 사용 */}
      <GlobalModal />
    </div>
  );
}
```

## 4. 프레임워크별 설정 팁

### Next.js App Router
이 라이브러리는 React Server Components (RSC) 호환성을 위해 빌드 결과물 최상단에 `"use client";` 지시어를 자동으로 포함하고 있습니다.
따라서 `page.tsx` (Server Component)에서 직접 import하여 사용해도 오류 없이 동작합니다.

### Tailwind CSS 사용 프로젝트
사용 중인 프로젝트가 이미 Tailwind CSS를 사용하고 있다면, 클래스 이름 충돌이나 스타일 우선순위 문제가 발생할 수 있습니다.
이 라이브러리의 스타일은 `dist/index.css`에 모두 번들링되어 있으므로, 별도의 Tailwind 설정 없이도 라이브러리 컴포넌트 스타일은 유지됩니다.

## 5. 테마 커스터마이징 (Theming)

`stroybook` 라이브러리는 CSS Variables (Shadcn UI 스타일)를 사용합니다.
색상이나 반경(radius) 등을 전역적으로 수정하고 싶다면, 귀하의 프로젝트의 `globals.css` 또는 `index.css`의 `:root` 섹션에서 변수를 재정의(Override)하면 됩니다.

```css
/* 당신의 프로젝트의 global css 파일 */
:root {
  /* Primary 색상을 파란색에서 보라색으로 변경 */
  --primary: 262.1 83.3% 57.8%;
  --primary-foreground: 210 40% 98%;
  
  /* 둥글기 정도 변경 */
  --radius: 1rem;
}
```
