import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image src="/images/gold.png" alt="gold_img" width={100} height={100} />
      </div>
      <div className={styles.center}>
        <h3 style={{ color: '#9f9f45' }}>TARAL GOLD </h3>
        <div style={{ marginTop: '10px' }}>
          <h6>A Tarality product.</h6>
        </div>
        <div style={{ marginTop: '20px' }}>
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
      </div>
    </main>
  )
}
