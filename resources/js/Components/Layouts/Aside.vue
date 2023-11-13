<template>
    <div>
        <!-- Start aside =================================== -->
        <!--
          If you want to keep sidebar always hidden then follow below 2 process
          1. use .hide-always class in aside tag
          2. use .main-bar-expand class in main tag
         -->
        <aside id="left-aside" class="left-aside">


            <!-- Start Left logo area ======================================= -->
            <div class="top-logobar">
                <button onclick="expandFunction()">
                    <i class="bi bi-list"></i>
                </button>
                <a class="navbar-brand" href="dashboard.html">
                    <img src="../../../template/assets/images/logo/uthkorsho.svg" alt="uthkorshoIT">
                </a>
            </div>
            <!-- End Left logo area ======================================= -->


            <!-- Start aside menu ============================================== -->
            <ul class="accordion" id="dropdown-menu">


                <li class="accordion-item">
                    <a href="./dashboard.html" class="sigle-nav-link" id="is-menu-active">
                        <i class="bi bi-speedometer2"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li class="accordion-item">
                    <span class="accordion-item-title">Students</span>
                </li>


                <!-- =================== Start Admission =================== -->
                <li class="accordion-item">
                    <a href="./admission.html" class="sigle-nav-link">
                        <i class="bi bi-person-plus"></i>
                        <span>Admission</span>
                    </a>
                </li>
                <!-- =================== End Admission =================== -->


                <!-- =================== Start Student Database =================== -->
                <li class="accordion-item">
                    <a href="./student_database.html" class="sigle-nav-link">
                        <i class="bi bi-database"></i>
                        <span>Student Database</span>
                    </a>
                </li>
                <!-- =================== End Student Database =================== -->


                <!-- =================== Start Student Database =================== -->
                <li class="accordion-item">
                    <a href="./drop_out_student.html" class="sigle-nav-link">
                        <i class="bi bi-person-slash"></i>
                        <span>Drop out Student</span>
                    </a>
                </li>
                <!-- =================== End Student Database =================== -->


                <!-- =================== Start Student Attendance =================== -->
                <li class="accordion-item">
                    <a href="./student_attendance.html" class="sigle-nav-link">
                        <i class="bi bi-card-checklist"></i>
                        <span>Student Attendance</span>
                    </a>
                </li>
                <!-- =================== End Student Attendance =================== -->


                <li class="accordion-item">
                    <span class="accordion-item-title">academic</span>
                </li>


                <!-- =================== Start academic year =================== -->
                <li class="accordion-item">
                    <a href="./academic_year.html" class="sigle-nav-link">
                        <i class="bi bi-calendar"></i>
                        <span>academic year</span>
                    </a>
                </li>
                <!-- =================== End academic year =================== -->


                <!-- =================== Start Subject =================== -->
                <li class="accordion-item">
                    <a href="./subject.html" class="sigle-nav-link">
                        <i class="bi bi-book"></i>
                        <span>Subject</span>
                    </a>
                </li>
                <!-- =================== End Subject =================== -->


                <!-- =================== Start section =================== -->
                <li class="accordion-item">
                    <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#section"
                       aria-expanded="false" aria-controls="section">
                        <i class="bi bi-diagram-3"></i>
                        <span class="me-auto">section</span>
                        <i class="bi bi-chevron-left"></i>
                    </a>

                    <ul id="section" class="accordion-collapse collapse" data-bs-parent="#dropdown-menu">
                        <li>
                            <a href="./section_manage.html" class="nav-link"><span>Manage section</span></a>
                        </li>
                        <li>
                            <a href="./section_transfer.html" class="nav-link"><span>transfer section</span></a>
                        </li>
                        <li>
                            <a href="#" class="nav-link"><span>recycle bin</span></a>
                        </li>
                    </ul>
                </li>
                <!-- =================== End section =================== -->


                <!-- =================== Start class =================== -->
                <li class="accordion-item">
                    <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse"
                       data-bs-target="#class_manage"
                       aria-expanded="false" aria-controls="class_manage">
                        <i class="bi bi-clipboard-check"></i>
                        <span class="me-auto">class</span>
                        <i class="bi bi-chevron-left"></i>
                    </a>

                    <ul id="class_manage" class="accordion-collapse collapse" data-bs-parent="#dropdown-menu">
                        <li>
                            <a href="./class_add.html" class="nav-link"><span>Add class</span></a>
                        </li>
                        <li>
                            <a href="./class_manage.html" class="nav-link"><span>manage class</span></a>
                        </li>
                        <li>
                            <a href="./class_routine.html" class="nav-link"><span>Class routine</span></a>
                        </li>
                        <li>
                            <a href="./class_transfer.html" class="nav-link"><span>Class transfer</span></a>
                        </li>
                        <li>
                            <a href="#" class="nav-link"><span>recycle bin</span></a>
                        </li>
                    </ul>
                </li>
                <!-- =================== End class =================== -->


                <!-- =================== Start Teacher schedule list =================== -->
                <li class="accordion-item">
                    <a href="./teacher_schedule_list.html" class="sigle-nav-link">
                        <i class="bi bi-card-checklist"></i>
                        <span>Teacher schedule list </span>
                    </a>
                </li>
                <!-- =================== End Teacher schedule list =================== -->


                <!-- =================== Start holydays =================== -->
                <li class="accordion-item">
                    <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#holyday"
                       aria-expanded="false" aria-controls="holyday">
                        <i class="bi bi-briefcase"></i>
                        <span class="me-auto">holyday</span>
                        <i class="bi bi-chevron-left"></i>
                    </a>

                    <ul id="holyday" class="accordion-collapse collapse" data-bs-parent="#dropdown-menu">
                        <li>
                            <a href="./holyday_add.html" class="nav-link"><span>Add holyday</span></a>
                        </li>
                        <li>
                            <a href="./holyday_manage.html" class="nav-link"><span>manage holyday</span></a>
                        </li>
                        <li>
                            <a href="#" class="nav-link"><span>recycle bin</span></a>
                        </li>
                    </ul>
                </li>
                <!-- =================== End holydays =================== -->


                <li class="accordion-item">
                    <span class="accordion-item-title">Office</span>
                </li>


                <!-- =================== Start employee =================== -->
                <li class="accordion-item">
                    <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#employee"
                       aria-expanded="false" aria-controls="employee">
                        <i class="bi bi-people"></i>
                        <span class="me-auto">employee </span>
                        <i class="bi bi-chevron-left"></i>
                    </a>

                    <ul id="employee" class="accordion-collapse collapse" data-bs-parent="#dropdown-menu">
                        <li>
                            <a href="pages/add_employee.html" class="nav-link"><span>add employee</span></a>
                        </li>
                        <li>
                            <a href="pages/manage_employee.html" class="nav-link"><span>manage employee</span></a>
                        </li>
                        <li>
                            <a href="pages/employee_attendance.html" class="nav-link"><span>attendance</span></a>
                        </li>
                        <li>
                            <a href="#" class="nav-link"><span>recycle bin</span></a>
                        </li>
                    </ul>
                </li>
                <!-- =================== End employee =================== -->

                <!-- =================== Start Payment =================== -->
                <li class="accordion-item">
                    <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#payment"
                       aria-expanded="false" aria-controls="payment">
                        <i class="bi bi-credit-card-2-front"></i>
                        <span class="me-auto">Payment </span>
                        <i class="bi bi-chevron-left"></i>
                    </a>

                    <ul id="payment" class="accordion-collapse collapse" data-bs-parent="#dropdown-menu">
                        <li>
                            <a href="pages/create_payment.html" class="nav-link"><span>create Payment</span></a>
                        </li>
                        <li>
                            <a href="pages/manage_payment.html" class="nav-link"><span>manage Payment</span></a>
                        </li>
                        <li>
                            <a href="#" class="nav-link"><span>recycle bin</span></a>
                        </li>
                    </ul>
                </li>
                <!-- =================== End Payment =================== -->

                <!-- =================== Start accounting =================== -->
                <li class="accordion-item">
                    <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse"
                       data-bs-target="#accounting"
                       aria-expanded="false" aria-controls="accounting">
                        <i class="bi bi-cash-coin"></i>
                        <span class="me-auto">office accounting </span>
                        <i class="bi bi-chevron-left"></i>
                    </a>

                    <ul id="accounting" class="accordion-collapse collapse" data-bs-parent="#dropdown-menu">
                        <li>
                            <a href="pages/bank.html" class="nav-link"><span>Bank manage</span></a>
                        </li>
                        <li>
                            <a href="pages/cash.html" class="nav-link"><span>Cash manage</span></a>
                        </li>
                        <li>
                            <a href="pages/balance_add.html" class="nav-link"><span>Balance add</span></a>
                        </li>
                        <li>
                            <a href="pages/balance_withdraw.html" class="nav-link"><span>Balance Withdraw</span></a>
                        </li>
                        <li>
                            <a href="pages/balance_transfer.html" class="nav-link"><span>Balance Transfer</span></a>
                        </li>
                    </ul>
                </li>
                <!-- =================== End accounting =================== -->


                <!-- =================== Start income =================== -->
                <li class="accordion-item">
                    <a href="./income.html" class="sigle-nav-link">
                        <i class="bi bi-bar-chart"></i>
                        <span>office Income</span>
                    </a>
                </li>
                <!-- =================== End income =================== -->


                <!-- =================== Start expense =================== -->
                <li class="accordion-item">
                    <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#expense"
                       aria-expanded="false" aria-controls="expense">
                        <i class="bi bi-pie-chart"></i>
                        <span class="me-auto">office expense </span>
                        <i class="bi bi-chevron-left"></i>
                    </a>

                    <ul id="expense" class="accordion-collapse collapse" data-bs-parent="#dropdown-menu">
                        <li>
                            <a href="pages/expense_add.html" class="nav-link"><span>add expense</span></a>
                        </li>
                        <li>
                            <a href="pages/expense_manage.html" class="nav-link"><span>manage expense</span></a>
                        </li>
                        <li>
                            <a href="pages/expense_category.html" class="nav-link"><span>expense Category</span></a>
                        </li>
                        <li>
                            <a href="pages/expense_sub_category.html" class="nav-link"><span>expense sub-Category</span></a>
                        </li>
                    </ul>
                </li>
                <!-- =================== End accounting =================== -->


                <li class="accordion-item">
                    <span class="accordion-item-title">Exam</span>
                </li>


                <!-- =================== Start Exam hall =================== -->
                <li class="accordion-item">
                    <a href="./exam_hall.html" class="sigle-nav-link">
                        <i class="bi bi-door-open"></i>
                        <span>Exam hall</span>
                    </a>
                </li>
                <!-- =================== End Exam hall =================== -->


                <!-- =================== Start Grades Range =================== -->
                <li class="accordion-item">
                    <a href="./grades_range.html" class="sigle-nav-link">
                        <i class="bi bi-mortarboard"></i>
                        <span>Grades Range </span>
                    </a>
                </li>
                <!-- =================== End Grades Range =================== -->


                <!-- =================== Start Exam Setup =================== -->
                <li class="accordion-item">
                    <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse"
                       data-bs-target="#exam_setup"
                       aria-expanded="false" aria-controls="exam_setup">
                        <i class="bi bi-list-ol"></i>
                        <span class="me-auto">Exam Setup </span>
                        <i class="bi bi-chevron-left"></i>
                    </a>

                    <ul id="exam_setup" class="accordion-collapse collapse" data-bs-parent="#dropdown-menu">
                        <li>
                            <a href="pages/create_exam.html" class="nav-link"><span>create exam</span></a>
                        </li>
                        <li>
                            <a href="pages/manage_exam.html" class="nav-link"><span>manage exam</span></a>
                        </li>
                        <li>
                            <a href="#" class="nav-link"><span>recycle bin</span></a>
                        </li>
                    </ul>
                </li>
                <!-- =================== End Exam Setup =================== -->


                <!-- =================== Start Exam Schedule =================== -->
                <li class="accordion-item">
                    <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse"
                       data-bs-target="#exam_schedule"
                       aria-expanded="false" aria-controls="exam_schedule">
                        <i class="bi bi-calendar-check"></i>
                        <span class="me-auto">Exam Schedule </span>
                        <i class="bi bi-chevron-left"></i>
                    </a>

                    <ul id="exam_schedule" class="accordion-collapse collapse" data-bs-parent="#dropdown-menu">
                        <li>
                            <a href="pages/create_exam_schedule.html" class="nav-link"><span>create Schedule</span></a>
                        </li>
                        <li>
                            <a href="pages/manage_exam_schedule.html" class="nav-link"><span>manage Schedule</span></a>
                        </li>
                        <li>
                            <a href="#" class="nav-link"><span>recycle bin</span></a>
                        </li>
                    </ul>
                </li>
                <!-- =================== End Exam Schedule =================== -->


                <!-- =================== Start Exam Mark =================== -->
                <li class="accordion-item">
                    <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#exam_mark"
                       aria-expanded="false" aria-controls="exam_mark">
                        <i class="bi bi-check-all"></i>
                        <span class="me-auto">Exam Mark </span>
                        <i class="bi bi-chevron-left"></i>
                    </a>

                    <ul id="exam_mark" class="accordion-collapse collapse" data-bs-parent="#dropdown-menu">
                        <li>
                            <a href="pages/create_exam_mark.html" class="nav-link"><span>create exam mark</span></a>
                        </li>
                        <li>
                            <a href="pages/manage_exam_mark.html" class="nav-link"><span>manage exam mark</span></a>
                        </li>
                        <li>
                            <a href="#" class="nav-link"><span>recycle bin</span></a>
                        </li>
                    </ul>
                </li>
                <!-- =================== End Exam Mark =================== -->


                <!-- =================== Start admit card =================== -->
                <li class="accordion-item">
                    <a href="./admit_card.html" class="sigle-nav-link">
                        <i class="bi bi-person-vcard"></i>
                        <span>admit card </span>
                    </a>
                </li>
                <!-- =================== End admit card =================== -->


                <!-- =================== Start token =================== -->
                <li class="accordion-item">
                    <a href="./token.html" class="sigle-nav-link">
                        <i class="bi bi-receipt"></i>
                        <span>token </span>
                    </a>
                </li>
                <!-- =================== End token =================== -->


                <li class="accordion-item">
                    <span class="accordion-item-title">Report</span>
                </li>


                <!-- =================== Start calendar =================== -->
                <li class="accordion-item">
                    <a href="./calendar.html" class="sigle-nav-link">
                        <i class="bi bi-calendar2-week"></i>
                        <span>calendar </span>
                    </a>
                </li>
                <!-- =================== End calendar =================== -->

            </ul>
            <!-- End aside menu ============================================== -->


        </aside>
        <!-- End aside =================================== -->


        <!-- Start aside background Shadow =================================== -->
        <div id="aside-layer" onclick="expandFunction()"></div>
        <!-- End aside background Shadow =================================== -->
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
