import React from 'react'
import ReactDOM from 'react-dom/client'
import { motion } from 'framer-motion'
import './styles.css'

const postLinks = [
  'https://www.facebook.com/share/p/1BJcnNNvRm/',
  'https://www.facebook.com/share/p/1H2WfyGDjY/',
  'https://www.facebook.com/share/p/1LgrrZcYJV/',
  'https://www.facebook.com/share/p/1F1nHQRXoT/',
  'https://www.facebook.com/share/p/18Lh1k15bg/',
  'https://www.facebook.com/share/p/1JTLQcngvs/',
  'https://www.facebook.com/share/p/1ApcUghQkj/',
]

function FacebookPost({ url, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, rotateX: -6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="article-card"
    >
      <div className="paper-noise" />
      <header className="article-head">Archive Leaf {String(index + 1).padStart(2, '0')}</header>
      <div className="fb-post" data-href={url} data-width="500" data-show-text="true" />
    </motion.article>
  )
}

function App() {
  return (
    <div className="site-shell">
      <div className="paper-overlay" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="loader"
      >
        <span>Opening Archive...</span>
      </motion.div>

      <section className="cover" id="top">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="cover-card"
        >
          <p className="typewriter">The Silhouette Press</p>
          <h1>ARCHIVE EDITION</h1>
          <p className="subtitle">Official publication identity from Facebook: thesilhouettesillawitnhs</p>
          <a href="#archive" className="enter-btn">Enter Newspaper Vault</a>
        </motion.div>
      </section>

      <main id="archive" className="archive-wrap">
        <h2>The Silhouette Historical Dispatches</h2>
        <p>Curated newspaper presentation of embedded Facebook publication posts.</p>
        <section className="columns">
          {postLinks.map((url, index) => (
            <FacebookPost url={url} index={index} key={url} />
          ))}
        </section>
      </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

const injectFacebookSDK = () => {
  if (document.getElementById('facebook-jssdk')) return
  const js = document.createElement('script')
  js.id = 'facebook-jssdk'
  js.async = true
  js.defer = true
  js.crossOrigin = 'anonymous'
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0'
  document.body.appendChild(js)
}

injectFacebookSDK()
