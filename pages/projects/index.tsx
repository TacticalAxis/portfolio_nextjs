import React from 'react'
import PagesMetaHead from '../../components/PagesMetaHead'
import ProjectsGrid from '../../components/projects/ProjectsGrid'

const Index: React.FC = () => {
    return (
        <div className="container mx-auto">
            <PagesMetaHead title="Projects" />

            <ProjectsGrid />
        </div>
    )
}

export default Index;
