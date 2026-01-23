<script lang="ts">
	import { Assets } from '$lib/data';
	import type { Project } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href, ellipsify } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { ButtonLink } from '$lib/components/content';
	import { SkillBadge } from '$lib/components/features/skills';
	import {
		Avatar, AvatarFallback, AvatarImage,
		Badge, Button,
		CardHeader, CardContent, CardTitle,
		DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
		Icon, Separator,
		Tooltip, TooltipContent, TooltipTrigger,
		Muted
	} from '$lib/components/ui';
	import FancyCard from '$lib/components/ui/card/fancy-card.svelte';

	const { project }: { project: Project } = $props();

	let from = $derived(getMonthAndYear(project.period.from));
	let to = $derived(getMonthAndYear(project.period.to));
	let exactDuration = $derived(computeExactDuration(project.period.from, project.period.to));
</script>

<FancyCard
	color={project.color}
	class="flex h-full flex-col"
	href={href(`/projects/${project.slug}`)}
>
	<CardHeader class="flex w-full flex-col gap-4">
		<Avatar>
			<AvatarFallback>
				<img src={Assets.Unknown.light} alt={project.name} />
			</AvatarFallback>
			<AvatarImage src={$mode === 'dark' ? project.logo.dark : project.logo.light} />
		</Avatar>
		<div class="flex w-full flex-row items-center gap-1 overflow-x-hidden">
			<CardTitle class="h-auto min-w-0 flex-1 overflow-x-hidden">
				<Tooltip>
					<TooltipTrigger
						class="w-full overflow-y-auto overflow-x-hidden truncate text-ellipsis text-nowrap text-left"
					>
						{project.name}
					</TooltipTrigger>
					<TooltipContent>{project.name}</TooltipContent>
				</Tooltip>
			</CardTitle>
			{#if project.links.length > 2}
				<ButtonLink link={project.links[0]} />
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button size="icon" variant="outline"
							><Icon icon="i-carbon-overflow-menu-vertical" /></Button
						>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{#each project.links.slice(1) as link, i (i + '-' + link.to)}
							<a href={link.to} target={'_blank'}>
								<DropdownMenuItem>
									{link.label}
								</DropdownMenuItem>
							</a>
						{/each}
					</DropdownMenuContent>
				</DropdownMenu>
			{:else}
				{#each project.links as link, i (i + '-' + link.to)}
					<ButtonLink {link} />
				{/each}
			{/if}
		</div>
		<Separator />
	</CardHeader>
	<CardContent class="flex flex-1 flex-col gap-4">
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-assembly-cluster" />
			<Muted>{project.type}</Muted>
		</Muted>
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-time" />
			<Muted>{exactDuration}</Muted>
		</Muted>
		<Muted className="py-4 md:py-2 md:min-h-[100px] md:max-h-[100px]"
			>{ellipsify(project.shortDescription, 100)}</Muted
		>
		<div class="flex w-full flex-row items-center justify-between">
			<Badge variant="outline">{from}</Badge>
			<Badge variant="outline">{to}</Badge>
		</div>
		<Separator />
		<div class="flex flex-row flex-wrap items-center gap-2">
			{#each project.skills as skill (skill.slug)}
				<SkillBadge {skill} />
			{/each}
		</div>
	</CardContent>
</FancyCard>
