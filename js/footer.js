Vue.component("page-footer", {
  data: function() {
    return {
      isOpen:{
        open:true,
        openTime:'11:00-15:00',
      },
    };
  },
  methods: {
    checkOpenTime() {
      let vm = this;
      if (!vm.isOpen.open) {
        Swal.fire(
          '抱歉！目前並非點餐時間',
          `點餐時間為${vm.isOpen.openTime}`,
          'warning'
        )
      }else {
        window.location.href="cart.html"
      }
    }
  },
  template: `
  <footer>
    <ul>
      <li>
        <a href="index.html">
          <span class="iconfont icon-food"></span>
          <p>菜單</p>
        </a>
      </li>
      <li>
        <a @click="checkOpenTime()">
          <!-- <span class="label">5</span> -->
          <span class="iconfont icon-cart"></span>
          <p>點菜單</p>
        </a>
      </li>
      <li>
        <a href="order.html">
          <span class="iconfont icon-receipt"></span>
          <p>訂單狀態</p>
        </a>
      </li>
      <li>
        <a href="member_info.html">
          <span class="iconfont icon-user"></span>
          <p>會員資訊</p>
        </a>
      </li>
    </ul>
  </footer>`
});
