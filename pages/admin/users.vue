<template>
    <div class="users-container">
        <div class="container">
            <div class="page-title-banner users">
                <h2><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M25.5487 20.2768C27.3124 18.8892 28.5997 16.9863 29.2316 14.833C29.8635 12.6797 29.8085 10.383 29.0743 8.26235C28.3401 6.14173 26.9631 4.30269 25.1351 3.00108C23.307 1.69946 21.1187 1 18.8746 1C16.6304 1 14.4421 1.69946 12.614 3.00108C10.786 4.30269 9.40903 6.14173 8.67482 8.26235C7.9406 10.383 7.88561 12.6797 8.51749 14.833C9.14938 16.9863 10.4367 18.8892 12.2004 20.2768C9.17828 21.4876 6.54138 23.4957 4.57081 26.0873C2.60023 28.6788 1.36986 31.7565 1.01085 34.9923C0.984864 35.2285 1.00566 35.4676 1.07206 35.6958C1.13846 35.924 1.24915 36.1369 1.39783 36.3223C1.69809 36.6968 2.13481 36.9367 2.61193 36.9891C3.08904 37.0416 3.56746 36.9024 3.94195 36.6022C4.31643 36.3019 4.55629 35.8652 4.60878 35.3881C5.0038 31.8714 6.68062 28.6236 9.31886 26.2652C11.9571 23.9067 15.3718 22.6029 18.9105 22.6029C22.4493 22.6029 25.864 23.9067 28.5022 26.2652C31.1404 28.6236 32.8173 31.8714 33.2123 35.3881C33.2612 35.8301 33.4721 36.2384 33.8043 36.534C34.1366 36.8297 34.5665 36.9918 35.0112 36.9891H35.2091C35.6807 36.9349 36.1117 36.6964 36.4083 36.3258C36.7048 35.9551 36.8428 35.4823 36.7922 35.0103C36.4315 31.7653 35.1945 28.6797 33.2138 26.0842C31.2331 23.4887 28.5834 21.4811 25.5487 20.2768ZM18.8746 18.9995C17.4513 18.9995 16.0601 18.5775 14.8768 17.7868C13.6934 16.9961 12.7711 15.8723 12.2265 14.5574C11.6818 13.2425 11.5393 11.7957 11.817 10.3998C12.0946 9.00396 12.78 7.72179 13.7863 6.71543C14.7927 5.70907 16.0749 5.02373 17.4707 4.74608C18.8666 4.46843 20.3134 4.61093 21.6283 5.15556C22.9432 5.7002 24.067 6.62251 24.8577 7.80586C25.6484 8.98921 26.0704 10.3805 26.0704 11.8037C26.0704 13.7121 25.3123 15.5424 23.9628 16.8919C22.6133 18.2414 20.783 18.9995 18.8746 18.9995Z"
                            fill="white" stroke="white" />
                    </svg>
                    Employees</h2>
            </div>
            <div v-if="usersList.length > 0" class="user-page">
                <div class="row">
                    <div class="col-md-3">
                        <div class="section-heading small blue">
                            <h4 class="ms-3"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.2744 9.63839C13.1562 8.94458 13.7999 7.99317 14.1158 6.91651C14.4317 5.83985 14.4043 4.69148 14.0371 3.63117C13.67 2.57087 12.9816 1.65135 12.0675 1.00054C11.1535 0.349732 10.0593 0 8.93728 0C7.81522 0 6.72106 0.349732 5.80702 1.00054C4.89298 1.65135 4.20451 2.57087 3.83741 3.63117C3.4703 4.69148 3.44281 5.83985 3.75875 6.91651C4.07469 7.99317 4.71836 8.94458 5.6002 9.63839C4.08914 10.2438 2.77069 11.2479 1.7854 12.5436C0.800116 13.8394 0.184929 15.3783 0.00542553 16.9961C-0.00756785 17.1143 0.00283191 17.2338 0.0360308 17.3479C0.0692296 17.462 0.124577 17.5684 0.198914 17.6612C0.349044 17.8484 0.567407 17.9683 0.805964 17.9946C1.04452 18.0208 1.28373 17.9512 1.47097 17.8011C1.65821 17.651 1.77815 17.4326 1.80439 17.194C2.0019 15.4357 2.84031 13.8118 4.15943 12.6326C5.47855 11.4533 7.18589 10.8014 8.95527 10.8014C10.7246 10.8014 12.432 11.4533 13.7511 12.6326C15.0702 13.8118 15.9086 15.4357 16.1061 17.194C16.1306 17.4151 16.2361 17.6192 16.4022 17.767C16.5683 17.9149 16.7833 17.9959 17.0056 17.9946H17.1046C17.3404 17.9674 17.5559 17.8482 17.7041 17.6629C17.8524 17.4776 17.9214 17.2411 17.8961 17.0051C17.7158 15.3827 17.0973 13.8399 16.1069 12.5421C15.1166 11.2443 13.7917 10.2406 12.2744 9.63839ZM8.93728 8.99976C8.22567 8.99976 7.53005 8.78874 6.93838 8.3934C6.3467 7.99805 5.88554 7.43613 5.61323 6.7787C5.34091 6.12126 5.26966 5.39784 5.40848 4.69991C5.54731 4.00198 5.88998 3.36089 6.39316 2.85771C6.89634 2.35453 7.53743 2.01187 8.23536 1.87304C8.93329 1.73421 9.65671 1.80546 10.3141 2.07778C10.9716 2.3501 11.5335 2.81126 11.9288 3.40293C12.3242 3.99461 12.5352 4.69023 12.5352 5.40183C12.5352 6.35606 12.1561 7.27121 11.4814 7.94595C10.8067 8.62069 9.89151 8.99976 8.93728 8.99976Z"
                                        fill="#1F1F1F" />
                                </svg>
                                Employees</h4>
                        </div>
                        <div class="employees-card-list">
                            <div v-for="(user, index) in usersList" :key="index" @click="selectEmployee(index)" class="employees-name-card" :class="user.role_key" >
                                <div class="tag">{{ user.role_name }}</div>
                                <div class="info">
                                    <h3>{{ user.full_name }}</h3>
                                    <h4>@{{ user.username }}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="title-header">
                            <div class="row">
                                <div class="col-md-7">
                                    <div class="section-heading small green">
                                        <h4 class="ms-3"><svg width="15" height="18" viewBox="0 0 15 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.5 7.2H5.4C5.63869 7.2 5.86761 7.10518 6.0364 6.9364C6.20518 6.76761 6.3 6.53869 6.3 6.3C6.3 6.06131 6.20518 5.83239 6.0364 5.6636C5.86761 5.49482 5.63869 5.4 5.4 5.4H4.5C4.2613 5.4 4.03239 5.49482 3.8636 5.6636C3.69482 5.83239 3.6 6.06131 3.6 6.3C3.6 6.53869 3.69482 6.76761 3.8636 6.9364C4.03239 7.10518 4.2613 7.2 4.5 7.2ZM4.5 9C4.2613 9 4.03239 9.09482 3.8636 9.2636C3.69482 9.43239 3.6 9.6613 3.6 9.9C3.6 10.1387 3.69482 10.3676 3.8636 10.5364C4.03239 10.7052 4.2613 10.8 4.5 10.8H9.9C10.1387 10.8 10.3676 10.7052 10.5364 10.5364C10.7052 10.3676 10.8 10.1387 10.8 9.9C10.8 9.6613 10.7052 9.43239 10.5364 9.2636C10.3676 9.09482 10.1387 9 9.9 9H4.5ZM14.4 6.246C14.3906 6.16332 14.3725 6.08187 14.346 6.003V5.922C14.3027 5.82946 14.245 5.7444 14.175 5.67L8.775 0.27C8.7006 0.199995 8.61554 0.142273 8.523 0.0989999C8.49613 0.0951841 8.46887 0.0951841 8.442 0.0989999C8.35057 0.0465671 8.2496 0.0129098 8.145 0H2.7C1.98392 0 1.29716 0.284464 0.790812 0.790812C0.284464 1.29716 0 1.98392 0 2.7V15.3C0 16.0161 0.284464 16.7028 0.790812 17.2092C1.29716 17.7155 1.98392 18 2.7 18H11.7C12.4161 18 13.1028 17.7155 13.6092 17.2092C14.1155 16.7028 14.4 16.0161 14.4 15.3V6.3V6.246ZM9 3.069L11.331 5.4H9.9C9.6613 5.4 9.43239 5.30518 9.2636 5.1364C9.09482 4.96761 9 4.73869 9 4.5V3.069ZM12.6 15.3C12.6 15.5387 12.5052 15.7676 12.3364 15.9364C12.1676 16.1052 11.9387 16.2 11.7 16.2H2.7C2.46131 16.2 2.23239 16.1052 2.0636 15.9364C1.89482 15.7676 1.8 15.5387 1.8 15.3V2.7C1.8 2.46131 1.89482 2.23239 2.0636 2.0636C2.23239 1.89482 2.46131 1.8 2.7 1.8H7.2V4.5C7.2 5.21608 7.48446 5.90284 7.99081 6.40919C8.49716 6.91554 9.18392 7.2 9.9 7.2H12.6V15.3ZM9.9 12.6H4.5C4.2613 12.6 4.03239 12.6948 3.8636 12.8636C3.69482 13.0324 3.6 13.2613 3.6 13.5C3.6 13.7387 3.69482 13.9676 3.8636 14.1364C4.03239 14.3052 4.2613 14.4 4.5 14.4H9.9C10.1387 14.4 10.3676 14.3052 10.5364 14.1364C10.7052 13.9676 10.8 13.7387 10.8 13.5C10.8 13.2613 10.7052 13.0324 10.5364 12.8636C10.3676 12.6948 10.1387 12.6 9.9 12.6Z"
                                                    fill="#1F1F1F" />
                                            </svg>
                                            Details</h4>

                                    </div>
                                </div>
                                <div class="col-md-5 header-buttons">
                                    <button v-if="!isEditModeComputed" @click="editProfile()" class="btn btn-light">
                                      <svg width="18" height="18" viewBox="0 0 18 18"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3.84896 9.68641H3.59904L3.84895 9.68497C3.84846 9.59945 3.86485 9.51469 3.89718 9.43553C3.92945 9.35653 3.97734 9.28428 4.03738 9.22365L10.2812 2.98887L12.8188 0.442192C12.8792 0.381293 12.9511 0.332956 13.0303 0.299969C13.1095 0.266983 13.1944 0.25 13.2802 0.25C13.3659 0.25 13.4508 0.266983 13.53 0.299969C13.6091 0.332927 13.6811 0.381367 13.7415 0.442192L17.556 4.30176L17.5578 4.30352C17.6187 4.36393 17.667 4.43579 17.7 4.51496C17.733 4.59414 17.75 4.67906 17.75 4.76484C17.75 4.85061 17.733 4.93554 17.7 5.01471C17.6671 5.09365 17.6196 5.16471 17.559 5.225L17.7339 5.40365L17.5578 5.22615L15.0037 7.72626L8.77596 13.963C8.71533 14.023 8.64346 14.0706 8.56447 14.1028C8.48531 14.1352 8.40055 14.1515 8.31503 14.151L8.31359 14.151H4.4987C4.32637 14.151 4.16111 14.0826 4.03926 13.9607C3.91741 13.8389 3.84896 13.6736 3.84896 13.5013V9.68641ZM16.18 4.71985L13.2802 1.82003L11.649 3.45122L14.5488 6.35103L16.18 4.71985ZM13.6337 7.26611L10.7339 4.3663L5.14843 9.95175V12.8516H8.04825L13.6337 7.26611Z"
                                                fill="black" />
                                            <path d="M3.85988 9.0476L4.03653 9.2245L4.03738 9.22365L3.85988 9.0476Z"
                                                fill="black" />
                                            <path
                                                d="M0.967359 0.972576C1.42668 0.513259 2.04964 0.255217 2.69922 0.255217H8.09765C8.26997 0.255217 8.43524 0.323671 8.55709 0.445521C8.67894 0.567371 8.74739 0.732635 8.74739 0.904956C8.74739 1.07728 8.67894 1.24254 8.55709 1.36439C8.43524 1.48624 8.26997 1.5547 8.09765 1.5547H2.69922C2.39429 1.5547 2.10185 1.67583 1.88623 1.89145C1.67061 2.10706 1.54948 2.3995 1.54948 2.70443V15.3008C1.54948 15.6057 1.67061 15.8982 1.88623 16.1138C2.10185 16.3294 2.39429 16.4505 2.69922 16.4505H15.2956C15.6005 16.4505 15.8929 16.3294 16.1086 16.1138C16.3242 15.8982 16.4453 15.6057 16.4453 15.3008V9.90235C16.4453 9.73003 16.5138 9.56476 16.6356 9.44291C16.7575 9.32106 16.9227 9.25261 17.095 9.25261C17.2674 9.25261 17.4326 9.32106 17.5545 9.44291C17.6763 9.56476 17.7448 9.73003 17.7448 9.90235V15.3008C17.7448 15.9504 17.4867 16.5733 17.0274 17.0326C16.5681 17.492 15.9451 17.75 15.2956 17.75H2.69922C2.04964 17.75 1.42668 17.492 0.967359 17.0326C0.508042 16.5733 0.25 15.9504 0.25 15.3008V2.70443C0.25 2.05486 0.508042 1.43189 0.967359 0.972576Z"
                                                fill="black" />
                                      </svg>
                                      Edit Profile
                                    </button>
                                    <button v-if="!isEditModeComputed" @click="deleteProfile()" class="btn btn-danger"><svg width="17" height="18" viewBox="0 0 17 18"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.3 14.4C6.5387 14.4 6.76761 14.3052 6.9364 14.1364C7.10518 13.9676 7.2 13.7387 7.2 13.5V8.1C7.2 7.8613 7.10518 7.63239 6.9364 7.4636C6.76761 7.29482 6.5387 7.2 6.3 7.2C6.06131 7.2 5.83239 7.29482 5.6636 7.4636C5.49482 7.63239 5.4 7.8613 5.4 8.1V13.5C5.4 13.7387 5.49482 13.9676 5.6636 14.1364C5.83239 14.3052 6.06131 14.4 6.3 14.4ZM15.3 3.6H11.7V2.7C11.7 1.98392 11.4155 1.29716 10.9092 0.790812C10.4028 0.284464 9.71608 0 9 0H7.2C6.48392 0 5.79716 0.284464 5.29081 0.790812C4.78446 1.29716 4.5 1.98392 4.5 2.7V3.6H0.9C0.661305 3.6 0.432387 3.69482 0.263604 3.8636C0.0948211 4.03239 0 4.2613 0 4.5C0 4.73869 0.0948211 4.96761 0.263604 5.1364C0.432387 5.30518 0.661305 5.4 0.9 5.4H1.8V15.3C1.8 16.0161 2.08446 16.7028 2.59081 17.2092C3.09716 17.7155 3.78392 18 4.5 18H11.7C12.4161 18 13.1028 17.7155 13.6092 17.2092C14.1155 16.7028 14.4 16.0161 14.4 15.3V5.4H15.3C15.5387 5.4 15.7676 5.30518 15.9364 5.1364C16.1052 4.96761 16.2 4.73869 16.2 4.5C16.2 4.2613 16.1052 4.03239 15.9364 3.8636C15.7676 3.69482 15.5387 3.6 15.3 3.6ZM6.3 2.7C6.3 2.46131 6.39482 2.23239 6.5636 2.0636C6.73239 1.89482 6.96131 1.8 7.2 1.8H9C9.2387 1.8 9.46761 1.89482 9.6364 2.0636C9.80518 2.23239 9.9 2.46131 9.9 2.7V3.6H6.3V2.7ZM12.6 15.3C12.6 15.5387 12.5052 15.7676 12.3364 15.9364C12.1676 16.1052 11.9387 16.2 11.7 16.2H4.5C4.26131 16.2 4.03239 16.1052 3.8636 15.9364C3.69482 15.7676 3.6 15.5387 3.6 15.3V5.4H12.6V15.3ZM9.9 14.4C10.1387 14.4 10.3676 14.3052 10.5364 14.1364C10.7052 13.9676 10.8 13.7387 10.8 13.5V8.1C10.8 7.8613 10.7052 7.63239 10.5364 7.4636C10.3676 7.29482 10.1387 7.2 9.9 7.2C9.66131 7.2 9.43239 7.29482 9.2636 7.4636C9.09482 7.63239 9 7.8613 9 8.1V13.5C9 13.7387 9.09482 13.9676 9.2636 14.1364C9.43239 14.3052 9.66131 14.4 9.9 14.4Z"
                                                fill="white" />
                                        </svg>
                                        Delete Profile</button>
                                    <button v-if="!isEditModeComputed" class="btn btn-primary"><svg width="19" height="18" viewBox="0 0 19 18"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.18417 0.0290213C2.70613 -0.0501408 3.23981 0.0335775 3.71246 0.268762L16.6247 6.72488H16.6328C17.0402 6.93879 17.3828 7.25845 17.6246 7.65063C17.8741 8.05551 18.0063 8.52176 18.0063 8.99736C18.0063 9.47297 17.8741 9.93922 17.6246 10.3441C17.3751 10.7489 17.0178 11.0765 16.593 11.2903L3.72235 17.7256C3.36182 17.9021 2.96642 17.9959 2.56502 18C2.13767 17.9997 1.71714 17.8927 1.3416 17.6888C0.965754 17.4846 0.646881 17.1898 0.413962 16.831C0.181043 16.4723 0.0414622 16.0611 0.00790565 15.6347C-0.0256445 15.2084 0.0479514 14.7802 0.221817 14.3895L2.42835 9.45251L2.43007 9.44842C2.48998 9.30559 2.52083 9.15225 2.52083 8.99736C2.52083 8.84248 2.49002 8.68912 2.43012 8.54629L0.221841 3.60528C0.00823425 3.12252 -0.051324 2.58564 0.0512877 2.0678C0.153922 1.54985 0.413801 1.07616 0.795493 0.711305C1.17718 0.346453 1.66211 0.108197 2.18417 0.0290213ZM15.939 9.98613L15.8516 9.81565L15.9373 9.98698L3.06268 16.4243C2.85844 16.5223 2.6291 16.5556 2.40541 16.5196C2.18172 16.4837 1.97438 16.3802 1.81118 16.223C1.64798 16.0659 1.53673 15.8626 1.49235 15.6404C1.44796 15.4182 1.47257 15.1878 1.56286 14.98L1.56354 14.9784L3.76007 10.0432L3.7605 10.0422C3.7858 9.98343 3.80766 9.92326 3.82597 9.86197L3.8668 9.72523H10.3443C10.5373 9.72523 10.7225 9.64854 10.859 9.51204C10.9955 9.37554 11.0722 9.19041 11.0722 8.99736C11.0722 8.80432 10.9955 8.61919 10.859 8.48269C10.7225 8.34619 10.5373 8.2695 10.3443 8.2695H3.8668L3.82597 8.13276C3.80766 8.07147 3.7858 8.0113 3.7605 7.95255L1.56286 3.01473C1.47257 2.80694 1.44796 2.57651 1.49235 2.35434C1.53673 2.13216 1.64798 1.92887 1.81118 1.77172C1.97438 1.61456 2.18172 1.51106 2.40541 1.47509C2.6291 1.43912 2.85844 1.4724 3.06268 1.57047L3.06543 1.57182L15.939 8.00859C16.121 8.10183 16.2737 8.24347 16.3803 8.41793C16.487 8.59239 16.5434 8.79289 16.5434 8.99736C16.5434 9.20184 16.487 9.40234 16.3803 9.5768C16.2737 9.75126 16.121 9.8929 15.939 9.98613Z"
                                                fill="white" />
                                        </svg>
                                        Message</button>
                                    <button @click="updateProfile()" v-if="isEditModeComputed" class="btn btn-success">
                                      <svg width="19" height="18" viewBox="0 0 19 18"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.18417 0.0290213C2.70613 -0.0501408 3.23981 0.0335775 3.71246 0.268762L16.6247 6.72488H16.6328C17.0402 6.93879 17.3828 7.25845 17.6246 7.65063C17.8741 8.05551 18.0063 8.52176 18.0063 8.99736C18.0063 9.47297 17.8741 9.93922 17.6246 10.3441C17.3751 10.7489 17.0178 11.0765 16.593 11.2903L3.72235 17.7256C3.36182 17.9021 2.96642 17.9959 2.56502 18C2.13767 17.9997 1.71714 17.8927 1.3416 17.6888C0.965754 17.4846 0.646881 17.1898 0.413962 16.831C0.181043 16.4723 0.0414622 16.0611 0.00790565 15.6347C-0.0256445 15.2084 0.0479514 14.7802 0.221817 14.3895L2.42835 9.45251L2.43007 9.44842C2.48998 9.30559 2.52083 9.15225 2.52083 8.99736C2.52083 8.84248 2.49002 8.68912 2.43012 8.54629L0.221841 3.60528C0.00823425 3.12252 -0.051324 2.58564 0.0512877 2.0678C0.153922 1.54985 0.413801 1.07616 0.795493 0.711305C1.17718 0.346453 1.66211 0.108197 2.18417 0.0290213ZM15.939 9.98613L15.8516 9.81565L15.9373 9.98698L3.06268 16.4243C2.85844 16.5223 2.6291 16.5556 2.40541 16.5196C2.18172 16.4837 1.97438 16.3802 1.81118 16.223C1.64798 16.0659 1.53673 15.8626 1.49235 15.6404C1.44796 15.4182 1.47257 15.1878 1.56286 14.98L1.56354 14.9784L3.76007 10.0432L3.7605 10.0422C3.7858 9.98343 3.80766 9.92326 3.82597 9.86197L3.8668 9.72523H10.3443C10.5373 9.72523 10.7225 9.64854 10.859 9.51204C10.9955 9.37554 11.0722 9.19041 11.0722 8.99736C11.0722 8.80432 10.9955 8.61919 10.859 8.48269C10.7225 8.34619 10.5373 8.2695 10.3443 8.2695H3.8668L3.82597 8.13276C3.80766 8.07147 3.7858 8.0113 3.7605 7.95255L1.56286 3.01473C1.47257 2.80694 1.44796 2.57651 1.49235 2.35434C1.53673 2.13216 1.64798 1.92887 1.81118 1.77172C1.97438 1.61456 2.18172 1.51106 2.40541 1.47509C2.6291 1.43912 2.85844 1.4724 3.06268 1.57047L3.06543 1.57182L15.939 8.00859C16.121 8.10183 16.2737 8.24347 16.3803 8.41793C16.487 8.59239 16.5434 8.79289 16.5434 8.99736C16.5434 9.20184 16.487 9.40234 16.3803 9.5768C16.2737 9.75126 16.121 9.8929 15.939 9.98613Z"
                                                fill="white" />
                                      </svg>
                                      Update Profile
                                    </button>

                                </div>
                            </div>

                        </div>


                        <div class="white-widget">
                            <div class="employee-info">
                                <div v-if="!isEditModeComputed" class="row">
                                    <div class="col-md-3">
                                        <label>Full Name</label>
                                        <div> {{ selectedEmployee.full_name }}</div>
                                    </div>
                                    <div class="col-md-3">
                                        <label>Username</label>
                                        <div>{{ selectedEmployee.username }}</div>
                                    </div>
                                    <div class="col-md-3">
                                        <label>Password</label>
                                        <div>N/A</div>
                                    </div>
                                    <div class="col-md-3">
                                        <label>Citizen ID</label>
                                        <div>{{ selectedEmployee.citizen_id }}</div>
                                    </div>
                                </div>
                                <div v-if="!isEditModeComputed" class="row">
                                    <div class="col-md-3">
                                        <label>Profile Picture</label>
                                        <div><a :href="selectedEmployee.profile_picture">{{ selectedEmployee.profile_picture }}</a>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label>Department</label>
                                        <div>{{ selectedEmployee.depart_name }}</div>
                                    </div>
                                    <div class="col-md-3">
                                        <label>Rank</label>
                                        <div>{{ selectedEmployee.rank_name }}</div>
                                    </div>
                                    <div class="col-md-3">
                                        <label>Callsign</label>
                                        <div>{{ selectedEmployee.call_sign }}</div>
                                    </div>
                                </div>
                                <notification-bar />
                                <div v-if="isEditModeComputed"  class="edit-employee-info">
                                    <div class="row g-3">
                                        <div class="col">
                                            <input type="text" v-model="selectedEmployee.full_name" class="form-control" placeholder="Full Name">
                                        </div>
                                        <div class="col">
                                            <input type="text" v-model="selectedEmployee.username" class="form-control" placeholder="Username">
                                        </div>
                                        <div class="col">
                                            <input type="password"  class="form-control" placeholder="Password">
                                        </div>
                                        <div class="col">
                                            <input type="text" v-model="selectedEmployee.citizen_id"  class="form-control" placeholder="Citizen ID">
                                        </div>
                                    </div>
                                    <div class="row g-3">
                                        <div class="col">
                                            <!-- <div class="upload-btn"> -->
                                                <!-- <label for="profilePicture">Profile Picture</label> -->
                                                <input type="text" v-model="selectedEmployee.profile_picture" class="form-control" placeholder="Profile picture"  id="profilePicture">
                                            <!-- </div> -->
                                        </div>
                                        <div class="col">
                                            <select v-model="selectedEmployee.enc_department_id" class="form-select">
                                                <option >Select Department</option>
                                                <option v-for="dept in getDepartments" :key="dept.key" :value="dept.key"  >{{ dept.value }}</option>
                                            </select>
                                        </div>
                                        <div class="col">
                                            <select v-model="selectedEmployee.enc_rank_id" class="form-select">
                                                <option >Select Rank</option>
                                                <option v-for="rank in getRanks" :key="rank.key" :value="rank.key"  >{{ rank.value }}</option>
                                            </select>
                                        </div>
                                        <div class="col">
                                            <input type="text" v-model="selectedEmployee.call_sign" class="form-control" placeholder="Callsign">
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div class="white-widget">
                            <div class="role-widget">
                                <h4>Miscellaneous</h4>

                                <div class="row">
                                    <div class="col-md-3">
                                        <label class="black-checkbox">View Charges
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_view_charges"  :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">View Bails
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_view_bails" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">High Commands
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_high_commands" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Expunge Records
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_expunge_records" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div class="white-widget">
                            <div class="role-widget">
                                <h4>Warrants</h4>

                                <div class="row">
                                    <div class="col-md-3">
                                        <label class="black-checkbox">View Warrants
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_view_warrants" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Create Warrants
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_create_warrants" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Edit Warrants
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_edit_warrants" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Approve Warrants
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_approve_warrants" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Delete Warrants
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_delete_warrants" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Serve Warrants
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_serve_warrants" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>


                                </div>

                            </div>

                        </div>
                        <div class="white-widget">
                            <div class="role-widget">
                                <h4>Reports</h4>

                                <div class="row">
                                    <div class="col-md-3">
                                        <label class="black-checkbox">View Reports
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_view_reports" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Create Reports
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_create_reports" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Edit Reports
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_edit_reports" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Delete Reports
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_delete_reports" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>

                                </div>


                            </div>

                        </div>
                        <div class="white-widget">
                            <div class="role-widget">
                                <h4>Laws</h4>

                                <div class="row">
                                    <div class="col-md-3">
                                        <label class="black-checkbox">View Laws
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_view_laws" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Create Laws
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_create_laws" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Edit Laws
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_edit_laws" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Delete Laws
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_delete_laws" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>

                                </div>


                            </div>

                        </div>

                        <div class="white-widget">
                            <div class="role-widget">
                                <h4>Profile</h4>

                                <div class="row">
                                    <div class="col-md-3">
                                        <label class="black-checkbox">View Profiles
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_view_profile"  :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Create Profiles
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_create_profile"  :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="black-checkbox">Edit Profiles
                                            <input type="checkbox" v-model="selectedEmployee.is_allowed_to_edit_profile" :disabled="!isEditModeComputed">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>


                                </div>


                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div v-else>
              <h2>No Employees</h2>
            </div>
            <delete-user-modal :show-modal="showDeleteModalComputed" :user-id="userIdToDeleteComputed" @close="closeDeleteModal" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DeleteUserModal from '~/components/users/DeleteUserModal.vue'
export default {
  components: { DeleteUserModal },
  name: 'Users',
  layout: 'master',
  data () {
    return {
      usersList: [],
      selectedIndex: 0,
      selectedEmployee: [],
      isEditMode: false,
      isDeleteModalOpen: false,
      userIdToDelete: 0,
    }
  },
  computed: {
    selectedIndexComputed() {
      return this.selectedIndex
    },
    isEditModeComputed() {
      return this.isEditMode
    },
    showDeleteModalComputed() {
      return this.isDeleteModalOpen
    },
     userIdToDeleteComputed() {
      return this.userIdToDelete
    },
    ...mapGetters([ 'getRanks', 'getDepartments']),
  },
  mounted () {
    this.$store.commit('setActiveTab', 'users')
    this.fetchAllUsers()
  },
  methods: {
    async fetchAllUsers(){
      this.usersList = await this.$store.dispatch(
        'auth/fetchAllUsers',
        {}
      )
      if(this.usersList.length > 0) {
        this.selectedEmployee = this.usersList[0]
      }
    },
    selectEmployee(index) {
      this.selectedIndex = index
      this.selectedEmployee = this.usersList[index]
      this.isEditMode =  false
    },
    editProfile() {
      this.isEditMode = true
    },
    updateProfile() {
        this.$store
        .dispatch('auth/updateUserInfo', this.selectedEmployee)
        .then((data) => {
          this.fetchAllUsers()
          this.selectEmployee(0)
        })
        .catch(() => {

        })
    },
    deleteProfile() {
      this.isDeleteModalOpen = true
      this.userIdToDelete = this.selectedEmployee.enc_user_id
    },
    closeDeleteModal() {
      this.userIdToDelete = 0
      this.isDeleteModalOpen = false
      this.fetchAllUsers()
      this.selectEmployee(0)

    }
  }
}
</script>

<style lang="css" scoped>
  .page-title-banner.users {
      background: url(~/assets/images/users-banner.png) no-repeat;
      background-size: 100% !important;   
  }
  .header-buttons {
      text-align: right;
      margin-top: 15px;
  }
  .header-buttons .btn {
      font-weight: normal;
  }
  .employee-info label {
      color: rgba(27, 27, 27, 0.5);
  }
  .employee-info .row {
      margin-bottom: 20px;
  }

  .role-widget > h4 {
      font-size: 18px;
      font-weight: normal;
      margin-bottom: 15px;
      color: rgba(27, 27, 27, 0.5);
  }
</style>
