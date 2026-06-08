'use client';

import React from 'react';
import { Zap, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: 'Accueil',
			id: 'hero',
		},
		{
			label: 'Services',
			id: 'services',
		},
		{
			label: 'Projets',
			id: 'projects',
		},
		{
			label: 'Témoignages',
			id: 'maintenance',
		},
		{
			label: 'Contact',
			id: 'contact',
		},
	];

	return (
		<header
			className={cn(
				'fixed top-5 left-1/2 -translate-x-1/2 z-50',
				'mx-auto w-11/12 max-w-6xl rounded-full border border-volto-primary/20 shadow-lg',
				'bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur-lg',
			)}
		>
			<nav className="mx-auto flex items-center justify-between p-2">
				{/* Logo */}
				<Link href="/" className="flex cursor-pointer items-center gap-2 rounded-full px-3 py-1.5 hover:bg-gray-100 transition-colors duration-100">
					<Image
						src="/voltogreenlogo.jpg"
						alt="Voltogreen Logo"
						width={32}
						height={32}
						className="rounded-lg"
					/>
					<p className="font-bold text-sm hidden sm:block text-gray-900">Voltogreen</p>
				</Link>

				{/* Desktop Links */}
				<div className="hidden items-center gap-6 lg:flex">
					{links.map((link) => (
						<Link
							key={link.id}
							href={`/#${link.id}`}
							className="relative text-gray-700 text-sm font-medium transition-colors duration-300 hover:text-volto-primary group"
						>
							{link.label}
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-volto-primary to-volto-secondary rounded-full group-hover:w-full transition-all duration-300" />
						</Link>
					))}
				</div>

				{/* Right Section */}
				<div className="flex items-center gap-2">
					<Sheet open={open} onOpenChange={setOpen}>
						<Button
							size="icon"
							variant="outline"
							onClick={() => setOpen(!open)}
							className="lg:hidden border-volto-primary/20 hover:bg-volto-primary/10"
						>
							<MenuIcon className="size-4 text-volto-primary" />
						</Button>
						<SheetContent
							className="bg-white/95 supports-[backdrop-filter]:bg-white/80 gap-0 backdrop-blur-lg"
							showClose={true}
							side="left"
						>
							<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
								{links.map((link) => (
									<Link
										key={link.id}
										href={`/#${link.id}`}
										onClick={() => setOpen(false)}
										className="relative text-left text-gray-700 px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-volto-primary group"
									>
										{link.label}
										<span className="absolute bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-volto-primary to-volto-secondary rounded-full group-hover:w-[calc(100%-2rem)] transition-all duration-300" />
									</Link>
								))}
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
