import { Triangle, Circle, Square, Play, Plus } from "lucide-react"

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4">
      <div className="absolute top-5 left-5 text-white text-4xl font-bold flex items-center">
        <Triangle className="w-8 h-8 mr-2 text-yellow-300" />
        <Circle className="w-8 h-8 mr-2 text-red-400" />
        <Square className="w-8 h-8 mr-2 text-green-400" />
        QuizMaster
      </div>
      
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">Ready to Play?</h1>
        
        <div className="space-y-4">
          <button className="w-full h-16 text-xl bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center transition duration-300">
            <Play className="w-6 h-6 mr-2" />
            Join Game
          </button>
          
          <button className="w-full h-16 text-xl bg-purple-500 hover:bg-purple-600 text-white rounded-lg flex items-center justify-center transition duration-300">
            <Plus className="w-6 h-6 mr-2" />
            Create Game
          </button>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Enter game PIN" 
              className="w-full h-16 text-xl pl-4 pr-12 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
            />
            <button className="absolute right-2 top-2 h-12 w-12 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center transition duration-300">
              <Play className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-white text-center">
        <p className="text-2xl font-semibold mb-2">Learn, Play, Compete!</p>
        <p>Join millions of players and create your own quizzes.</p>
      </div>
      
      {/* Decorative elements */}
      <Triangle className="absolute top-20 right-20 w-16 h-16 text-yellow-300 animate-bounce" />
      <Circle className="absolute bottom-20 left-20 w-16 h-16 text-red-400 animate-pulse" />
      <Square className="absolute bottom-40 right-40 w-16 h-16 text-green-400 animate-spin" />
    </div>
  )
}