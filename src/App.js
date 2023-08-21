import Hero from "./components/Homepage/Hero";
import ImageCard from "./components/Homepage/ImageCard";
import MainLayout from "./components/Layouts/MainLayouts";



function App() {
  return (
    <MainLayout>
    <div className="">
      <Hero />
      <ImageCard />
    </div>
    </MainLayout>
  );
}

export default App;
