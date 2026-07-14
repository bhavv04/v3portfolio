import { cn } from "@/lib/utils";
import { FaReact, FaDocker } from "react-icons/fa";
import { Technology } from "@/lib/common";
import {
	SiCplusplus,
	SiGo,
	SiGooglecloud,
	SiNextdotjs,
	SiNginx,
	SiPostgresql,
	SiPrisma,
	SiRedis,
	SiSpringboot,
	SiSqlite,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiVite,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiNodedotjs,
	SiMongodb,
	SiExpress,
	SiNpm,
	SiYarn,
	SiGraphql,
	SiKubernetes,
	SiGit,
	SiOllama,
	SiLinux
} from "react-icons/si";
import { FaAws, FaFigma, FaJava, FaPython, FaRust } from "react-icons/fa6";
import { SiPytorch, SiScikitlearn, SiPandas, SiJupyter } from "react-icons/si";
import { Waypoints, Database, Flame } from "lucide-react";

interface StaticBadgeProps {
	name: string;
	icon?: React.ReactNode | null;
	className?: string;
}

export function StaticBadge({ name, icon, className }: StaticBadgeProps) {
	return (
		<div
			className={cn(
				"inline-flex items-center gap-2 rounded-full border border-white/10 bg-background px-3.5 py-1 text-sm font-medium text-foreground transition-colors",
				className
			)}
		>
			{icon}
			{name}
		</div>
	);
}

export function ReactBadge() {
	return <StaticBadge name={Technology.React} icon={<FaReact />} className="bg-[#0e2442]" />;
}
export function TypeScriptBadge() {
	return <StaticBadge name={Technology.TypeScript} icon={<SiTypescript />} className="bg-[#00375c]" />;
}
export function ViteBadge() {
	return <StaticBadge name={Technology.Vite} icon={<SiVite />} className="bg-[#2c063d]" />;
}
export function NextJSBadge() {
	return <StaticBadge name={Technology.NextJS} icon={<SiNextdotjs />} className="bg-zinc-950" />;
}
export function TailwindCSSBadge() {
	return <StaticBadge name={Technology.TailwindCSS} icon={<SiTailwindcss />} className="bg-[#162144]" />;
}
export function PostgreSQLBadge() {
	return <StaticBadge name={Technology.PostgreSQL} icon={<SiPostgresql />} className="bg-[#211b63]" />;
}
export function SQLiteBadge() {
	return <StaticBadge name={Technology.SQLite} icon={<SiSqlite />} className="bg-[#044255]" />;
}
export function PythonBadge() {
	return <StaticBadge name={Technology.Python} icon={<FaPython />} className="bg-[#7f720a]" />;
}
export function RustBadge() {
	return <StaticBadge name={Technology.Rust} icon={<FaRust />} className="bg-zinc-950" />;
}
export function CPPBadge() {
	return <StaticBadge name={Technology.CPP} icon={<SiCplusplus />} className="bg-[#004181]" />;
}
export function VercelBadge() {
	return <StaticBadge name={Technology.Vercel} icon={<SiVercel />} className="bg-zinc-950" />;
}
export function JavaScriptBadge() {
	return <StaticBadge name={Technology.Javascript} icon={<SiJavascript />} className="bg-[#f0db4f] text-black" />;
}
export function HTMLBadge() {
	return <StaticBadge name={Technology.HTML} icon={<SiHtml5 />} className="bg-[#e34f26]" />;
}
export function CSSBadge() {
	return <StaticBadge name={Technology.CSS} icon={<SiCss3 />} className="bg-[#2965f1]" />;
}
export function NodeBadge() {
	return <StaticBadge name={Technology.Node} icon={<SiNodedotjs />} className="bg-[#3c873a]" />;
}
export function MongoDBBadge() {
	return <StaticBadge name={Technology.MongoDB} icon={<SiMongodb />} className="bg-[#0aa869]" />;
}
export function ExpressBadge() {
	return <StaticBadge name={Technology.Express} icon={<SiExpress />} className="bg-[#000000]" />;
}
export function NPMBadge() {
	return <StaticBadge name={Technology.NPM} icon={<SiNpm />} className="bg-[#cb3837]" />;
}
export function YarnBadge() {
	return <StaticBadge name={Technology.Yarn} icon={<SiYarn />} className="bg-[#2c8ebb]" />;
}
export function GraphQLBadge() {
	return <StaticBadge name={Technology.GraphQL} icon={<SiGraphql />} className="bg-[#e535ab] text-white" />;
}
export function KubernetesBadge() {
	return <StaticBadge name={Technology.Kubernetes} icon={<SiKubernetes />} className="bg-[#326ce5]" />;
}
export function GitBadge() {
	return <StaticBadge name={Technology.Git} icon={<SiGit />} className="bg-[#f34f29]" />;
}
export function LinuxBadge() {
	return <StaticBadge name={Technology.Linux} icon={<SiLinux />} className="bg-[#000000] text-white" />;
}
export function FigmaBadge() {
	return <StaticBadge name={Technology.Figma} icon={<FaFigma />} className="bg-[#5e0202]" />;
}
export function JavaBadge() {
	return <StaticBadge name={Technology.Java} icon={<FaJava />} className="bg-[#4b2b03]" />;
}
export function SpringBootBadge() {
	return <StaticBadge name={Technology.SpringBoot} icon={<SiSpringboot />} className="bg-[#2b4719]" />;
}
export function AWSBadge() {
	return <StaticBadge name={Technology.AWS} icon={<FaAws />} className="bg-[#141f2e]" />;
}
export function GCPBadge() {
	return <StaticBadge name={Technology.GCP} icon={<SiGooglecloud />} className="bg-[#81271f]" />;
}
export function NginxBadge() {
	return <StaticBadge name={Technology.Nginx} icon={<SiNginx />} className="bg-[#0c5a29]" />;
}
export function GoBadge() {
	return <StaticBadge name={Technology.Go} icon={<SiGo />} className="bg-[#00303d]" />;
}
export function RedisBadge() {
	return <StaticBadge name={Technology.Redis} icon={<SiRedis />} className="bg-[#4a0a0a]" />;
}
export function DockerBadge() {
	return <StaticBadge name={Technology.Docker} icon={<FaDocker />} className="bg-[#00254d]" />;
}
export function PrismaBadge() {
	return <StaticBadge name={Technology.Prisma} icon={<SiPrisma />} className="bg-zinc-950" />;
}
export function SupabaseBadge() {
	return <StaticBadge name={Technology.Supabase} icon={<SiSupabase />} className="bg-[#0a2a1a]" />;
}

interface TechnologyBadgeProps {
	technology: Technology;
}

export function PyTorchBadge() {
	return <StaticBadge name="PyTorch" icon={<SiPytorch />} className="bg-[#5c1a00]" />;
}
export function ScikitLearnBadge() {
	return <StaticBadge name="scikit-learn" icon={<SiScikitlearn />} className="bg-[#1a3a5c]" />;
}
export function PandasBadge() {
	return <StaticBadge name="pandas" icon={<SiPandas />} className="bg-[#13005a]" />;
}
export function JupyterBadge() {
	return <StaticBadge name="Jupyter" icon={<SiJupyter />} className="bg-[#3d1a00]" />;
}
export function MatplotlibBadge() {
	return <StaticBadge name="matplotlib" icon={null} className="bg-[#0a2540]" />;
}
export function StatsmodelsBadge() {
	return <StaticBadge name="statsmodels" icon={null} className="bg-[#1a2a1a]" />;
}

export function AxumBadge() {
	return <StaticBadge name={Technology.Axum} icon={<Waypoints size={14} />} className="bg-[#1a1a2e]" />;
}
export function SQLxBadge() {
	return <StaticBadge name={Technology.SQLx} icon={<Database size={14} />} className="bg-[#0a3d2e]" />;
}
export function LanceDBBadge() {
	return <StaticBadge name={Technology.LanceDB} icon={<Database size={14} />} className="bg-[#3d2a0a]" />;
}
export function CandleBadge() {
	return <StaticBadge name={Technology.Candle} icon={<Flame size={14} />} className="bg-[#4a0a1a]" />;
}

export function OllamaBadge() {
	return <StaticBadge name={Technology.Ollama} icon={<SiOllama />} className="bg-[#0a0a0a]" />;
}

export function TechnologyBadge({ technology }: TechnologyBadgeProps) {
	switch (technology) {
		case Technology.PyTorch:
			return <PyTorchBadge />;
		case Technology.ScikitLearn:
			return <ScikitLearnBadge />;
		case Technology.Pandas:
			return <PandasBadge />;
		case Technology.Jupyter:
			return <JupyterBadge />;
		case Technology.Matplotlib:
			return <MatplotlibBadge />;
		case Technology.Statsmodels:
			return <StatsmodelsBadge />;
		case Technology.React:
			return <ReactBadge />;
		case Technology.TypeScript:
			return <TypeScriptBadge />;
		case Technology.Vite:
			return <ViteBadge />;
		case Technology.NextJS:
			return <NextJSBadge />;
		case Technology.TailwindCSS:
			return <TailwindCSSBadge />;
		case Technology.PostgreSQL:
			return <PostgreSQLBadge />;
		case Technology.SQLite:
			return <SQLiteBadge />;
		case Technology.Python:
			return <PythonBadge />;
		case Technology.Rust:
			return <RustBadge />;
		case Technology.CPP:
			return <CPPBadge />;
		case Technology.Vercel:
			return <VercelBadge />;
		case Technology.Figma:
			return <FigmaBadge />;
		case Technology.Java:
			return <JavaBadge />;
		case Technology.SpringBoot:
			return <SpringBootBadge />;
		case Technology.AWS:
			return <AWSBadge />;
		case Technology.GCP:
			return <GCPBadge />;
		case Technology.Nginx:
			return <NginxBadge />;
		case Technology.Go:
			return <GoBadge />;
		case Technology.Redis:
			return <RedisBadge />;
		case Technology.Docker:
			return <DockerBadge />;
		case Technology.Prisma:
			return <PrismaBadge />;
		case Technology.Supabase:
			return <SupabaseBadge />;
		case Technology.Javascript:
			return <JavaScriptBadge />;
		case Technology.HTML:
			return <HTMLBadge />;
		case Technology.CSS:
			return <CSSBadge />;
		case Technology.Node:
			return <NodeBadge />;
		case Technology.MongoDB:
			return <MongoDBBadge />;
		case Technology.Express:
			return <ExpressBadge />;
		case Technology.NPM:
			return <NPMBadge />;
		case Technology.Yarn:
			return <YarnBadge />;
		case Technology.GraphQL:
			return <GraphQLBadge />;
		case Technology.Kubernetes:
			return <KubernetesBadge />;
		case Technology.Git:
			return <GitBadge />;
		case Technology.Linux:
			return <LinuxBadge />;
		case Technology.Axum:
			return <AxumBadge />;
		case Technology.SQLx:
			return <SQLxBadge />;
		case Technology.LanceDB:
			return <LanceDBBadge />;
		case Technology.Candle:
			return <CandleBadge />;
		case Technology.Ollama:
			return <OllamaBadge />;
		default:
			return null;
	}
}
