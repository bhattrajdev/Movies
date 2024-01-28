import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
import { PiFlagBannerFill } from "react-icons/pi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "movies",
    label: "Movies",
    path: "/movies",
    icon: <HiOutlineCube />,
  },
  {
    key: "banner",
    label: "Banner",
    path: "/banner",
    icon: <PiFlagBannerFill />,
  },
  {
    key: "users",
    label: "Users",
    path: "/user",
    icon: <HiOutlineShoppingCart />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
