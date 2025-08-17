import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Login(){
  const [user,setUser]=useState('')
  const [pass,setPass]=useState('')
  const router = useRouter()
  useEffect(()=>{ if(typeof window!=='undefined' && localStorage.getItem('loggedIn')==='true'){ router.replace('/admin') } },[])
  function submit(e){
    e.preventDefault()
    if(user==='admin' && pass==='1234'){ localStorage.setItem('loggedIn','true'); router.push('/admin') }
    else{ alert('Invalid credentials (admin/1234)') }
  }
  return (
    <main className="min-h-screen grid place-items-center px-4">
      <form onSubmit={submit} className="card w-full max-w-md p-6">
        <h1 className="text-xl font-bold text-center mb-4">Admin Login</h1>
        <input className="w-full px-3 py-2 rounded-xl border mb-2" style={{borderColor:'var(--line)', background:'#0b120f'}} placeholder="Username" value={user} onChange={e=>setUser(e.target.value)}/>
        <input type="password" className="w-full px-3 py-2 rounded-xl border mb-3" style={{borderColor:'var(--line)', background:'#0b120f'}} placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)}/>
        <button className="neon-btn w-full">Sign in</button>
        <div className="text-center mt-3"><a href="/" className="opacity-80 hover:opacity-100">← Back to Home</a></div>
      </form>
    </main>
  )
}
