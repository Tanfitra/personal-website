import React from "react"
import clsx from "clsx"

export function Card({ className, children }) {
  return (
    <div
      className={clsx(
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardContent({ className, children }) {
  return (
    <div className={clsx(className)}>
      {children}
    </div>
  )
}
