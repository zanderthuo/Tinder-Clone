import './App.css';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCardss from './components/TinderCards';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCardss />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
