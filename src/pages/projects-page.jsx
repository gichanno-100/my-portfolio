import SectionCard from '../components/ui/section-card.jsx';

function ProjectsPage() {
  return (
    <SectionCard
      id="projects-page"
      label="Page"
      title="Projects"
      description="Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다."
      minHeight={{ xs: 320, md: 420 }}
    />
  );
}

export default ProjectsPage;
