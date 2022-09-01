import { Tag } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import projects from '../../data/projects.json'
import DetailHeader from '../../components/DetailComponents/DetailHeader'
import DetailTagContainer from '../../components/DetailComponents/DetailTagContainer'
import DetailLinkContainer from '../../components/DetailComponents/DetailLinkContainer'
import DetailDescriptionContainer from '../../components/DetailComponents/DetailDescriptionContainer'
import DetailPagination from '../../components/DetailComponents/DetailPagination'
import DetailLinksAndDescriptionContainer from '../../components/DetailComponents/DetailLinksAndDescriptionContainer'
import DetailDemoContainer from '../../components/DetailComponents/DetailDemoContainer'
import Contact from '../../components/IndexComponents/Contact/Contact'

export default function ProjectId() {
  const router = useRouter()
  const { id } = router.query
  const project = projects.find((project) => project.id == id)
  return (
    <>
      {project ? (
        <>
          <DetailHeader
            projectTitle={project.project_title}
            projectMockup={project.mockup}
          />
          <DetailTagContainer>
            {project &&
              project.tags.map((tag, index) => {
                return (
                  <Tag key={tag.id} fontSize='lg' p={2}>
                    {tag}
                  </Tag>
                )
              })}
          </DetailTagContainer>
          <DetailLinksAndDescriptionContainer>
            <DetailLinkContainer
              liveLink={project.live_version}
              githubLink={project.github_repository}
            />
            <DetailDescriptionContainer description={project.description} />
          </DetailLinksAndDescriptionContainer>
          <DetailDemoContainer projectDemo={project.demo} />
          <DetailPagination linkNextProject={`/project/${project.id + 1}`} />
          <Contact />
        </>
      ) : null}
    </>
  )
}
