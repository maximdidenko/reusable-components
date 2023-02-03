import Accordion from '../components/Accordion';

function AccordionPage() {
  return (
    <div>
      <Accordion
        items={[
          { id: 'wqe3', label: 'Header 1', content: 'Section 1 content' },
          { id: 'srg5', label: 'Header 2', content: 'Section 2 content' },
          { id: 'adq1', label: 'Header 3', content: 'Section 3 content' },
        ]}
      />
    </div>
  );
}

export default AccordionPage;
