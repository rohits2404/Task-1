import Calculator from "../components/Calculator";

const Index = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                <div className="text-center mb-12 space-y-6">
                    <div className="inline-block p-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg shadow-purple-500/20">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                            SCIENTIFIC<span className="text-yellow-300">++</span>
                        </h1>
                    </div>
                    
                    <div className="relative">
                        <p className="text-xl text-gray-300 font-light italic relative z-10">
                            Precision meets elegance
                        </p>
                        <div className="absolute -bottom-1 left-1/4 h-1 w-1/2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70 rounded-full"></div>
                    </div>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-black/50">
                    <div className="p-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30">
                        <div className="flex space-x-2 p-3">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                    </div>
                    
                    <Calculator />
                    
                    <div className="p-6 pt-4 text-center">
                        <p className="text-gray-500 text-sm font-mono">
                            v2.4.1 | Ready for complex equations
                        </p>
                    </div>
                </div>
                
                <div className="mt-8 text-center">
                    <button className="px-6 py-2 rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide shadow-md">
                        Explore Advanced Features
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;