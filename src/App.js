function App() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between bg-gray-500 text-center text-white p-4 m-4 rounded-lg">
        <h1 className="text-2xl text-red-200">Logo</h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row gap-2 md:gap-5">
            <li>HOME</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Footer</li>
            <li>Car</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
