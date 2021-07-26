<template>
<div>
  <div id="policeReport" tabindex="-1"  aria-hidden="true"  :style="{display: isPoliceReportPopupOpen ? 'block' : 'none'}" v-if="isPoliceReportPopupOpen && selectedPoliceReportObject"
  class="modal fade" :class= "{show: isPoliceReportPopupOpen}">
        <div class="modal-dialog report-modal modal-dialog-centered ">
          <div class="modal-content">
            <div class="modal-body">
                <header style="background-color:#000;color:#fff;">
  <span  class="close-button topright" @click="closePoliceReportModalPopUp()">&times;</span>
</header>
                <div class="report-header">
                    <div class="header-logo">
                        <img src="../../assets/images/police-report logo.png" alt="">
                    </div>
                    <div class="report-title">
                        <h3>Police Report</h3>
                        <h4>Bank Robbery 7/6/2021</h4>
                    </div>
                </div>
                <div class="report-body">
                 <div class="row">
                    <div class="col-md-6">
                        <strong>Regarding:</strong>  <span class="text-primary">{{ selectedPoliceReportObject.regarding }}</span><br>
                        <strong>CID:</strong>  <span>{{ selectedPoliceReportObject.cid }}</span>

                    </div>
                    <div class="col-md-6 text-end">
                         
                        <strong>Case No.</strong>  <span>#{{ selectedPoliceReportObject.case_number }}</span><br>
                        <strong>Reference Case No.</strong>  <span>#{{ selectedPoliceReportObject.ref_case_number }}</span>
                    </div>

                 </div>
                 <div class="border-entries mt-3 mb-0">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <div class="mt-2 mb-2"><strong>Written By:</strong> {{ selectedPoliceReportObject.written_by }}</div>
                        </div>
                        <div class="col-md-6 text-end" style="border: none;">
                            <div class="mt-2 mb-2"><strong>Created On:</strong>  {{ selectedPoliceReportObject.created_at }}</div>
                        </div>
                    </div>
                </div>

                <div class="border-entries">
                    <div class="row g-0" style="border-top: none;">
                        <div class="col-md-3">
                            <h3>Officers Involed:</h3>
                            <h4>{{ (selectedPoliceReportObject.officers_involved) ? 'Yes' : 'No' }}</h4>
                        </div>
                        <div class="col-md-3">
                            <h3>shots fired:</h3>
                            <h4>{{ (selectedPoliceReportObject.shorts_fired) ? 'Yes' : 'No' }}</h4>
                        </div>
                        <div class="col-md-3">
                            <h3>GSR Test Results:</h3>
                            <h4>{{ (selectedPoliceReportObject.gsr_test_result) ? 'Yes' : 'No' }}</h4>
                        </div>
                        <div class="col-md-3">
                            <h3>Casings Recovered:</h3>
                            <h4>{{ (selectedPoliceReportObject.casing_recovered) ? 'Yes' : 'No' }}</h4>
                        </div>
                    </div>
                </div>
                 <p>
                     {{ selectedPoliceReportObject.description }}
                </p>
                    
                    <div class="border-entries">
                        <div class="row g-0">
                            <div class="col-md-3">
                                <h3>Suspects Involed:</h3>
                                <h4>{{ (selectedPoliceReportObject.suspects_involved) ? 'Yes' : 'No' }}</h4>
                            </div>
                            <div class="col-md-3">
                                <h3>Use of Violence:</h3>
                                <h4>{{ (selectedPoliceReportObject.use_of_violence) ? 'Yes' : 'No' }}</h4>
                            </div>
                            <div class="col-md-3">
                                <h3>Medical Treatment:</h3>
                                <h4>{{ (selectedPoliceReportObject.med_treatment) ? 'Yes' : 'No' }}</h4>
                            </div>
                            <div class="col-md-3">
                                <h3>Legal Aid:</h3>
                                <h4>{{ (selectedPoliceReportObject.legal_aid) ? 'Yes' : 'No' }}</h4>
                            </div>
                        </div>
                    </div>
                        <h4 class="mb-0 mt-4">Items Seized:</h4>
                        <p>{{ selectedPoliceReportObject.items_seized }}</p>
                        <hr>
                        <h4 class="mt-4">Charges:</h4>
           
                   <div class="fine-cards">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="fine-card green mt-2" v-for="(crime, index) in selectedPoliceReportObject.criminal_record.infraction" :key="index">
                                <div class="number">{{ crime.law_code }}</div>
                                <h4>{{ crime.law_title }}</h4>
                                <div class="tag">Infraction</div>
                                <hr>
                                <div class="row">
                                    <div class="col-6">Fine: $ {{ crime.fine_amount }}</div>
                                    <div class="col-6 text-end">Months: {{ crime.duration }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="fine-card orange mt-2" v-for="(crime, index) in selectedPoliceReportObject.criminal_record.misdemeanor" :key="index">
                                <div class="number">{{ crime.law_code }}</div>
                                <h4>{{ crime.law_title }}</h4>
                                <div class="tag">Infraction</div>
                                <hr>
                                <div class="row">
                                    <div class="col-6">Fine: $ {{ crime.fine_amount }}</div>
                                    <div class="col-6 text-end">Months: {{ crime.duration }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="fine-card red mt-2" v-for="(crime, index) in selectedPoliceReportObject.criminal_record.felony" :key="index">
                                <div class="number">{{ crime.law_code }}</div>
                                <h4>{{ crime.law_title }}</h4>
                                <div class="tag">Infraction</div>
                                <hr>
                                <div class="row">
                                    <div class="col-6">Fine: $ {{ crime.fine_amount }}</div>
                                    <div class="col-6 text-end">Months: {{ crime.duration }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                   </div>
                   <div class="border-entries mt-4">
                    <div class="row g-0" style="border-bottom: none;">
                        <div class="col-md-6">
                           <h3>Total:</h3> 
                            <p><span class="text-green">$$$</span> {{ selectedPoliceReportObject.sum.total_fine }} Fine<br>
                                {{ selectedPoliceReportObject.sum.total_points }} Points
                            </p>
                           
                        </div>
                 
                   
                        <div class="col-md-6">
                            <h3>Received Sentence:</h3> 
                            <p><span class="text-green">$$$</span> 1,600 Fine<br>
                                5 Months
                            </p>
                        </div>
                    </div>
                </div>
              
                
                </div>
            </div>
          </div>
        </div>
      </div>
<div v-if="isPoliceReportPopupOpen" class="modal-backdrop fade show" />
      </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'policeReportDetails',
  computed: {
    ...mapGetters({
        isPoliceReportPopupOpen: 'report/getIsPoliceReportPopupOpen',
        selectedPoliceReportObject: 'report/getSelectedPoliceReportObject'
    })
  },
  methods: {
    closePoliceReportModalPopUp () {
      this.$store.commit('report/setIsPoliceReportPopupOpen', false)
      this.$store.commit('report/setSelectedPoliceReport', null)
    }
  },
}
</script>

<style lang="css" scopted>
    .modal {
        overflow-y: auto;
    }

    .close-button {
  border: none;
  display: inline-block;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap
}

.topright {
  position: absolute;
  right: 0;
  top: 0
}

</style>