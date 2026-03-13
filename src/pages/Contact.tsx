import { PageHeader } from '../components/PageHeader';
import { SITE } from '../data/siteData';

export function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Whether you want to donate, become a volunteer, request humanitarian assistance, or learn more about our campaigns, our team is ready to hear from you."
      />
      <section className="section-space">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-5">
              <div className="contact-info-card h-100">
                <h4>Contact Information</h4>
                <div className="contact-item">
                  <span className="icon-badge small-badge"><i className="bi bi-telephone-fill"></i></span>
                  <div>
                    <strong>Phone</strong>
                    <p>{SITE.phone}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon-badge small-badge"><i className="bi bi-geo-alt-fill"></i></span>
                  <div>
                    <strong>Address</strong>
                    <p>{SITE.address}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon-badge small-badge"><i className="bi bi-globe"></i></span>
                  <div>
                    <strong>Website</strong>
                    <p>{SITE.domain}</p>
                  </div>
                </div>
                <div className="contact-item mb-0">
                  <span className="icon-badge small-badge"><i className="bi bi-people-fill"></i></span>
                  <div>
                    <strong>Volunteer & Partnership</strong>
                    <p>We welcome volunteers, donors, local partners, and well-wishers who believe in humanitarian action.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="form-card h-100">
                <h4>Send Us a Message</h4>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Subject</label>
                      <input type="text" className="form-control" placeholder="Donation / Volunteer / General" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea className="form-control" rows={6} placeholder="Tell us how you would like to support or connect with the NGO"></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
