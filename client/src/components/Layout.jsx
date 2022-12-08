import Navbar from '@/components/Navbar'

function Layout({ children, user }) {
  return (
    <>
      <Navbar user={user}/>
      {children}
    </>
  )
}

export default Layout
