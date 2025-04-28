import React from 'react';
import { ArrowRight, Star, Users, TrendingUp, Award, Bookmark } from 'lucide-react';

const CommunityShowcases = () => {
  const styles = {
    body: {
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      color: '#fff',
      lineHeight: 1.6,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    hero: {
      position: 'relative',
      height: '500px',
      marginBottom: '60px',
    },
    heroImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.3,
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, #000, transparent, #000)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 20px',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      maxWidth: '800px',
      margin: '0 auto',
      animation: 'fadeIn 2s ease-in-out',
    },
    accent: {
      color: '#E31B23',
    },
    showcaseGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      margin: '60px 0',
    },
    showcaseCard: {
      background: 'linear-gradient(145deg, rgba(40,0,0,0.7), rgba(20,0,0,0.6))',
      borderRadius: '20px',
      padding: '30px',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(227, 27, 35, 0.2)',
      boxShadow: '0 8px 30px rgba(227, 27, 35, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    cardCategory: {
      backgroundColor: 'rgba(227, 27, 35, 0.2)',
      color: '#E31B23',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '12px',
      marginBottom: '20px',
    },
    cardText: {
      color: '#bbb',
      marginBottom: '20px',
    },
    cardFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardStats: {
      display: 'flex',
      gap: '15px',
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: '#aaa',
      fontSize: '0.9rem',
    },
    readButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: '#E31B23',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.2s',
    },
    featuredShowcase: {
      background: 'linear-gradient(145deg, rgba(60,0,0,0.8), rgba(30,0,0,0.7))',
      borderRadius: '20px',
      padding: '40px',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(227, 27, 35, 0.3)',
      boxShadow: '0 12px 40px rgba(227, 27, 35, 0.4)',
      margin: '40px 0 60px 0',
    },
    featuredHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '30px',
    },
    featuredLabel: {
      color: '#E31B23',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    featuredGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    },
    featuredContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    featuredTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    featuredText: {
      fontSize: '1.1rem',
      color: '#ccc',
      lineHeight: 1.7,
      marginBottom: '30px',
    },
    featuredResults: {
      display: 'flex',
      gap: '30px',
      marginBottom: '30px',
    },
    resultItem: {
      flex: 1,
    },
    resultNumber: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      color: '#E31B23',
      marginBottom: '5px',
    },
    resultLabel: {
      color: '#aaa',
      fontSize: '0.9rem',
    },
    featuredCta: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: '#E31B23',
      color: 'white',
      padding: '14px 30px',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    featuredImage: {
      width: '100%',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
    submitSection: {
      background: 'linear-gradient(145deg, rgba(30,30,30,0.8), rgba(20,20,20,0.7))',
      borderRadius: '20px',
      padding: '40px',
      textAlign: 'center',
      marginTop: '60px',
    },
    submitTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    submitText: {
      color: '#aaa',
      maxWidth: '800px',
      margin: '0 auto 30px',
      fontSize: '1.1rem',
    },
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '10px',
      margin: '40px 0',
    },
    filterButton: {
      padding: '10px 18px',
      backgroundColor: 'rgba(40, 40, 40, 0.8)',
      color: '#ccc',
      border: '1px solid rgba(227, 27, 35, 0.2)',
      borderRadius: '30px',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    filterActive: {
      backgroundColor: 'rgba(227, 27, 35, 0.2)',
      color: '#E31B23',
      border: '1px solid rgba(227, 27, 35, 0.5)',
    },
    scrollbarStyles: `
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `
  };

  const showcases = [
    {
      id: 1,
      title: "MindfulMedia's Audience Growth",
      category: "Creator",
      image: "/api/placeholder/400/200",
      description: "How a wellness content creator used PepperAds to grow their audience by 350% in just 6 months while increasing monthly revenue.",
      stats: { views: "8.2K", likes: "729", comments: "83" }
    },
    {
      id: 2,
      title: "TechBurst Agency ROI",
      category: "Agency",
      image: "/api/placeholder/400/200",
      description: "This digital agency multiplied client ROI by integrating PepperAds into their complete marketing strategy for SaaS clients.",
      stats: { views: "6.7K", likes: "493", comments: "61" }
    },
    {
      id: 3,
      title: "FitFusion's Engagement Strategy",
      category: "Brand",
      image: "/api/placeholder/400/200",
      description: "How FitFusion doubled their retention rates and increased user engagement through targeted PepperAds campaigns.",
      stats: { views: "7.4K", likes: "512", comments: "47" }
    },
    {
      id: 4,
      title: "StreamScape's Monetization",
      category: "Creator",
      image: "/api/placeholder/400/200",
      description: "A gaming streamer reveals their PepperAds setup that generated an additional $12,000 in quarterly revenue.",
      stats: { views: "12.3K", likes: "938", comments: "104" }
    },
    {
      id: 5,
      title: "EcoTrek's Community Building",
      category: "Brand",
      image: "/api/placeholder/400/200",
      description: "How an outdoor gear company built a thriving community and advocacy program with PepperAds integration.",
      stats: { views: "5.6K", likes: "381", comments: "32" }
    },
    {
      id: 6,
      title: "MediaHub's Client Success",
      category: "Agency",
      image: "/api/placeholder/400/200",
      description: "This boutique agency used PepperAds to deliver exceptional results for clients in competitive niches.",
      stats: { views: "4.9K", likes: "276", comments: "41" }
    }
  ];

  return (
    <div style={styles.body}>
      <style>{styles.scrollbarStyles}</style>
      
      {/* Hero Section */}
      <div style={styles.hero}>
        <img src="/api/placeholder/1200/500" alt="Community Showcases" style={styles.heroImg} />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Community <span style={styles.accent}>Showcases</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Real-world examples of how <span style={styles.accent}>creators, agencies, and marketers</span> are using PepperAds to grow their audience and revenue
          </p>
        </div>
      </div>
      
      <div style={styles.container}>
        {/* Featured Showcase */}
        <div style={styles.featuredShowcase}>
          <div style={styles.featuredHeader}>
            <span style={styles.featuredLabel}>
              <Award size={24} /> FEATURED SUCCESS STORY
            </span>
          </div>
          
          <div style={styles.featuredGrid}>
            <div style={styles.featuredContent}>
              <h2 style={styles.featuredTitle}>How StyleCode Scaled to 500K Subscribers</h2>
              <p style={styles.featuredText}>
                Fashion tech creator Mia Chen reveals her exact strategy using PepperAds to grow her audience from 50K to over 500K subscribers while 4x'ing her monthly revenue through strategic monetization.
              </p>
              
              <div style={styles.featuredResults}>
                <div style={styles.resultItem}>
                  <div style={styles.resultNumber}>450K+</div>
                  <div style={styles.resultLabel}>New Subscribers</div>
                </div>
                <div style={styles.resultItem}>
                  <div style={styles.resultNumber}>4x</div>
                  <div style={styles.resultLabel}>Revenue Growth</div>
                </div>
                <div style={styles.resultItem}>
                  <div style={styles.resultNumber}>87%</div>
                  <div style={styles.resultLabel}>Engagement Rate</div>
                </div>
              </div>
              
              <button style={styles.featuredCta}>
                Read Full Case Study <ArrowRight size={20} />
              </button>
            </div>
            
            <div>
              <img src="/api/placeholder/500/400" alt="Featured Showcase" style={styles.featuredImage} />
            </div>
          </div>
        </div>
        
        {/* Filter Buttons */}
        <div style={styles.filterContainer}>
          <button style={{...styles.filterButton, ...styles.filterActive}}>All</button>
          <button style={styles.filterButton}>Creators</button>
          <button style={styles.filterButton}>Agencies</button>
          <button style={styles.filterButton}>Brands</button>
          <button style={styles.filterButton}>E-commerce</button>
          <button style={styles.filterButton}>Content Publishers</button>
        </div>
        
        {/* Showcase Grid */}
        <div style={styles.showcaseGrid}>
          {showcases.map(showcase => (
            <div style={styles.showcaseCard} key={showcase.id}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>{showcase.title}</h3>
                <span style={styles.cardCategory}>{showcase.category}</span>
              </div>
              <img src={showcase.image} alt={showcase.title} style={styles.cardImage} />
              <p style={styles.cardText}>{showcase.description}</p>
              <div style={styles.cardFooter}>
                <div style={styles.cardStats}>
                  <span style={styles.statItem}>
                    <Users size={16} /> {showcase.stats.views}
                  </span>
                  <span style={styles.statItem}>
                    <Star size={16} /> {showcase.stats.likes}
                  </span>
                  <span style={styles.statItem}>
                    <TrendingUp size={16} /> {showcase.stats.comments}
                  </span>
                </div>
                <div style={styles.readButton}>
                  Read Case Study <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Submit Your Story Section */}
        <div style={styles.submitSection}>
          <h2 style={styles.submitTitle}>Share Your <span style={styles.accent}>Success Story</span></h2>
          <p style={styles.submitText}>
            Have you achieved remarkable results with PepperAds? We'd love to feature your success story in our community showcases. Get recognized by our global community and inspire others.
          </p>
          <button style={styles.featuredCta}>
            Submit Your Story <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityShowcases;