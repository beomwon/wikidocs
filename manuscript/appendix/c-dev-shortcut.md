# 부록 C. 개발자용 지름길 — 코드를 직접 만지고 싶은 독자를 위해

이 책을 읽는 분 중에는 파이썬을 이미 아는 분, 또는 완주 후 "코드도 직접 이해하고 싶어진" 분이 있을 겁니다. 그런 분들을 위한 심화 이정표입니다. 본문과 달리 압축적으로 씁니다.

## 이 책의 스택을 코드 레벨에서 보면

```
uvicorn(로컬 개발 서버) ─ FastAPI(ASGI 앱) ─ SQLAlchemy 2.x(ORM) ─ psycopg(드라이버) ─ Neon(PostgreSQL)
Vercel: main.py의 `app`을 감지해 서버리스 함수로 래핑 (uvicorn 불필요)
```

- FastAPI 자동 문서: `/docs`(Swagger UI), `/redoc`. Pydantic 모델이 곧 요청/응답 스키마.
- Vercel 파이썬 런타임은 `main.py`, `app.py`, `index.py` 등 지원되는 엔트리포인트에서 `app`을 찾습니다. 커스텀이 필요하면 `vercel.json`으로 라우팅을 명시할 수 있습니다.
- 서버리스 + SQLAlchemy 조합의 핵심: 함수 인스턴스마다 엔진이 생기므로 커넥션 풀을 작게(`pool_size` 최소화, `pool_pre_ping=True`), 또는 Neon의 pooled connection(접속 문자열의 `-pooler`)을 사용.

## 본문이 생략한 것들, 배울 순서 추천

1. **HTTP 기초** — 메서드(GET/POST/PUT/DELETE), 상태 코드(2xx/4xx/5xx), 헤더. FastAPI의 `/docs`에서 직접 쏴보며 배우는 게 가장 빠릅니다.
2. **Pydantic 스키마** — 3.3절의 "검증"의 실체. `BaseModel` 상속, 타입 힌트, `Field` 제약.
3. **SQL 직접 쓰기** — ORM 뒤에 숨은 SELECT/INSERT를 Neon 콘솔의 SQL Editor에서 직접. ORM만 알고 SQL을 모르면 디버깅에서 막힙니다.
4. **마이그레이션(Alembic)** — 본문은 "테이블 자동 생성"으로 넘겼지만, 실무는 스키마 변경 이력을 Alembic으로 관리합니다. 테이블 구조를 바꿀 일이 생기면 그때가 배울 때.
5. **테스트** — `pytest` + FastAPI의 `TestClient`. "AI가 짠 코드를 믿는 방법"의 정답은 테스트입니다.
6. **GitHub Actions** — push 시 테스트 자동 실행부터. `.github/workflows/`에 YAML 하나면 시작됩니다. Vercel 배포와 조합하면 "테스트 통과 시에만 배포"도 가능.

## CORS에 대하여 (본문에서 뺀 이유와 함께)

이 책 구조(FastAPI가 index.html을 직접 서빙)에서는 프론트와 백엔드가 같은 출처(origin)라 CORS 문제가 없습니다. 프론트를 분리 배포(예: Next.js 프로젝트 별도 + API는 서브도메인)하는 순간 만납니다. 그때 FastAPI의 `CORSMiddleware`에서 `allow_origins`에 프론트 도메인을 명시하면 됩니다. `allow_origins=["*"]`로 뚫고 넘어가는 습관은 들이지 마세요.

## 대안 스택 한 줄 비교 (12.3절의 확장)

| 필요 | 추천 |
|---|---|
| 웹소켓, 상시 프로세스, 크론 자유 | Render / Railway / Fly.io (컨테이너·상시 서버형) |
| 인증·스토리지·실시간 구독 통합 | Supabase (Postgres + Auth + Storage) |
| 프론트 비중 확대 | Next.js를 Vercel에 (원래 Vercel의 본진), FastAPI는 API 전용으로 |
| IaC·대규모·회사 기술 | AWS(CDK/Terraform부터), 과금 알림 필수 |

## 이 책의 프로젝트를 포트폴리오로 키우려면

- Private → Public 전환 + README에 아키텍처 다이어그램(2.4절 그림이면 충분)과 "왜 이 스택인지" 한 단락.
- 커밋 메시지를 정돈하고, 이슈/PR 흐름 흉내라도 내보기 — 협업 신호를 채용 담당자는 봅니다.
- 다음 단계로 로그인(세션/OAuth), rate limiting(방명록 도배 방지), 이미지 업로드(오브젝트 스토리지) 중 하나를 붙여보면 면접 이야깃거리가 됩니다.
