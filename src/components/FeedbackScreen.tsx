import { CheckCircle2, XCircle, TrendingUp, Award, RefreshCw, Sparkles } from 'lucide-react';

interface FeedbackData {
  overallScore: number;
  strengths: string[];
  improvements: string[];
  summary: string;
}

interface FeedbackScreenProps {
  feedback: FeedbackData;
  onRestart: () => void;
}

const getScoreColor = (score: number): string => {
  if (score >= 85) return 'text-green-400';
  if (score >= 70) return 'text-blue-400';
  if (score >= 50) return 'text-yellow-400';
  return 'text-red-400';
};

const getScoreGradient = (score: number): string => {
  if (score >= 85) return 'from-green-400 to-emerald-500';
  if (score >= 70) return 'from-blue-400 to-cyan-500';
  if (score >= 50) return 'from-yellow-400 to-orange-500';
  return 'from-red-400 to-rose-500';
};

const getScoreMessage = (score: number): string => {
  if (score >= 85) return 'Excelente!';
  if (score >= 70) return 'Muito Bom!';
  if (score >= 50) return 'Bom!';
  return 'Precisa Melhorar';
};

export default function FeedbackScreen({ feedback, onRestart }: FeedbackScreenProps) {
  const scoreColor = getScoreColor(feedback.overallScore);
  const scoreGradient = getScoreGradient(feedback.overallScore);
  const scoreMessage = getScoreMessage(feedback.overallScore);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 animate-fade-in">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-500/20 mb-4">
            <Award className="w-8 h-8 text-accent-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Entrevista Concluida!
          </h1>
          <p className="text-dark-300">
            Confira sua analise de desempenho completa
          </p>
        </div>

        {/* Score Card */}
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8 mb-8 text-center">
          <div className="relative inline-block mb-4">
            <div className="w-40 h-40 rounded-full border-8 border-dark-700 flex items-center justify-center relative overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${scoreGradient} opacity-10`}
              />
              <div>
                <span className={`text-5xl font-bold ${scoreColor}`}>
                  {feedback.overallScore}
                </span>
                <span className="text-dark-400 text-sm ml-1">/100</span>
              </div>
            </div>
          </div>
          <h2 className={`text-2xl font-bold ${scoreColor} mb-3`}>
            {scoreMessage}
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto leading-relaxed">
            {feedback.summary}
          </p>
        </div>

        {/* Strengths and Improvements */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Strengths */}
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/10">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Pontos Fortes
              </h3>
            </div>
            <ul className="space-y-3">
              {feedback.strengths.map((strength, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-dark-200 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-green-400 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <span className="leading-relaxed">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Improvements */}
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-yellow-500/10">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Pontos a Melhorar
              </h3>
            </div>
            <ul className="space-y-3">
              {feedback.improvements.map((improvement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-dark-200 animate-slide-up"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <span className="text-yellow-400 mt-1">
                    <XCircle className="w-4 h-4" />
                  </span>
                  <span className="leading-relaxed">{improvement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-4">
            Interpretacao da Nota
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-dark-300">85-100</span>
              <span className="text-green-400 font-semibold">Excelente</span>
            </div>
            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" style={{ width: '100%' }} />
            </div>

            <div className="flex items-center justify-between text-sm mt-4">
              <span className="text-dark-300">70-84</span>
              <span className="text-blue-400 font-semibold">Muito Bom</span>
            </div>
            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" style={{ width: '84%' }} />
            </div>

            <div className="flex items-center justify-between text-sm mt-4">
              <span className="text-dark-300">50-69</span>
              <span className="text-yellow-400 font-semibold">Bom</span>
            </div>
            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: '69%' }} />
            </div>

            <div className="flex items-center justify-between text-sm mt-4">
              <span className="text-dark-300">0-49</span>
              <span className="text-red-400 font-semibold">Precisa Melhorar</span>
            </div>
            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-400 to-rose-500 rounded-full" style={{ width: '49%' }} />
            </div>
          </div>
        </div>

        {/* Restart Button */}
        <div className="flex justify-center">
          <button
            onClick={onRestart}
            className="group px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-semibold text-lg transition-all flex items-center gap-3 shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Tentar Novamente
          </button>
        </div>

        {/* Tips */}
        <div className="mt-10 bg-dark-800/50 border border-dark-700/50 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-accent-500" />
            <span className="text-dark-200 font-medium">Dica</span>
          </div>
          <p className="text-dark-400 text-sm">
            Pratique regularmente para melhorar suas habilidades de entrevista.
            Cada sessao ajuda voce a se preparar melhor para entrevistas reais!
          </p>
        </div>
      </div>
    </div>
  );
}
