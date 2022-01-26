export default {
  name: '이름',
  tel: '핸드폰',
  save: '구하다',
  confirm: '확인',
  cancel: '취소',
  delete: '삭제',
  loading: '로딩 중...',
  noCoupon: '쿠폰 없음',
  nameEmpty: '이름을 기입해주세요',
  addContact: '새 연락처 추가',
  telInvalid: '잘못된 전화번호',
  vanCalendar: {
    end: '끝',
    start: '시작',
    title: '달력',
    weekdays: [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `${maxRange} 일 이내로 선택`,
  },
  vanCascader: {
    select: '선택하다',
  },
  vanPagination: {
    prev: '이전의',
    next: '다음',
  },
  vanPullRefresh: {
    pulling: '당겨서 새로고침...',
    loosing: '새로 고침...',
  },
  vanSubmitBar: {
    label: '총：',
  },
  vanCoupon: {
    unlimited: '제한 없는',
    discount: (discount: number) => `${discount * 10}% 할인`,
    condition: (condition: number) => `최소 ${condition}`,
  },
  vanCouponCell: {
    title: '쿠폰',
    count: (count: number) => `${count} 개의 쿠폰이 있습니다`,
  },
  vanCouponList: {
    exchange: '교환',
    close: '닫다',
    enable: '사용 가능',
    disabled: '없는',
    placeholder: '쿠폰 코드',
  },
  vanAddressEdit: {
    area: '지역',
    postal: '우편 엽서',
    areaEmpty: '접수지역을 선택해주세요',
    addressEmpty: '주소는 비워둘 수 없습니다',
    postalEmpty: '잘못된 우편번호',
    defaultAddress: '기본 주소로 설정',
  },
  vanAddressEditDetail: {
    label: '주소',
    placeholder: '주소',
  },
  vanAddressList: {
    add: '새 주소 추가',
  },
};
