import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { Footer } from "@/components/footer";
import SidebarItem from "@/components/myProgress";
import XpBar from "@/components/xpBar";
import { InviteFriend } from "@/components/inviteFriend";
import { CommunityBar } from "@/components/communityInfo";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-gray-800 font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<div className="relative flex flex-col min-h-screen">
						<Navbar />
						<main className="container mx-auto max-w-14xl pt-16 px-6 flex-grow bg-gray-800">
							<div className="flex min-h-screen">
								{/* main body */}
								<div className="flex-1">{children}</div>
								 {/* sidebar */}
								<div className="bg-gray-800 min-h-screen w-80 flex flex-col items-stretch p-4 space-y-4">
									<SidebarItem
										avatar="https://i.pravatar.cc/150?u=a042581f4e29026024d"
										username="John Doe"
										level={5}
										totalXP={1200}
										rank={"Bronze"}
										badges={5}
										streak={3}
										
									/>
									<XpBar />
									<InviteFriend />
									<CommunityBar />
								</div>
							</div>
						</main>
						{/* Footer */}
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
