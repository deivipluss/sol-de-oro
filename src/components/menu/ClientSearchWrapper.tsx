'use client'

import React, { useState, ReactNode } from 'react'

interface ClientSearchWrapperProps {
  children: ReactNode
}

export default function ClientSearchWrapper({ children }: ClientSearchWrapperProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className="w-full">
      {React.cloneElement(children as React.ReactElement, {
        onSearch: handleSearch,
        searchQuery
      })}
    </div>
  )
}