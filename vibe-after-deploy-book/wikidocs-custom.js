// 위키독스 [책 수정] > JavaScript 에 붙여넣는 내용.
// 1권(20726)과 같은 동작이고, 2권에서 드러난 문제 세 가지만 손봤다.
//
//  1. type="button" — 폼 안에서 실행될 때 submit으로 새는 것 방지
//  2. 중복 방지 플래그 — 스크립트가 두 번 실행돼도 버튼이 두 개 붙지 않게
//  3. 실패 처리 — clipboard 권한이 막히면 조용히 아무 일도 안 일어나던 것을 표시
//
// 2권은 복사 대상 코드블록이 104개다(부록 A만 40개). 1권의 77개보다 많다.

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('pre').forEach(function (pre) {
    if (pre.dataset.copyBtn) return;
    pre.dataset.copyBtn = '1';

    // 버튼을 붙이기 전에 읽어야 버튼 글자('복사')가 딸려가지 않는다
    var text = pre.innerText;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = '복사';
    btn.style.cssText = 'position:absolute;top:8px;right:8px;font-size:12px;padding:2px 10px;border:1px solid #ccc;border-radius:6px;background:#fff;cursor:pointer;opacity:.75';
    pre.style.position = 'relative';

    btn.addEventListener('click', function () {
      var done = function (msg) {
        btn.textContent = msg;
        setTimeout(function () { btn.textContent = '복사'; }, 1500);
      };
      if (!navigator.clipboard) { done('복사 불가'); return; }
      navigator.clipboard.writeText(text).then(
        function () { done('복사됨!'); },
        function () { done('복사 실패'); }
      );
    });

    pre.appendChild(btn);
  });
});
