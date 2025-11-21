export default function Home() {
  return (
    <div>
      {/* Hero Section - Dark & Dramatic */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Dedicated to the One
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-slate-200 italic">
            1 Corinthians 13:13
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-slate-300 leading-relaxed">
            "Three things will last forever — faith, hope and love — and the greatest of these is love."
          </p>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
            At Recklessly Loved Ministries, we believe in reaching the lost, serving the hurting, and showing the love of Jesus with boldness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#about" className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-md hover:bg-slate-100 transition-colors">
              Learn More
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-slate-900 transition-colors">
              Join Us
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section - Light & Clean */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Recklessly Loved Ministries launched in 2019 when pastors Seth & Amy Newman answered God's call to ministry. Since then, we've served through church-based ministry and community outreach across states.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                We stand in the gap between God and the lost — bringing the hope of Christ through visible acts of service.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Vision</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">✝️</div>
                <p className="text-lg text-slate-700">See souls saved for His Kingdom</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <p className="text-lg text-slate-700">Stand with the brokenhearted and oppressed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">❤️</div>
                <p className="text-lg text-slate-700">Extend hospitality, generosity, and love to all</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Anchors - Dark Navy Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Scripture Anchors We Live By</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <p className="text-lg italic mb-2">"The Spirit of the Sovereign LORD is upon me…"</p>
              <p className="text-slate-400">— Isaiah 61:1</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <p className="text-lg italic mb-2">"Let love of your fellow believers continue…"</p>
              <p className="text-slate-400">— Hebrews 13:1-2</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <p className="text-lg italic mb-2">"I can do all things through Him who strengthens me…"</p>
              <p className="text-slate-400">— Philippians 4:13</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <p className="text-lg italic mb-2">"Whoever gives to one of these little ones…"</p>
              <p className="text-slate-400">— Matthew 10:42</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Light Gray */}
      <section id="team" className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-slate-700">
              Passionate in heart, committed in action
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Lead Pastors</h3>
            <h4 className="text-2xl font-semibold text-slate-800 mb-4">Seth & Amy Newman</h4>
            <p className="text-lg text-slate-700">
              Launching the ministry and overseeing vision, outreach, and prayer ministry.
            </p>
          </div>

          <p className="text-center text-xl text-slate-800 italic max-w-2xl mx-auto">
            Together we serve with one aim: to show and share the reckless love of Christ.
          </p>
        </div>
      </section>

      {/* Outreach & Impact - Bold Dark Section */}
      <section id="outreach" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Outreach & Impact
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">Outreach</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our ministry isn't confined to the walls of a building. Street outreach, community events, and hands-on service into neighborhoods have been a founding element of our work.
              </p>
              <p className="text-lg text-slate-400 italic mt-6">
                "Since stepping out in faith… this ministry is certainly not limited to the walls of the church…"
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Impact</h3>
              <ul className="space-y-4 text-lg text-slate-300">
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">•</span>
                  <span>Countless lives touched by prayer, provision and presence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">•</span>
                  <span>Communities served through feeding, relief, evangelism</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">•</span>
                  <span>Stories of transformation, hope, and new beginnings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Give Section - Light with Strong CTA */}
      <section id="give" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            Give / Support
          </h2>
          <p className="text-xl text-slate-700 mb-12 leading-relaxed">
            Your generosity enables us to carry out ministry — feeding the hungry, reaching the lost, praying for the hurting, and bringing hope through action.
          </p>

          <div className="bg-slate-50 rounded-lg p-12 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Ways to Support</h3>
            <div className="space-y-4 text-lg text-slate-700">
              <p>• Online giving (easy & secure)</p>
              <p>• Monthly partnership</p>
              <p>• One-time gifts for outreach events</p>
            </div>
          </div>

          <p className="text-2xl font-semibold text-slate-900 mb-4">
            Every gift is powerful. Every gift matters.
          </p>
          <p className="text-lg text-slate-700 italic mb-8">
            Thank you for standing with us as we serve the One who loves us so recklessly.
          </p>

          <button className="px-12 py-4 bg-slate-900 text-white font-semibold rounded-md hover:bg-slate-800 transition-colors text-lg">
            Give Now
          </button>
        </div>
      </section>

      {/* Contact Section - Dark Footer Style */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Connect With Us
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              We'd love to hear from you! Whether you're interested in volunteering, partnering, have a prayer need, or simply want to connect.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="How can we pray for you or connect with you?"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-white text-slate-900 font-semibold rounded-md hover:bg-slate-100 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">Follow us, join us, partner with us in showing the love of Jesus.</p>
            <div className="flex justify-center gap-6 text-3xl">
              <a href="#" className="hover:text-slate-300 transition-colors">📘</a>
              <a href="#" className="hover:text-slate-300 transition-colors">📷</a>
              <a href="#" className="hover:text-slate-300 transition-colors">🎵</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-slate-400 text-center">
        <p className="text-sm">
          © 2025 Recklessly Loved Ministries. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
