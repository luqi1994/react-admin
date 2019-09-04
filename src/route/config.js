export default {
	menus: [
		{ key: '/admin', title: '首页', icon: 'user', component: 'Home' },
		{ key: '/admin/form', title: '表单', icon: 'form', component: 'FormDemo' },
		{ key: '/admin/picture', title: '图片', icon: 'picture', component: 'IconDemo' },
		{ key: '/admin/more', title: '更多', icon: 'ellipsis', sub: [
				{ key: '/more/o1', title: 'o1', icon: 'icon', component: 'Icon' },
				{ key: '/more/o2', title: 'o2', icon: 'icon', component: 'Icon' },
				{ key: '/more/o3', title: 'o3', icon: 'icon', component: 'Icon' },
				{ key: '/more/o4', title: 'o4', icon: 'icon', component: 'Icon' },
			]
		}
	]
}