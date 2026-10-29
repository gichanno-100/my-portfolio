import SectionCard from '../components/ui/section-card.jsx';

function AboutPage() {
  return (
    <SectionCard
      id="about-page"
      label="Page"
      title="About Me"
      description="About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다."
      minHeight={{ xs: 320, md: 420 }}
    />
  );
}

export default AboutPage;
