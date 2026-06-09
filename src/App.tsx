import { useState } from 'react';
import ConfigurationScreen from './components/ConfigurationScreen';
import InterviewChatScreen from './components/InterviewChatScreen';
import FeedbackScreen from './components/FeedbackScreen';
import { JobArea, JobLevel } from './data/interviewData';

type Screen = 'configuration' | 'interview' | 'feedback';

interface FeedbackData {
  overallScore: number;
  strengths: string[];
  improvements: string[];
  summary: string;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('configuration');
  const [jobArea, setJobArea] = useState<JobArea | null>(null);
  const [jobLevel, setJobLevel] = useState<JobLevel | null>(null);
  const [feedback, setFeedback] = useState<FeedbackData | null>(null);
  const [sessionKey, setSessionKey] = useState(0); // Key to force re-mount

  const handleStartInterview = (area: JobArea, level: JobLevel) => {
    setJobArea(area);
    setJobLevel(level);
    setSessionKey(prev => prev + 1); // Increment to force new component instance
    setCurrentScreen('interview');
  };

  const handleFinishInterview = (feedbackData: FeedbackData) => {
    setFeedback(feedbackData);
    setCurrentScreen('feedback');
  };

  const handleRestart = () => {
    setJobArea(null);
    setJobLevel(null);
    setFeedback(null);
    setSessionKey(prev => prev + 1); // New session on restart
    setCurrentScreen('configuration');
  };

  const handleCancelInterview = () => {
    handleRestart();
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {currentScreen === 'configuration' && (
        <ConfigurationScreen onStartInterview={handleStartInterview} />
      )}

      {currentScreen === 'interview' && jobArea && jobLevel && (
        <InterviewChatScreen
          key={sessionKey}
          jobArea={jobArea}
          jobLevel={jobLevel}
          onFinish={handleFinishInterview}
          onCancel={handleCancelInterview}
        />
      )}

      {currentScreen === 'feedback' && feedback && (
        <FeedbackScreen feedback={feedback} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
