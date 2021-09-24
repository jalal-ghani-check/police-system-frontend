<template>
  <div>
    <div>
      <div class="container">
        <div class="title-header">
            <div class="row">
              <div class="col-md-9">
                <div class="section-heading small green">
                  <h4 class="ms-3">
                    <svg
                      width="15"
                      height="18"
                      viewBox="0 0 15 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 7.2H5.4C5.63869 7.2 5.86761 7.10518 6.0364 6.9364C6.20518 6.76761 6.3 6.53869 6.3 6.3C6.3 6.06131 6.20518 5.83239 6.0364 5.6636C5.86761 5.49482 5.63869 5.4 5.4 5.4H4.5C4.2613 5.4 4.03239 5.49482 3.8636 5.6636C3.69482 5.83239 3.6 6.06131 3.6 6.3C3.6 6.53869 3.69482 6.76761 3.8636 6.9364C4.03239 7.10518 4.2613 7.2 4.5 7.2ZM4.5 9C4.2613 9 4.03239 9.09482 3.8636 9.2636C3.69482 9.43239 3.6 9.6613 3.6 9.9C3.6 10.1387 3.69482 10.3676 3.8636 10.5364C4.03239 10.7052 4.2613 10.8 4.5 10.8H9.9C10.1387 10.8 10.3676 10.7052 10.5364 10.5364C10.7052 10.3676 10.8 10.1387 10.8 9.9C10.8 9.6613 10.7052 9.43239 10.5364 9.2636C10.3676 9.09482 10.1387 9 9.9 9H4.5ZM14.4 6.246C14.3906 6.16332 14.3725 6.08187 14.346 6.003V5.922C14.3027 5.82946 14.245 5.7444 14.175 5.67L8.775 0.27C8.7006 0.199995 8.61554 0.142273 8.523 0.0989999C8.49613 0.0951841 8.46887 0.0951841 8.442 0.0989999C8.35057 0.0465671 8.2496 0.0129098 8.145 0H2.7C1.98392 0 1.29716 0.284464 0.790812 0.790812C0.284464 1.29716 0 1.98392 0 2.7V15.3C0 16.0161 0.284464 16.7028 0.790812 17.2092C1.29716 17.7155 1.98392 18 2.7 18H11.7C12.4161 18 13.1028 17.7155 13.6092 17.2092C14.1155 16.7028 14.4 16.0161 14.4 15.3V6.3V6.246ZM9 3.069L11.331 5.4H9.9C9.6613 5.4 9.43239 5.30518 9.2636 5.1364C9.09482 4.96761 9 4.73869 9 4.5V3.069ZM12.6 15.3C12.6 15.5387 12.5052 15.7676 12.3364 15.9364C12.1676 16.1052 11.9387 16.2 11.7 16.2H2.7C2.46131 16.2 2.23239 16.1052 2.0636 15.9364C1.89482 15.7676 1.8 15.5387 1.8 15.3V2.7C1.8 2.46131 1.89482 2.23239 2.0636 2.0636C2.23239 1.89482 2.46131 1.8 2.7 1.8H7.2V4.5C7.2 5.21608 7.48446 5.90284 7.99081 6.40919C8.49716 6.91554 9.18392 7.2 9.9 7.2H12.6V15.3ZM9.9 12.6H4.5C4.2613 12.6 4.03239 12.6948 3.8636 12.8636C3.69482 13.0324 3.6 13.2613 3.6 13.5C3.6 13.7387 3.69482 13.9676 3.8636 14.1364C4.03239 14.3052 4.2613 14.4 4.5 14.4H9.9C10.1387 14.4 10.3676 14.3052 10.5364 14.1364C10.7052 13.9676 10.8 13.7387 10.8 13.5C10.8 13.2613 10.7052 13.0324 10.5364 12.8636C10.3676 12.6948 10.1387 12.6 9.9 12.6Z"
                        fill="#1F1F1F"
                      />
                    </svg>
                    Create Police Report
                  </h4>
                </div>
              </div>
              <div class="col-md-3 header-buttons">
                <button class="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#discardReportAlert"
                >
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.3 14.4C6.5387 14.4 6.76761 14.3052 6.9364 14.1364C7.10518 13.9676 7.2 13.7387 7.2 13.5V8.1C7.2 7.8613 7.10518 7.63239 6.9364 7.4636C6.76761 7.29482 6.5387 7.2 6.3 7.2C6.06131 7.2 5.83239 7.29482 5.6636 7.4636C5.49482 7.63239 5.4 7.8613 5.4 8.1V13.5C5.4 13.7387 5.49482 13.9676 5.6636 14.1364C5.83239 14.3052 6.06131 14.4 6.3 14.4ZM15.3 3.6H11.7V2.7C11.7 1.98392 11.4155 1.29716 10.9092 0.790812C10.4028 0.284464 9.71608 0 9 0H7.2C6.48392 0 5.79716 0.284464 5.29081 0.790812C4.78446 1.29716 4.5 1.98392 4.5 2.7V3.6H0.9C0.661305 3.6 0.432387 3.69482 0.263604 3.8636C0.0948211 4.03239 0 4.2613 0 4.5C0 4.73869 0.0948211 4.96761 0.263604 5.1364C0.432387 5.30518 0.661305 5.4 0.9 5.4H1.8V15.3C1.8 16.0161 2.08446 16.7028 2.59081 17.2092C3.09716 17.7155 3.78392 18 4.5 18H11.7C12.4161 18 13.1028 17.7155 13.6092 17.2092C14.1155 16.7028 14.4 16.0161 14.4 15.3V5.4H15.3C15.5387 5.4 15.7676 5.30518 15.9364 5.1364C16.1052 4.96761 16.2 4.73869 16.2 4.5C16.2 4.2613 16.1052 4.03239 15.9364 3.8636C15.7676 3.69482 15.5387 3.6 15.3 3.6ZM6.3 2.7C6.3 2.46131 6.39482 2.23239 6.5636 2.0636C6.73239 1.89482 6.96131 1.8 7.2 1.8H9C9.2387 1.8 9.46761 1.89482 9.6364 2.0636C9.80518 2.23239 9.9 2.46131 9.9 2.7V3.6H6.3V2.7ZM12.6 15.3C12.6 15.5387 12.5052 15.7676 12.3364 15.9364C12.1676 16.1052 11.9387 16.2 11.7 16.2H4.5C4.26131 16.2 4.03239 16.1052 3.8636 15.9364C3.69482 15.7676 3.6 15.5387 3.6 15.3V5.4H12.6V15.3ZM9.9 14.4C10.1387 14.4 10.3676 14.3052 10.5364 14.1364C10.7052 13.9676 10.8 13.7387 10.8 13.5V8.1C10.8 7.8613 10.7052 7.63239 10.5364 7.4636C10.3676 7.29482 10.1387 7.2 9.9 7.2C9.66131 7.2 9.43239 7.29482 9.2636 7.4636C9.09482 7.63239 9 7.8613 9 8.1V13.5C9 13.7387 9.09482 13.9676 9.2636 14.1364C9.43239 14.3052 9.66131 14.4 9.9 14.4Z"
                      fill="white"
                    />
                  </svg>
                  Discard
                </button>
                <button
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#createReportAlert"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 7.8181 17.7672 6.64778 17.3149 5.55585C16.8626 4.46392 16.1997 3.47177 15.364 2.63604C14.5282 1.80031 13.5361 1.13738 12.4442 0.685084C11.3522 0.232792 10.1819 0 9 0ZM9 16.2C7.57598 16.2 6.18393 15.7777 4.9999 14.9866C3.81586 14.1954 2.89302 13.0709 2.34807 11.7553C1.80312 10.4397 1.66054 8.99201 1.93835 7.59535C2.21616 6.19868 2.9019 4.91577 3.90883 3.90883C4.91577 2.90189 6.19869 2.21616 7.59535 1.93835C8.99201 1.66053 10.4397 1.80312 11.7553 2.34807C13.0709 2.89302 14.1954 3.81586 14.9866 4.99989C15.7777 6.18393 16.2 7.57597 16.2 9C16.2 10.9096 15.4414 12.7409 14.0912 14.0912C12.7409 15.4414 10.9096 16.2 9 16.2ZM12.6 8.1H9.9V5.4C9.9 5.1613 9.80518 4.93239 9.6364 4.7636C9.46762 4.59482 9.2387 4.5 9 4.5C8.76131 4.5 8.53239 4.59482 8.36361 4.7636C8.19482 4.93239 8.1 5.1613 8.1 5.4V8.1H5.4C5.16131 8.1 4.93239 8.19482 4.76361 8.3636C4.59482 8.53238 4.5 8.7613 4.5 9C4.5 9.23869 4.59482 9.46761 4.76361 9.63639C4.93239 9.80518 5.16131 9.9 5.4 9.9H8.1V12.6C8.1 12.8387 8.19482 13.0676 8.36361 13.2364C8.53239 13.4052 8.76131 13.5 9 13.5C9.2387 13.5 9.46762 13.4052 9.6364 13.2364C9.80518 13.0676 9.9 12.8387 9.9 12.6V9.9H12.6C12.8387 9.9 13.0676 9.80518 13.2364 9.63639C13.4052 9.46761 13.5 9.23869 13.5 9C13.5 8.7613 13.4052 8.53238 13.2364 8.3636C13.0676 8.19482 12.8387 8.1 12.6 8.1Z"
                      fill="white"
                    />
                  </svg>
                  Create Report
                </button>
              </div>
            </div>
          </div>

          <notification-bar />

<div class="white-widget">
    <div class="form-section">
        <div class="row mb-3 g-3">
            <div class="col">
              <input type="text" class="form-control" placeholder="Report Title" v-model="reportTitle" >
              <div
                v-if="$v.reportTitle.$error && !$v.reportTitle.required"
                class="error"
              >
                <span class="text-danger">Title required</span>
              </div>
            </div>
            
            <div class="col ml-3">
              <div class="row">
                <span v-if="cid != ''" class="col-2 mt-3 cid-label">Citizen ID: </span><input type="text" class="form-control col" placeholder="CID" v-model="cid" :readonly="{true: cid != ''}">
              </div>
              <div
                v-if="$v.cid.$error && !$v.cid.required"
                class="error"
              >
                <span class="text-danger">CID required</span>
              </div>
            </div>
         
          </div>
    </div>
</div>


<div class="white-widget">

            <h4 class="widget-heading"></h4>
            <div class="tags-list">
              <ul class="items-4">
                <li>
                  <label class="toggle-checkbox">
                    <input type="checkbox" v-model="officersInvolved" />
                    <div class="value">Officers Involved</div>
                  </label>
                </li>
                <li>
                  <label class="toggle-checkbox">
                    <input type="checkbox" v-model="shotsFired" />
                    <div class="value">Shots Fired</div>
                  </label>
                </li>
                <li>
                  <label class="toggle-checkbox">
                    <input type="checkbox" v-model="gsrTestResults" />
                    <div class="value">GSR Test Results</div>
                  </label>
                </li>
                <li>
                  <label class="toggle-checkbox">
                    <input type="checkbox" v-model="casingsRecovered" />
                    <div class="value">Casings Recovered</div>
                  </label>
                </li>
	</ul>
	</div>
</div>


<div class="white-widget">

          <textarea rows="3" placeholder="Report Description" class="form-control" v-model="reportDesc"></textarea>
          <div
                v-if="$v.reportDesc.$error && !$v.reportDesc.required"
                class="error"
              >
                <span class="text-danger">Description required</span>
            </div>
</div>


<div class="white-widget">

            <h4 class="widget-heading"></h4>
            <div class="tags-list">
              <ul class="items-4">
                <li>
                  <label class="toggle-checkbox">
                    <input type="checkbox" v-model="suspectsInvolved" />
                    <div class="value">Suspects Involed</div>
                  </label>
                </li>
                <li>
                  <label class="toggle-checkbox">
                    <input type="checkbox" v-model="useOfViolence" />
                    <div class="value">Use of Violence</div>
                  </label>
                </li>
                <li>
                  <label class="toggle-checkbox">
                    <input type="checkbox" v-model="medicalTreatment" />
                    <div class="value">Medical Treatment</div>
                  </label>
                </li>
                <li>
                  <label class="toggle-checkbox">
                    <input type="checkbox" v-model="legalAid" />
                    <div class="value">Legal Aid</div>
                  </label>
                </li>
	</ul>
	</div>
</div>

<div class="white-widget">

          <textarea rows="3" placeholder="Items Seized" class="form-control" v-model="itemsSeized"></textarea>
          <div
                v-if="$v.itemsSeized.$error && !$v.itemsSeized.required"
                class="error"
              >
                <span class="text-danger">Items seized required</span>
            </div>
</div>

<h3>Fines/Laws</h3>
<div
                v-if="$v.lawsArray.$error && !$v.lawsArray.required"
                class="error"
              >
                <span class="text-danger">At least one law must be selected</span>
            </div>
<div class="white-widget">
            <h4 class="widget-heading">Infractions</h4>
            <div class="tags-list" v-if="lawListInfraction.length">
              <ul class="items-4">
                <li v-for="(law, index) in lawListInfraction" :key="index">
                  <label class="toggle-checkbox">
                     <input type="checkbox" :value="law.law_id" v-on:click ='updateLawsArray($event)' />
                    <div class="value">{{ law.law_title }}</div>
                  </label>
                </li>

	            </ul>
	          </div>
            <div v-else class="no-data">
              <div>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.5414 24.0994L32.6 24.0408V23.958V12.042V11.9592L32.5414 11.9006L24.0994 3.45858L24.0408 3.4H23.958H12.042H11.9592L11.9006 3.45858L3.45858 11.9006L3.4 11.9592V12.042V23.958V24.0408L3.45858 24.0994L11.9006 32.5414L11.9592 32.6H12.042H23.958H24.0408L24.0994 32.5414L32.5414 24.0994ZM16.8686 9.66863C17.1687 9.36857 17.5757 9.2 18 9.2C18.4243 9.2 18.8313 9.36857 19.1314 9.66863C19.4314 9.96869 19.6 10.3757 19.6 10.8V18C19.6 18.4243 19.4314 18.8313 19.1314 19.1314C18.8313 19.4314 18.4243 19.6 18 19.6C17.5757 19.6 17.1687 19.4314 16.8686 19.1314C16.5686 18.8313 16.4 18.4243 16.4 18V10.8C16.4 10.3757 16.5686 9.96869 16.8686 9.66863ZM17.1111 23.8696C17.3742 23.6938 17.6835 23.6 18 23.6C18.4243 23.6 18.8313 23.7686 19.1314 24.0686C19.4314 24.3687 19.6 24.7757 19.6 25.2C19.6 25.5164 19.5062 25.8258 19.3304 26.0889C19.1545 26.352 18.9047 26.5571 18.6123 26.6782C18.3199 26.7993 17.9982 26.831 17.6879 26.7693C17.3775 26.7075 17.0924 26.5551 16.8686 26.3314C16.6449 26.1076 16.4925 25.8225 16.4307 25.5121C16.369 25.2018 16.4007 24.8801 16.5218 24.5877C16.6429 24.2953 16.848 24.0455 17.1111 23.8696ZM25.8523 0.665116C25.8528 0.665658 25.8534 0.6662 25.854 0.666742L35.3333 10.146C35.3338 10.1466 35.3343 10.1472 35.3349 10.1477C35.6277 10.4557 35.7938 10.8626 35.8 11.2874V24.7125C35.7938 25.1374 35.6277 25.5443 35.3349 25.8523C35.3343 25.8528 35.3338 25.8534 35.3333 25.854L25.854 35.3333C25.8534 35.3338 25.8528 35.3343 25.8523 35.3349C25.5443 35.6277 25.1374 35.7938 24.7125 35.8H11.2874C10.8626 35.7938 10.4557 35.6277 10.1477 35.3349C10.1472 35.3343 10.1466 35.3338 10.146 35.3333L0.666742 25.854C0.6662 25.8534 0.665658 25.8528 0.665116 25.8523C0.372325 25.5444 0.206251 25.1374 0.2 24.7126V11.2874C0.206251 10.8625 0.372339 10.4556 0.665155 10.1477L10.1477 0.665155C10.4556 0.372339 10.8625 0.206251 11.2874 0.2H24.7126C25.1374 0.206251 25.5444 0.372325 25.8523 0.665116Z" fill="white" stroke="white" stroke-width="0.4"/>
                </svg>   
                <h4>No infractions added</h4>
              </div>
            </div>
</div>
<div class="white-widget">
            <h4 class="widget-heading">Demeanor</h4>
            <div class="tags-list" v-if="lawListMisdemeanor.length">
              <ul class="items-4">
                <li v-for="(law, index) in lawListMisdemeanor" :key="index">
                  <label class="toggle-checkbox">
                    <input type="checkbox" :value="law.law_id" v-on:click ='updateLawsArray($event)' />
                    <div class="value">{{ law.law_title }}</div>
                  </label>
                </li>
              </ul>
            </div>
            <div v-else class="no-data">
              <div>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.5414 24.0994L32.6 24.0408V23.958V12.042V11.9592L32.5414 11.9006L24.0994 3.45858L24.0408 3.4H23.958H12.042H11.9592L11.9006 3.45858L3.45858 11.9006L3.4 11.9592V12.042V23.958V24.0408L3.45858 24.0994L11.9006 32.5414L11.9592 32.6H12.042H23.958H24.0408L24.0994 32.5414L32.5414 24.0994ZM16.8686 9.66863C17.1687 9.36857 17.5757 9.2 18 9.2C18.4243 9.2 18.8313 9.36857 19.1314 9.66863C19.4314 9.96869 19.6 10.3757 19.6 10.8V18C19.6 18.4243 19.4314 18.8313 19.1314 19.1314C18.8313 19.4314 18.4243 19.6 18 19.6C17.5757 19.6 17.1687 19.4314 16.8686 19.1314C16.5686 18.8313 16.4 18.4243 16.4 18V10.8C16.4 10.3757 16.5686 9.96869 16.8686 9.66863ZM17.1111 23.8696C17.3742 23.6938 17.6835 23.6 18 23.6C18.4243 23.6 18.8313 23.7686 19.1314 24.0686C19.4314 24.3687 19.6 24.7757 19.6 25.2C19.6 25.5164 19.5062 25.8258 19.3304 26.0889C19.1545 26.352 18.9047 26.5571 18.6123 26.6782C18.3199 26.7993 17.9982 26.831 17.6879 26.7693C17.3775 26.7075 17.0924 26.5551 16.8686 26.3314C16.6449 26.1076 16.4925 25.8225 16.4307 25.5121C16.369 25.2018 16.4007 24.8801 16.5218 24.5877C16.6429 24.2953 16.848 24.0455 17.1111 23.8696ZM25.8523 0.665116C25.8528 0.665658 25.8534 0.6662 25.854 0.666742L35.3333 10.146C35.3338 10.1466 35.3343 10.1472 35.3349 10.1477C35.6277 10.4557 35.7938 10.8626 35.8 11.2874V24.7125C35.7938 25.1374 35.6277 25.5443 35.3349 25.8523C35.3343 25.8528 35.3338 25.8534 35.3333 25.854L25.854 35.3333C25.8534 35.3338 25.8528 35.3343 25.8523 35.3349C25.5443 35.6277 25.1374 35.7938 24.7125 35.8H11.2874C10.8626 35.7938 10.4557 35.6277 10.1477 35.3349C10.1472 35.3343 10.1466 35.3338 10.146 35.3333L0.666742 25.854C0.6662 25.8534 0.665658 25.8528 0.665116 25.8523C0.372325 25.5444 0.206251 25.1374 0.2 24.7126V11.2874C0.206251 10.8625 0.372339 10.4556 0.665155 10.1477L10.1477 0.665155C10.4556 0.372339 10.8625 0.206251 11.2874 0.2H24.7126C25.1374 0.206251 25.5444 0.372325 25.8523 0.665116Z" fill="white" stroke="white" stroke-width="0.4"/>
                </svg>   
                <h4>No misdemeanors added</h4>
              </div>
            </div>
</div>
<div class="white-widget">
            <h4 class="widget-heading">Felony</h4>
            <div class="tags-list" v-if="lawListFelony.length">
              <ul class="items-4">
                <li v-for="(law, index) in lawListFelony" :key="index">
                  <label class="toggle-checkbox">
                    <input type="checkbox" :value="law.law_id" v-on:click ='updateLawsArray($event)' />
                    <div class="value">{{ law.law_title }}</div>
                  </label>
                </li>
              </ul>
	          </div>
            <div v-else class="no-data">
              <div>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.5414 24.0994L32.6 24.0408V23.958V12.042V11.9592L32.5414 11.9006L24.0994 3.45858L24.0408 3.4H23.958H12.042H11.9592L11.9006 3.45858L3.45858 11.9006L3.4 11.9592V12.042V23.958V24.0408L3.45858 24.0994L11.9006 32.5414L11.9592 32.6H12.042H23.958H24.0408L24.0994 32.5414L32.5414 24.0994ZM16.8686 9.66863C17.1687 9.36857 17.5757 9.2 18 9.2C18.4243 9.2 18.8313 9.36857 19.1314 9.66863C19.4314 9.96869 19.6 10.3757 19.6 10.8V18C19.6 18.4243 19.4314 18.8313 19.1314 19.1314C18.8313 19.4314 18.4243 19.6 18 19.6C17.5757 19.6 17.1687 19.4314 16.8686 19.1314C16.5686 18.8313 16.4 18.4243 16.4 18V10.8C16.4 10.3757 16.5686 9.96869 16.8686 9.66863ZM17.1111 23.8696C17.3742 23.6938 17.6835 23.6 18 23.6C18.4243 23.6 18.8313 23.7686 19.1314 24.0686C19.4314 24.3687 19.6 24.7757 19.6 25.2C19.6 25.5164 19.5062 25.8258 19.3304 26.0889C19.1545 26.352 18.9047 26.5571 18.6123 26.6782C18.3199 26.7993 17.9982 26.831 17.6879 26.7693C17.3775 26.7075 17.0924 26.5551 16.8686 26.3314C16.6449 26.1076 16.4925 25.8225 16.4307 25.5121C16.369 25.2018 16.4007 24.8801 16.5218 24.5877C16.6429 24.2953 16.848 24.0455 17.1111 23.8696ZM25.8523 0.665116C25.8528 0.665658 25.8534 0.6662 25.854 0.666742L35.3333 10.146C35.3338 10.1466 35.3343 10.1472 35.3349 10.1477C35.6277 10.4557 35.7938 10.8626 35.8 11.2874V24.7125C35.7938 25.1374 35.6277 25.5443 35.3349 25.8523C35.3343 25.8528 35.3338 25.8534 35.3333 25.854L25.854 35.3333C25.8534 35.3338 25.8528 35.3343 25.8523 35.3349C25.5443 35.6277 25.1374 35.7938 24.7125 35.8H11.2874C10.8626 35.7938 10.4557 35.6277 10.1477 35.3349C10.1472 35.3343 10.1466 35.3338 10.146 35.3333L0.666742 25.854C0.6662 25.8534 0.665658 25.8528 0.665116 25.8523C0.372325 25.5444 0.206251 25.1374 0.2 24.7126V11.2874C0.206251 10.8625 0.372339 10.4556 0.665155 10.1477L10.1477 0.665155C10.4556 0.372339 10.8625 0.206251 11.2874 0.2H24.7126C25.1374 0.206251 25.5444 0.372325 25.8523 0.665116Z" fill="white" stroke="white" stroke-width="0.4"/>
                </svg>   
                <h4>No felonies added</h4>
              </div>
            </div>
</div>

</div>
    </div>

    <div
      class="modal fade"
      id="createReportAlert"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog alert-modal success modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="alert-icon">
              <svg
                width="40"
                height="50"
                viewBox="0 0 40 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 20.2H15.4C16.0365 20.2 16.647 19.9471 17.0971 19.4971C17.5471 19.047 17.8 18.4365 17.8 17.8C17.8 17.1635 17.5471 16.553 17.0971 16.1029C16.647 15.6529 16.0365 15.4 15.4 15.4H13C12.3635 15.4 11.753 15.6529 11.3029 16.1029C10.8529 16.553 10.6 17.1635 10.6 17.8C10.6 18.4365 10.8529 19.047 11.3029 19.4971C11.753 19.9471 12.3635 20.2 13 20.2ZM13 25C12.3635 25 11.753 25.2529 11.3029 25.7029C10.8529 26.153 10.6 26.7635 10.6 27.4C10.6 28.0365 10.8529 28.647 11.3029 29.0971C11.753 29.5471 12.3635 29.8 13 29.8H27.4C28.0365 29.8 28.647 29.5471 29.0971 29.0971C29.5471 28.647 29.8 28.0365 29.8 27.4C29.8 26.7635 29.5471 26.153 29.0971 25.7029C28.647 25.2529 28.0365 25 27.4 25H13ZM39.4 17.656C39.375 17.4355 39.3267 17.2183 39.256 17.008V16.792C39.1406 16.5452 38.9867 16.3184 38.8 16.12L24.4 1.72C24.2016 1.53332 23.9748 1.37939 23.728 1.264C23.6564 1.25382 23.5836 1.25382 23.512 1.264C23.2682 1.12418 22.9989 1.03443 22.72 1H8.2C6.29044 1 4.45909 1.75857 3.10883 3.10883C1.75857 4.45909 1 6.29044 1 8.2V41.8C1 43.7096 1.75857 45.5409 3.10883 46.8912C4.45909 48.2414 6.29044 49 8.2 49H32.2C34.1096 49 35.9409 48.2414 37.2912 46.8912C38.6414 45.5409 39.4 43.7096 39.4 41.8V17.8V17.656ZM25 9.184L31.216 15.4H27.4C26.7635 15.4 26.153 15.1471 25.7029 14.6971C25.2529 14.247 25 13.6365 25 13V9.184ZM34.6 41.8C34.6 42.4365 34.3471 43.047 33.8971 43.4971C33.447 43.9471 32.8365 44.2 32.2 44.2H8.2C7.56348 44.2 6.95303 43.9471 6.50294 43.4971C6.05286 43.047 5.8 42.4365 5.8 41.8V8.2C5.8 7.56348 6.05286 6.95303 6.50294 6.50294C6.95303 6.05286 7.56348 5.8 8.2 5.8H20.2V13C20.2 14.9096 20.9586 16.7409 22.3088 18.0912C23.6591 19.4414 25.4904 20.2 27.4 20.2H34.6V41.8ZM27.4 34.6H13C12.3635 34.6 11.753 34.8529 11.3029 35.3029C10.8529 35.753 10.6 36.3635 10.6 37C10.6 37.6365 10.8529 38.247 11.3029 38.6971C11.753 39.1471 12.3635 39.4 13 39.4H27.4C28.0365 39.4 28.647 39.1471 29.0971 38.6971C29.5471 38.247 29.8 37.6365 29.8 37C29.8 36.3635 29.5471 35.753 29.0971 35.3029C28.647 34.8529 28.0365 34.6 27.4 34.6Z"
                  fill="#1DD100"
                  stroke="white"
                />
              </svg>
            </div>
            <div class="alert-content">
              <h4>Create Report</h4>
              <p>
                Are you sure?<br />
                You want to create this report?
              </p>
            </div>
          </div>
          <div class="alert-footer">
            <button class="btn" data-bs-dismiss="modal">Close</button>
            <button class="btn btn-success"
              data-bs-toggle='modal'
              data-bs-target="#createReportAlert"
            @click="createPoliceReport()"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 7.8181 17.7672 6.64778 17.3149 5.55585C16.8626 4.46392 16.1997 3.47177 15.364 2.63604C14.5282 1.80031 13.5361 1.13738 12.4442 0.685084C11.3522 0.232792 10.1819 0 9 0ZM9 16.2C7.57598 16.2 6.18393 15.7777 4.9999 14.9866C3.81586 14.1954 2.89302 13.0709 2.34807 11.7553C1.80312 10.4397 1.66054 8.99201 1.93835 7.59535C2.21616 6.19868 2.9019 4.91577 3.90883 3.90883C4.91577 2.90189 6.19869 2.21616 7.59535 1.93835C8.99201 1.66053 10.4397 1.80312 11.7553 2.34807C13.0709 2.89302 14.1954 3.81586 14.9866 4.99989C15.7777 6.18393 16.2 7.57597 16.2 9C16.2 10.9096 15.4414 12.7409 14.0912 14.0912C12.7409 15.4414 10.9096 16.2 9 16.2ZM12.6 8.1H9.9V5.4C9.9 5.1613 9.80518 4.93239 9.6364 4.7636C9.46762 4.59482 9.2387 4.5 9 4.5C8.76131 4.5 8.53239 4.59482 8.36361 4.7636C8.19482 4.93239 8.1 5.1613 8.1 5.4V8.1H5.4C5.16131 8.1 4.93239 8.19482 4.76361 8.3636C4.59482 8.53238 4.5 8.7613 4.5 9C4.5 9.23869 4.59482 9.46761 4.76361 9.63639C4.93239 9.80518 5.16131 9.9 5.4 9.9H8.1V12.6C8.1 12.8387 8.19482 13.0676 8.36361 13.2364C8.53239 13.4052 8.76131 13.5 9 13.5C9.2387 13.5 9.46762 13.4052 9.6364 13.2364C9.80518 13.0676 9.9 12.8387 9.9 12.6V9.9H12.6C12.8387 9.9 13.0676 9.80518 13.2364 9.63639C13.4052 9.46761 13.5 9.23869 13.5 9C13.5 8.7613 13.4052 8.53238 13.2364 8.3636C13.0676 8.19482 12.8387 8.1 12.6 8.1Z"
                  fill="white"
                />
              </svg>

              Create Report
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="discardReportAlert"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog alert-modal danger modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="alert-icon">
              <svg
                width="40"
                height="50"
                viewBox="0 0 40 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 20.2H15.4C16.0365 20.2 16.647 19.9471 17.0971 19.4971C17.5471 19.047 17.8 18.4365 17.8 17.8C17.8 17.1635 17.5471 16.553 17.0971 16.1029C16.647 15.6529 16.0365 15.4 15.4 15.4H13C12.3635 15.4 11.753 15.6529 11.3029 16.1029C10.8529 16.553 10.6 17.1635 10.6 17.8C10.6 18.4365 10.8529 19.047 11.3029 19.4971C11.753 19.9471 12.3635 20.2 13 20.2ZM13 25C12.3635 25 11.753 25.2529 11.3029 25.7029C10.8529 26.153 10.6 26.7635 10.6 27.4C10.6 28.0365 10.8529 28.647 11.3029 29.0971C11.753 29.5471 12.3635 29.8 13 29.8H27.4C28.0365 29.8 28.647 29.5471 29.0971 29.0971C29.5471 28.647 29.8 28.0365 29.8 27.4C29.8 26.7635 29.5471 26.153 29.0971 25.7029C28.647 25.2529 28.0365 25 27.4 25H13ZM39.4 17.656C39.375 17.4355 39.3267 17.2183 39.256 17.008V16.792C39.1406 16.5452 38.9867 16.3184 38.8 16.12L24.4 1.72C24.2016 1.53332 23.9748 1.37939 23.728 1.264C23.6564 1.25382 23.5836 1.25382 23.512 1.264C23.2682 1.12418 22.9989 1.03443 22.72 1H8.2C6.29044 1 4.45909 1.75857 3.10883 3.10883C1.75857 4.45909 1 6.29044 1 8.2V41.8C1 43.7096 1.75857 45.5409 3.10883 46.8912C4.45909 48.2414 6.29044 49 8.2 49H32.2C34.1096 49 35.9409 48.2414 37.2912 46.8912C38.6414 45.5409 39.4 43.7096 39.4 41.8V17.8V17.656ZM25 9.184L31.216 15.4H27.4C26.7635 15.4 26.153 15.1471 25.7029 14.6971C25.2529 14.247 25 13.6365 25 13V9.184ZM34.6 41.8C34.6 42.4365 34.3471 43.047 33.8971 43.4971C33.447 43.9471 32.8365 44.2 32.2 44.2H8.2C7.56348 44.2 6.95303 43.9471 6.50294 43.4971C6.05286 43.047 5.8 42.4365 5.8 41.8V8.2C5.8 7.56348 6.05286 6.95303 6.50294 6.50294C6.95303 6.05286 7.56348 5.8 8.2 5.8H20.2V13C20.2 14.9096 20.9586 16.7409 22.3088 18.0912C23.6591 19.4414 25.4904 20.2 27.4 20.2H34.6V41.8ZM27.4 34.6H13C12.3635 34.6 11.753 34.8529 11.3029 35.3029C10.8529 35.753 10.6 36.3635 10.6 37C10.6 37.6365 10.8529 38.247 11.3029 38.6971C11.753 39.1471 12.3635 39.4 13 39.4H27.4C28.0365 39.4 28.647 39.1471 29.0971 38.6971C29.5471 38.247 29.8 37.6365 29.8 37C29.8 36.3635 29.5471 35.753 29.0971 35.3029C28.647 34.8529 28.0365 34.6 27.4 34.6Z"
                  fill="#EE0000"
                  stroke="white"
                />
              </svg>
            </div>
            <div class="alert-content">
              <h4>Discard Report</h4>
              <p>Are you sure?<br />This detail will be permanently removed.</p>
            </div>
          </div>
          <div class="alert-footer">
            <button class="btn" data-bs-dismiss="modal">Close</button>
            <button class="btn btn-danger"
              data-bs-toggle='modal'
              data-bs-target="#discardReportAlert"
              @click="discardPoliceReport()"
            >
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.3 14.4C6.5387 14.4 6.76761 14.3052 6.9364 14.1364C7.10518 13.9676 7.2 13.7387 7.2 13.5V8.1C7.2 7.8613 7.10518 7.63239 6.9364 7.4636C6.76761 7.29482 6.5387 7.2 6.3 7.2C6.06131 7.2 5.83239 7.29482 5.6636 7.4636C5.49482 7.63239 5.4 7.8613 5.4 8.1V13.5C5.4 13.7387 5.49482 13.9676 5.6636 14.1364C5.83239 14.3052 6.06131 14.4 6.3 14.4ZM15.3 3.6H11.7V2.7C11.7 1.98392 11.4155 1.29716 10.9092 0.790812C10.4028 0.284464 9.71608 0 9 0H7.2C6.48392 0 5.79716 0.284464 5.29081 0.790812C4.78446 1.29716 4.5 1.98392 4.5 2.7V3.6H0.9C0.661305 3.6 0.432387 3.69482 0.263604 3.8636C0.0948211 4.03239 0 4.2613 0 4.5C0 4.73869 0.0948211 4.96761 0.263604 5.1364C0.432387 5.30518 0.661305 5.4 0.9 5.4H1.8V15.3C1.8 16.0161 2.08446 16.7028 2.59081 17.2092C3.09716 17.7155 3.78392 18 4.5 18H11.7C12.4161 18 13.1028 17.7155 13.6092 17.2092C14.1155 16.7028 14.4 16.0161 14.4 15.3V5.4H15.3C15.5387 5.4 15.7676 5.30518 15.9364 5.1364C16.1052 4.96761 16.2 4.73869 16.2 4.5C16.2 4.2613 16.1052 4.03239 15.9364 3.8636C15.7676 3.69482 15.5387 3.6 15.3 3.6ZM6.3 2.7C6.3 2.46131 6.39482 2.23239 6.5636 2.0636C6.73239 1.89482 6.96131 1.8 7.2 1.8H9C9.2387 1.8 9.46761 1.89482 9.6364 2.0636C9.80518 2.23239 9.9 2.46131 9.9 2.7V3.6H6.3V2.7ZM12.6 15.3C12.6 15.5387 12.5052 15.7676 12.3364 15.9364C12.1676 16.1052 11.9387 16.2 11.7 16.2H4.5C4.26131 16.2 4.03239 16.1052 3.8636 15.9364C3.69482 15.7676 3.6 15.5387 3.6 15.3V5.4H12.6V15.3ZM9.9 14.4C10.1387 14.4 10.3676 14.3052 10.5364 14.1364C10.7052 13.9676 10.8 13.7387 10.8 13.5V8.1C10.8 7.8613 10.7052 7.63239 10.5364 7.4636C10.3676 7.29482 10.1387 7.2 9.9 7.2C9.66131 7.2 9.43239 7.29482 9.2636 7.4636C9.09482 7.63239 9 7.8613 9 8.1V13.5C9 13.7387 9.09482 13.9676 9.2636 14.1364C9.43239 14.3052 9.66131 14.4 9.9 14.4Z"
                  fill="white"
                />
              </svg>

              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { required, minLength } from 'vuelidate/lib/validators'


export default {
  name: 'CreatePoliceReport',
  layout: 'master',
  middleware: [],

  data() {
    return {
      reportTitle: '',
      cid: this.$route.query.cid ?? '',
      
      officersInvolved: false,
      shotsFired: false,
      gsrTestResults: false,
      casingsRecovered: false,
      
      reportDesc: '',

      suspectsInvolved: false,
      useOfViolence: false,
      medicalTreatment: false,
      legalAid: false,

      itemsSeized: '',

      lawsArray: [],
      lawListInfraction: [],
      lawListFelony: [],
      lawListMisdemeanor: [],
      reportId: null,
      profileId: null
    }
  },
  validations: {
    reportTitle: {
      required
    },
    cid: {
      required
    },
    reportDesc: {
      required
    },
    itemsSeized: {
      required
    },
    lawsArray: {
      required
    },
  },
  async mounted() {

    this.profileId = this.$route.query.profile_id

    if(this.$route.query.report_id){
      this.reportId = this.$route.query.report_id

      let report =  await this.$store.dispatch(
        'report/fetchPoliceReportByReportId',
        {
          report_id : this.reportId
        }
      )
      this.reportTitle = report.report_title_raw
      this.profileId = report.enc_profile_id_attached
      this.cid = report.cid
      this.reportDesc = report.description
      this.itemsSeized = report.items_seized
      this.lawsArray = report.added_laws
      this.officersInvolved = report.officers_involved
      this.shotsFired = report.shorts_fired
      this.gsrTestResults = report.gsr_test_result
      this.casingsRecovered = report.casing_recovered
      this.suspectsInvolved = report.suspects_involved

      this.useOfViolence = report.use_of_violence
      this.medicalTreatment = report.med_treatment
      this.legalAid = report.legal_aid
    }

    this.fetchAllLaws()
  },
  methods: {
    createPoliceReport () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store
          .dispatch('report/createPoliceReport', {
            reportTitle: this.reportTitle,
            profileId: this.profileId,
            reportId: this.reportId,
            cid: this.cid,
            reportDesc: this.reportDesc,
            itemsSeized: this.itemsSeized,
            lawsArray: this.lawsArray,
            officersInvolved: this.officersInvolved,
            shotsFired: this.shotsFired,
            gsrTestResults: this.gsrTestResults,
            casingsRecovered: this.casingsRecovered,
            suspectsInvolved: this.suspectsInvolved,
            useOfViolence: this.useOfViolence,
            medicalTreatment: this.medicalTreatment,
            legalAid: this.legalAid,
          })
          .then(() => {
            this.$showToastMessage(['Saved Successfully!'])
            this.$router.push('dashboard')
          })
          .catch(() => {})
      }
    },

    async fetchAllLaws(){
      this.lawsList = await this.$store.dispatch(
        'law/fetchAllLaws',
        {}
      )
      this.lawListInfraction = this.lawsList.infraction
      this.lawListFelony = this.lawsList.felony
      this.lawListMisdemeanor = this.lawsList.misdemeanor
    },

    updateLawsArray (el) {
      const valueToPush = el.currentTarget.value
      const exists = this.lawsArray.find(
        function (val) {
        return val == valueToPush
      })
      
      if(exists) {
        const index = this.lawsArray.indexOf(valueToPush)
        this.lawsArray.splice(index, 1)
      } else {
        this.lawsArray.push(valueToPush)
      }
    },
    discardPoliceReport () {
      this.$router.push({
        path: '/profile?profile_id=' + this.profileId
      })
    }
  },
}
</script>

<style scoped>
.cid-label {
  font-size: 18px;
  line-height: 1;
}
</style>