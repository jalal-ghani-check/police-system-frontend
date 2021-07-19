<template>
  <div class="page-container">
    <div class="container">
      <div class="page-title-banner dashboard">
          <h2>Dashboard</h2>
      </div>
      <div class="dashboard-page">
        <div class="row">
          <div class="col-md-9">
            <div class="section-heading red">
              <h4>Latest Reports</h4>
            </div>
            <div class="dashboard-cards">
                <div class="row">
                    <div class="col-md-4">
                        <div class="dashboard-card">
                            <div class="tag-no">#4723</div>
                            <h3>Beach Shooting //7/7/21</h3>
                            <h4>By: Timothy Rooney</h4>
                            <div class="tag">Medical Report</div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <div class="dashboard-card red">
                        <div class="tag-no">#4723</div>
                        <h3>Beach Shooting //7/7/21</h3>
                        <h4>By: Timothy Rooney</h4>
                        <div class="tag">Medical Report</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="dashboard-card red">
                        <div class="tag-no">#4723</div>
                        <h3>Beach Shooting //7/7/21</h3>
                        <h4>By: Timothy Rooney</h4>
                        <div class="tag">Medical Report</div>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-md-4">
                    <div class="dashboard-card">
                        <div class="tag-no">#4723</div>
                        <h3>Beach Shooting //7/7/21</h3>
                        <h4>By: Timothy Rooney</h4>
                        <div class="tag">Medical Report</div>
                    </div>
                </div>
                <div class="col-md-4">
                  <div class="dashboard-card red">
                      <div class="tag-no">#4723</div>
                      <h3>Beach Shooting //7/7/21</h3>
                      <h4>By: Timothy Rooney</h4>
                      <div class="tag">Medical Report</div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="dashboard-card red">
                      <div class="tag-no">#4723</div>
                      <h3>Beach Shooting //7/7/21</h3>
                      <h4>By: Timothy Rooney</h4>
                      <div class="tag">Medical Report</div>
                  </div>
              </div>
            </div>
            </div>
          </div>
          <div class="col-md-3">
              <div class="section-heading small green">
                  <h4>Latest Searchs</h4>
              </div>
              <div class="dashboard-sidebar">
                  <div class="sidebar-card">
                      <h3>Orion Powers</h3>
                      <h4>Citizen ID: LTF46591</h4>
                      <div class="lisence-no">
                          Weapon Lisence: <span>No</span>
                      </div>
                  </div>
                  <div class="sidebar-card">
                      <h3>Orion Powers</h3>
                      <h4>Citizen ID: LTF46591</h4>
                      <div class="lisence-no">
                        Weapon Lisence: <span>No</span>
                      </div>
                  </div>
                  <div class="sidebar-card">
                      <h3>Orion Powers</h3>
                      <h4>Citizen ID: LTF46591</h4>
                      <div class="lisence-no">
                        Weapon Lisence: <span>No</span>
                      </div>
                  </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  layout: 'master',
  mounted () {
    this.$store.commit('setActiveTab', 'dashboard')
  }
}
</script>
<style lang="css" scoped>
  .page-title-banner.dashboard {
      background: url('~/assets/images/dashboard-banner.png') no-repeat;
      background-size: 100% !important;
  }
  .dashboard-card {
      background: #FAFCFF;
      border: 1px solid rgba(128, 186, 255, 0.5);
      box-sizing: border-box;
      padding: 15px 20px;
      color: #1F1F1F;
      margin-bottom: 20px;
      /* Shadow */

      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
      border-radius: 15px;
  }
  .dashboard-card.red {
      background: #FFFAFA;
      border: 1px solid rgba(255, 128, 128, 0.5);
  }
  .dashboard-card .tag-no  {
      font-size: 14px;
      margin-bottom: 5px;
  }
  .dashboard-card h3 {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 0;
  }
  .dashboard-card h4 {
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: rgba(27, 27, 27, 0.5);
  }
  .dashboard-card .tag {
      display: inline-block;
      background: rgba(92, 167, 255, 0.05);
      border-radius: 10px;
      color: #5CA7FF;
      font-size: 18px;
      padding: 4px 10px;
  }
  .dashboard-card.red .tag {
      background: rgba(238, 0, 0, 0.05);
      color: #EE0000
  }
  .dashboard-sidebar .sidebar-card {
      background: #FBFFFA;
      border: 1px solid rgba(145, 255, 128, 0.5);
      box-sizing: border-box;
      padding: 15px 20px;
      color: #1F1F1F;
      margin-bottom: 20px;
      /* Shadow */
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
      border-radius: 15px;
  }
  .dashboard-sidebar .sidebar-card h3 {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
  }
  .dashboard-sidebar .sidebar-card h4  {
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
  }
  .lisence-no {
      font-size: 18px;
      color: rgba(27, 27, 27, 0.5);
  }
  .lisence-no span {
      color: #EE0000;
  }
</style>
