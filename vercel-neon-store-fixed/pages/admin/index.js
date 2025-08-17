import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Admin(){
  const router = useRouter()
  const [name,setName]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState('')
  const [tag,setTag]=useState('')
  const [items,setItems]=useState([])

  useEffect(()=>{
    if(typeof window==='undefined') return
    if(localStorage.getItem('loggedIn')!=='true'){ router.replace('/admin/login'); return }
    const saved = JSON.parse(localStorage.getItem('extraProducts') || '[]')
    setItems(saved)
  },[])

  function add(e){
    e.preventDefault()
    const p = { id: Date.now(), name, price: Number(price||0), image, tag }
    const next = [p, ...items]
    setItems(next)
    localStorage.setItem('extraProducts', JSON.stringify(next))
    setName(''); setPrice(''); setImage(''); setTag('')
  }
  function clearAll(){
    if(confirm('Clear all added products?')){ localStorage.removeItem('extraProducts'); setItems([]) }
  }
  function logout(){ localStorage.removeItem('loggedIn'); router.push('/admin/login') }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-2">
          <button className="btn-ghost" onClick={clearAll}>Clear</button>
          <button className="btn-ghost" onClick={logout}>Logout</button>
        </div>
      </div>

      <form onSubmit={add} className="card p-4 grid md:grid-cols-4 gap-3 mb-6">
        <input placeholder="Name" className="px-3 py-2 rounded-xl border" style={{borderColor:'var(--line)', background:'#0b120f'}} value={name} onChange={e=>setName(e.target.value)}/>
        <input placeholder="Price" className="px-3 py-2 rounded-xl border" style={{borderColor:'var(--line)', background:'#0b120f'}} value={price} onChange={e=>setPrice(e.target.value)}/>
        <input placeholder="Image URL" className="px-3 py-2 rounded-xl border" style={{borderColor:'var(--line)', background:'#0b120f'}} value={image} onChange={e=>setImage(e.target.value)}/>
        <input placeholder="Tag (Steam/Gift Card/...)" className="px-3 py-2 rounded-xl border" style={{borderColor:'var(--line)', background:'#0b120f'}} value={tag} onChange={e=>setTag(e.target.value)}/>
        <div className="md:col-span-4"><button className="neon-btn">Add Product</button></div>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map(p => (
          <div key={p.id} className="card overflow-hidden">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover bg-[#070b09]"/>
            <div className="p-3">
              <div className="text-xs inline-flex px-2 py-1 rounded-full border mb-2" style={{borderColor:'var(--line)'}}>{p.tag || 'Digital'}</div>
              <div className="font-medium">{p.name}</div>
              <div className="opacity-90">${Number(p.price).toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
