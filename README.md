This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 시작하기

먼저 개발 서버를 실행하세요:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

`app/page.tsx` 파일을 수정하여 페이지 편집을 시작할 수 있습니다. 파일을 편집하면 페이지가 자동으로 업데이트됩니다.

이 프로젝트는 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)를 사용하여 Vercel의 새로운 글꼴 제품군인 [Geist](https://vercel.com/font)를 자동으로 최적화하고 로드합니다.

## 더 알아보기

Next.js에 대해 더 알아보려면 다음 리소스를 확인하세요:

- [Next.js 문서](https://nextjs.org/docs) - Next.js 기능 및 API에 대해 알아보세요.
- [Next.js 배우기](https://nextjs.org/learn) - 대화형 Next.js 튜토리얼입니다.

[Next.js GitHub 저장소](https://github.com/vercel/next.js)를 확인해 보세요. 여러분의 피드백과 기여를 환영합니다!

## Vercel에 배포하기

Next.js 앱을 배포하는 가장 쉬운 방법은 Next.js 제작자가 만든 [Vercel 플랫폼](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 확인하세요.

## 디렉토리 구조

```
/
├── .next/ - Next.js 빌드 결과물
├── .vscode/ - VSCode 설정
├── node_modules/ - 프로젝트 의존성
├── public/ - 정적 에셋
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── src/ - 소스 코드
    ├── app/ - 앱 라우트
    │   ├── favicon.ico
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── login/
    │       └── page.tsx
    ├── entities/ - 비즈니스 엔티티
    ├── features/ - 기능 단위
    │   └── login/
    │       └── ui/
    │           └── index.tsx
    ├── shared/ - 공용 모듈
    │   └── styles/
    │       ├── _reset.scss
    │       ├── globals.scss
    │       └── variables/
    │           ├── _colors.scss
    │           ├── _typography.scss
    │           └── index.scss
    └── widgets/ - 독립적인 UI 컴포넌트
        └── login/
            └── index.tsx
```

### 디렉토리 설명

*   **`.next`**: Next.js 빌드 프로세스의 결과물을 담는 디렉토리입니다. 이 디렉토리는 직접 수정할 필요가 없습니다.
*   **`.vscode`**: Visual Studio Code 설정을 담는 디렉토리입니다.
*   **`node_modules`**: 프로젝트의 모든 의존성을 담는 디렉토리입니다.
*   **`public`**: 이미지, SVG 등 공개적으로 접근 가능한 정적 에셋을 담는 디렉토리입니다.
*   **`src`**: 애플리케이션의 소스 코드를 담는 디렉토리입니다.
    *   **`app`**: 애플리케이션의 라우트를 담는 디렉토리입니다. 이 디렉토리의 각 파일은 라우트에 해당합니다.
    *   **`entities`**: 애플리케이션의 비즈니스 엔티티를 담는 디렉토리입니다.
    *   **`features`**: 애플리케이션의 기능을 담는 디렉토리입니다. 각 기능은 기능 단위입니다.
    *   **`shared`**: 애플리케이션 전반에서 사용되는 공용 모듈을 담는 디렉토리입니다.
    *   **`widgets`**: 독립적인 UI 컴포넌트를 담는 디렉토리입니다.