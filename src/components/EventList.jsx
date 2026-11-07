// export default function EventList({ events, onDelete }) {
//   if (events.length === 0) {
//     return (
//       <section className="panel">
//         <h2>Daftar Acara</h2>
//         <p>Belum ada acara. Tambahkan melalui form di samping.</p>
//       </section>
//     )
//   }

//   return (
//     <section className="panel">
//       <h2>Daftar Acara</h2>
//       <div className="event-list">
//         {events.map((event) => (
//           <article className="event-card" key={event.id}>
//             <h3>{event.name}</h3>
//             <p>🗓️ {event.date}</p>
//             {event.location && <p>📍 {event.location}</p>}
//             {event.description && <p>{event.description}</p>}
//             <button
//               type="button"
//               className="danger"
//               onClick={() => onDelete(event.id)}
//             >
//               Hapus
//             </button>
//           </article>
//         ))}
//       </div>
//     </section>
//   )
// }

export default function EventList({ events, onDelete, onEdit }) {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', flex: '1' }}>
      <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Daftar Acara</h3>
      
      {events.length === 0 ? (
        <p style={{ color: '#666' }}>Belum ada acara yang didaftarkan.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {events.map((event) => (
            <div key={event.id} style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{event.name}</h4>
              <p style={{ margin: '5px 0', color: '#555', fontSize: '14px' }}>📅 {event.date}</p>
              <p style={{ margin: '5px 0', color: '#555', fontSize: '14px' }}>📍 {event.location}</p>
              <p style={{ margin: '10px 0', color: '#333', fontSize: '14px' }}>{event.description}</p>
              
              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <button onClick={() => onEdit(event)} style={{ backgroundColor: '#f59e0b', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}>
                  Edit
                </button>
                <button onClick={() => onDelete(event.id)} style={{ backgroundColor: '#d9534f', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}>
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}