import { Destination, Footer, Header, Hero } from "./components";
import { Pricing } from "./components/pricing/Pricing";

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
      <Footer />
      {/* <Pricing /> */}
      <Footer />
    </div>
  );
};
