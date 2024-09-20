import SearchBar from './components/SearchBar'; // Importing the SearchBar component

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>GitHub User Search Application</h1>
      </header>
      <main>
        {/* Integrating the SearchBar component */}
        <SearchBar />
        <p>Welcome to the GitHub User Search Application!</p>
      </main>
    </div>
  );
};

export default App;
