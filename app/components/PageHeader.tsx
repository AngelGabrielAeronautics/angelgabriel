'use client'

import React from 'react'

/**
 * PageHeader component for consistent page headers across the site
 * 
 * @example
 * // Basic usage
 * <PageHeader title="Page Title" />
 * 
 * @example
 * // With subtitle
 * <PageHeader 
 *   title="Page Title" 
 *   subtitle="A brief description of the page" 
 * />
 * 
 * @example
 * // With custom content
 * <PageHeader title="Page Title">
 *   <div className="mt-4">
 *     <button className="btn-primary">Custom Button</button>
 *   </div>
 * </PageHeader>
 */
type PageHeaderProps = {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="relative bg-ag-cream py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-6xl font-light text-ag-text-black mb-1 font-heading">{title}</h1>
        {subtitle && <p className="text-xl text-ag-text-black">{subtitle}</p>}
        {children}
      </div>
    </div>
  )
} 