import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/ProjectCycles.css';

const ProjectCycles = () => {
  const teams = [
    {
      id: 1,
      name: "Fiscale AI",
      members: ["Daigo", "Taelan", "Alagammai"],
      description: "Simplifying access to company financial data"
    },
    {
      id: 2,
      name: "Housing Price Predictor", 
      members: ["Aanika", "Faiza", "Zakiyah", "Angie"],
      description: "Predicting housing prices in King County"
    },
    {
      id: 3,
      name: "Pneumonia Diagnosis",
      members: ["Andrew", "Shlok", "Agastya", "Gavin", "Ashwath"],
      description: "CNN-based image classification for pneumonia detection"
    },
    {
      id: 4,
      name: "SimpliCare",
      members: ["Kenzie", "Putt", "Khawton", "Yunseo"],
      description: "Platform designed to streamline check-in processes"
    },
    {
      id: 5,
      name: "Layoff Risk AI Assistant",
      members: ["Rebecca Wang", "Thao", "Keshav"],
      description: "AI to address a growing and emotionally challenging issue"
    },
    {
      id: 6,
      name: "MindTheGap",
      members: ["Sourish", "Madhu", "Alay", "Veer", "Jiyae", "Aishi"],
      description: "Dashboard for monitoring and analyzing financial gaps"
    },
    {
      id: 7,
      name: "TuitionBud",
      members: ["Ashley", "Aarushi", "Brianna", "Kelly", "Kaiso", "Nikki"],
      description: "Simplify college search and financial planning"
    },
    {
      id: 8,
      name: "Dementia Diagnosis",
      members: ["Hannah", "Hiya", "Regina"],
      description: "Audio-analysis model for dementia detection"
    },
    {
      id: 9,
      name: "Caché",
      members: ["Sujin Lee", "Nitya", "Addanki", "Srimedha", "Thummala", "Nikki", "Suneel"],
      description: "Smart budgeting application with AI-powered insights"
    },
    {
      id: 10,
      name: "How Powerful Was That News?",
      members: ["Chloe", "Aryan", "Alexandra", "Katsumi", "Annie"],
      description: "Analyze financial news impact on stock markets"
    },
    {
      id: 11,
      name: "Bouncer",
      members: ["Abhay", "Aarya", "Heather", "Noah", "Ankita"],
      description: "Evaluate official IDs and generate security reports"
    },
    {
      id: 12,
      name: "Insight",
      members: ["Arron Li", "Albert Shen", "Sam King", "Vasudha", "Suma"],
      description: "Combining Computer Vision and NLP for comprehensive analysis"
    },
    {
      id: 13,
      name: "FinSight AI",
      members: ["Ben", "Kimberly", "Branden"],
      description: "Analyzes news using FinBERT and GPT, storing results in database"
    },
    {
      id: 14,
      name: "RouteRelief",
      members: ["Vrinda", "Jonathan", "Sarju", "Nathan", "Nithya"],
      description: "Google Street View data to detect infrastructure issues"
    }
  ];

  const teamLeads = [
    { name: "Asmi Sathaye", image: "/officers/asmi_sathaye.png" },
    { name: "Reuben Santoso", image: "/officers/reuben_santoso.png" },
    { name: "Nitya Kakulamarri", image: "/officers/nitya_kakulamarri.png" },
    { name: "Hasan Wazir", image: "/officers/hasan_wazir.png" },
    { name: "Sri Paruchuri", image: "/officers/sri_paruchuri.png" },
    { name: "Siddharth Saraf", image: "/officers/siddharth_saraf.jpg" },
    { name: "Mohit Mohanraj", image: "/officers/mohit_mohanraj.png" },
    { name: "Madhunitha Gandhi", image: "/officers/madhu_gandhi.jpg" },
    { name: "Ting-Kai Chang", image: "/officers/tk_chang.png" },
    { name: "Sahana Hegde", image: "/officers/sahana_hegde.png" }
  ];

  return (
    <>
      <Helmet>
        <title>Project Cycles - AISC UW</title>
        <meta name="description" content="Explore AISC UW's flagship Project Cycles program - 6 weeks, 15 teams, 80+ builders" />
      </Helmet>
      
      <div className="project-cycles-page">
        <div className="container">
          <div className="hero-section">
            <h1 className="page-title">Project Cycles</h1>
            <p className="page-subtitle">Spring 2025 • 6 Weeks • 15 Teams • 80+ Builders</p>
          </div>

          <section className="program-overview">
            <div className="overview-content">
              <h2 className="section-title">Program Overview</h2>
              <p className="overview-description">
                <strong>AISC's Project Cycles</strong> is a six-week, mentor-guided sprint in which UW students collaborate to take an idea from raw data to a fully deployed AI agent. Anchored by a living Notion hub of code templates and RAG-centric tutorials, the program walks each team through a clear sequence—data collection, cleaning, model prototyping, agent integration, UI design, and deployment—while pairing technical milestones with non-technical deliverables that hone product thinking.
              </p>
              <p className="overview-description">
                Slack check-ins, peer reviews, and dedicated team leads keep the momentum high, and the journey culminates in a campus <strong>Demo Day!</strong> The program represents AISC's commitment to hands-on learning and our vision for the future of AI education at UW.
              </p>
              <h4>For more information check out our <a style={{color: "grey"}} href="https://aisc-uw.notion.site/pc-spr25">notion</a>.</h4>
            </div>
          </section>

          <section className="success-metrics">
            <h2 className="section-title">Spring 2025 Success</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-number">15</div>
                <div className="metric-label">Teams</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">80+</div>
                <div className="metric-label">Builders</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">6</div>
                <div className="metric-label">Weeks</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">100%</div>
                <div className="metric-label">Deployment Rate</div>
              </div>
            </div>
          </section>

          <section className="teams-showcase">
            <h2 className="section-title">Project Showcase</h2>
            <p className="showcase-intro">
              From healthcare AI to financial tools, our teams built diverse and impactful AI applications across multiple industries and use cases.
            </p>
            <div className="teams-grid">
              {teams.map((team) => (
                <div key={team.id} className="team-card">
                  <h3 className="team-name">{team.name}</h3>
                  <p className="team-members">{team.members.join(", ")}</p>
                  <p className="team-description">{team.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="team-leads-section">
            <h2 className="section-title">Team Leads</h2>
            <p className="leads-intro">
              Meet the dedicated team leads who mentored and supported all 15 teams throughout their 6-week journey.
            </p>
            <div className="leads-grid">
              {teamLeads.map((lead, index) => (
                <div key={index} className="lead-card">
                  <div className="lead-image-container">
                    <img src={lead.image} alt={lead.name} className="lead-image" />
                  </div>
                  <p className="lead-name">{lead.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectCycles;