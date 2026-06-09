import { useState, useRef, useEffect, useMemo } from 'react';
import { Send, Bot, User, Loader2, ArrowLeft, XCircle, AlertTriangle } from 'lucide-react';
import { JobArea, JobLevel, getRandomQuestions, Question, jobAreas } from '../data/interviewData';

interface Message {
  id: string;
  type: 'ai' | 'user';
  content: string;
  timestamp: Date;
}

interface FeedbackData {
  overallScore: number;
  strengths: string[];
  improvements: string[];
  summary: string;
}

interface InterviewChatScreenProps {
  jobArea: JobArea;
  jobLevel: JobLevel;
  onFinish: (feedback: FeedbackData) => void;
  onCancel: () => void;
}

const INTRODUCTION_MESSAGE = "Ola! Meu nome e Ana e serei sua recrutadora hoje neste simulador. Vamos comecar? Responda com calma e sinceridade, suas respostas serao analisadas ao final.";

const generateEvaluation = (
  questionIndex: number,
  answer: string,
  totalQuestions: number
): { score: number; feedback: string } => {
  const answerLength = answer.trim().length;
  const hasSpecificExamples = /exemplo|projeto|trabalhei|fiz|faco|gerenciei|liderei/i.test(answer);
  const hasTechnicalTerms = /\b(api|sql|git|scrum|agil|metodologia|sistema|codigo|bug|deploy|teste)\b/i.test(answer);
  const hasSoftSkills = /equipe|comunicacao|feedback|lideranca|ajuda|colaboracao|respeito/i.test(answer);
  const isStructured = answer.includes('-') || answer.includes('1') || answer.includes('primeiro') || answer.includes('segundo');

  let score = 50;

  if (answerLength > 100) score += 15;
  if (answerLength > 200) score += 10;
  if (answerLength < 30) score -= 20;

  if (hasSpecificExamples) score += 15;
  if (hasTechnicalTerms) score += 10;
  if (hasSoftSkills) score += 10;
  if (isStructured) score += 10;

  score = Math.max(20, Math.min(100, score));

  const feedbacks = {
    excellent: 'Excelente resposta! Voce demonstrou clareza, conhecimento e soube exemplificar bem.',
    good: 'Boa resposta! Continue aprofundando seus pontos e usando exemplos concretos.',
    average: 'Resposta adequada. Tente ser mais especifico e incluir exemplos da sua experiencia.',
    needsImprovement: 'Sua resposta precisa de mais detalhes. Adicione exemplos praticos e seja mais especifico.',
  };

  let feedback = '';
  if (score >= 85) {
    feedback = feedbacks.excellent;
  } else if (score >= 70) {
    feedback = feedbacks.good;
  } else if (score >= 50) {
    feedback = feedbacks.average;
  } else {
    feedback = feedbacks.needsImprovement;
  }

  return { score, feedback };
};

const generateFinalFeedback = (
  answers: { question: string; answer: string; score: number }[]
): FeedbackData => {
  const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
  const overallScore = Math.round(totalScore / answers.length);

  const strengths: string[] = [];
  const improvements: string[] = [];

  const avgLength = answers.reduce((sum, a) => sum + a.answer.length, 0) / answers.length;

  if (avgLength > 150) {
    strengths.push('Boa capacidade de expressao e detalhamento nas respostas');
  }

  const hasExamples = answers.some(a =>
    /exemplo|projeto|trabalhei|fiz|faco|gerenciei|liderei/i.test(a.answer)
  );
  if (hasExamples) {
    strengths.push('Utilizou exemplos praticos e experiencias reais nas respostas');
  }

  const hasTechnical = answers.some(a =>
    /\b(api|sql|git|scrum|agil|metodologia|sistema|codigo|bug|deploy|teste)\b/i.test(a.answer)
  );
  if (hasTechnical) {
    strengths.push('Demonstrou conhecimento tecnico e familiaridade com ferramentas da area');
  }

  const hasSoftSkills = answers.some(a =>
    /equipe|comunicacao|feedback|lideranca|ajuda|colaboracao|respeito/i.test(a.answer)
  );
  if (hasSoftSkills) {
    strengths.push('Mostrou consciencia sobre habilidades interpessoais e trabalho em equipe');
  }

  if (answers.filter(a => a.score >= 70).length >= answers.length * 0.7) {
    strengths.push('Consistencia nas respostas ao longo da entrevista');
  }

  if (avgLength < 100) {
    improvements.push('Desenvolva respostas mais completas e detalhadas');
  }

  if (!hasExamples) {
    improvements.push('Inclua exemplos concretos e experiencias praticas nas respostas');
  }

  const lowScoringAnswers = answers.filter(a => a.score < 60);
  if (lowScoringAnswers.length > 1) {
    improvements.push('Aprofunde seus conhecimentos tecnicos e da area de atuacao');
  }

  const unclearAnswers = answers.filter(a => !a.answer.includes('-') && !a.answer.includes('primeiro'));
  if (unclearAnswers.length > answers.length / 2) {
    improvements.push('Organize melhor suas ideias, usando estruturas como primeiramente, alem disso, etc.');
  }

  if (improvements.length === 0) {
    improvements.push('Continue praticando para manter o bom nivel');
  }

  let summary = '';
  if (overallScore >= 85) {
    summary = 'Excelente desempenho! Voce demonstrou forte preparacao, clareza de comunicacao e dominio do conteudo. Esta bem preparado para entrevistas reais.';
  } else if (overallScore >= 70) {
    summary = 'Bom desempenho geral. Voce mostrou conhecimento e consequencia expressar suas ideias. Com alguns ajustes, pode se destacar ainda mais.';
  } else if (overallScore >= 50) {
    summary = 'Desempenho moderado. Voce tem uma base solida, mas precisa desenvolver mais suas respostas e incluir exemplos praticos para se destacar.';
  } else {
    summary = 'Ha espaco significativo para melhoria. Foque em elaborar respostas mais completas e estude mais sobre a area desejada.';
  }

  return {
    overallScore,
    strengths: strengths.length > 0 ? strengths : ['Respondeu todas as perguntas'],
    improvements,
    summary,
  };
};

export default function InterviewChatScreen({
  jobArea,
  jobLevel,
  onFinish,
  onCancel,
}: InterviewChatScreenProps) {
  // Always select exactly 5 random questions at the start
  const questions = useMemo(() => {
    return getRandomQuestions(jobArea, jobLevel, 5);
  }, [jobArea, jobLevel]);

  const totalQuestions = 5;

  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAITyping, setIsAITyping] = useState(false);
  const [answerScores, setAnswerScores] = useState<{ question: string; answer: string; score: number }[]>([]);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize interview with introduction + first question
  useEffect(() => {
    if (!interviewStarted && questions.length > 0) {
      setTimeout(() => {
        setMessages([
          {
            id: 'ai-intro',
            type: 'ai',
            content: `${INTRODUCTION_MESSAGE}\n\nPergunta 1: ${questions[0].text}`,
            timestamp: new Date(),
          },
        ]);
        setInterviewStarted(true);
      }, 500);
    }
  }, [interviewStarted, questions]);

  const handleSubmit = () => {
    if (!userAnswer.trim() || isAITyping) return;

    const answer = userAnswer.trim();
    setUserAnswer('');

    const userMessage: Message = {
      id: `user-${currentQuestionIndex}`,
      type: 'user',
      content: answer,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsAITyping(true);

    setTimeout(() => {
      const { score, feedback } = generateEvaluation(
        currentQuestionIndex,
        answer,
        totalQuestions
      );

      setAnswerScores((prev) => [
        ...prev,
        {
          question: questions[currentQuestionIndex].text,
          answer,
          score,
        },
      ]);

      // Check if this was the last question (index 4 means 5th question)
      if (currentQuestionIndex >= totalQuestions - 1) {
        const completionMessage: Message = {
          id: `ai-complete`,
          type: 'ai',
          content: 'Obrigada por completar a entrevista! Vou analisar suas respostas e gerar o feedback completo.',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, completionMessage]);

        setTimeout(() => {
          const finalFeedback = generateFinalFeedback([
            ...answerScores,
            { question: questions[currentQuestionIndex].text, answer, score },
          ]);
          onFinish(finalFeedback);
        }, 2000);
      } else {
        // Move to next question
        const nextIndex = currentQuestionIndex + 1;

        const aiMessage: Message = {
          id: `ai-${nextIndex}`,
          type: 'ai',
          content: `${feedback}\n\nPergunta ${nextIndex + 1}: ${questions[nextIndex].text}`,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, aiMessage]);
        setCurrentQuestionIndex(nextIndex);
      }

      setIsAITyping(false);
      inputRef.current?.focus();
    }, 1500);
  };

  const handleBackQuestion = () => {
    if (currentQuestionIndex === 0 || isAITyping) return;

    const previousIndex = currentQuestionIndex - 1;

    // Remove last user answer from scores
    setAnswerScores((prev) => prev.slice(0, -1));

    // Remove last two messages (user answer + AI feedback/question)
    setMessages((prev) => {
      const newMessages = prev.slice(0, -2);

      // Re-add the previous question
      const questionMessage: Message = {
        id: `ai-${previousIndex}`,
        type: 'ai',
        content: previousIndex === 0
          ? `${INTRODUCTION_MESSAGE}\n\nPergunta 1: ${questions[0].text}`
          : `Pergunta ${previousIndex + 1}: ${questions[previousIndex].text}`,
        timestamp: new Date(),
      };

      return [...newMessages, questionMessage];
    });

    // Decrement question index
    setCurrentQuestionIndex(previousIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Get the job area name for display
  const jobAreaName = jobAreas.find(a => a.id === jobArea)?.title || '';

  const canGoBack = currentQuestionIndex > 0 && !isAITyping && messages.length > 1;

  return (
    <div className="min-h-screen flex flex-col bg-dark-900 animate-fade-in">
      {/* Header with Progress */}
      <div className="bg-dark-800 border-b border-dark-700 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-accent-500" />
              </div>
              <div>
                <h2 className="font-semibold text-white">Ana - Recrutadora</h2>
                <p className="text-sm text-dark-400">
                  {jobAreaName} - Pergunta {currentQuestionIndex + 1} de {totalQuestions}
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-accent-500">{Math.round(progress)}%</span>
              <p className="text-xs text-dark-400">concluido</p>
            </div>
          </div>

          {/* Control Buttons in Header */}
          <div className="flex gap-2 mt-3">
            {/* Back Button */}
            <button
              onClick={handleBackQuestion}
              disabled={!canGoBack}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all ${
                canGoBack
                  ? 'bg-dark-700 hover:bg-dark-600 text-dark-200 border border-dark-600'
                  : 'bg-dark-800 text-dark-600 border border-dark-700 cursor-not-allowed opacity-50'
              }`}
              title="Voltar pergunta anterior"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Voltar Pergunta</span>
            </button>

            {/* Cancel Button */}
            <button
              onClick={() => setShowCancelModal(true)}
              disabled={isAITyping}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isAITyping
                  ? 'bg-dark-800 text-dark-600 border border-dark-700 cursor-not-allowed opacity-50'
                  : 'bg-dark-800/50 hover:bg-red-500/10 text-red-400 border border-dark-600 hover:border-red-500/50'
              }`}
              title="Cancelar entrevista"
            >
              <XCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Cancelar</span>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden mt-3">
            <div
              className="h-full bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question indicators */}
          <div className="flex gap-2 mt-3 justify-center">
            {[...Array(totalQuestions)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i < currentQuestionIndex
                    ? 'bg-accent-500'
                    : i === currentQuestionIndex
                    ? 'bg-accent-500/50 ring-2 ring-accent-500'
                    : 'bg-dark-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-dark-800 border border-dark-600 rounded-2xl max-w-md w-full p-6 shadow-2xl animate-scale-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Cancelar Entrevista</h3>
                <p className="text-sm text-dark-400">Tem certeza que deseja cancelar?</p>
              </div>
            </div>

            <p className="text-dark-300 mb-6">
              Se voce cancelar agora, todo o progresso da entrevista sera perdido e voce voltara para a tela inicial.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 px-4 py-3 bg-dark-700 hover:bg-dark-600 text-dark-200 rounded-xl transition-all border border-dark-600"
              >
                Continuar Entrevista
              </button>
              <button
                onClick={onCancel}
                className="flex-1 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <XCircle className="w-4 h-4" />
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-thin">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 animate-slide-up ${
                message.type === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  message.type === 'ai'
                    ? 'bg-accent-500/20'
                    : 'bg-dark-600'
                }`}
              >
                {message.type === 'ai' ? (
                  <Bot className="w-5 h-5 text-accent-500" />
                ) : (
                  <User className="w-5 h-5 text-dark-300" />
                )}
              </div>

              <div
                className={`flex-1 max-w-[80%] ${
                  message.type === 'user' && 'flex justify-end'
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    message.type === 'ai'
                      ? 'bg-dark-800 text-dark-100 border border-dark-700'
                      : 'bg-accent-500 text-white'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  <p
                    className={`text-xs mt-2 ${
                      message.type === 'ai' ? 'text-dark-500' : 'text-accent-200'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* AI Typing Indicator */}
          {isAITyping && (
            <div className="flex gap-3 animate-slide-up">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-accent-500/20">
                <Bot className="w-5 h-5 text-accent-500" />
              </div>
              <div className="px-4 py-3 rounded-2xl bg-dark-800 border border-dark-700">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-accent-500 animate-spin" />
                  <span className="text-dark-300 text-sm">Analisando resposta...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-dark-800 border-t border-dark-700 px-4 py-4 sticky bottom-0">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua resposta..."
                disabled={isAITyping || currentQuestionIndex >= totalQuestions}
                rows={3}
                className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-xl text-dark-100 placeholder-dark-500 resize-none focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent disabled:opacity-50 transition-all"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!userAnswer.trim() || isAITyping || currentQuestionIndex >= totalQuestions}
              className="px-5 py-3 bg-accent-500 hover:bg-accent-600 disabled:bg-dark-600 disabled:text-dark-500 text-white rounded-xl transition-all flex items-center justify-center disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-dark-500 mt-2 text-center">
            Pressione Enter para enviar, Shift+Enter para nova linha
          </p>
        </div>
      </div>
    </div>
  );
}
