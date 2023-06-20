
import ImageBackground from "./shared/ImageBackground";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App w-screen h-screen overflow-y-auto overflow-x-hidden bg-black bg-opacity-75 text-white">
      <ImageBackground>
        <Nav />
      </ImageBackground>
    </div>
  );
}

export default App;
