import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import {
  SiJavascript,
  SiPostman,
  SiK6,
  SiGit,
  SiClickup
} from '@icons-pack/react-simple-icons';
import type { TechItem, TechLayer } from '../../types/portfolio';
import { projectsData } from '../../data/portfolioData';
import { PROJECT_CATEGORY_LABELS } from '../../data/projectCategories';

const iconMap: Record<string, React.FC<{ size?: number; color?: string; className?: string }>> = {
  javascript: SiJavascript,
  postman: SiPostman,
  k6: SiK6,
  git: SiGit,
  clickup: SiClickup
};

interface PipelineInspectorProps {
  selectedTech: TechItem | null;
  selectedLayer: TechLayer;
  onClearTechSelection: () => void;
  onSelectProject: (projectId: string) => void;
}

const layerDetailsMap: Record<
  TechLayer,
  {
    title: string;
    subtitle: string;
    description: string;
    guarantees: string[];
    role: string;
  }
> = {
  client: {
    title: 'Test Automation',
    subtitle: 'Playwright & Scripting',
    description:
      'Building and maintaining end-to-end test suites with Playwright, using the Page Object Model to keep locators, page services, and specs cleanly separated.',
    guarantees: [
      'Page Object Model structure',
      'Cross-browser E2E coverage',
      'Reusable locators & services'
    ],
    role: 'Test Automation'
  },
  backend: {
    title: 'API & Performance Testing',
    subtitle: 'API & Load',
    description:
      'Validating REST API contracts with Postman collections and load-testing critical endpoints with k6 to catch regressions before release.',
    guarantees: [
      'Endpoint & contract validation',
      'Load & performance benchmarks',
      'Multi-environment test runs'
    ],
    role: 'API & Performance'
  },
  database: {
    title: 'SQL Testing',
    subtitle: 'Coming Soon',
    description:
      'Database query validation and data integrity testing. Currently being learned and not yet part of the active QA stack.',
    guarantees: [
      'Query-based data validation',
      'Backend state verification',
      'Data integrity checks'
    ],
    role: 'SQL Testing (Coming Soon)'
  },
  devops: {
    title: 'Workflow & Tools',
    subtitle: 'Process & Tracking',
    description:
      'Managing test suite versioning with Git and tracking sprint work, bug reports, and release readiness in ClickUp.',
    guarantees: [
      'Version-controlled test suites',
      'Sprint & bug tracking',
      'Release readiness checks'
    ],
    role: 'Workflow & Tools'
  }
};

export const PipelineInspector: React.FC<PipelineInspectorProps> = ({
  selectedTech,
  selectedLayer,
  onClearTechSelection,
  onSelectProject
}) => {
  const layerInfo = layerDetailsMap[selectedLayer];

  // specific technology inspection view
  if (selectedTech) {
    const Icon = iconMap[selectedTech.iconKey];
    const relatedProjects = projectsData.filter((p) =>
      selectedTech.projectLinks?.includes(p.id)
    );

    return (
      <motion.div
        id="pipeline-inspector"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="p-7 sm:p-9 rounded-[32px] bg-[#fffdf5] border-2 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] space-y-6 select-none"
      >
        {/* inspector header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-[#0f172a]/10">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl border-2 border-[#0f172a] flex items-center justify-center shadow-[3px_3px_0px_#0f172a] bg-[#fff9d4]"
              style={{ color: selectedTech.color }}
            >
              {Icon ? (
                <Icon size={30} color={selectedTech.color} />
              ) : (
                <Code2 className="w-7 h-7 text-[#0f172a]" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight">
                  {selectedTech.name}
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-[#fde047] text-[#0f172a] border border-[#0f172a]">
                  {selectedTech.roleTag || selectedTech.category}
                </span>
              </div>

              <div className="text-xs font-mono text-[#0284c7] font-bold mt-0.5">
                Category: {layerInfo.title}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClearTechSelection}
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-[#faeed1] hover:bg-[#fde047] text-xs font-mono font-bold text-[#0f172a] border border-[#0f172a] transition-colors cursor-pointer"
          >
            &larr; View Category Details
          </button>
        </div>

        {/* usage context */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#64748b]">
            Usage
          </div>
          <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed bg-[#fff9d4]/60 p-4 rounded-2xl border border-[#0f172a]/20">
            {selectedTech.usageContext}
          </p>
        </div>

        {/* connected portfolio projects */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0369a1]">
              Used In Projects
            </span>
            <span className="text-[11px] font-mono text-[#64748b]">
              {relatedProjects.length} Related Projects
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj.id)}
                className="p-4 rounded-2xl bg-[#fff9d4] hover:bg-[#fde047] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_#0f172a] transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#64748b] uppercase pb-1">
                    <span>{PROJECT_CATEGORY_LABELS[proj.category].system}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0f172a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <h4 className="text-sm font-black text-[#0f172a] tracking-tight group-hover:text-[#0284c7] transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-[#334155] line-clamp-2 mt-1 font-medium leading-tight">
                    {proj.summary}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#0f172a]/15 text-[11px] font-mono font-bold text-[#0284c7]">
                  {proj.role.split('(')[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // default layer view
  return (
    <motion.div
      id="pipeline-inspector"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="p-7 sm:p-9 rounded-[32px] bg-[#fffdf5] border-2 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] space-y-6 select-none"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-2 border-[#0f172a]/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-xl bg-[#0284c7] text-white text-xs font-mono font-black border border-[#0f172a]">
              CATEGORY DETAIL
            </span>
            <span className="text-xs font-mono font-bold text-[#64748b] uppercase">
              {layerInfo.role}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight mt-1.5">
            {layerInfo.title}
          </h3>
        </div>

        <div className="px-3.5 py-1.5 rounded-xl bg-[#fff9d4] border border-[#0f172a] text-xs font-mono font-bold text-[#0f172a] self-start sm:self-auto">
          {layerInfo.subtitle}
        </div>
      </div>

      <p className="text-sm sm:text-base text-[#334155] font-medium leading-relaxed">
        {layerInfo.description}
      </p>

      {/* engineering focus */}
      <div className="space-y-2.5 pt-1">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0369a1]">
          Key Focus
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {layerInfo.guarantees.map((guarantee, idx) => (
            <div
              key={idx}
              className="p-3 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] flex items-center gap-2.5 text-xs font-mono font-bold text-[#0f172a]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
              <span>{guarantee}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
