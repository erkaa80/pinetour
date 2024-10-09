import {
  Destination,
  Footer,
  Header,
  Hero,
  Pricing,
  Ready,
} from "./components";

export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Hero />
      <Destination />
      <Pricing />
      <Ready />
      <Footer />
    </div>
  );
};
