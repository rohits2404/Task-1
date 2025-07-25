import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
    
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
            <div className="text-center max-w-2xl">
                {/* Animated 404 number */}
                <div className="relative mb-8">
                    <span className="text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 opacity-20 select-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-9xl font-extrabold text-white tracking-tighter">
                            4<span className="text-red-400 animate-pulse">0</span>4
                        </h1>
                    </div>
                </div>

                {/* Main message */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Lost in the <span className="text-blue-300">Digital Void</span>
                </h2>
                
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    The page at <code className="bg-gray-700/50 px-2 py-1 rounded text-red-300">{location.pathname}</code> doesn't exist in our universe.
                </p>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href="/" 
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        ← Return to Home
                    </a>
                    <button 
                        onClick={() => window.history.back()} 
                        className="px-8 py-3 border-2 border-gray-600 rounded-lg text-gray-300 font-medium hover:bg-gray-700/50 hover:text-white transition-all duration-300"
                    >
                        Go Back
                    </button>
                </div>

                {/* Decorative elements */}
                <div className="mt-16 opacity-30">
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-500 text-sm">
                        Error logged: {new Date().toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;