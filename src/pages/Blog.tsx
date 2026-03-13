import { PageHeader } from '../components/PageHeader';
import { blogPosts } from '../data/siteData';

export function Blog() {
  return (
    <>
      <PageHeader
        title="Blog & Updates"
        subtitle="Latest news, stories, and updates from our humanitarian work and community outreach."
      />
      <section className="section-space bg-soft">
        <div className="container">
          <div className="row g-4">
            {blogPosts.map((post) => (
              <div className="col-md-6 col-lg-4" key={post.id}>
                <div className="cause-card h-100">
                  <img src={post.image} alt={post.title} className="cause-image" style={{ objectFit: 'cover' }} />
                  <div className="cause-body">
                    <small className="text-muted">{post.date}</small>
                    <h4 className="mt-2">{post.title}</h4>
                    <p>{post.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
