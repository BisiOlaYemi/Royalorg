import Hero from "./components/Homepage/Hero";
import ImageCard from "./components/Homepage/ImageCard";
import Royal from "./components/Homepage/Royal";
import MainLayout from "./components/Layouts/MainLayouts";



function App() {
  return (
    <MainLayout>
    <div className="">
      <Hero />
      <Royal />
      <ImageCard />
    </div>
    </MainLayout>
  );
}

export default App;
