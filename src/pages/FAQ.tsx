import { PageHeader } from '../components/PageHeader';
import { faqItems } from '../data/siteData';

export function FAQ() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Answers about donations, services, volunteering, and outreach. To help donors, supporters, and community members, we have included answers to common questions about our NGO and its programs."
      />
      <section className="section-space bg-soft">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="faq-card">
                <div className="accordion faq-accordion" id="faqAccordion">
                  {faqItems.map((faq, index) => {
                    const headingId = `faq-heading-${index}`;
                    const collapseId = `faq-collapse-${index}`;
                    return (
                      <div className="accordion-item" key={faq.question}>
                        <h2 className="accordion-header" id={headingId}>
                          <button
                            className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`}
                            aria-expanded={index === 0}
                            aria-controls={collapseId}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={collapseId}
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          aria-labelledby={headingId}
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">{faq.answer}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
