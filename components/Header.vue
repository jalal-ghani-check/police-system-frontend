<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <!-- <a class="nav-link active" aria-current="page" href="#">
                    Dashboard
                  </a> -->
                  <NuxtLink
                    id="dashboard"
                    to="/dashboard"
                    class="nav-link"
                    :class="{active: 'dashboard'== getActiveTab, 
                            'dashboard-active':'dashboard'== getActiveTab  }"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00002 22H8.80002V15.2H2.00002V22ZM15.2 8.8H22V2H15.2V8.8ZM15.2 22H22V15.2H15.2V22ZM2.00002 8.8H8.80002V2H2.00002V8.8ZM1.20002 13.6H9.60003C9.8122 13.6 10.0157 13.6843 10.1657 13.8343C10.3157 13.9843 10.4 14.1878 10.4 14.4V22.8C10.4 23.0122 10.3157 23.2157 10.1657 23.3657C10.0157 23.5157 9.8122 23.6 9.60003 23.6H1.20002C0.98785 23.6 0.784367 23.5157 0.634339 23.3657C0.48431 23.2157 0.400024 23.0122 0.400024 22.8V14.4C0.400024 14.1878 0.48431 13.9843 0.634339 13.8343C0.784368 13.6843 0.987851 13.6 1.20002 13.6ZM14.4 0.400002H22.8C23.0122 0.400002 23.2157 0.484287 23.3657 0.634316C23.5157 0.784345 23.6 0.987828 23.6 1.2V9.6C23.6 9.81218 23.5157 10.0157 23.3657 10.1657C23.2157 10.3157 23.0122 10.4 22.8 10.4H14.4C14.1879 10.4 13.9844 10.3157 13.8343 10.1657C13.6843 10.0157 13.6 9.81217 13.6 9.6V1.2C13.6 0.987828 13.6843 0.784345 13.8343 0.634316C13.9844 0.484287 14.1879 0.400002 14.4 0.400002ZM14.4 13.6H22.8C23.0122 13.6 23.2157 13.6843 23.3657 13.8343C23.5157 13.9843 23.6 14.1878 23.6 14.4V22.8C23.6 23.0122 23.5157 23.2157 23.3657 23.3657C23.2157 23.5157 23.0122 23.6 22.8 23.6H14.4C14.1879 23.6 13.9844 23.5157 13.8343 23.3657C13.6843 23.2157 13.6 23.0122 13.6 22.8V14.4C13.6 14.1878 13.6843 13.9843 13.8343 13.8343C13.9844 13.6843 14.1879 13.6 14.4 13.6ZM1.20002 0.400002H9.60003C9.8122 0.400002 10.0157 0.484287 10.1657 0.634316C10.3157 0.784345 10.4 0.987828 10.4 1.2V9.6C10.4 9.81217 10.3157 10.0157 10.1657 10.1657C10.0157 10.3157 9.8122 10.4 9.60003 10.4H1.20002C0.987851 10.4 0.784368 10.3157 0.634339 10.1657C0.48431 10.0157 0.400024 9.81218 0.400024 9.6V1.2C0.400024 0.987828 0.48431 0.784345 0.634339 0.634316C0.784368 0.484287 0.987851 0.400002 1.20002 0.400002Z" fill="#1B1B1B" fill-opacity="0.5"/>
                    </svg>
                    Dashboard
                  </NuxtLink>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Search
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <NuxtLink
                        id="persons"
                        to="/persons"
                        class="dropdown-item"
                      >
                        Persons
                      </NuxtLink>
                    </li>
                        <li>
                      <NuxtLink
                        id="reports"
                        to="/reports"
                        class="dropdown-item"
                      >
                        Reports
                      </NuxtLink>
                    </li>
                        <li>
                      <NuxtLink
                        id="warrants"
                        to="/warrants"
                        class="dropdown-item"
                      >
                        Warrants
                      </NuxtLink>
                    </li>
                        <li>
                      <NuxtLink
                        id="vehicles"
                        to="/vehicles"
                        class="dropdown-item"
                      >
                        Vehicles
                      </NuxtLink>
                    </li>
                        <li>
                      <NuxtLink
                        id="houses"
                        to="/houses"
                        class="dropdown-item"
                      >
                        Houses
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    id="warrants"
                    to="/warrants"
                    class="nav-link"
                     :class="{active: 'warrants'== getActiveTab, 
                            'warrants-active':'warrants'== getActiveTab  }"
                  >
                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33333 5.83333H5.83333V1.33333C5.83333 1.11232 5.92113 0.900358 6.07741 0.744078C6.23369 0.587797 6.44565 0.5 6.66667 0.5H25.3333C25.5543 0.5 25.7663 0.587798 25.9226 0.744078C26.0789 0.900357 26.1667 1.11232 26.1667 1.33333V18.6667C26.1667 19.9485 25.6574 21.1779 24.751 22.0843C23.8446 22.9908 22.6152 23.5 21.3333 23.5H4C3.07174 23.5 2.1815 23.1313 1.52513 22.4749C0.868749 21.8185 0.5 20.9283 0.5 20V6.66667C0.5 6.44565 0.587797 6.23369 0.744078 6.07741C0.900358 5.92113 1.11232 5.83333 1.33333 5.83333ZM5.83333 7.5H2.16667V20C2.16667 20.4862 2.35982 20.9525 2.70364 21.2964C3.04745 21.6402 3.51377 21.8333 4 21.8333C4.48623 21.8333 4.95254 21.6402 5.29636 21.2964C5.64018 20.9525 5.83333 20.4862 5.83333 20V7.5ZM7.29002 21.1627L7.04654 21.8333H21.3333C22.1732 21.8333 22.9786 21.4997 23.5725 20.9058C24.1664 20.312 24.5 19.5065 24.5 18.6667V2.16667H7.5V19.998C7.49663 20.3953 7.42562 20.7892 7.29002 21.1627ZM18.6667 11.1667H20C20.221 11.1667 20.433 11.2545 20.5893 11.4107C20.7455 11.567 20.8333 11.779 20.8333 12C20.8333 12.221 20.7455 12.433 20.5893 12.5893C20.433 12.7455 20.221 12.8333 20 12.8333H18.6667C18.4457 12.8333 18.2337 12.7455 18.0774 12.5893C17.9211 12.433 17.8333 12.221 17.8333 12C17.8333 11.779 17.9211 11.567 18.0774 11.4107C18.2337 11.2545 18.4457 11.1667 18.6667 11.1667ZM18.6667 16.5H20C20.221 16.5 20.433 16.5878 20.5893 16.7441C20.7455 16.9004 20.8333 17.1123 20.8333 17.3333C20.8333 17.5543 20.7455 17.7663 20.5893 17.9226C20.433 18.0789 20.221 18.1667 20 18.1667H18.6667C18.4457 18.1667 18.2337 18.0789 18.0774 17.9226C17.9211 17.7663 17.8333 17.5543 17.8333 17.3333C17.8333 17.1123 17.9211 16.9004 18.0774 16.7441C18.2337 16.5878 18.4457 16.5 18.6667 16.5ZM20 7.5H12C11.779 7.5 11.567 7.4122 11.4107 7.25592C11.2545 7.09964 11.1667 6.88768 11.1667 6.66667C11.1667 6.44565 11.2545 6.23369 11.4107 6.07741C11.567 5.92113 11.779 5.83333 12 5.83333H20C20.221 5.83333 20.433 5.92113 20.5893 6.07741C20.7455 6.23369 20.8333 6.44565 20.8333 6.66667C20.8333 6.88768 20.7455 7.09964 20.5893 7.25592C20.433 7.4122 20.221 7.5 20 7.5ZM13.3333 12.8333H12C11.779 12.8333 11.567 12.7455 11.4107 12.5893C11.2545 12.433 11.1667 12.221 11.1667 12C11.1667 11.779 11.2545 11.567 11.4107 11.4107C11.567 11.2545 11.779 11.1667 12 11.1667H13.3333C13.5543 11.1667 13.7663 11.2545 13.9226 11.4107C14.0789 11.567 14.1667 11.779 14.1667 12C14.1667 12.221 14.0789 12.433 13.9226 12.5893C13.7663 12.7455 13.5543 12.8333 13.3333 12.8333ZM13.3333 18.1667H12C11.779 18.1667 11.567 18.0789 11.4107 17.9226C11.2545 17.7663 11.1667 17.5543 11.1667 17.3333C11.1667 17.1123 11.2545 16.9004 11.4107 16.7441C11.567 16.5878 11.779 16.5 12 16.5H13.3333C13.5543 16.5 13.7663 16.5878 13.9226 16.7441C14.0789 16.9004 14.1667 17.1123 14.1667 17.3333C14.1667 17.5543 14.0789 17.7663 13.9226 17.9226C13.7663 18.0789 13.5543 18.1667 13.3333 18.1667Z" fill="#1B1B1B" fill-opacity="0.5"/>
                    </svg>
                    Warrants
                  </NuxtLink>
                </li>
                <li class="nav-item dropdown">
                  <a
                  class="nav-link dropdown-toggle"
                  :class="{active: 'users' == getActiveTab ,
                                    'admin-active':'users'== getActiveTab }"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                    Admin
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <NuxtLink
                        id="fine-laws"
                        to="/admin/fine-laws"
                        class="dropdown-item"
                      >
                        Fine/Laws
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        id="users"
                        to="/admin/users"
                        class="dropdown-item"
                      >
                        Users
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                      Muhammad Ahmed
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Messages</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item text-red" @click="logout">Log Out</a></li>
                    </ul>
                  </li>
                </ul>
            </div>
          </div>
        </nav>
    </header>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
  }),
  computed: {
    ...mapGetters({
      getActiveTab: 'getActiveTab',
      isAuthenticated: 'auth/isAuthenticated'
    })
  },
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logoutUser', false)
      this.$router.replace('/auth')
    },
    closeDropDown (e) {
      if (!this.$el.contains(e.target)) {
        this.dropdownOpen = false
      }
    }
  }
}
</script>
