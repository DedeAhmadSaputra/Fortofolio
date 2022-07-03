import React from 'react';
import "./Style.css"

function About() {
  return (
    <>
        <div className="container-fluid pt-5 pb-5">
      <div className="container">
        <h2 className="display-3 text-center" id="about">About</h2>
        <p className="text-center">
          Saya seorang Freelancer Front End Developer sejak tahun 2015 sampai sekarang
        </p>
        <div className="clearfix pt-5">
          <img src="img1.png" alt="gambar"
          className="col-md-6 float-md-end mb-3 crop-img"
          width='300'
          height='300'
          />
          <p>
            Saya menerima jasa pembuatan aplikasi Web baik bagi Mahasiswa Tugas Akhir jurusan Informatika, UMKM ataupun perusahaan Berbadan hukum dengan harga terjangkau
          </p>
          <br></br>
          <p>
            Kami bertanggung jawab penuh apabila terjadi bug di kemudian hari anda bisa menghubungi kami kembali karna bagi kami menjaga kejujuran dan tanggung jawab terhadap jasa kami adalah yang paling Utama.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About