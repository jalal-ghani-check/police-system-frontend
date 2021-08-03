(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{624:function(t,e,C){"use strict";C.r(e);var l={props:["showModal","vehicleId"],name:"DeleteVehicleModal",data:function(){return{active:!0}},mounted:function(){},computed:{showModalComputed:function(){return this.showModal}},methods:{submitForm:function(){var t=this;this.$store.dispatch("vehicle/deleteVehicle",{vehicle_id_to_delete:this.vehicleId}).then((function(){t.closeModal(),t.$emit("onDelete",t.$event)})).catch((function(){}))},closeModal:function(){this.$emit("close",this.$event)}}},o=C(28),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,C=t._self._c||e;return C("div",[t.showModalComputed?C("div",{staticClass:"modal fade",class:{show:t.showModalComputed},style:{display:t.showModalComputed?"block":"none"},attrs:{id:"deleteVehicleAlert",tabindex:"-1","aria-hidden":"true"}},[C("div",{staticClass:"modal-dialog alert-modal danger modal-dialog-centered"},[C("div",{staticClass:"modal-content"},[C("div",{staticClass:"modal-body"},[C("div",{staticClass:"alert-icon"},[C("svg",{attrs:{width:"44",height:"48",viewBox:"0 0 44 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[C("path",{attrs:{d:"M16.8 38.4C17.4365 38.4 18.047 38.1471 18.4971 37.6971C18.9471 37.247 19.2 36.6365 19.2 36V21.6C19.2 20.9635 18.9471 20.353 18.4971 19.9029C18.047 19.4529 17.4365 19.2 16.8 19.2C16.1635 19.2 15.553 19.4529 15.1029 19.9029C14.6529 20.353 14.4 20.9635 14.4 21.6V36C14.4 36.6365 14.6529 37.247 15.1029 37.6971C15.553 38.1471 16.1635 38.4 16.8 38.4ZM40.8 9.6H31.2V7.2C31.2 5.29044 30.4414 3.45909 29.0912 2.10883C27.7409 0.75857 25.9096 0 24 0H19.2C17.2904 0 15.4591 0.75857 14.1088 2.10883C12.7586 3.45909 12 5.29044 12 7.2V9.6H2.4C1.76348 9.6 1.15303 9.85286 0.702944 10.3029C0.252856 10.753 0 11.3635 0 12C0 12.6365 0.252856 13.247 0.702944 13.6971C1.15303 14.1471 1.76348 14.4 2.4 14.4H4.8V40.8C4.8 42.7096 5.55857 44.5409 6.90883 45.8912C8.25909 47.2414 10.0904 48 12 48H31.2C33.1096 48 34.9409 47.2414 36.2912 45.8912C37.6414 44.5409 38.4 42.7096 38.4 40.8V14.4H40.8C41.4365 14.4 42.047 14.1471 42.4971 13.6971C42.9471 13.247 43.2 12.6365 43.2 12C43.2 11.3635 42.9471 10.753 42.4971 10.3029C42.047 9.85286 41.4365 9.6 40.8 9.6ZM16.8 7.2C16.8 6.56348 17.0529 5.95303 17.5029 5.50294C17.953 5.05286 18.5635 4.8 19.2 4.8H24C24.6365 4.8 25.247 5.05286 25.6971 5.50294C26.1471 5.95303 26.4 6.56348 26.4 7.2V9.6H16.8V7.2ZM33.6 40.8C33.6 41.4365 33.3471 42.047 32.8971 42.4971C32.447 42.9471 31.8365 43.2 31.2 43.2H12C11.3635 43.2 10.753 42.9471 10.3029 42.4971C9.85286 42.047 9.6 41.4365 9.6 40.8V14.4H33.6V40.8ZM26.4 38.4C27.0365 38.4 27.647 38.1471 28.0971 37.6971C28.5471 37.247 28.8 36.6365 28.8 36V21.6C28.8 20.9635 28.5471 20.353 28.0971 19.9029C27.647 19.4529 27.0365 19.2 26.4 19.2C25.7635 19.2 25.153 19.4529 24.7029 19.9029C24.2529 20.353 24 20.9635 24 21.6V36C24 36.6365 24.2529 37.247 24.7029 37.6971C25.153 38.1471 25.7635 38.4 26.4 38.4Z",fill:"#EE0000"}})])]),t._v(" "),t._m(0)]),t._v(" "),C("div",{staticClass:"alert-footer"},[C("button",{staticClass:"btn",attrs:{"data-bs-dismiss":"modal"},on:{click:t.closeModal}},[t._v("Close")]),t._v(" "),C("button",{staticClass:"btn btn-danger",on:{click:t.submitForm}},[C("svg",{attrs:{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[C("path",{attrs:{d:"M7.3 15.4C7.5387 15.4 7.76761 15.3052 7.9364 15.1364C8.10518 14.9676 8.2 14.7387 8.2 14.5V9.1C8.2 8.8613 8.10518 8.63239 7.9364 8.4636C7.76761 8.29482 7.5387 8.2 7.3 8.2C7.06131 8.2 6.83239 8.29482 6.6636 8.4636C6.49482 8.63239 6.4 8.8613 6.4 9.1V14.5C6.4 14.7387 6.49482 14.9676 6.6636 15.1364C6.83239 15.3052 7.06131 15.4 7.3 15.4ZM16.3 4.6H12.7V3.7C12.7 2.98392 12.4155 2.29716 11.9092 1.79081C11.4028 1.28446 10.7161 1 10 1H8.2C7.48392 1 6.79716 1.28446 6.29081 1.79081C5.78446 2.29716 5.5 2.98392 5.5 3.7V4.6H1.9C1.66131 4.6 1.43239 4.69482 1.2636 4.8636C1.09482 5.03239 1 5.2613 1 5.5C1 5.73869 1.09482 5.96761 1.2636 6.1364C1.43239 6.30518 1.66131 6.4 1.9 6.4H2.8V16.3C2.8 17.0161 3.08446 17.7028 3.59081 18.2092C4.09716 18.7155 4.78392 19 5.5 19H12.7C13.4161 19 14.1028 18.7155 14.6092 18.2092C15.1155 17.7028 15.4 17.0161 15.4 16.3V6.4H16.3C16.5387 6.4 16.7676 6.30518 16.9364 6.1364C17.1052 5.96761 17.2 5.73869 17.2 5.5C17.2 5.2613 17.1052 5.03239 16.9364 4.8636C16.7676 4.69482 16.5387 4.6 16.3 4.6ZM7.3 3.7C7.3 3.46131 7.39482 3.23239 7.5636 3.0636C7.73239 2.89482 7.96131 2.8 8.2 2.8H10C10.2387 2.8 10.4676 2.89482 10.6364 3.0636C10.8052 3.23239 10.9 3.46131 10.9 3.7V4.6H7.3V3.7ZM13.6 16.3C13.6 16.5387 13.5052 16.7676 13.3364 16.9364C13.1676 17.1052 12.9387 17.2 12.7 17.2H5.5C5.26131 17.2 5.03239 17.1052 4.8636 16.9364C4.69482 16.7676 4.6 16.5387 4.6 16.3V6.4H13.6V16.3ZM10.9 15.4C11.1387 15.4 11.3676 15.3052 11.5364 15.1364C11.7052 14.9676 11.8 14.7387 11.8 14.5V9.1C11.8 8.8613 11.7052 8.63239 11.5364 8.4636C11.3676 8.29482 11.1387 8.2 10.9 8.2C10.6613 8.2 10.4324 8.29482 10.2636 8.4636C10.0948 8.63239 10 8.8613 10 9.1V14.5C10 14.7387 10.0948 14.9676 10.2636 15.1364C10.4324 15.3052 10.6613 15.4 10.9 15.4Z",fill:"white",stroke:"#EE0000","stroke-width":"0.5"}})]),t._v("\n                    \n                    \n                    Delete")])])])])]):t._e(),t._v(" "),t.showModalComputed?C("div",{staticClass:"modal-backdrop fade show"}):t._e()])}),[function(){var t=this,e=t.$createElement,C=t._self._c||e;return C("div",{staticClass:"alert-content"},[C("h4",[t._v("Delete")]),t._v(" "),C("p",[t._v("Are you sure?"),C("br"),t._v("\n                    All the details will be permanently deleted.")])])}],!1,null,null,null);e.default=component.exports}}]);