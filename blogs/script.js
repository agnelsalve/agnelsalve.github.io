$(document).ready(function () {
  // Toggle menu/navbar
  $('#menu').click(function () {
    $(this).toggleClass('fas fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  // Remove menu on scroll/click
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });

  // Scroll reveal animation
  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.heading', { origin: 'top' });
  ScrollReveal().reveal('.blog-post', { origin: 'bottom', interval: 200 });

  // Blog posts data
  const blogPosts = [
    {
      title: "🚀 SQL* ('IS') MORE THAN QUERYING.!!",
      excerpt: "💡 Ever wondered why SQL (Structured Query Language) is the backbone of Data? Let's break it down!",
      image: "../assets/images/sqlpost.png",
      platform: "linkedin",
      url: "https://www.linkedin.com/posts/agnelsalve_sql-dataanalytics-dataengineering-activity-7306230120837451777-8sWR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1QbiQB4Q36HwvfAhIWOQl33Lg0NT7Bcmg"
    },
    {
      title: "AWS Summit Mumbai 2025",
      excerpt: "Probus at AWS Summit Mumbai 2025—Accelerating the Future with Cloud, Automation & GenAI",
      image: "../assets/images/aws_blog.png",
      platform: "medium",
      url: "https://medium.com/@salveagnel/️-why-attending-the-aws-summit-mumbai-2025-was-totally-worth-it-6a36df8a4a27"
    },
    {
      title: "Data Engineer vs. Data Analyst",
      excerpt: "Same Data, Different Magic!",
      image: "../assets/images/medmpost1.png",
      platform: "medium",
      url: "https://medium.com/@salveagnel/data-engineer-vs-data-analyst-same-data-different-magic-77202a9817cd"
    }
  ];

  // Function to create blog post HTML
  function createBlogPost(post) {
    return `
      <a href="${post.url}" target="_blank" class="blog-post">
        <div class="post-image">
          <img draggable="false" src="${post.image}" alt="${post.title}" />
        </div>
        <div class="post-content">
          <h3 class="post-title">${post.title}</h3>
          <p class="post-excerpt">${post.excerpt}</p>
          <div class="post-platform">
            <i class="fab fa-${post.platform}"></i>
            ${post.platform === 'linkedin' ? 'LinkedIn Post' : 'Medium Article'}
          </div>
        </div>
      </a>
    `;
  }

  // Load blog posts
  const blogGrid = document.getElementById('blogGrid');
  blogGrid.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i></div>';

  setTimeout(() => {
    blogGrid.innerHTML = blogPosts.map(post => createBlogPost(post)).join('');
    // Reinitialize ScrollReveal for new elements
    ScrollReveal().reveal('.blog-post', { origin: 'bottom', interval: 200 });
  }, 1000);

  // Scroll to top button
  const scrollBtn = document.querySelector("#scroll-top");

  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }

  scrollBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
}); 