import { useState } from 'react';
import { Code, Headphones, Briefcase, Users, ChevronRight, Sparkles } from 'lucide-react';
import { JobArea, JobLevel, jobAreas, jobLevels } from '../data/interviewData';

interface ConfigurationScreenProps {
  onStartInterview: (jobArea: JobArea, jobLevel: JobLevel) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  headphones: Headphones,
  briefcase: Briefcase,
  users: Users,
};

export default function ConfigurationScreen({ onStartInterview }: ConfigurationScreenProps) {
  const [selectedArea, setSelectedArea] = useState<JobArea | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<JobLevel | null>(null);

  const handleStart = () => {
    if (selectedArea && selectedLevel) {
      onStartInterview(selectedArea, selectedLevel);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 animate-fade-in">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-accent-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Simulador de Entrevista
            </h1>
          </div>
          <p className="text-dark-300 text-lg">
            Pratique suas habilidades de entrevista com nossa IA recrutadora
          </p>
        </div>

        {/* Job Area Selection */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-dark-100 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500 text-sm font-bold">
              1
            </span>
            Escolha a area da vaga
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {jobAreas.map((area) => {
              const IconComponent = iconMap[area.icon];
              const isSelected = selectedArea === area.id;

              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area.id)}
                  className={`
                    p-4 rounded-xl border-2 transition-all duration-300 text-left
                    ${isSelected
                      ? 'border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/10'
                      : 'border-dark-600 bg-dark-800 hover:border-dark-400 hover:bg-dark-700'
                    }
                  `}
                >
                  <div className="flex items-start gap-3">
                    <div className={`
                      p-3 rounded-lg transition-colors
                      ${isSelected ? 'bg-accent-500/20' : 'bg-dark-700'}
                    `}>
                      <IconComponent className={`w-6 h-6 ${isSelected ? 'text-accent-500' : 'text-dark-300'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-1 ${isSelected ? 'text-white' : 'text-dark-100'}`}>
                        {area.title}
                      </h3>
                      <p className="text-sm text-dark-400">{area.description}</p>
                    </div>
                    {isSelected && (
                      <ChevronRight className="w-5 h-5 text-accent-500 animate-pulse" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Level Selection */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-dark-100 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500 text-sm font-bold">
              2
            </span>
            Selecione o nivel
          </h2>

          <div className="flex flex-col md:flex-row gap-3">
            {jobLevels.map((level) => {
              const isSelected = selectedLevel === level.id;

              return (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  disabled={!selectedArea}
                  className={`
                    flex-1 p-4 rounded-xl border-2 transition-all duration-300 text-left
                    ${!selectedArea ? 'opacity-50 cursor-not-allowed' : ''}
                    ${isSelected
                      ? 'border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/10'
                      : 'border-dark-600 bg-dark-800 hover:border-dark-400 hover:bg-dark-700'
                    }
                  `}
                >
                  <h3 className={`font-semibold mb-1 ${isSelected ? 'text-white' : 'text-dark-100'}`}>
                    {level.title}
                  </h3>
                  <p className="text-sm text-dark-400">{level.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Start Button */}
        <div className="flex justify-center">
          <button
            onClick={handleStart}
            disabled={!selectedArea || !selectedLevel}
            className={`
              group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300
              flex items-center gap-3
              ${selectedArea && selectedLevel
                ? 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30'
                : 'bg-dark-700 text-dark-400 cursor-not-allowed'
              }
            `}
          >
            <Sparkles className="w-5 h-5" />
            Iniciar Entrevista
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
