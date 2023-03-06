const Layout = ({children}) => {
  return (
    <div className="max-w-[1400px] mx-auto h-[100vh] overflow-y-scroll px-10">
        {children}
    </div>
  )
}

export default Layout