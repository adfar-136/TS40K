"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import Counter from '@/app/components/Counter'

export default function About() {
    const router = useRouter()
  return (
    <div>
        <h1>About route page</h1>
        <Link href="/users">users</Link>
        <button onClick={()=>router.push("/section")}>section</button>
        <Counter/>
    </div>
  )
}
