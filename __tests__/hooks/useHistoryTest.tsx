'use client';

import { renderHook } from '@testing-library/react';
import useHistory from '@/hooks/useHistory';

describe('페이지 주소 저장 기능 테스트', () => {
  test('주소를 이동할 때마다 최대 2개의 페이지 주소 기록이 쌓인다.', () => {
    // given
    const INITIAL_PROPS: string = '/';
    const PATHNAMES: string[] = ['/about', '/my', '/', '/recruit'];
    const PREVIOUS = ['/', '/about', '/my', '/'];

    // when
    const { result, rerender } = renderHook(
      (props: string) => useHistory(props),
      {
        initialProps: INITIAL_PROPS,
      },
    );

    // then
    expect(result.current.currPathname).toEqual(INITIAL_PROPS);
    expect(result.current.prevPathname).toEqual(undefined);

    PATHNAMES.forEach((pathname, index) => {
      rerender(pathname);
      expect(result.current.currPathname).toEqual(PATHNAMES[index]);
      expect(result.current.prevPathname).toEqual(PREVIOUS[index]);
    });
  });
});
