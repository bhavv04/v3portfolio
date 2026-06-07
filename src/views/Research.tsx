"use client";

import { caseStudies } from "@/lib/research/data";
import { CaseStudyCard } from "@/components/research/CaseStudyCard";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { Card, CardContent } from "@/components/ui/Card";
import { PiMagnifyingGlass } from "react-icons/pi";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ResearchView() {
	return (
		<section id="research" className="mx-auto">
			<SectionTitle
				text={
					<span className="flex items-center gap-2 text-3xl">
						<PiMagnifyingGlass />
						<span>Case Studies</span>
					</span>
				}
			/>

			<Card>
				<CardContent className="flex flex-col gap-6 p-6">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
						{caseStudies.map((study) => (
							<CaseStudyCard key={study.id} study={study} />
						))}
					</div>

					<div className="flex justify-end pt-2">
						<Link href="/research" className="text-md inline-flex items-center gap-2 text-white/40 transition-colors hover:text-white/80">
							View More
							<ArrowRight size={16} />
						</Link>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
