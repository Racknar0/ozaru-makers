import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";

export default function Layout({ children }) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
  }