import { PageHeader } from '../components/PageHeader';
import { SITE, officers } from '../data/siteData';

export function Team() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Meet the officers guiding the mission with trust and responsibility. The leadership team helps direct charitable activities, maintain organizational accountability, and support the long-term humanitarian vision of the NGO."
      />
      <section className="section-space bg-soft">
        <div className="container">
          <div className="row g-4">
            {officers.map((officer) => (
              <div className="col-md-6 col-xl-4" key={officer.name}>
                <div className="officer-card h-100">
                  <img src={officer.image} alt={officer.name} className="officer-image" />
                  <div className="officer-body">
                    <h4>{officer.name}</h4>
                    <span className="role-badge">{officer.role}</span>
                    <p>
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      {SITE.addressShort}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="table-card table-responsive mt-5">
            <table className="table align-middle ngo-table mb-0">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Business Mailing Address</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {officers.map((officer) => (
                  <tr key={officer.name}>
                    <td className="fw-bold text-dark">{officer.name}</td>
                    <td>{SITE.addressShort}</td>
                    <td><span className="table-badge">{officer.role}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
