<template>
  <div class="header_container">

		<el-breadcrumb separator="/">
			<el-breadcrumb-item v-for="(item,index) in leveList" :key="item.path">
				<span v-if="item.redirect==='noRedirect'||index==leveList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        		<a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
			</el-breadcrumb-item>
		</el-breadcrumb>
		<el-dropdown @command="handleCommand" menu-align='start'>
			<div class="rightavatorBox">
				<span>Hi, Admin</span>
				<img src="@/assets/image/avatar.jpg" class="avator">
			</div>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="home">首页</el-dropdown-item>
				<el-dropdown-item command="signout">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
    </div>
</template>

<script>
export default {
	data() {
		return {
			leveList: null
		}
	},
	mounted() {
		console.log(this.$route.meta);
		
	},
	watch: {
		$route() {
			this.getBreadcrumb();
		}
	},
    methods: {
		getBreadcrumb() {
			let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
			this.leveList = matched.filter(item => item.meta && item.meta.title)
			console.log(this.leveList)
		},
        handleCommand(command) {
           if (command == 'home') {
				this.$router.push('/home');
            }else if(command == 'signout'){
                this.$message({
                    type: 'success',
                    message: '退出成功'
                });
                this.$router.push('/');
            }
		},
		handleLink(item) {
			const {redirect, path} = item;
			if(redirect) {
				this.$router.push(redirect);
				return;
			}
		}
    }
}
</script>

<style scoped lang="scss">
.header_container{
		background-color: #EFF2F7;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}
	
	.rightavatorBox {
		display: flex;
		align-items: center;
		.rightName {

		}
		.avator{
			width: 36px;
			height: 36px;
			border-radius: 50%;
			margin-right: 20px;
			margin-left: 20px;;
		}
	}
</style>