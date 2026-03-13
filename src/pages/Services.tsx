import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { ServiceIcon } from '../components/ServiceIcon';
import { serviceCards } from '../data/siteData';

export function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive welfare services for real humanitarian needs. We work across multiple service areas so communities receive not only emergency help, but also the support needed to move toward long-term stability and hope."
      />
      <section className="section-space bg-soft">
        <div className="container">
          <div className="row g-4">
            {serviceCards.map((service) => (
              <div className="col-md-6 col-xl-4" key={service.title}>
                <div className="service-card h-100">
                  <ServiceIcon title={service.title} />
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <Link to="/contact" className="service-link">
                    Get in Touch <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
