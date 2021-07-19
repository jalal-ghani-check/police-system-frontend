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
                    :class="{active: 'dashboard'== getActiveTab}"
                  >
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
                    :class="{active: 'warrants'== getActiveTab}"
                  >
                    Warrants
                  </NuxtLink>
                </li>
                <li class="nav-item dropdown">
                  <a
                  class="nav-link dropdown-toggle"
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
