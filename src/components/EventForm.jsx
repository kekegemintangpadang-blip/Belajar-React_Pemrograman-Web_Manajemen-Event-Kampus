import { useState, useEffect } from 'react'

export default function EventForm({ onAdd, onUpdate, editingEvent, onCancelEdit }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    description: ''
  })

  useEffect(() => {
    if (editingEvent) {
      setFormData(editingEvent)
    } else {
      resetForm()
    }
  }, [editingEvent])

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function resetForm() {
    setFormData({ name: '', date: '', location: '', description: '' })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (editingEvent) {
      onUpdate(formData)
    } else {
      onAdd(formData)
    }
    resetForm()
  }

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', flex: '1' }}>
      <h3 style={{ marginTop: 0, marginBottom: '20px' }}>
        {editingEvent ? "Edit Acara" : "Tambah Acara Baru"}
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Nama acara *</label>
          <input type="text" name="name" placeholder="Misalnya Seminar Teknologi" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Tanggal *</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Lokasi</label>
          <input type="text" name="location" placeholder="Aula fakultas" value={formData.location} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Deskripsi</label>
          <textarea name="description" placeholder="Deskripsi singkat kegiatan" value={formData.description} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '80px' }}></textarea>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={{ backgroundColor: '#147b7b', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            {editingEvent ? "Simpan Perubahan" : "Tambah Acara"}
          </button>
          {editingEvent && (
            <button type="button" onClick={() => { onCancelEdit(); resetForm(); }} style={{ backgroundColor: '#6c757d', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Batal
            </button>
          )}
        </div>
      </form>
    </div>
  )
} 