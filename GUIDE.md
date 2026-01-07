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

### Tailwind CSS가 없는 환경 (Non-Tailwind Environment)
이 라이브러리는 **Tailwind CSS가 설치되지 않은 프로젝트**에서도 문제없이 사용할 수 있습니다.
라이브러리 자체적으로 빌드된 CSS (`dist/index.css`)에 필요한 모든 스타일이 포함되어 있습니다.

1.  프로젝트 루트(진입점)에서 `import 'stroybook/dist/index.css';`를 선언하세요.
2.  별도의 Tailwind 설정이나 PostCSS 설정은 필요하지 않습니다.
3.  **주의**: 이 CSS에는 기본적인 CSS Reset(Preflight)이 포함되어 있습니다. 기존 프로젝트의 스타일과 충돌할 경우, CSS 우선순위를 조정하거나 불러오는 순서를 확인하세요.

### Tailwind CSS 사용 프로젝트
사용 중인 프로젝트가 이미 Tailwind CSS를 사용하고 있다면, 클래스 이름 충돌이나 스타일 우선순위 문제가 발생할 수 있습니다.
이 라이브러리의 스타일은 `dist/index.css`에 모두 번들링되어 있으므로, 별도의 Tailwind 설정 없이도 라이브러리 컴포넌트 스타일은 유지됩니다.

## 5. 테마 커스터마이징 (Theming System)

이 라이브러리는 **Design Tokens** 기반의 테마 시스템을 제공합니다.
`dist/index.css`에는 기본 설정과 함께 확장 가능한 토큰들이 정의되어 있습니다.

### 기본 제공 테마 사용

라이브러리는 기본 테마(Slate) 외에 **"Vibrant"** 등 추가 테마를 제공합니다. 사용하려면 해당 CSS 클래스를 `<body>` 태그나 최상위 요소에 적용하세요.

```tsx
// 최상위 레이아웃이나 body에 클래스 적용
<body className="theme-vibrant">
  ...
</body>
```

### 커스텀 테마 만들기 (Design Tokens)

새로운 테마를 만드려면 CSS 파일에 다음과 같이 변수를 정의하고 클래스로 감싸주세요. 라이브러리는 이 변수들을 자동으로 감지하여 스타일을 적용합니다.

```css
/* my-theme.css */
@layer base {
  .theme-forest {
    /* Colors (HSL 권장) */
    --background: 140 30% 98%;
    --foreground: 140 60% 10%;
    
    --primary: 142.1 76% 36%;
    --primary-foreground: 355.7 100% 97%;
    
    /* Typography */
    --font-heading: "Your Font", sans-serif;
    
    /* Spacing & Radius */
    --radius: 0.75rem;
  }
}
```

제공되는 주요 디자인 토큰은 다음과 같습니다:

1.  **Typography**: `--font-sans`, `--font-heading`
2.  **Layout**: `--radius`
3.  **Colors**:
    *   `--primary`, `--secondary`, `--accent`
    *   `--muted`, `--destructive`
    *   `--background`, `--foreground`
    *   `--card`, `--popover`, `--border`, `--input`, `--ring`
