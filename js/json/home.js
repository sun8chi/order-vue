let homeData = {
  // 營業時間
  isOpen:{
    open:true,
    openTime:'11:00-15:00',
  },
  //產品列表
  productsList: [
    {
      pId: "pId01",
      pName: "清蒸蒜香帝王蝦",
      pPrice: "800",
      pImg:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      pId: "pId02",
      pName: "招牌綜合海鮮",
      pPrice: "900",
      pImg:
        "https://images.unsplash.com/photo-1539586345401-51d5bfba7ac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      pId: "pId02",
      pName: "招牌綜合海鮮",
      pPrice: "900",
      pImg:
        "https://images.unsplash.com/photo-1539586345401-51d5bfba7ac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }
  ],
  //分類選單
  categorys: [
    {
      cateId: "cate01",
      cateName: "特價披薩"
    },
    {
      cateId: "cate02",
      cateName: "飲料"
    },
    {
      cateId: "cate03",
      cateName: "麵類"
    },
    {
      cateId: "cate04",
      cateName: "酒類"
    },
    {
      cateId: "cate05",
      cateName: "燉飯"
    }
  ],
  //產品細節
  productDetail: {
    pId: "1",
    pName: "清蒸蒜香帝王蝦",
    pImgArr: [
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1541058718861-4eea8bb410c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1563372522-8e97eac82f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    ],
    pDescription:
      "這是一道很好吃的海鮮料理，僅用簡單的調味帶出食材最純粹的美好。",
    pPrice: "800",
    pPointPrice:'10',
    pPointHeart:'15',
    shareLink:'https://google.com',
    pOptions: [
      {
        type:'radio',
        sideName: "辣度",
        sideItems: ["大辣", "中辣", "小辣", "不辣"]
      },
      {
        type:'checkbox',
        sideName: "其他",
        sideItems: ["加洋蔥", "加韭菜","加胡椒粉"]
      }
    ],
    pQty: 1
  },
  // 產品彈跳視窗
  popupShow: false,
  // swiper 分類參數
  swiperCategory: {
    spaceBetween: 10,
    paginationClickable: true,
    slidesPerView: 4,
    slideToClickedSlide: true,
    centeredSlides: true,
    breakpoints: {
      500: {
        slidesPerView: 5
      }
    }
  },
  // swiper 產品輪播
  swiperProductDetail: {
    loop: true,
    pagination: {
      el: ".swiper-pagination"
    }
  }
};
