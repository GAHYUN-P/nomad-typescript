# TypeScript

## 프로젝트 세팅

### 초기 세팅법 참고자료

https://koras02.tistory.com/106
https://create-react-app.dev/docs/adding-typescript/

### JS 프로젝트 => TS 프로젝트

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

Next, rename any file to be a TypeScript file (e.g. src/index.js to src/index.tsx) and restart your development server.

### 라이브러리 or 패키지 설치 방법

```bash
npm install --save @types/[라이브러리 이름]
```

## TypeScript 문법

### 타입 선언

- 어노테이션을 이용한 명시적 타입 지정

```javascript
let a: string = "hello";
```

- 어노테이션을 사용하지 않으면 타입스크립트가 알아서 타입을 추론한다.

```javascript
let a = 1; // a는 number
let b = "hello"; // b는 string
let c = [true, false]; // c는 boolean
```
