import { Banner, Faq, Footer, GroupSavings, Hero, HowItWorks, Nav, Products, Safety } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <a className="skip" href="#top">Skip to content</a>
      <Nav />
      <main id="top">
        <Hero />
        <Banner />
        <HowItWorks />
        <GroupSavings />
        <Products />
        <Safety />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
