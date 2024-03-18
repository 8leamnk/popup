# 팝업 구현 연습

## STEP1

1. 사용자가 홈에 진입한다. 이 때 팝업이 뜨지 않는다.
2. 다른 페이지로 이동한다.
3. 다시 홈으로 돌아온다. 이 때 팝업이 뜬다.

## STEP2

- 🚨 100개의 팝업 정보를 한꺼번에 받아와서 처리하는 방식이다.
- 팝업의 순서는 무작위이며, 각 요소의 속성에 번호가 있다.

```
[
  { title: '팝업 NO.1', content: '광고', popupNumber: 1 },
  { title: '팝업 NO.2', content: '안내', popupNumber: 2 },
  { title: '팝업 NO.3', content: '공지', popupNumber: 3 },
  // ...
]
```

1. 사용자가 홈에 진입한다. 이 때 팝업이 뜨지 않는다.
2. 다른 페이지로 이동한다.
3. 다시 홈으로 돌아온다. 이 때 1번 팝업이 뜬다.
4. 다른 페이지로 이동한다.
5. 다시 홈으로 돌아온다. 이 때 2번 팝업이 뜬다.
6. 다른 페이지로 이동한다.
7. 다시 홈으로 돌아온다. 이 때 3번 팝업이 뜬다.
8. 100번 팝업이 뜰 때까지 반복 된다.
