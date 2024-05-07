import InstagramPreview from "./components/InstagramPreview/InstagramPreview"

function App() {
  return (
    <div>
      <img src="https://placehold.co/2400x1200/png" alt="hero" />
      {/* ig preview photos */}
      <div className="mt-2">
        <InstagramPreview />
      </div>
      {/* services */}
      <div>
        <h2>Services</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 flex justify-center w-full  ">
          <img className="rounded-full" src="https://placehold.co/400x400/png" alt="" />
          <img className="rounded-full" src="https://placehold.co/400x400/png" alt="" />
          <img className="rounded-full" src="https://placehold.co/400x400/png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
