<template>
    <div>
        <!-- Start Navbar =================================== -->
        <nav class="navbar primary">
            <div class="container-fluid">
                <!-- Start Left logo area ======================================= -->
                <div class="top-logobar">
                    <button @click="expandFunction">
                        <i class="bi bi-list"></i>
                    </button>
                    <a class="navbar-brand" href="dashboard.html">
                        <img src="../../../template/assets/images/logo/uthkorsho.svg" alt="uthkorshoIT">
                    </a>
                </div>
                <!-- End Left logo area ======================================= -->

                <!-- Start navmenu ======================================= -->
                <ul class="navbar-nav ms-auto mb-lg-0">
                    <!-- Translate button ======================================= -->
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-translate"></i></a>
                    </li>

                    <!-- User button ======================================= -->
                    <li class="nav-item dropdown">
                        <a class="nav-link user-button" href="#" role="button" id="user-dropdown"
                           data-bs-toggle="dropdown"
                           aria-expanded="false">
                            <img src="../../../template/assets/images/users/rahat.jpg" alt="user">
                        </a>

                        <div class="dropdown-menu" aria-labelledby="user-dropdown">
                            <ul>
                                <li>
                                    <a class="dropdown-item double-line" href="profile.html">
                                        <img src="../../../template/assets/images/users/rahat.jpg" alt="Musab Osman">
                                        <div>
                                            <h5>Musab Osman</h5>
                                            <span>Admin</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <hr>
                                </li>

                                <li>
                                    <a class="dropdown-item" href="settings.html">
                                        <i class="bi bi-gear"></i>
                                        <span>Settings &amp; Privacy</span>
                                        <span class="badge bg-danger">12</span>
                                    </a>
                                </li>

                                <li>
                                    <a class="dropdown-item" href="help.html">
                                        <i class="bi bi-question-circle"></i>
                                        <span>Help &amp; Support</span>
                                    </a>
                                </li>

                                <li>
                                    <a class="dropdown-item" href="#">
                                        <i class="bi bi-box-arrow-left"></i>
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <!-- End navmenu ======================================= -->
            </div>
        </nav>
        <!-- End Navbar =================================== -->

    </div>
</template>

<script setup>
function expandFunction() {
    let pageAside = document.getElementById("left-aside")
    let asideLayer = document.getElementById("aside-layer")
    let mainBar = document.getElementById("main-bar")

    pageAside.classList.toggle("expand")
    asideLayer.classList.toggle("show")
    mainBar.classList.toggle("main-bar-expand")
}
</script>

<style scoped>

</style>
