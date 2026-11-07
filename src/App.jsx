import { useState } from 'react'
import EventForm from './components/EventForm.jsx'
import EventList from './components/EventList.jsx'

function todayLocal() {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export default function App() {
  const [events, setEvents] = useState([])
  const [editingEvent, setEditingEvent] = useState(null)
  
  const today = todayLocal()
  const upcoming = events.filter((event) => event.date >= today).length
  const past = events.length - upcoming

  function addEvent(data) {
    setEvents((previous) => [
      { ...data, id: crypto.randomUUID() },
      ...previous,
    ])
  }

  function updateEvent(updatedData) {
    setEvents((previous) => 
      previous.map((event) => (event.id === updatedData.id ? updatedData : event))
    )
    setEditingEvent(null)
  }

  function deleteEvent(id) {
    // Fitur pop-up konfirmasi
    const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus acara ini?")
    if (isConfirmed) {
      setEvents((previous) => previous.filter((event) => event.id !== id))
    }
  }

  return (
    <main className="container">
      <header className="page-header">
        <span className="eyebrow">PRAKTIKUM REACT</span>
        <h1>Manajemen Event Kampus</h1>
        <p>Daftarkan dan kelola kegiatan kampus dalam satu aplikasi.</p>
      </header>

      <div className="stats">
        <div><strong>{events.length}</strong><span>Total acara</span></div>
        <div><strong>{upcoming}</strong><span>Hari ini & mendatang</span></div>
        <div><strong>{past}</strong><span>Sudah lewat</span></div>
      </div>

      {/* Pastikan nama class pembungkus ini sama dengan aslinya (misal: "columns" atau "grid-layout") */}
      <div className="columns" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <EventForm 
          onAdd={addEvent} 
          onUpdate={updateEvent} 
          editingEvent={editingEvent} 
          onCancelEdit={() => setEditingEvent(null)}
        />
        <EventList 
          events={events} 
          onDelete={deleteEvent} 
          onEdit={setEditingEvent} 
        />
      </div>
    </main>
  )
}