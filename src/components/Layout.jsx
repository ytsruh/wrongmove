import Nav from "./Nav"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <div className="page-layout">
      <Nav />
        <main className="container">{children}</main>
        <Footer />
    </div>
  )
}

export default Layout