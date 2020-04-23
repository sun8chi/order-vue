Vue.component("page-footer", {
  data: function() {
    return {};
  },
  template: `<footer>
    <ul>
      <li>
        <a href="index.html">
          <img src="img/icon_footer01.png" alt="" />
          <p>菜單</p>
        </a>
      </li>
      <li>
        <a href="cart.html">
          <span class="label">5</span>
          <img src="img/icon_footer02.png" alt="" />
          <p>點菜單</p>
        </a>
      </li>
      <li>
        <a href="order.html">
          <img src="img/icon_footer03.png" alt="" />
          <p>訂單狀態</p>
        </a>
      </li>
      <li>
        <a href="member_info.html">
          <img src="img/icon_footer04.png" alt="" />
          <p>會員資訊</p>
        </a>
      </li>
    </ul>
  </footer>`
});