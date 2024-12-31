import  { useState } from 'react';
import Navbar from './Components/Navbar';

const dateArray = ['24-Apr-2024', '02-May-2024', '09-May-2024', '31-May-2024', '21-Jun-2024'];
const strategyArray = [
  {
    View: 'Bullish',
    Value: {
      '24-Apr-2024': ['Bull Call Spread', 'Bull Put Spread', 'Bull Put Spread', 'Long Call', 'Bull Put Spread', 'Bull Call Spread', 'Strategy1', 'Bull Call Spread', 'Strategy1', 'Strategy1', 'SpreadStrategy', 'Bull Call Spread'],
      '02-May-2024': ['Bull Call Spread', 'Bull Call Spread', 'Bull Put Spread', 'Long Call', 'Long Call', 'Long Call', 'Bull Put Spread', 'Bull Call Spread', 'Strategy1', 'Bull Call Spread', 'Strategy2', 'Strategy1', 'Strategy2', 'Bull Call Spread'],
      '09-May-2024': ['Strategy Put', 'Strategy Call', 'Strategy Call', 'Strategy Call', 'Strategy Put'],
    },
  },
  {
    View: 'Bearish',
    Value: {
      '24-Apr-2024': ['Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread', 'Long Put', 'Long Put', 'Long Put', 'Bear Call Spread'],
      '31-May-2024': ['Long Put', 'Long Put', 'Long Put', 'Long Put', 'Long Put'],
      '21-Jun-2024': ['Strategy3', 'Strategy3', 'Bear Put Spread', 'Strategy3', 'Long Put', 'Long Put'],
    },
  },
  {
    View: 'RangeBound',
    Value: {
      '24-Apr-2024': ['Short Straddle', 'Short Strangle', 'Short Strangle', 'Iron Butterfly', 'Short Strangle', 'Short Straddle', 'Strategy1', 'Short Straddle', 'Strategy1', 'Strategy1', 'SpreadStrategy', 'Short Straddle'],
      '02-May-2024': ['Short Straddle', 'Short Straddle', 'Short Strangle', 'Iron Butterfly', 'Iron Butterfly', 'Iron Butterfly', 'Short Strangle', 'Short Straddle', 'Strategy1', 'Short Straddle', 'Strategy2', 'Strategy1', 'Strategy2', 'Short Straddle'],
      '21-Jun-2024': ['Iron Condor', 'Iron Butterfly', 'Iron Butterfly', 'Iron Butterfly', 'Iron Condor'],
    },
  },
  {
    View: 'Volatile',
    Value: {
      '02-May-2024': ['Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Strangle', 'Long Straddle', 'Strategy1', 'Long Straddle', 'Strategy1', 'Strategy1', 'Spread-Strategy', 'Long Straddle'],
      '09-May-2024': ['Long Straddle', 'Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Straddle', 'Strategy1', 'Long Straddle', 'Strategy2', 'Strategy1', 'Strategy2', 'Long Straddle'],
      '31-May-2024': ['Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Strangle', 'Long Straddle'],
    },
  },
];

const App = () => {
  const [selectedView, setSelectedView] = useState('Bullish');
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const handleToggleClick = (view) => {
    setSelectedView(view);
    setSelectedDate(dateArray[0]);
  };

  const strategies = strategyArray.find((strategy) => strategy.View === selectedView)?.Value[selectedDate] || [];
  const strategyCount = strategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});

  return (
    
    
    <div className="p-6 font-sans bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <Navbar/>
      {/* Toggle Buttons */}
      <div className="flex flex-wrap justify-center mt-20 gap-4 mb-8">
  {['Bullish', 'Bearish', 'RangeBound', 'Volatile'].map((view) => (
    <button
      key={view}
      onClick={() => handleToggleClick(view)}
      className={`px-6 py-3 rounded-full font-bold shadow-md transform transition-all duration-300 
        ${selectedView === view ? 'bg-blue-600 text-white scale-105' : 'bg-white text-gray-800 hover:bg-gray-200'}
        w-full sm:w-32 md:w-40 lg:w-48`} // Buttons resize based on screen size
    >
      {view}
    </button>
  ))}
</div>



      {/* Date Dropdown */}
      <div className="mb-6 flex justify-center">
        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-3/4 md:w-1/2 p-3 border font-bold border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {dateArray.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      {/* Strategy Cards */}
      <div className="flex flex-col items-center gap-6 px-4">
  {strategies.length > 0 ? (
    Object.entries(strategyCount).map(([strategyName, count]) => (
      <div
        key={strategyName}
        className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 w-full max-w-md"
      >
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-blue-700">{strategyName}</div>
          <div className="text-sm text-gray-500">
            {count} {count === 1 ? 'Strategy' : 'Strategies'}
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="text-center text-gray-500 col-span-full">No strategies available for {selectedDate}</div>
  )}
</div>

    </div>
  );
};

export default App;
