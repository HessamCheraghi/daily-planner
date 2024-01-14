const a = Array.from({ length: 300 }, (_, i) => i)

export default function BrainDump() {
  return (
    <section className='col-span-1 row-span-1 flex flex-col rounded border p-2 '>
      <h2 className='text-sm font-bold'>Brain Dump</h2>
      <div className='flex flex-wrap gap-2'>
        {a.map(b => (
          <div key={b} className='h-2 w-2 text-center'>
            .
          </div>
        ))}
      </div>
    </section>
  )
}
