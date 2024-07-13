import React from 'react'
import PopularCategories from './PopularCategories'
import RecentProjects from './RecentProjects'

const Sidebar = () => (
  <aside className="sidebar">
    <PopularCategories />
    <RecentProjects />
  </aside>
)

export default Sidebar
