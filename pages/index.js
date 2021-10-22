import styles from './../styles/Home.module.css';
import Image from 'next/image';
export default function Home() {
  return (
    <div className={styles.article}>
           <div className={styles.konten}>
            <Image src="/gambar/penyu.jpg" width={90} height={90} alt="Bla bla" />
            <div className={styles.judul}>
                <a href="penyu.html">Penyu</a>
            </div>
           <p>Penyu adalah hewan yang banyak di temukan bertelur di beberapa pesisir pantai di Indonesia sejak dahulu.</p>
           </div>
           <div className={styles.konten}>
            <Image src="/gambar/ikan badut.jpg" width={90} height={90} alt="Bla bla" />
            <div className={styles.judul}>
                <a href="ikan-badut.html">Ikan Badut</a>
            </div>
        
           <p>Ikan badut ini dapat dikenali dengan warna jingganya ikan ini tumbuh mencapai 8 cm serta termasuk dalam ikan terpopuler didunia. </p>
           </div>
           <div className="konten">
            <Image src="/gambar/lion fish.jpg" width={90} height={90} alt="Bla bla" />
            <div className="judul">
                <a href="lion-fish.html">Lion Fish</a>
            </div>
           <p>Lionfish atau volitans adalah ikan berbisa milik keluarga yang Scorpaenidae terjemahan harfiah berarti ikan kalajengking.</p>
           </div>
           <div className="konten">
            <Image src="/gambar/moorish.jpg" width={90} height={90} alt="Bla bla" />
            <div className="judul">
                <a href="moorish-idol.html">Moorish Idol</a>
            </div>
           <p>Ikan Moorish Idol adalah salah satu ikan yang cukup populer di kalangan ara hobiis ikan hias karena bentuknya yang unik dan pola warnanya yang menarik.</p>
           </div>
      </div>
  )
}
