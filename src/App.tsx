import BrainDump from './BrainDump'
import DailySchedule from './DailySchedule'
import Header from './Header'
import Notes from './Notes'
import TodoList from './TodoList'
import TopPriorities from './TopPriorities'

export default function App() {
  return (
    <div className='grid min-h-screen place-items-center bg-gray-300 p-6 print:p-0'>
      <div className='flex h-[8.26in] w-[5.82in] flex-col items-stretch justify-stretch gap-2 bg-white p-4'>
        <Header />
        <main className='grid flex-1 grid-cols-3 grid-rows-[auto_1fr_auto] gap-2'>
          <TopPriorities />
          <DailySchedule />
          <BrainDump />
          <TodoList />
          <Notes />
        </main>
      </div>
    </div>
  )
}
