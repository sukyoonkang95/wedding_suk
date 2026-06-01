export const weddingConfig = {
  heroImage: '/images/wedding_1.jpg',
  gallery: Array.from({ length: 9 }, (_, i) => `/images/wedding_${i + 2}.jpg`),
  groom: {
    name: '강 석윤',
    phone: '010-0000-0000',
    parents: {
      father: '강민규',
      mother: '박찬나',
    },
  },
  bride: {
    name: '정 지우',
    phone: '010-0000-0000',
    parents: {
      father: '박○○',
      mother: '최○○',
    },
  },
  date: {
    year: 2026,
    month: 10,
    day: 31,
    hour: 11,
    minute: 0,
    weekday: '토요일',
  },
  venue: {
    name: '더시그너스웨딩홀',
    hall: '2층 그랜드홀',
    address: '대전 서구 둔산중로 8',
    tel: '0507-1340-1614',
    kakaoMapEmbed: {
      timestamp: '1780287233727',
      key: 'orhd8j2r8s9',
      mapHeight: 360,
    },
    naverMapUrl: 'https://map.naver.com/p/search/%EB%8D%94%EC%8B%9C%EA%B7%B8%EB%84%88%EC%8A%A4%EC%9B%A8%EB%94%A9%ED%99%80%20%EB%8C%80%EC%A0%84/place/2036462553?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202606011256&locale=ko&svcName=map_pcv5&searchText=%EB%8D%94%EC%8B%9C%EA%B7%B8%EB%84%88%EC%8A%A4%EC%9B%A8%EB%94%A9%ED%99%80%20%EB%8C%80%EC%A0%84',
    kakaoMapUrl: 'https://map.kakao.com/?urlX=586945.0000000024&urlY=791565.9999999963&urlLevel=3&itemId=1784672105&q=%EB%8D%94%EC%8B%9C%EA%B7%B8%EB%84%88%EC%8A%A4%EC%9B%A8%EB%94%A9%EB%B7%94%ED%8E%98&srcid=1784672105&map_type=TYPE_MAP',
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
      holder: '강석윤',
    },
    {
      side: 'bride' as const,
      bank: '신한은행',
      number: '000000-00-000000',
      holder: '정지우',
    },
  ],
  og: {
    title: '강석윤 ♥ 정지우 결혼합니다',
    description: '2026년 10월 31일 토요일 오후 11시 00분',
    image: '/og-image.jpg',
  },
}

export function getWeddingDateTime() {
  const { year, month, day, hour, minute } = weddingConfig.date
  return new Date(year, month - 1, day, hour, minute)
}
