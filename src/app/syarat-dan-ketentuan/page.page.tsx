import * as React from 'react';

export default function TermsAndConditionsPage() {
  return (
    <main className='layout max-w-4xl py-10'>
      <article className='prose prose-gray prose-sm md:prose-base prose-h1:font-bold prose-a:text-primary-700 min-w-full'>
        <h1 className='text-center'>Syarat dan Ketentuan</h1>

        <p>
          Aplikasi ini (&quot;Aplikasi&quot;) dimiliki dan dioperasikan oleh PT.
          BengCare Indonesia (selanjutnya disebut “BengCare”), sebuah perusahaan
          yang bergerak di bidang platform digital layanan perbaikan dan
          perawatan kendaraan, yang didirikan berdasarkan hukum yang berlaku di
          Republik Indonesia. Dengan menggunakan Aplikasi ini, Anda (pengguna)
          menyetujui syarat dan ketentuan yang ditetapkan di bawah ini. Jika
          Anda tidak setuju dengan syarat dan ketentuan ini, harap tidak
          menggunakan Aplikasi ini.
        </p>

        <ol className='[&>li::marker]:font-semibold [&>li::marker]:text-gray-800'>
          <li>
            <p>
              <strong>Integritas Data</strong>
            </p>

            <p>
              Anda menyatakan bahwa semua informasi yang Anda berikan melalui
              Aplikasi BengCare adalah benar, akurat, mutakhir, dan lengkap.
              Anda bertanggung jawab untuk memperbarui dan memperbaiki informasi
              tersebut sesuai kebutuhan.
            </p>
          </li>

          <li>
            <p>
              <strong>Kebijakan Privasi</strong>
            </p>

            <p>
              Anda menyetujui bahwa informasi pribadi yang kami peroleh dari
              Anda (baik melalui Aplikasi ini, email, telepon, atau cara lain)
              akan kami kumpulkan, simpan, dan proses sesuai dengan Kebijakan
              Privasi kami. Kami dapat memperbarui Kebijakan Privasi dari waktu
              ke waktu dan mengumumkan versi terbaru melalui Aplikasi.
            </p>
          </li>

          <li>
            <p>
              <strong>Lisensi dan Akses Aplikasi</strong>
            </p>

            <p>
              Semua konten yang terdapat dalam Aplikasi adalah properti
              eksklusif BengCare atau pemegang lisensinya, dan dilindungi oleh
              hukum hak cipta dan hukum lainnya yang berlaku. Anda diberikan hak
              terbatas untuk mengakses dan menggunakan Aplikasi ini untuk tujuan
              yang sah sesuai dengan ketentuan ini. Penggunaan lain yang tidak
              diizinkan termasuk namun tidak terbatas pada pengunduhan,
              penyalinan, atau penggunaan konten yang bertujuan untuk bersaing
              dengan BengCare atau untuk keuntungan pihak ketiga tanpa izin
              tertulis dari BengCare.
            </p>
          </li>

          <li>
            <p>
              <strong>Pembatalan Layanan</strong>
            </p>

            <p>
              BengCare berhak menolak atau membatalkan akses Anda ke Aplikasi,
              membatasi atau menghentikan akses Anda setiap waktu tanpa
              pemberitahuan, jika kami menemukan adanya pelanggaran terhadap
              syarat dan ketentuan ini.
            </p>
          </li>

          <li>
            <p>
              <strong>Ganti Rugi</strong>
            </p>

            <p>
              Anda setuju untuk mengganti rugi dan membebaskan BengCare dari
              setiap klaim, kerugian, atau biaya yang timbul dari pelanggaran
              Anda terhadap syarat dan ketentuan ini, termasuk tindakan
              penipuan, kelalaian, atau pelanggaran terhadap hak pihak ketiga.
            </p>
          </li>
        </ol>

        <p>
          Dengan menggunakan Aplikasi BengCare, Anda setuju untuk terikat oleh
          semua syarat dan ketentuan ini. Jika ada perubahan atau pembaruan
          terhadap syarat dan ketentuan ini, kami akan mengumumkannya melalui
          Aplikasi ini. Harap periksa secara berkala untuk memastikan Anda
          mengetahui setiap perubahan yang ada.
        </p>
      </article>
    </main>
  );
}
