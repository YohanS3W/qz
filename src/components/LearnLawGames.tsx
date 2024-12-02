import React, { useState } from 'react';
import { Brain, BookOpen, GamepadIcon } from 'lucide-react';

interface GameProgress {
  points: number;
  rank: number;
  level: number;
  progress: number;
}

interface Game {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: GameProgress;
}

const games: Game[] = [
  {
    id: 'quiz',
    title: 'Legal Quiz',
    description: 'Test your knowledge with timed multiple-choice questions. Score points and compete with others!',
    icon: <Brain className="w-6 h-6" />,
    progress: {
      points: 2450,
      rank: 42,
      level: 5,
      progress: 65
    }
  },
  {
    id: 'flashcards',
    title: 'Legal Flashcards',
    description: 'Master legal concepts with categorized flashcards. Practice by field or try the mixed challenge!',
    icon: <BookOpen className="w-6 h-6" />,
    progress: {
      points: 1850,
      rank: 78,
      level: 4,
      progress: 30
    }
  },
  {
    id: 'memory',
    title: 'Legal Memory',
    description: 'Match legal terms with their definitions in this engaging memory game.',
    icon: <GamepadIcon className="w-6 h-6" />,
    progress: {
      points: 3200,
      rank: 15,
      level: 7,
      progress: 90
    }
  }
];

const LearnLawGames = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const selectedGameProgress = selectedGame 
    ? games.find(game => game.id === selectedGame)?.progress
    : null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {games.map((game) => (
          <button
            key={game.id}
            onClick={() => setSelectedGame(game.id)}
            className={`p-6 rounded-lg transition-all ${
              selectedGame === game.id
                ? 'bg-[#7A0000] text-white'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className={`${
                selectedGame === game.id ? 'text-white' : 'text-[#7A0000]'
              }`}>
                {game.icon}
              </div>
              <h3 className="text-lg font-semibold">{game.title}</h3>
              <p className={`text-sm ${
                selectedGame === game.id ? 'text-white' : 'text-gray-600'
              }`}>
                {game.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedGameProgress && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-[#7A0000]">
              Your {games.find(g => g.id === selectedGame)?.title} Progress
            </h3>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Points</p>
                <p className="text-xl font-bold text-[#7A0000]">{selectedGameProgress.points}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Rank</p>
                <p className="text-xl font-bold text-[#7A0000]">#{selectedGameProgress.rank}</p>
              </div>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#7A0000] transition-all"
              style={{ width: `${selectedGameProgress.progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Level {selectedGameProgress.level} - {selectedGameProgress.progress}% to next level
          </p>
        </div>
      )}
    </div>
  );
};

export default LearnLawGames;