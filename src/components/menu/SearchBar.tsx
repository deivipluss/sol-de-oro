'use client'

import { useState, useEffect } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
  searchQuery?: string
}

export default function SearchBar({ onSearch, searchQuery = '' }: SearchBarProps) {
  const [value, setValue] = useState(searchQuery)

  // Sincroniza el estado local con el searchQuery del wrapper
  useEffect(() => {
    setValue(searchQuery)
  }, [searchQuery])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    onSearch(newValue)
  }

  return (
    <div className="mb-6">
      <div className="relative">
        <input
          type="text"
          value={value}
          placeholder="Buscar en el menú..."
          onChange={handleChange}
          className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-amber-500 
                   bg-white/80 backdrop-blur-sm transition-all duration-200"
        />
        <svg
          className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  )
}