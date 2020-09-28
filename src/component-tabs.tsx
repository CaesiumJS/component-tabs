import React, {useState} from 'react'

interface TabsProps{
  // The tab to start on, defaults to 0.
  current?: number

  /* A Function called when ever the tabe is changed. Useful if you want to set url fragments etc... */
  onChange?: (newTab: number) => void


  /* Class names to use in the components */
  classNames?: {
    container?: string
    tabList?: string
    tabListEntry?: string
    activeTabListEntry?: string
    currentTab?: string
  }

  children: React.ReactElement<TabProps>[]
}

interface TabProps{
  title: string
}

export const Tabs: React.FC<TabsProps> = ({current, children, onChange, classNames}) => {
  const [currentTab, setTab] = useState(current ? current : 0)

  return <div className={classNames && classNames.container ? classNames.container : 'caesium-tabs-container'}>
    <ul className={classNames && classNames.tabList ? classNames.tabList : 'caesium-tabs-tab-list'}>
      {children.map((tab, i) => {
        let className = (classNames && classNames.tabListEntry ? classNames.tabListEntry : 'caesium-tabs-tab-list-entry')

        if(i === currentTab){
          className = (classNames && classNames.activeTabListEntry ? classNames.activeTabListEntry : 'caesium-tabs-tab-list-active-entry')
        }

        return <li key={i} className={className} onClick={() => {
          setTab(i)
          if(onChange) onChange(i)
        }}>{tab.props.title}</li>
      })}
    </ul>
    <div className={classNames && classNames.currentTab ? classNames.currentTab : 'caesium-tabs-currentTab'}>
      {children[currentTab]}
    </div>
  </div>
}

export const Tab: React.FC<TabProps> = ({title, children}) => {
  return <>{children}</>
}