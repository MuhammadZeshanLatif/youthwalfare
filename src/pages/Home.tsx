import { Link } from 'react-router-dom';
import { ServiceIcon } from '../components/ServiceIcon';
import {
  SITE,
  impactStats,
  serviceCards,
  causes,
  values,
  workSteps,
  officers,
  testimonials,
  galleryItems,
  faqItems,
} from '../data/siteData';
import donationQrUrl from '@/assets/donation.webp';

const serviceCarousels: Record<string, string[]> = {
  'Food Distribution Programs': [
    '/images/youth-unity/youth-unity%20(31).jpeg',
    '/images/youth-unity/youth-unity%20(36).jpeg',
    '/images/youth-unity/youth-unity%20(42).jpeg',
  ],
  'Children Medical Treatment': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80',
  ],
  'Emergency Aid': [
    'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1469571486292-b53601020f36?auto=format&fit=crop&w=600&q=80',
  ],
  'Education Support': [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80',
  ],
};

const serviceSections = [
  {
    id: 'sec-food',
    tag: 'Food Distribution Programs',
    heading: 'Feeding hungry families with daily meals and ration packs.',
    description: 'Our food distribution drives reach thousands of families across Pakistan — delivering cooked meals, dry ration packs, and emergency food supplies to those who need it most.',
    bgSoft: false,
    slides: [
      { images: ['/images/youth-unity/youth-unity%20(10).jpeg', '/images/youth-unity/youth-unity%20(11).jpeg', '/images/youth-unity/youth-unity%20(12).jpeg'], caption: 'Food distribution to families in need' },
      { images: ['/images/youth-unity/youth-unity%20(13).jpeg', '/images/youth-unity/youth-unity%20(14).jpeg', '/images/youth-unity/youth-unity%20(15).jpeg'], caption: 'Ration packs delivered to underprivileged communities' },
      { images: ['/images/youth-unity/youth-unity%20(16).jpeg', '/images/youth-unity/youth-unity%20(17).jpeg', '/images/youth-unity/youth-unity%20(18).jpeg'], caption: 'Hot meals served during humanitarian drives' },
    ],
  },
  {
    id: 'sec-medical',
    tag: 'Children Medical Treatment',
    heading: 'Providing life-saving medical care to vulnerable children.',
    description: 'From specialist consultations to medicines and follow-up care, we ensure no child is denied treatment due to poverty or lack of access.',
    bgSoft: true,
    slides: [
      { images: ['https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=700&q=80'], caption: 'Medical camps and health screenings for children' },
      { images: ['https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=700&q=80'], caption: 'Specialist treatment and medicines for sick children' },
    ],
  },
  {
    id: 'sec-emergency',
    tag: 'Emergency Aid',
    heading: 'Rapid relief when communities face crisis and hardship.',
    description: 'In urgent situations, our teams mobilize quickly to deliver emergency supplies, temporary support, and humanitarian assistance to affected families and communities.',
    bgSoft: false,
    slides: [
      { images: ['https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=700&q=80', '/images/youth-unity/youth-unity%20(55).jpeg'], caption: 'Emergency aid distribution to families in crisis' },
      { images: ['https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80'], caption: 'Volunteers delivering urgent relief and support' },
    ],
  },
  {
    id: 'sec-education',
    tag: 'Education Support',
    heading: 'Opening doors to learning for children in need.',
    description: 'We provide school supplies, scholarships, mentoring, and education support so every child — regardless of family income — can continue learning and build a better future.',
    bgSoft: true,
    slides: [
      { images: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=700&q=80'], caption: 'Education support and school supplies for poor children' },
      { images: ['https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=700&q=80'], caption: 'Mentoring and learning programs for underprivileged children' },
    ],
  },
];

export function Home() {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 mt-0">
              <div className="hero-badge">
                <i className="bi bi-stars"></i>
                <span>Helping humanity with food, care and compassion</span>
              </div>
              <h1 className="hero-title">Hope, healing, and dignity for every struggling life.</h1>
              <p className="hero-text">
                {SITE.name} is a humanitarian organization dedicated to feeding poor families, arranging medical treatment
                for children, supporting underprivileged communities, and creating long-term welfare impact through charity,
                volunteerism, and compassionate community programs.
              </p>
              <p className="hero-text hero-text-secondary">
                We believe every donation should lead to visible change: a family fed, a child treated, a mother empowered,
                a disaster-hit community supported, and a future rebuilt with hope.
              </p>
              <div className="hero-actions">
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=X6TTVDKC537Y6"
                  className="btn btn-primary-ngo btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Now
                </a>
                <Link to="/contact" className="btn btn-outline-ngo btn-lg">Become Volunteer</Link>
              </div>

              <div className="hero-features row g-3 mt-3">
                <div className="col-sm-6">
                  <div className="mini-feature">
                    <span className="mini-feature-icon" aria-hidden>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 14.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v5.5A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5V9H2z"/></svg>
                    </span>
                    <div>
                      <strong>Food Security</strong>
                      <span>Meals and ration for deserving families</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mini-feature">
                    <span className="mini-feature-icon" aria-hidden>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748z"/></svg>
                    </span>
                    <div>
                      <strong>Children Healthcare</strong>
                      <span>Medical treatment and wellness support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="hero-image-wrap">
                  <div
                    id="heroCarousel"
                    className="carousel slide carousel-fade hero-main-image"
                    data-bs-ride="carousel"
                    data-bs-interval="3500"
                  >
                    <div className="carousel-indicators">
                      {[0, 1, 2, 3].map((i) => (
                        <button
                          key={i}
                          type="button"
                          data-bs-target="#heroCarousel"
                          data-bs-slide-to={i}
                          className={i === 0 ? 'active' : ''}
                          aria-label={`Slide ${i + 1}`}
                        />
                      ))}
                    </div>
                    <div className="carousel-inner h-100">
                      {[1, 2, 3, 4].map((n, i) => (
                        <div key={n} className={`carousel-item h-100 ${i === 0 ? 'active' : ''}`}>
                          <img
                            src={`/images/youth-unity/youth-unity%20(${n}).jpeg`}
                            alt={`Youth Unity food distribution activity ${n}`}
                            className="d-block w-100 h-100"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                          />
                        </div>
                      ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="floating-card donation-note">
                  <div className="d-flex align-items-center gap-3">
                    <span className="floating-icon"><i className="bi bi-heart-fill"></i></span>
                    <div>
                      <strong>100% compassion-driven mission</strong>
                      <p className="mb-0">Helping families, children, and communities through practical support.</p>
                    </div>
                  </div>
                </div>
                <div className="floating-card impact-note">
                  <small className="text-uppercase">Monthly Outreach</small>
                  <h3>3,000+</h3>
                  <p className="mb-0">people reached through food, welfare, and medical care initiatives.</p>
                </div>
                <div className="hero-features row g-3 mt-3">
                  <div className="col-sm-6">
                    <div className="mini-feature">
                      <span className="mini-feature-icon" aria-hidden>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.041-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/></svg>
                      </span>
                      <div>
                        <strong>Education Access</strong>
                        <span>Support for poor children to continue learning</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mini-feature">
                      <span className="mini-feature-icon" aria-hidden>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/><path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></svg>
                      </span>
                      <div>
                        <strong>Community Welfare</strong>
                        <span>Relief, empowerment, and outreach programs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip py-4">
        <div className="container">
          <div className="row g-3 text-center text-lg-start">
            <div className="col-md-6 col-lg-3">
              <div className="trust-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Food support for poor families</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="trust-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Medical treatment for children</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="trust-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Disaster and emergency relief</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="trust-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Volunteer-led humanitarian action</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space" id="about">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-media">
                <img
                  src="/images/youth-unity/youth-unity%20(50).jpeg"
                  alt="Youth Unity welfare food distribution activity"
                  className="about-image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-tag">About Our NGO</div>
              <h2 className="section-heading">A warm, trustworthy charity organization focused on people who need help the most.</h2>
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
              <div className="about-points row g-3 mt-1">
                <div className="col-sm-6">
                  <div className="about-point">
                    <i className="bi bi-basket2-heart-fill"></i>
                    <span>Daily food and ration support for struggling households</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="about-point">
                    <i className="bi bi-heart-pulse-fill"></i>
                    <span>Medical treatment assistance for vulnerable children</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="about-point">
                    <i className="bi bi-mortarboard-fill"></i>
                    <span>Education opportunities and school support for poor children</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="about-point">
                    <i className="bi bi-house-heart-fill"></i>
                    <span>Community welfare programs with dignity and care</span>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary-ngo mt-4">Learn More About Us</Link>
            </div>
          </div>

          <div className="row g-4 mt-5">
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
        </div>
      </section>

      <section className="section-space bg-soft" id="impact">
        <div className="container">
          <div className="text-center section-header">
            <div className="section-tag mx-auto">Our Impact</div>
            <h2 className="section-heading text-center">Measurable humanitarian impact that grows through every donation.</h2>
            <p className="section-lead text-center mx-auto">
              Every contribution supports direct action. Our impact is visible in meals delivered, children treated, families
              supported, volunteers mobilized, and communities strengthened through consistent charity work.
            </p>
          </div>

          <div className="row g-4 mt-2">
            {impactStats.map((item) => (
              <div className="col-sm-6 col-xl-3" key={item.label}>
                <div className="stat-card h-100">
                  <h3>{item.value}</h3>
                  <h5>{item.label}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {serviceSections.map((sec) => (
        <section key={sec.id} className={`section-space${sec.bgSoft ? ' bg-soft' : ''}`}>
          <div className="container">
            <div className="text-center section-header">
              <div className="section-tag mx-auto">{sec.tag}</div>
              <h2 className="section-heading text-center">{sec.heading}</h2>
              <p className="section-lead text-center mx-auto">{sec.description}</p>
            </div>

            <div
              id={sec.id}
              className="carousel slide mt-4"
              data-bs-ride="carousel"
              data-bs-interval="4000"
            >
              <div className="carousel-indicators">
                {sec.slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    data-bs-target={`#${sec.id}`}
                    data-bs-slide-to={i}
                    className={i === 0 ? 'active' : ''}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="carousel-inner">
                {sec.slides.map((slide, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                    <div className="row g-3">
                      {slide.images.map((src) => (
                        <div key={src} className="col-12 col-md-4">
                          <img
                            src={src}
                            alt={sec.tag}
                            className="d-block w-100 rounded"
                            style={{ height: '280px', objectFit: 'cover', objectPosition: 'top' }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="text-center mt-3">
                      <p className="text-muted mb-0">
                        <i className="bi bi-geo-alt-fill me-1" style={{ color: 'var(--ngo-green)' }}></i>
                        {slide.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target={`#${sec.id}`} data-bs-slide="prev"
                style={{ width: '40px', left: '-50px' }}>
                <span className="carousel-control-prev-icon" style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(175deg)' }} aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#${sec.id}`} data-bs-slide="next"
                style={{ width: '40px', right: '-50px' }}>
                <span className="carousel-control-next-icon" style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(175deg)' }} aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div className="text-center mt-4">
              <Link to="/services" className="btn btn-primary-ngo">Learn More</Link>
            </div>
          </div>
        </section>
      ))}

      <section className="section-space bg-soft" id="services">
        <div className="container">
          <div className="text-center section-header">
            <div className="section-tag mx-auto">Our Services</div>
            <h2 className="section-heading text-center">Comprehensive welfare services for real humanitarian needs.</h2>
            <p className="section-lead text-center mx-auto">
              Our NGO works across multiple service areas so communities receive not only emergency help, but also the support
              needed to move toward long-term stability and hope.
            </p>
          </div>

          <div className="row g-4 mt-2">
            {serviceCards.slice(0, 4).map((service, idx) => {
              const carouselId = `svcCarousel${idx}`;
              const imgs = serviceCarousels[service.title] ?? ['/images/youth-unity/youth-unity%20(35).jpeg'];
              return (
                <div className="col-md-6 col-xl-3" key={service.title}>
                  <div className="service-card h-100" style={{ padding: 0, overflow: 'hidden' }}>
                    <div id={carouselId} className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" style={{ height: '200px' }}>
                      <div className="carousel-inner h-100">
                        {imgs.map((src, i) => (
                          <div key={i} className={`carousel-item h-100 ${i === 0 ? 'active' : ''}`}>
                            <img
                              src={src}
                              alt={service.title}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                            />
                          </div>
                        ))}
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <ServiceIcon title={service.title} />
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                      <Link to="/services" className="service-link">
                        Learn More <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-primary-ngo">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="section-space" id="causes">
        <div className="container">
          <div className="text-center section-header">
            <div className="section-tag mx-auto">Featured Causes</div>
            <h2 className="section-heading text-center">Current charity campaigns that need urgent public support.</h2>
          </div>

          <div className="row g-4 mt-2">
            {causes.map((cause) => (
              <div className="col-lg-4" key={cause.title}>
                <div className="cause-card h-100">
                  <img src={cause.image} alt={cause.title} className="cause-image" />
                  <div className="cause-body">
                    <h4>{cause.title}</h4>
                    <p>{cause.description}</p>
                    <div className="d-flex justify-content-between small text-muted mb-2">
                      <span>Raised: {cause.raised}</span>
                      <span>Goal: {cause.goal}</span>
                    </div>
                    <div className="progress soft-progress mb-3">
                      <div className="progress-bar" style={{ width: `${cause.progress}%` }}></div>
                    </div>
                    {cause.title === 'Children Medical Support' ? (
                      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2">
                        <strong>{cause.progress}% Funded</strong>
                        <a
                          href="https://www.paypal.com/donate/?hosted_button_id=X6TTVDKC537Y6"
                          className="btn btn-sm btn-primary-ngo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Donate for Children
                        </a>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-between align-items-center">
                        <strong>{cause.progress}% Funded</strong>
                        <Link to="/contact" className="btn btn-sm btn-primary-ngo">Support Cause</Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-soft">
        <div className="container">
          <div className="row align-items-start g-4">
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

      <section className="section-space leadership-section" id="leadership">
        <div className="container">
          <div className="text-center section-header">
            <div className="section-tag mx-auto">Officers / Leadership Team</div>
            <h2 className="section-heading text-center">Meet the officers guiding the mission with trust and responsibility.</h2>
          </div>

          <div className="row g-4 mt-2">
            {officers.slice(0, 3).map((officer) => (
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
          <div className="text-center mt-4">
            <Link to="/team" className="btn btn-primary-ngo">Meet Full Team</Link>
          </div>
        </div>
      </section>

      <section className="section-space volunteer-section bg-soft" id="volunteer">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-tag">Volunteer With Us</div>
              <h2 className="section-heading">Be the hands and heart behind life-changing community work.</h2>
              <p className="section-lead">
                Volunteers are the soul of every outreach campaign. Whether you help in food distribution, event coordination,
                awareness programs, education support, or disaster response, your time can create meaningful human impact.
              </p>
              <Link to="/contact" className="btn btn-primary-ngo btn-lg mt-4">Join as Volunteer</Link>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="volunteer-media">
                <img
                  src="/images/youth-unity/youth-unity%20(60).jpeg"
                  alt="Youth Unity volunteers serving the community"
                  className="volunteer-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0" id="donate">
        <div className="container">
          <div className="donation-cta">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <div className="section-tag section-tag-light">Donation Call To Action</div>
                <h2 className="cta-heading">Your donation can feed a family, heal a child, and uplift a community.</h2>
                <p className="cta-copy mb-0">
                  Every act of generosity matters. Support food programs, child treatment, welfare services, education support,
                  disaster relief, and humanitarian care by contributing today.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=X6TTVDKC537Y6"
                  className="btn btn-light btn-lg rounded-pill px-4 me-2 mb-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Today
                </a>
                <Link to="/services" className="btn btn-outline-light btn-lg rounded-pill px-4 mb-2">View Programs</Link>
                <div className="donate-qr-block mt-4">
                  <p className="donate-qr-label mb-2">Or scan QR to donate via PayPal</p>
                  <img
                    src={donationQrUrl}
                    alt="Scan QR code to donate via PayPal"
                    className="donate-qr-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space testimonials-section bg-soft">
        <div className="container">
          <div className="text-center section-header">
            <div className="section-tag mx-auto">Testimonials</div>
            <h2 className="section-heading text-center">Stories of hope from people touched by compassion.</h2>
          </div>

          <div className="row g-4 mt-2">
            {testimonials.map((item) => (
              <div className="col-md-6 col-xl-4" key={item.name}>
                <div className="testimonial-card h-100">
                  <div className="stars mb-3">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="testimonial-quote">"{item.quote}"</p>
                  <div className="testimonial-author">
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space gallery-section">
        <div className="container">
          <div className="text-center section-header">
            <div className="section-tag mx-auto">Gallery</div>
            <h2 className="section-heading text-center">A visual glimpse into our charity activities and community outreach.</h2>
          </div>

          <div className="row g-4 mt-2">
            {galleryItems.map((item) => (
              <div className="col-sm-6 col-lg-4" key={item.title}>
                <div className="gallery-card">
                  <img src={item.image} alt={item.title} className="gallery-image" />
                  <div className="gallery-overlay">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space faq-section bg-soft">
        <div className="container">
          <div className="text-center section-header">
            <div className="section-tag mx-auto">Frequently Asked Questions</div>
            <h2 className="section-heading text-center">Answers about donations, services, volunteering, and outreach.</h2>
          </div>

          <div className="row justify-content-center mt-2">
            <div className="col-lg-9">
              <div className="faq-card">
                <div className="accordion faq-accordion" id="faqAccordion">
                  {faqItems.slice(0, 3).map((faq, index) => {
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
          <div className="text-center mt-4">
            <Link to="/faq" className="btn btn-primary-ngo">View All FAQs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
