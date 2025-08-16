import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Join the Hong Kong Aikido</h1>
          <p>
            We warmly invite you to our vibrant dojo! Proudly registered with the Aikikai World Headquarters in Tokyo, Japan, we are dedicated to bringing the refined martial arts techniques, profound philosophy, and time-honored traditions of Aikido to Hong Kong. Whether you seek to challenge yourself, explore a new pursuit, or connect with like-minded individuals, our dojo is an opportunity you won't want to miss.
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.videoSection}>
          <h2>Watch Our Aikido in Action</h2>
          <div className={styles.videoContainer}>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/YppKBhANxYw?autoplay=0&loop=1&playlist=YppKBhANxYw&rel=0"
              title="Aikido Honshinkai Demonstration"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h2>Why Choose Us?</h2>
        <p>
          Our Aikido classes are thoughtfully designed for Hong Kong residents, welcoming 
          people of all ages and backgrounds. Whether your aim is to refine martial arts 
          skills, foster self-discipline, or find a community of kindred spirits amidst 
          a busy lifestyle, our dojo offers the ideal environment for you.
        </p>

        <h2>What Sets Our Classes Apart?</h2>
        <p>
          Each session lasts two hours and takes place in a relaxed, cooperative atmosphere, 
          free from competitive pressure. Starting from the basics, you'll gradually progress 
          to advanced techniques, including:
        </p>
        <ul className={styles.schedule}>
          <li><strong>Dojo Etiquette:</strong> Immerse yourself in the distinctive culture of martial arts</li>
          <li><strong>Footwork:</strong> Develop agility and coordination</li>
          <li><strong>Joint Locks:</strong> Master subtle yet effective control techniques</li>
          <li><strong>Throws & Falls:</strong> Learn safe and dynamic movements</li>
        </ul>
        <p>
          Aikido is a martial art rooted in harmony, emphasizing "yielding to overcome" with 
          fluid, natural motions rather than force. You'll discover how to respond to challenges 
          with composure rather than confrontation, fostering a spirit of collaboration and an 
          appreciation for "harmony in diversity."
        </p>

        <h2>Aikido: Beyond Martial Arts, a Way of Life</h2>
        <p>
          Aikido training extends far beyond self-defense—it enriches your life. Through consistent practice, you'll gain:
        </p>
        <ul className={styles.schedule}>
          <li><strong>Enhanced Communication:</strong> Resolve conflicts with wisdom and clarity</li>
          <li><strong>Meaningful Connections:</strong> Build friendships transcending age and gender</li>
          <li><strong>Stronger Teamwork:</strong> Integrate a cooperative mindset into your personal and professional life</li>
        </ul>

        <h2>Begin Your Aikido Journey Today</h2>
        <p>
          Practicing Aikido is a journey of personal growth and community engagement. It's more than mastering techniques—it's about nurturing harmony and a sense of unity. Our dojo warmly welcomes individuals of all ages and genders to join us in this fulfilling and enriching experience.
        </p>
        <p>
          Are you ready to transform your life, unlock your potential, and become part of Hong Kong's passionate Aikido community? Take the first step today!
        </p>

        <div className={styles.schedule}>
          <h2>Class Information</h2>
          
          <h3>Schedule:</h3>
          <ul>
            <li>Tuesdays & Thursdays: 7:00 PM – 8:30 PM</li>
            <li>Saturdays: 4:00 PM – 6:00 PM</li>
          </ul>

          <h3>Location:</h3>
          <p>Room 5, 10/F, Century Centre, 44 Hung To Road, Kwun Tong, Kowloon</p>

          <h3>Fees:</h3>
          <ul>
            <li>HK$900/month (approximately 13-15 classes)</li>
            <li>50% discount for those aged 60 and above</li>
            <li>10% discount for 3 months prepaid</li>
          </ul>
          
          <p className={styles.feeNote}>
            For more fee details, visit: <a href="http://www.AikidoHonshinkai.com/join-us" target="_blank" rel="noopener noreferrer">www.AikidoHonshinkai.com/join-us</a>
          </p>

          <h3>Requirements:</h3>
          <p>Age 18+ (all genders); teens aged 8-17 require parental consent</p>

          <h3>Enrollment:</h3>
          <p>Open anytime. Please submit your application form and fees to the dojo instructor during class.</p>

          <h3>Free Trial Class:</h3>
          <p>One-time only, by appointment. Wear comfortable workout attire or a T-shirt and pants.</p>
        </div>

        <h2>Ready to Start? Contact Us Now</h2>
        <p>
          Eager to embark on this inspiring Aikido journey? Reach out to us today:
        </p>
        <ul className={styles.schedule}>
          <li><strong>Phone / WhatsApp:</strong> 9772 6403</li>
          <li><strong>Facebook Messenger</strong></li>
        </ul>
        <p>
          Learn more about our classes and join our thriving Hong Kong Aikido community. Together, let's embrace the "Way of Harmony!"
        </p>

        <div className={styles.socialMedia}>
          <h2>Connect With Us</h2>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/aikidohonshinkai" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/aikidohonshinkai" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#E4405F">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@aikidohonshinkai" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a href="https://twitter.com/aikidohonshinkai" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#000000">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.pinterest.com/aikidohonshinkai" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#E60023">
                <path d="M12 0a12 12 0 0 0-3.8 23.169c0-1 .017-2.254.08-3.36.87-3.7 5.3-4.7 5.3-4.7s-1.354-2.4-1.354-5.953c0-5.57 3.228-8.62 3.228-8.62s-2.105-3.751-2.105-9.41c0-6.915 5.005-10.5 5.005-10.5s-3.8-5.57-9.252-5.57c-6.18 0-10.58 4.51-10.58 12.61 0 5.2 3.155 9.818 3.155 9.818s-2.957 12.57-3.574 12.57c-.616 0-4.278-1.8-4.278-5.71 0-4.5 3.278-7.916 3.278-7.916s-.825-2.182-.825-5.28c0-4.914 3.576-9.41 10.207-9.41 5.585 0 9.193 3.574 9.193 8.411 0 5.123-3.574 9.41-8.595 9.41-1.63 0-3.155-.853-3.676-1.89 0 0-.806 3.097-.997 3.884-.363 1.56-1.33 3.19-1.984 4.23 1.49.464 3.07.712 4.76.712 11.97 0 21.668-9.688 21.668-21.668 0-5.27-1.932-10.26-5.432-14.151z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 