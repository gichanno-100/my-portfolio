import Stack from '@mui/material/Stack';
import SectionCard from '../components/ui/section-card.jsx';
import ContactSection from '../components/contact/contact-section.jsx';

const HOME_SECTIONS = [
  {
    id: 'hero',
    label: 'Section 01',
    title: 'Hero',
    description: '여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.',
    variant: 'highlight',
    minHeight: { xs: 280, md: 380 },
  },
  {
    id: 'about',
    label: 'Section 02',
    title: 'About Me',
    description: "여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.",
  },
  {
    id: 'skills',
    label: 'Section 03',
    title: 'Skill Tree',
    description: '여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.',
    variant: 'tint',
  },
  {
    id: 'projects',
    label: 'Section 04',
    title: 'Projects',
    description: "여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.",
  },
];

function HomePage() {
  return (
    <Stack spacing={{ xs: 2, md: 3 }}>
      {HOME_SECTIONS.map((section) => (
        <SectionCard key={section.id} {...section} />
      ))}
      <ContactSection />
    </Stack>
  );
}

export default HomePage;
