# Yanolja Research 메인 페이지 클론 과제

주어진 디자인을 기준으로 **야놀자 리서치 메인 페이지**를 클론 구현한 프로젝트입니다.  
리서치/데이터 서비스 특성에 맞춰 **웹접근성, 반응형, 정보 위계, 인터랙션 일관성**에 집중했습니다.

💻 **[사이트 바로가기](https://yanolja-research-clone.netlify.app/)**

---

## 1. 프로젝트 개요

- 과제 목적: 주어진 웹페이지를 최대한 동일하게 구현하여 UI 구현력 및 구조 설계 능력 평가
- 기술 스택:
  - **Vite + React**
  - **JavaScript**
  - **Tailwind CSS**
- 작업 기간: `2025.11.15 ~ 2025.11.19`

---

## 2. 실행 방법

```bash
# 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

---

## 3. 주요 기능 구현

### 🌐 웹접근성 (Web Accessibility)

#### 키보드 네비게이션 및 포커스 관리
- **모든 인터랙티브 요소에 호버 및 포커스 스타일 적용**
  - 버튼, 링크, 메뉴 항목에 `hover:` 및 `focus:` 상태 스타일 구현
  - 키보드만으로 모든 기능 사용 가능
  - 스크린샷
  
  |Header|Nav|Card|
  |-----|-----|-----|
  |<img width="300" alt="Header 포커스" src="https://github.com/user-attachments/assets/7a53f7fd-853f-4efc-a3ad-061c57c51e40" />|<img width="300" alt="Nav 포커스" src="https://github.com/user-attachments/assets/a61e808b-ec9e-4d72-97bb-9faf3d42bafd" />|<img width="300" alt="Card 포커스" src="https://github.com/user-attachments/assets/510afa8b-f0b4-450e-ac18-d814f32c78aa" />|
- **포커스 트랩 구현**
  - 모바일 메뉴 열림 시 포커스를 메뉴 내부로 제한
  - ESC 키로 메뉴 닫기, Tab 키 순환 제어
- **동적 tabIndex 관리**
  - 모바일 메뉴가 닫혀있을 때 내부 요소 포커스 방지 (`tabIndex={-1}`)
  - 접근성 도구 경고 해결


#### ARIA 속성 및 시맨틱 HTML
- **모든 인터랙티브 요소에 `aria-label` 추가**
  - 버튼, 링크, 폼 요소에 명확한 설명 제공
  - 스크린 리더 사용자를 위한 대체 텍스트 제공
- **ARIA 상태 관리**
  - `aria-expanded`, `aria-hidden`, `aria-controls` 등 동적 상태 관리
  - 모바일 메뉴의 열림/닫힘 상태를 스크린 리더에 정확히 전달
- **시맨틱 HTML 구조**
  - `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>` 적절히 사용
  - 스크린 리더가 페이지 구조를 이해할 수 있도록 구현

#### HeadingsMap (제목 구조)
- **계층적 제목 구조 (`<h1>` ~ `<h6>`)**
  - 논리적인 제목 계층 구조 유지
  - 스크린 리더 사용자가 콘텐츠 구조를 쉽게 파악 가능
  - `sr-only` 클래스로 시각적으로 숨겨진 제목도 구조에 포함
  
  |관련 이미지|
  |---------|
  |<img width="320" height="810" alt="Image" src="https://github.com/user-attachments/assets/9dd01104-511b-45f4-bbe4-80679fe4e3ea" />|

---

### 💀 스켈레톤 UI (Skeleton Loading)

**로딩 중 사용자 경험을 개선하기 위한 스켈레톤 컴포넌트를 구현했습니다.**

- **8가지 스켈레톤 컴포넌트 구현**
  - `InsightCardSkeleton`, `ReportCardSkeleton`, `TrendReportCardSkeleton`
  - `VisualHighlightCardSkeleton`, `PressCardSkeleton`, `DataCardSkeleton`
  - `IconBackgroundCardSkeleton`, `Skeleton` (기본 컴포넌트)
- **실제 콘텐츠와 동일한 레이아웃**
  - 각 카드 타입에 맞는 스켈레톤 디자인
  - 로딩 중에도 레이아웃 시프트(CLS) 방지
- **애니메이션 효과**
  - 펄스 애니메이션으로 로딩 상태를 시각적으로 표현
  - 사용자에게 콘텐츠가 로드 중임을 명확히 전달

#### 스크린샷

|MO스크린샷|PC스크린샷|
|----|----|
|<img width="416" height="885" alt="Image" src="https://github.com/user-attachments/assets/66a23feb-6d7b-4f14-9707-a050ef3afed3" />|<img width="1073" height="699" alt="Image" src="https://github.com/user-attachments/assets/cf5555d3-40f7-47f8-bc1b-a53fa05f18e6" />|

|gif 스크린샷|
|--------|
|![Skeleton](https://github.com/user-attachments/assets/be9dcf3a-5d5a-40b5-bc5a-2144a5416954)|


### 📱 반응형 디자인 (Responsive Design)

**모든 디바이스에서 동일한 사용자 경험을 제공하도록 구현했습니다.**

- **모바일 우선 접근 방식**
  - 모바일 → 태블릿 → 데스크톱 순서로 확장되는 반응형 구조
- **일관된 브레이크포인트**
  ```css
  mobile: 568px
  tablet: 769px
  laptop: 993px
  desktop: 1101px
  ```
- **동일한 반응형 패턴 적용**
  - 모든 카드 컴포넌트에 동일한 반응형 규칙 적용
  - Swiper를 활용한 모바일/태블릿 슬라이더, 데스크톱 그리드 레이아웃
- **터치 친화적 인터페이스**
  - 모바일에서 스와이프 가능한 슬라이더
  - 충분한 터치 타겟 크기 (최소 44x44px)
- **반응형 이미지 최적화**
  - 디바이스 크기에 맞는 이미지 크기 제공
  - WebP 포맷 변환 및 적절한 리사이즈

#### 스크린샷

|MO스크린샷|PC스크린샷|
|----|----|
|<img width="293" height="742" alt="Image" src="https://github.com/user-attachments/assets/fbc3969d-d0fa-400b-ab7c-d78280cedca0" />|<img width="1070" height="738" alt="Image" src="https://github.com/user-attachments/assets/5f9cc5e3-dd9e-49c3-b7ff-239312d46bb5" />|

|반응형 스크린샷|
|-----|
|<img width="738" alt="Image" src="https://github.com/user-attachments/assets/0ef95bff-fc88-4100-a213-13f030647ab8" />|

---

## 4. 성능 최적화

### 이미지 최적화
- WebP 포맷 변환 및 품질 최적화 (75%)
- 표시 크기에 맞는 이미지 리사이즈 (w=400/600/800)
- `width`, `height` 속성으로 CLS 방지
- `fetchPriority`로 로딩 우선순위 관리

### 빌드 최적화
- esbuild minify로 자바스크립트 축소
- Tree shaking으로 사용하지 않는 코드 제거
- 청크 분리로 초기 로딩 시간 단축
- 타겟 브라우저 설정으로 번들 크기 최적화

---

## 5. 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Card/           # 카드 컴포넌트들
│   ├── Skeleton/       # 스켈레톤 로딩 컴포넌트
│   ├── Header/         # 헤더 컴포넌트
│   └── ...
├── data/               # 정적 데이터
├── hooks/              # 커스텀 훅
├── styles/             # 전역 스타일
└── asset/              # 이미지 및 아이콘
