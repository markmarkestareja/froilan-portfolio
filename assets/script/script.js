// Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-anim");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Stops observing after the first animation
          }
        });
      },
      { threshold: 0.5 } // Adjust depending on when you want the animation to start
    );
  
    elements.forEach((el) => observer.observe(el));
  });
  

// automatically download the CV pdf file
function downloadCv(){
    const link = document.getElementById('download-CV');
    link.href = 'assets/CV.pdf';
    link.download = 'CV.pdf';
    link.click();
}

