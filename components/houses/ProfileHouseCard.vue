<template>
    <div class="col-md-4">
      <div class="house-card">
          <div class="house-thumb">
              <img :src="house.image" alt="">
          </div>
          <div class="house-card-caption">
              <h3>{{ house.house_name }}</h3>
              <div class="house-price"><span class="text-green">$$$</span>
                 {{house.price}}</div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['house'],
  name: "ProfileHouseCard",
  methods: {

  },
};
</script>

<style lang="css" scoped>
    .profile-cover {
        background: url(~/assets/images/profile-cover.png) no-repeat;
        background-size: cover;
        height: 200px;
        border-radius: 15px;
        margin-top: 30px;
        display: flex;
        padding: 20px;
        margin-bottom: 80px;
    }
    .profile-cover .profile-img {
        margin-top: 40px ;
    }
    .profile-cover .profile-img img {
        border-radius: 10px;
        max-width: 200px;
        max-height: 200px;
    }
    .profile-cover .user-info {
        align-self: flex-end;
        color: #fff;
        margin-left: 20px;
    }
    .profile-cover .user-info h2 {
        font-weight: 500;
        font-size: 24px;
        margin: 0;
    }
    .profile-cover .user-info h3 {
        font-weight: normal;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.5);
    }
    .profile-cover .user-info  .points-badge {
        background: #fff;
        color: #EE0000;
        border-radius: 5px;
        padding: 5px;
        font-size: 12px;
        display: inline-block;
        position: relative;
        padding-left: 25px;
        padding-right: 10px;
    }
    .profile-cover .user-info  .points-badge::before {
        content: '';
        height: 12px;
        width: 12px;
        background: #EE0000;
        position: absolute;
        border-radius: 50%;
        left: 7px;
        top: 8px;
    }
    .profile-cover .cover-btns {
        align-self: flex-end;
        margin-left: auto;
        text-align: right;
    }
    .profile-cover .cover-btns  .btn {
        min-width:150px;
        margin-left: 5px;
    }
    .white-widget .user-bio .list-row {
        display: flex;
    }
    .white-widget .user-bio .label{
        color: rgba(27, 27, 27, 0.5);
        width: 20%;
    }
    .white-widget .user-bio .value{
    text-align: right;
    width: 80%;
    }
    .white-widget .user-bio ul {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-top: 20px;
    }
    .white-widget .user-bio ul li {
        margin-bottom: 10px;
    }
    .white-widget .user-bio .icon-list {
        display: flex;
        background: #F7F7F7;
        border-radius: 10px;
        padding: 10px;
    }
    .white-widget .user-bio .icon-list .icon {
        margin-right: 20px;
    }
    .white-widget .user-bio .icon-list h3 {
        font-size: 14px;
        font-weight: normal;
        margin: 0;
    }
    .white-widget .user-bio .icon-list h4 {
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        color: rgba(27, 27, 27, 0.5);
    }
    .house-card {
        position: relative;
    }
    .house-card img {
        max-width: 100%;
    }
    .house-card-caption {
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
    .house-card-caption h3 {
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        margin: 0;
    }
    .house-price {
        color: #fff;
        font-size: 12px;
    }
    .tab-section .nav-tabs {
        border: none;
        background: #F7F7F7;
        border-radius: 10px;
        height: 40px;
        margin-bottom: 20px;
    }
    .tab-section .nav-tabs .nav-item {
        border: none;
        text-align: center;
        font-size: 12px;
        margin: 0;
    }
    .tab-section .nav-tabs .nav-link {
        border: none;
        border-radius: 10px;
        height: 40px;
        color: rgba(27, 27, 27, 0.5);
    }
    .tab-section .nav-tabs .nav-item.show .nav-link,
    .tab-section .nav-tabs .nav-link.active {
        background: #5CA7FF;
        box-shadow: 0px 5px 20px rgba(92, 167, 255, 0.15);
        color: #fff;
        border: none;
    }
    .tab-section .nav-tabs .nav-link:focus,
    .tab-section .nav-tabs .nav-link:hover {
        border: none;
    }
    .charges-list ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .charges-list ul li {
        margin-bottom: 10px;
    }
    .charges-list .charges-item {
        display: flex;
    }
    .charges-list .charges-item .rate-value {
        background: rgba(245, 147, 0, 0.05);
        border-radius: 10px;
        height: 40px;
        width: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
        color: #F59300;
        margin-right: 10px;
    }
    .charges-list .charges-item h3 {
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        margin: 0 0 5px;
    }
    .charges-list .charges-item h4 {
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        margin: 0;
        color: #F59300;
    }
    .charges-list ul li.red .rate-value {
        background: rgba(238, 0, 0, 0.05);
        color: #EE0000;
    }
    .charges-list ul li.red .charges-item h4{
        color: #EE0000;
    }
</style>
