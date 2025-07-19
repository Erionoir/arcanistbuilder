export function Header() {
  return (
    <header className="bg-bg-secondary border-b border-border-primary">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-text-primary">
            Reverse: 1999
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-400">
            Team Builder
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Select 1 to 2 Arcanists, then click "Generate"
          </p>
        </div>
      </div>
    </header>
  )
}