<template>
    <div class="app-wrapper">
        <side-bar class="sidebar-container" />
        <div class="main-container">
            <div>
                <nav-bar />
            </div>
            <app-main />
        </div>
    </div>
</template>

<script>
import NavBar from './components/Navbar'
import AppMain from './components/AppMain'
import SideBar from './components/Sidebar/index'
export default {
components: {
    NavBar,
    AppMain,
    SideBar
  },
}
</script>

<style lang="scss" scoped>
    .app-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
        &.mobile.openSidebar{
            position: fixed;
            top: 0;
        }
    }

</style>