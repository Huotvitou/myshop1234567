import { useEffect, useState } from 'react'
import baseProducts from '../products.json'

export default function Home(){
  const [extra, setExtra] = useState([])
  useEffect(()=>{ if(typeof window!=='undefined'){ setExtra(JSON.parse(localStorage.getItem('extraProducts')||'[]')) } },[])
  const products=[...baseProducts,...extra]
  return (
    <main className="max-w-6xl mx-auto px-4">
      <header className="topbar sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-bold"><img src="/logo.svg" className="w-6 h-6"/> Vitou Neon Store</a>
          <nav className="flex items-center gap-3">
            <a href="/" className="hover:opacity-100 opacity-90">Home</a>
            <a href="/admin" className="btn-ghost">Admin</a>
          </nav>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-6 items-center py-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight"><span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--green)] to-[#9cffd1]">Buy & Receive</span> Digital Items Instantly</h1>
          <p className="mt-2 opacity-85">Game Keys • DLCs • Gift Cards • Subscriptions • Software</p>
          <div className="flex gap-3 mt-4">
            <a className="neon-btn" href="#products">Shop Now</a>
            <a className="btn-ghost" href="https://t.me/Vitouhuot" target="_blank" rel="noreferrer">Buy on Telegram</a>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <div><div className="text-xs inline-flex px-3 py-1 rounded-full border" style={{borderColor:'var(--line)'}}>SELL</div><div className="text-xl mt-2">$12.1952</div><div className="text-sm opacity-70">Steam Key</div></div>
            <div className="text-3xl">🎮</div>
          </div>
          <div className="h-2 my-4 rounded-full" style={{background:'linear-gradient(90deg,rgba(53,245,140,.2),transparent)'}}/>
          <div className="flex items-center justify-between">
            <div><div className="text-xs inline-flex px-3 py-1 rounded-full border opacity-75" style={{borderColor:'var(--line)'}}>BUY</div><div className="text-xl mt-2">$66.1249</div><div className="text-sm opacity-70">Gift Card</div></div>
            <button className="neon-btn">Confirm</button>
          </div>
        </div>
      </section>

      <section id="products" className="pb-12">
        <div className="flex items-center justify-between mb-3"><h2 className="text-xl font-semibold">Products</h2><a href="/admin" className="opacity-80 hover:opacity-100">Admin</a></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p)=>(
            <a key={p.id} href={`https://t.me/Vitouhuot?text=${encodeURIComponent('Hello, I want to buy: '+p.name+' ($'+p.price+')')}`} target="_blank" rel="noreferrer"
              className="card overflow-hidden hover:-translate-y-0.5 transition">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover bg-[#070b09]"/>
              <div className="p-3">
                <div className="text-xs inline-flex px-2 py-1 rounded-full border mb-2" style={{borderColor:'var(--line)'}}>{p.tag || 'Digital'}</div>
                <div className="font-medium">{p.name}</div>
                <div className="opacity-90">${Number(p.price).toFixed(2)}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
