import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ModalUser from "@/components/commons/ModalUser";
import HomeFeed from "@/components/core/HomeFeed";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
		children: [
			{
				path: "/following",
				component: HomeFeed,
				name: "Following",
			},

			{
				path: "/user",
				component: ModalUser,
				name: "ModalUser",
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
