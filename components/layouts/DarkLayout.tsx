import React, { FC } from 'react'


interface DarkLayoutProps {
  children: React.ReactNode
}


const DarkLayout: FC<DarkLayoutProps> = ({children}) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px'
    }}>
        {children}
    </div>
  )
}

export default DarkLayout