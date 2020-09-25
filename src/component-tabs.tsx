import React, {useState} from 'react'

interface TabsProps{
  // The tab to start on, defaults to 0.
  current?: number

  /* A Function called when ever the tabe is changed. Useful if you want to set url fragments etc... */
  onChange?: (newTab: number) => void



  children: React.ReactElement<TabProps>[]
}

interface TabProps{
  title: string
}

export const Tabs: React.FC<TabsProps> = ({current, children, onChange}) => {
  const [tab, setTab] = useState(current ? current : 0)

  return <div>
    <ul>
      {children.map((tab, i) => {
        return <li key={i} onClick={() => {
          setTab(i)
          if(onChange) onChange(i)
        }}>{tab.props.title}</li>
      })}
    </ul>
    <div>
      {children[tab]}
    </div>
  </div>
}

export const Tab: React.FC<TabProps> = ({title, children}) => {
  return <>{children}</>
}