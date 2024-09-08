import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi | BengCare',
  description: 'BengCare, Connecting you to trusted automotive services!',
};

export default function PrivacyPolicyPage() {
  return (
    <main className='layout max-w-4xl py-10'>
      <article className='prose prose-gray prose-sm md:prose-base prose-h1:font-bold prose-a:text-primary-700 min-w-full'>
        <div className='text-center'>
          <h1>Kebijakan Privasi Aplikasi BengCare</h1>
          <h4>Terakhir diubah pada: 08 September 2024</h4>
        </div>
        <p>
          Kami percaya bahwa Anda berhak membuat keputusan yang tepat mengenai
          data pribadi Anda. Kebijakan Privasi ini menjelaskan jenis data
          pribadi yang dikumpulkan oleh Aplikasi BengCare dan afiliasinya
          (“BengCare,” “kami,” atau “kita”), alasan penggunaannya, dengan siapa
          kami membaginya, dan langkah-langkah yang kami ambil untuk
          melindunginya, baik melalui situs kami di{' '}
          <a href='www.bengcare.com'>www.bengcare.com</a> maupun melalui
          aplikasi seluler BengCare (&quot;Aplikasi&quot;).
        </p>

        <p>
          <strong>Data pribadi</strong> berarti informasi apapun yang terkait
          dengan Anda yang dapat mengidentifikasi Anda secara langsung maupun
          tidak langsung, baik dari satu informasi atau gabungan dari beberapa
          informasi tentang Anda, seperti nama Anda, alamat, tanggal lahir,
          pekerjaan, nomor telepon, alamat email, jenis kelamin, nomor polisi
          kendaraan, dan informasi lainnya. Kebijakan Privasi ini berlaku untuk
          pengguna Aplikasi BengCare (“Anda”). Harap luangkan waktu sejenak
          untuk membiasakan diri dengan Kebijakan Privasi kami, dan hubungi kami
          jika Anda memiliki pertanyaan.
        </p>

        <div>
          <h3>Data Pribadi yang Kami Kumpulkan</h3>
          <p>
            Bagian ini menjelaskan kategori Data Pribadi yang dapat kami
            kumpulkan dan sumber dari Data Pribadi tersebut. Kami dapat
            mengumpulkan kategori berikut ini dari Data Pribadi:
          </p>

          <ol>
            <li>
              <p>
                <strong>
                  Data yang Dikumpulkan Kapanpun Anda Menggunakan Aplikasi
                </strong>
              </p>

              <p>
                Saat Anda menggunakan Aplikasi sebagai pengguna, kami perlu
                mengumpulkan Data Pribadi yang mengidentifikasi atau dapat
                digunakan untuk mengidentifikasi, menghubungi, atau menemukan
                individu atau perangkat terkait dengan informasi tersebut. Tanpa
                data tersebut, kami mungkin tidak dapat memberikan Anda seluruh
                jasa yang diminta. Informasi ini termasuk, namun tidak terbatas
                pada:
              </p>

              <ul>
                <li>Nama lengkap Anda</li>
                <li>
                  Alamat surat elektronik <i>(email)</i>
                </li>
                <li>Alamat domisili</li>
                <li>Nomor telepon</li>
                <li>Nomor pemesanan atau invoice</li>
                <li>
                  Rincian pemesanan Anda (seperti nomor polisi, tanggal, dan
                  jenis layanan)
                </li>
                <li>
                  Plat nomor kendaraan dan detail kendaraan (merk, tahun
                  pembuatan, warna)
                </li>
                <li>Ulasan atau feedback yang Anda berikan</li>
              </ul>

              <p>
                Dalam beberapa kasus, kami dapat meminta pengguna untuk
                memberikan dokumen yang dikeluarkan oleh pemerintah sebagai
                bagian dari proses know your customer (KYC) apabila diwajibkan
                berdasarkan undang-undang yang berlaku atau Ketentuan Penggunaan
                Aplikasi BengCare untuk mengidentifikasi Anda dan memproses
                permintaan, pembelian, pemesanan, dan/atau layanan
                pelengkap/tambahan terkait layanan yang Anda gunakan seperti
                layanan keuangan tertentu, proses pengembalian dana, klaim
                garansi, serta pembatalan pemesanan.
              </p>
            </li>

            <li>
              <p>
                <strong>
                  Data yang Dikumpulkan dari Anda untuk Memproses Registrasi dan
                  Manajemen Akun
                </strong>
              </p>

              <ul>
                <li>
                  Ketika Anda mendaftar dan membuat akun di dalam Aplikasi
                  sebagai pengguna, kami dapat meminta Anda untuk memberikan
                  Data Pribadi tertentu, seperti nama, nomor telepon, atau
                  alamat email.
                </li>
                <li>
                  Jika Anda adalah pengguna BengCare, kami dapat meminta Anda
                  untuk memberikan identifikasi pengguna BengCare dan kredensial
                  masuk untuk mengakses akun Anda.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </article>
    </main>
  );
}
