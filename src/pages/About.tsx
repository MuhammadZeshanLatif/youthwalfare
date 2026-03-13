import { PageHeader } from '../components/PageHeader';
import { values, workSteps } from '../data/siteData';

export function About() {
  return (
    <>
      <PageHeader
        title="About Youth Unity Welfare"
        subtitle="A warm, trustworthy charity organization focused on people who need help the most."
      />
      <section className="section-space">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 mx-auto text-center">
              <p className="section-lead">
                Our mission is simple but powerful: help people survive hardship and rebuild life with dignity. We work with poor
                families, sick children, underprivileged communities, women in need of support, and neighborhoods affected by
                poverty or crisis.
              </p>
              <p className="section-copy">
                Through food distribution programs, children medical treatment, donation campaigns, volunteer initiatives,
                education support, women empowerment, and disaster relief efforts, we create a full circle of humanitarian care.
                We do not only respond to urgent needs, but also invest in long-term community development and sustainable welfare.
              </p>
            </div>
          </div>
          <div className="row g-4 mt-4">
            {values.map((value) => (
              <div className="col-md-6 col-xl-3" key={value.title}>
                <div className="value-card h-100">
                  <span className="icon-badge"><i className={value.icon}></i></span>
                  <h4>{value.title}</h4>
                  <p>{value.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row g-4 mt-5 align-items-start">
            <div className="col-lg-5">
              <div className="section-tag">How We Work</div>
              <h2 className="section-heading">A reliable process designed for compassionate and effective charity work.</h2>
              <p className="section-lead">
                Our humanitarian model combines community listening, transparent giving, organized response, and follow-up care.
                This helps ensure every donation translates into practical, meaningful support.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                {workSteps.map((item) => (
                  <div className="col-md-6" key={item.step}>
                    <div className="process-card h-100">
                      <div className="process-number">{item.step}</div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
