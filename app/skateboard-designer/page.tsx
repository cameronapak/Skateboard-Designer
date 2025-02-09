import SkateboardDesigner from './skateboard-designer'

export default function SkateboardDesignerPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Skateboard Deck Designer</h1>
      <section className="p-6">
        <SkateboardDesigner />
      </section>
    </div>
  )
}

