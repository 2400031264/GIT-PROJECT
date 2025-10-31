export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4" style={{ backgroundColor: '#334D2F' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-10" style={{ color: '#F4D03F' }}>Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div>
            <div className="mb-3">
              <svg 
                className="w-8 h-8 mx-auto" 
                fill="none" 
                stroke="#F4D03F" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
            </div>
            <h3 className="mb-2" style={{ color: '#F4D03F' }}>Address</h3>
            <p className="text-white opacity-90">
              123 Mediterranean Ave<br />
              Chicago, IL 60614
            </p>
          </div>

          {/* Phone */}
          <div>
            <div className="mb-3">
              <svg 
                className="w-8 h-8 mx-auto" 
                fill="none" 
                stroke="#F4D03F" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
            </div>
            <h3 className="mb-2" style={{ color: '#F4D03F' }}>Phone</h3>
            <p className="text-white opacity-90">
              (312) 555-0123
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="mb-3">
              <svg 
                className="w-8 h-8 mx-auto" 
                fill="none" 
                stroke="#F4D03F" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <h3 className="mb-2" style={{ color: '#F4D03F' }}>Email</h3>
            <p className="text-white opacity-90">
              hello@littlelemon.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
