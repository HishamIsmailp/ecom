import React from 'react'

export default function layout({children}:{children: React.ReactNode}) {
  return (
    <div><h2>This is product related page</h2>{children}</div>
  )
}
