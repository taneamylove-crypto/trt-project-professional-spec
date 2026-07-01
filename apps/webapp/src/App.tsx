import "./styles.css";

export function App() {
  return (
    <main className="dashboardShell">
      <header>
        <p className="eyebrow">TRT Creator Dashboard</p>
        <h1>Workspace shell</h1>
      </header>
      <section className="statusGrid" aria-label="Implementation status">
        <div>
          <strong>Protocol</strong>
          <span>Awaiting approved RFCs</span>
        </div>
        <div>
          <strong>Creator tools</strong>
          <span>Not implemented</span>
        </div>
        <div>
          <strong>Security review</strong>
          <span>Required before launch</span>
        </div>
      </section>
    </main>
  );
}
