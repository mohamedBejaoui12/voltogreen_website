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
					<a
						href="tel:+21655062167"
						className="hidden xl:flex items-center gap-1.5 text-sm font-bold text-volto-primary hover:text-volto-secondary transition-colors bg-volto-primary/10 px-4 py-1.5 rounded-full"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
						+216 55 062 167
					</a>
					<Link
						href="/#contact"
						className={cn(
							buttonVariants({ variant: 'default', size: 'sm' }),
							'hidden lg:flex rounded-full bg-volto-primary text-white hover:bg-volto-secondary font-semibold'
						)}
					>
						Devis Gratuit
					</Link>
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
							<SheetFooter className="px-4 pb-6 border-t border-gray-100 pt-4">
								<a href="tel:+21655062167" className="flex items-center justify-center gap-2 w-full rounded-full bg-volto-primary/10 py-3 text-sm font-bold text-volto-primary">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
									+216 55 062 167
								</a>
								<Link href="/#contact" onClick={() => setOpen(false)} className="flex items-center justify-center w-full rounded-full bg-volto-primary py-3 text-sm font-bold text-white mt-2">
									Demander un Devis Gratuit
								</Link>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
