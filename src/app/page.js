import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h3 style={{ color: '#9f9f45' }}>TARAL GOLD </h3>

        <div>
          <div style={{ textAlign: 'center' }}>
            <h1>
              <span>C</span>
              <span>O</span>
              <span>M</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
            </h1>
            <h1>
              <span>S</span>
              <span>O</span>
              <span>O</span>
              <span>N</span>
            </h1>
          </div>
        </div>
        <div style={{ marginTop: '10px' }}>
          <h6>A tarality product.</h6>
        </div>
      </div>
    </main>
  )
}
