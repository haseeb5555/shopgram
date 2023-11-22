export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Server Actions",
      href: "/server-actions",
    },
    {
      label: "Partial pre rendering",
      href: "/partial-pre-rendering",
    },
    {
      label: "React Query",
      href: "/react-query",
    },
    {
      label: "Signals",
      href: "/signals",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Server Actions",
      href: "/server-actions",
    },
    {
      label: "Partial pre rendering",
      href: "/partial-pre-rendering",
    },
    {
      label: "React Query",
      href: "/react-query",
    },
    {
      label: "Signals",
      href: "/signals",
    }
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};







export const profileTabs = [
  { value: "All Posts", label: "All Posts", icon: "/assets/reply.svg" },

  { value: "Store", label: "Store", icon: "/assets/tag.svg" },
];

export const sidebarLinks = [
    {
      imgURL: "/assets/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/assets/search.svg",
      route: "/search",
      label: "Search",
    },
    {
      imgURL: "/assets/heart.svg",
      route: "/activity",
      label: "Activity",
    },
    {
      imgURL: "/assets/create.svg",
      route: "/create",
      label: "Create Thread",
    },

    {
      imgURL: "/assets/user.svg",
      route: "/profile",
      label: "Profile",
    },
  ];
  