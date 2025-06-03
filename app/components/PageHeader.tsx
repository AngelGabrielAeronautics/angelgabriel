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
    <div className="relative bg-ag-cream pt-28 sm:pt-8 pb-4">
      <div className="container mx-auto px-20 sm:px-24 md:px-32 lg:px-40 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5 font-light text-ag-text-black mb-1 font-heading max-w-3xl mx-auto">{title}</h1>
        {subtitle && <p className="text-base lg:text-xl text-ag-text-black mt-4 mx-auto max-w-full sm:max-w-sm md:max-w-md lg:max-w-3xl">{subtitle}</p>}
        {children}
      </div>
    </div>
  )
} 