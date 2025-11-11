import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/PartnerWithUs.css';

const PartnerWithUs = () => {
  return (
    <>
      <Helmet>
        <title>Partner With Us - AISC UW</title>
        <meta name="description" content="Partner with AISC to reach 500+ students at UW and 100K+ across our 7-university network" />
      </Helmet>
      
      <div className="partner-page">
        <div className="container">
          {/* Hero */}
          <section className="partner-hero">
            <h1 className="page-title">Partner With AISC @ UW</h1>
            <p className="hero-description">
              The University of Washington's first interdisciplinary, nonprofit RSO dedicated to making artificial intelligence 
              accessible, ethical, and impactful across all disciplines. Reach <strong>500+ students at UW</strong>.
            </p>
            <a 
              href="https://form.typeform.com/to/FL3Synxe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-cta-button"
            >
              Submit Partner Interest Form →
            </a>
          </section>

          {/* Other Opportunities */}
          <section className="opportunities-section">
            <h2 className="section-title">Year-round partnership opportunities with AISC</h2>
            <div className="opportunities-grid">
              <div className="opportunity-card">
                <div className="opportunity-icon">🎤</div>
                <h3 className="opportunity-title">Speaker Events & Workshops</h3>
                <p className="opportunity-description">
                  Lead talks, panels, or technical workshops. Past speakers include Microsoft, Sentient, and EdgeRunner AI.
                </p>
              </div>
              <div className="opportunity-card">
                <div className="opportunity-icon">💼</div>
                <h3 className="opportunity-title">Recruiting Pipeline</h3>
                <p className="opportunity-description">
                  Access our community of 500+ students across CS, Business, Design, Data Science, and domain experts.
                </p>
              </div>
              <div className="opportunity-card">
                <div className="opportunity-icon">🤝</div>
                <h3 className="opportunity-title">Project Cycles Mentorship</h3>
                <p className="opportunity-description">
                  Mentor student teams building real AI applications during our 6-week intensive program.
                </p>
              </div>
              <div className="opportunity-card">
                <div className="opportunity-icon">🎯</div>
                <h3 className="opportunity-title">Custom Collaborations</h3>
                <p className="opportunity-description">
                  Have something specific in mind? Let's create a custom partnership tailored to your goals.
                </p>
              </div>
            </div>
          </section>

          {/* Who You'll Reach */}
          <section className="audience-section">
            <h2 className="section-title">Who You'll Reach</h2>
            <div className="audience-grid">
              <div className="audience-card">
                <h3>Interdisciplinary Builders</h3>
                <p>CS, Business, Design (HCDE), Data Science, Finance, Healthcare, Social Science, and 20+ other majors</p>
              </div>
              <div className="audience-card">
                <h3>Future Product Leaders</h3>
                <p>Students fluent in developing Agentic AI systems with technologies including RAG and MCP, trained in both technical and human-centered design</p>
              </div>
              <div className="audience-card">
                <h3>Career-Ready Talent</h3>
                <p>Sophomores and juniors seeking internships, seniors exploring full-time roles, and builders with deployed projects</p>
              </div>
            </div>
          </section>

          {/* Mentorship CTA */}
          <section className="mentorship-section">
            <div className="mentorship-box">
              <h2>Not All Partnerships Need to Be Financial</h2>
              <p>
                We welcome professionals to join as mentors and judges. Mentors host feedback sessions for teams, 
                and judges evaluate final presentations while connecting with top talent.
              </p>
            </div>
          </section>


          {/* Final CTA */}
          <section className="final-cta">
            <div className="cta-box">
              <h2>Let's Build the Future Together</h2>
              <p>
                Help us make AI accessible, ethical, and impactful. Fill out our partner interest form 
                and we'll be in touch within 48 hours.
              </p>
              <a 
                href="https://form.typeform.com/to/FL3Synxe?typeform-source=www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button"
              >
                Submit Partner Interest Form
              </a>
              <p className="contact-alternative">
                Questions? Email us at <a href="mailto:aisc@uw.edu">aisc@uw.edu</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PartnerWithUs;