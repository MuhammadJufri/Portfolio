import { Navbar, Home, Projects, About, Resume, Contact } from '../components/'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="container mt-24">
        <Home />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </main>
    </>
  )
}
