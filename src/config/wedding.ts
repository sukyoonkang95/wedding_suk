export const weddingConfig = {
  groom: {
    name: '김석윤',
    phone: '010-0000-0000',
    parents: {
      father: '김○○',
      mother: '이○○',
    },
  },
  bride: {
    name: '박○○',
    phone: '010-0000-0000',
    parents: {
      father: '박○○',
      mother: '최○○',
    },
  },
  date: {
    year: 2026,
    month: 9,
    day: 12,
    hour: 12,
    minute: 30,
    weekday: '토요일',
  },
  venue: {
    name: '○○웨딩홀',
    hall: '2층 그랜드홀',
    address: '서울특별시 ○○구 ○○로 123',
    tel: '02-000-0000',
    naverMapUrl: 'https://map.naver.com',
    kakaoMapUrl: 'https://map.kakao.com',
  },
  message: `저희 두 사람, 하나 됨에
따뜻한 마음으로 함께해 주시면
더없이 큰 기쁨이 되겠습니다.

바쁘신 중에도 귀한 걸음
하시어 축복해 주시면
진심으로 감사드리겠습니다.`,
  accounts: [
    {
      side: 'groom' as const,
      bank: '국민은행',
      number: '000000-00-000000',
      holder: '김석윤',
    },
    {
      side: 'bride' as const,
      bank: '신한은행',
      number: '000000-00-000000',
      holder: '박○○',
    },
  ],
  og: {
    title: '김석윤 ♥ 박○○ 결혼합니다',
    description: '2026년 9월 12일 토요일 오후 12시 30분',
    image: '/og-image.jpg',
  },
}

export function getWeddingDateTime() {
  const { year, month, day, hour, minute } = weddingConfig.date
  return new Date(year, month - 1, day, hour, minute)
}
