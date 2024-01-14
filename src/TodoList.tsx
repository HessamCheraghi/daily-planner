const a = Array.from({ length: 4 }, (_, i) => i)

export default function TodoList() {
  return (
    <section className='col-span-1 row-span-1 flex flex-col gap-2 rounded border p-2'>
      <h2 className='text-sm font-bold'>Todo List</h2>
      <ol className='flex flex-1 list-inside list-decimal flex-col justify-between text-sm leading-5'>
        {a.map(b => (
          <li key={b} className=''>
            .................................................
            ......................................................
            ......................................................
            ......................................................
            ......................................................
          </li>
        ))}
      </ol>
    </section>
  )
}
