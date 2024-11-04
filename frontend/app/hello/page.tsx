'use client'

import axios from "axios"
import { useState, useEffect } from "react"

export default function Page() {
  const [data, setData] = useState({ message: '' })

  useEffect(() => {
    axios.get('http://localhost:8000/api/hello_db/backend/')
      .then((res) => res.data)
      .then((data) => {
        setData(data)
      })
  }, [])

  return <h1>Hello {data.message}!</h1>
}