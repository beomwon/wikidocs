<div align="center">

# 위키독스 원고 저장소

**[wikidocs.net](https://wikidocs.net)에 연재·판매하는 책들의 원고를 관리하는 곳입니다.**

원고는 여기서 쓰고, 위키독스로 게시합니다. 장·절 단위 마크다운과 본문 다이어그램 원본까지 모두 버전 관리됩니다.

</div>

---

## 📚 책 목록

<table>
<tr>
<td width="180" align="center" valign="top">
<a href="https://wikidocs.net/book/20726"><img src="vibe-deploy-book/images/cover.jpg" alt="바이브코딩, 배포까지 완주" width="160" /></a>
</td>
<td valign="top">

### [바이브코딩, 배포까지 완주](vibe-deploy-book/)

AI가 코드는 다 짜줍니다. 이 책은 당신이 AI에게 **"배포해줘"라고 제대로 시킬 수 있는 사람**으로 만들어줍니다. localhost에서 멈춘 바이브코더를 위한 완주 가이드 — GitHub, Vercel, Neon, 도메인 연결, HTTPS까지.

`FastAPI` `Vercel` `Neon` `도메인/DNS` `비개발자 대상`

**12장 + 부록 3편 · 54개 절** · 연재 중 · 2,900원

[📖 위키독스에서 읽기](https://wikidocs.net/book/20726) · [📁 원고 보기](vibe-deploy-book/)

</td>
</tr>
</table>

<table>
<tr>
<td width="180" align="center" valign="top">
<a href="vibe-after-deploy-book/"><img src="vibe-after-deploy-book/images/cover.jpg" alt="바이브코딩, 배포 다음의 세계" width="160" /></a>
</td>
<td valign="top">

### [바이브코딩, 배포 다음의 세계](vibe-after-deploy-book/)

「배포까지 완주」 **후속편.** 배포는 끝났고 이제 운영입니다. 초대장에 카카오맵과 기상청 날씨를 붙이고, 서버·DB·외부 API가 지금 멀쩡한지 **한 화면에서 30초 만에** 확인하는 관리자 페이지를 만듭니다. AI가 시킨 대로 안 만들어줬을 때 손으로 고치는 법(부록 B)까지.

`카카오맵 API` `공공데이터포털` `관리자 대시보드` `모니터링` `비개발자 대상`

**12장 + 부록 4편 · 66개 절** · 집필 중

[📖 위키독스에서 읽기](https://wikidocs.net/book/20732) · [📁 원고 보기](vibe-after-deploy-book/)

</td>
</tr>
</table>

## 🗂 저장소 구조

책 한 권이 폴더 하나입니다. 각 책 폴더는 그 자체로 완결된 구조를 가집니다.

```
wikidocs/
├── README.md                    ← 지금 이 파일 (책 목록)
├── vibe-deploy-book/            ← 1권
│   ├── README.md                  책 소개 (표지·목차·링크)
│   ├── manuscript/                원고
│   │   ├── ch01/1-1.md              장별 폴더, 절별 파일
│   │   ├── ch02/...
│   │   └── appendix/                부록
│   └── images/                    본문 이미지
│       ├── cover.jpg                표지
│       ├── chNN-*.png               다이어그램 (위키독스 업로드본)
│       └── src/*.html               다이어그램 원본 SVG 소스
└── vibe-after-deploy-book/      ← 2권 (같은 구조 + 집필용 문서 3종)
    ├── TOC.md                     전체 목차와 확정 사양
    ├── STYLE.md                   집필 지침
    ├── FACTS.md                   API 절차 검증 자료
    ├── manuscript/
    └── images/PROMPTS.md          표지·다이어그램 생성 프롬프트
```

2권의 `TOC.md` · `STYLE.md` · `FACTS.md` 는 **집필용 문서로 위키독스에 게시하지 않습니다.** 원고를 여러 사람(또는 여러 에이전트)이 나눠 쓸 때 사실관계와 문체가 어긋나지 않게 붙잡아 주는 기준 문서입니다.

**파일명 규칙** — 원고는 `manuscript/chNN/N-M.md` (예: `ch09/9-2.md` = 9장 2절). 장 도입부는 `N-0.md`.

## ✍️ 집필 워크플로우

1. **쓴다** — `manuscript/`에 절 단위 마크다운으로 작성. 한 절은 스크롤 2~3회 분량으로 끊습니다.
2. **그린다** — 다이어그램이 필요하면 `images/src/`에 SVG(HTML)로 만들고, 헤드리스 Chrome으로 2배 해상도 PNG 렌더링 후 팔레트 최적화.
3. **올린다** — 위키독스 MCP로 해당 페이지에 게시. 이미지는 페이지에 업로드하고 반환된 URL을 본문에 삽입합니다.
4. **커밋한다** — 장 단위로 커밋. 원고와 위키독스 게시본을 항상 같은 상태로 유지합니다.

**전자책 발행 시 주의** — PDF 변환에서 깨지는 문자가 있습니다. 이모지, `★` 같은 기호, 맥 키보드 기호(`⌘⌥`)는 텍스트로 대체하고, 역슬래시는 코드블록 밖에서 쓰지 않습니다.

## 📄 저작권

이 저장소의 모든 원고와 이미지는 위키독스에 연재·판매 중인 저작물의 원본입니다. 무단 전재와 재배포를 금합니다.
