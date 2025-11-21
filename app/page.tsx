export default function Home() {
  return (
    <div>
      {/* Hero Section - Dark & Dramatic */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tight leading-none">
            Dedicated to the One
          </h1>
          <p className="text-3xl md:text-4xl mb-6 text-slate-200 italic font-medium">
            1 Corinthians 13:13
          </p>
          <p className="text-2xl md:text-3xl mb-10 max-w-4xl mx-auto text-slate-300 leading-relaxed font-light">
            "Three things will last forever — faith, hope and love — and the greatest of these is love."
          </p>
          <p className="text-2xl md:text-4xl mb-16 max-w-4xl mx-auto font-normal leading-relaxed">
            At Recklessly Loved Ministries, we believe in reaching the lost, serving the hurting, and showing the love of Jesus with boldness.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#about" className="px-12 py-6 bg-white text-slate-900 text-xl font-bold rounded-lg hover:bg-slate-100 transition-colors">
              Learn More
            </a>
            <a href="#contact" className="px-12 py-6 border-2 border-white text-white text-xl font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-colors">
              Join Us
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section - Light & Clean */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-7xl md:text-8xl font-black text-slate-900 mb-6">
              Who We Are
            </h2>
            <div className="w-32 h-2 bg-slate-900 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20 mb-24">
            <div>
              <h3 className="text-5xl font-bold text-slate-900 mb-8">Our Story</h3>
              <p className="text-2xl text-slate-700 leading-relaxed">
                Recklessly Loved Ministries launched in 2019 when pastors Seth & Amy Newman answered God's call to ministry. Since then, we've served through church-based ministry and community outreach across states.
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-slate-900 mb-8">Our Mission</h3>
              <p className="text-2xl text-slate-700 leading-relaxed">
                We stand in the gap between God and the lost — bringing the hope of Christ through visible acts of service.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-16">
            <h3 className="text-5xl font-bold text-slate-900 mb-12 text-center">Our Vision</h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-7xl mb-6">✝️</div>
                <p className="text-2xl text-slate-700 font-medium leading-relaxed">See souls saved for His Kingdom</p>
              </div>
              <div className="text-center">
                <div className="text-7xl mb-6">🤝</div>
                <p className="text-2xl text-slate-700 font-medium leading-relaxed">Stand with the brokenhearted and oppressed</p>
              </div>
              <div className="text-center">
                <div className="text-7xl mb-6">❤️</div>
                <p className="text-2xl text-slate-700 font-medium leading-relaxed">Extend hospitality, generosity, and love to all</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Anchors - Dark Navy Section */}
      <section className="py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-6xl font-black text-center mb-16">Scripture Anchors We Live By</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-slate-800 p-10 rounded-2xl">
              <p className="text-2xl italic mb-4 leading-relaxed">"The Spirit of the Sovereign LORD is upon me…"</p>
              <p className="text-slate-400 text-xl">— Isaiah 61:1</p>
            </div>
            <div className="bg-slate-800 p-10 rounded-2xl">
              <p className="text-2xl italic mb-4 leading-relaxed">"Let love of your fellow believers continue…"</p>
              <p className="text-slate-400 text-xl">— Hebrews 13:1-2</p>
            </div>
            <div className="bg-slate-800 p-10 rounded-2xl">
              <p className="text-2xl italic mb-4 leading-relaxed">"I can do all things through Him who strengthens me…"</p>
              <p className="text-slate-400 text-xl">— Philippians 4:13</p>
            </div>
            <div className="bg-slate-800 p-10 rounded-2xl">
              <p className="text-2xl italic mb-4 leading-relaxed">"Whoever gives to one of these little ones…"</p>
              <p className="text-slate-400 text-xl">— Matthew 10:42</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Light Gray */}
      <section id="team" className="py-32 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-7xl md:text-8xl font-black text-slate-900 mb-6">
              Our Team
            </h2>
            <p className="text-3xl text-slate-700 font-medium">
              Passionate in heart, committed in action
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-5xl font-bold text-slate-900 mb-6">Lead Pastors</h3>
            <h4 className="text-4xl font-semibold text-slate-800 mb-8">Seth & Amy Newman</h4>
            <p className="text-2xl text-slate-700 leading-relaxed">
              Launching the ministry and overseeing vision, outreach, and prayer ministry.
            </p>
          </div>

          <p className="text-center text-3xl text-slate-800 italic max-w-3xl mx-auto leading-relaxed">
            Together we serve with one aim: to show and share the reckless love of Christ.
          </p>
        </div>
      </section>

      {/* Outreach & Impact - Bold Dark Section */}
      <section id="outreach" className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-7xl md:text-9xl font-black mb-8">
              Outreach & Impact
            </h2>
            <div className="w-32 h-2 bg-white mx-auto mb-10"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <div>
              <h3 className="text-5xl font-bold mb-8">Outreach</h3>
              <p className="text-2xl text-slate-300 leading-relaxed mb-8">
                Our ministry isn't confined to the walls of a building. Street outreach, community events, and hands-on service into neighborhoods have been a founding element of our work.
              </p>
              <p className="text-2xl text-slate-400 italic">
                "Since stepping out in faith… this ministry is certainly not limited to the walls of the church…"
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-8">Our Impact</h3>
              <ul className="space-y-6 text-2xl text-slate-300">
                <li className="flex items-start">
                  <span className="mr-4 text-3xl">•</span>
                  <span className="leading-relaxed">Countless lives touched by prayer, provision and presence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-3xl">•</span>
                  <span className="leading-relaxed">Communities served through feeding, relief, evangelism</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-3xl">•</span>
                  <span className="leading-relaxed">Stories of transformation, hope, and new beginnings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Give Section - Light with Strong CTA */}
      <section id="give" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-7xl md:text-8xl font-black text-slate-900 mb-12">
            Give / Support
          </h2>
          <p className="text-3xl text-slate-700 mb-16 leading-relaxed">
            Your generosity enables us to carry out ministry — feeding the hungry, reaching the lost, praying for the hurting, and bringing hope through action.
          </p>

          <div className="bg-slate-50 rounded-2xl p-16 mb-16">
            <h3 className="text-4xl font-bold text-slate-900 mb-10">Ways to Support</h3>
            <div className="space-y-6 text-2xl text-slate-700">
              <p>• Online giving (easy & secure)</p>
              <p>• Monthly partnership</p>
              <p>• One-time gifts for outreach events</p>
            </div>
          </div>

          <p className="text-4xl font-bold text-slate-900 mb-6">
            Every gift is powerful. Every gift matters.
          </p>
          <p className="text-2xl text-slate-700 italic mb-12">
            Thank you for standing with us as we serve the One who loves us so recklessly.
          </p>

          <button className="px-16 py-6 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors text-2xl">
            Give Now
          </button>
        </div>
      </section>

      {/* Contact Section - Dark Footer Style */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-7xl md:text-8xl font-black mb-10">
              Connect With Us
            </h2>
            <p className="text-3xl text-slate-300 leading-relaxed">
              We'd love to hear from you! Whether you're interested in volunteering, partnering, have a prayer need, or simply want to connect.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-16">
            <form className="space-y-8">
              <div>
                <label className="block text-xl font-semibold mb-3">Name</label>
                <input type="text" className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white text-xl placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xl font-semibold mb-3">Email</label>
                <input type="email" className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white text-xl placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-xl font-semibold mb-3">Message</label>
                <textarea rows={6} className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white text-xl placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="How can we pray for you or connect with you?"></textarea>
              </div>
              <button type="submit" className="w-full py-6 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors text-2xl">
                Send Message
              </button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-2xl mb-8">Follow us, join us, partner with us in showing the love of Jesus.</p>
            <div className="flex justify-center gap-8 text-5xl">
              <a href="#" className="hover:text-slate-300 transition-colors">📘</a>
              <a href="#" className="hover:text-slate-300 transition-colors">📷</a>
              <a href="#" className="hover:text-slate-300 transition-colors">🎵</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black text-slate-400 text-center">
        <p className="text-xl">
          © 2025 Recklessly Loved Ministries. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
