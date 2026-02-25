import Button from "@/components/core/Button";

export default function Home() {
  return (
    <main className="container">
      <h1>MoodMap</h1>
      <p>Il tuo specchio emotivo.</p>

      <div style={{ marginTop: 24 }}>
        <Button>Inizia</Button>
      </div>
    </main>
  );
}