# 팝업 구현 연습

## STEP1

1. 사용자가 홈에 진입한다. 이 때 팝업이 뜨지 않는다.
2. 다른 페이지로 이동한다.
3. 다시 홈으로 돌아온다. 이 때 팝업이 뜬다.

## STEP2

- 🚨 10개의 팝업 정보를 한꺼번에 받아와서 처리하는 방식이다.
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
8. 10번 팝업이 뜰 때까지 반복 된다.

## STEP3

- 프로젝트에 처음 진입 시 10개의 팝업 정보를 API에서 한 번에 받아오도록 한다.
- 팝업의 순서는 무작위이며, 각 속성에 번호가 있다.
- 객체 형태로 응답한다.

```
{
  3: { title: '팝업 NO.3', content: '공지', popupNumber: 3 },
  1: { title: '팝업 NO.1', content: '광고', popupNumber: 1 },
  2: { title: '팝업 NO.2', content: '안내', popupNumber: 2 },
  // ...
}
```

- 동작은 STEP2와 같다.

## STEP4

- 팝업 컴포넌트를 다른 페이지에서도 사용한다.

1. 사용자가 홈에 진입한다. 이 때 팝업이 뜨지 않는다.
2. About 페이지로 이동한다. 아무 것도 뜨지 않는다.
3. 다시 홈으로 돌아온다. 이 때 1번 팝업이 뜬다.
4. My 페이지로 이동한다.
5. 다시 홈으로 돌아온다. 이 때 2번 팝업이 뜬다.
6. My 페이지로 이동한다.
7. My 페이지의 팝업 버튼을 누른다. 이 때 홈에서 나오는 팝업과는 무관하며 My 페이지의 팝업 버튼과 관련된 팝업 내용만 나온다.
8. About 페이지로 이동한다. 아무 것도 뜨지 않는다.
9. 다시 홈으로 돌아온다. 이 때 3번 팝업이 뜬다.
10. 10번 팝업이 뜰 때까지 반복 된다.
