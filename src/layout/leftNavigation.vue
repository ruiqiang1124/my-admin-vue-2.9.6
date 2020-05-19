<template>
  <el-row class="app-wrapper">
    <el-col :span="4" class="app-wrapper-aside">
      <el-menu default-active="home" text-color="#fff" background-color="#304156" style="height: 100%;" active-text-color="#ffd04b" router>
		  <template v-for="(menu, menuIndex) in navList" >
			  	<template v-if="!menu.submenu">
					<el-menu-item :index="menu.path" :key="menuIndex"><i :class="menu.icon"></i>{{menu.name}}</el-menu-item>
				</template>
			<template v-else>
				<el-submenu :key="menuIndex" :index="menu.id">
					<template slot="title">
						<i :class="menu.icon"></i>
						<span>{{menu.name}}</span>
					</template>

					<el-menu-item v-for="(submenu, childIndex) in menu.submenu" :index="submenu.path" :key="childIndex">{{submenu.name}}</el-menu-item>
				</el-submenu>
			</template>
		  </template>
      </el-menu>
    </el-col>
    <el-col :span="20" :offset="4">
		<navHeader></navHeader>
		<div class="container">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		</div>
    </el-col>
  </el-row>
</template>

<script>
import navHeader from './navHeader';
export default {
	data() {
		return {
			navList: [
				{
					name: '首页',
					path: 'home',
					icon: 'el-icon-menu',
					id: '1',
				},
				{
					name: '会员管理',
					icon: 'el-icon-location',
					id: '2',
					submenu: [
						{
							name: '会员列表',
							path: 'memberList'
						},
						{
							name: '会员经验值',
							path: 'memberExperience'
						}
					]
				}
			]
		}
	},
	mounted() {
		console.log(this.$route.path);
		
	},
	components: {
		navHeader
	},
};
</script>

<style scoped lang="scss">
	.container {
		position: relative;
		padding: 20px;
		background-color: #FFF;
	}
	.app-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		.app-wrapper-aside {
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1111;
		}
	}
</style>