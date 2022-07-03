import React from 'react';
import "./Style.css"

function Fortofolio() {
  return (
    <>
        <div className="container-fluid pt-5 pb-5 bg-light">
      <div className="container text-center">
        <h2 className="display-3" id="portofolio">Portofolio</h2>
        <p>
          Perkenalkan Nama Saya Dede Ahmad Saputra Pemilik UMKM CisolokStore saya berusia 29 tahun alamat usaha saya di Jl.Pajagan-Cisolok Desa Cikahuripan Kecamatan Cisolok Kabupaten Sukabumi kode pos 43366        
        </p>
        <div className="row pt-4 gx-4 gy-4">
          <div className="col-md-4">
            <div className="card crop-img">
              <img
                src="https://bikin.website/wp-content/themes/twentynineteen-child/img/feature-page/img_responsive.png"
                className="card-img-top"
                alt='gambar1'
                width="200"
                height="200"
              />
              <div className="card-body">
                <h5 className="card-title">Design Web Responsive</h5>
                <p className="card-text">
                  Kami membuat web secara Responsive agar bisa memudahkan anda dalam megakses di berbagai jenis Device yang berbeda-beda sesuai kebutuhan anda.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card crop-img">
              <img
                src="https://media.suara.com/pictures/480x260/2020/04/18/15789-cara-membuat-website.jpg"
                className="card-img-top"
                alt='gambar2'
                width="200"
                height="200"
              />
              <div className="card-body">
                <h5 className="card-title">Web Responsive dan bergaransi</h5>
                <p className="card-text">
                  Kami menyediakan garansi selama 3 bulan secara gratis apabila terjadi bug, dengan syarat dan ketentuan yang berlaku sesuai perjanjian.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card crop-img">
              <img
                src="https://www.elsevier.com/__data/assets/image/0004/823261/information-system-supporting-science.jpg"
                className="card-img-top"
                alt='gambar3'
                width="200"
                height="200"
              />
              <div className="card-body">
                <h5 className="card-title">Jasa Pemasangan LAN</h5>
                <p className="card-text">
                  Kami menyediakan jasa pesmasangan jaringan LAN dan kami siap membatu dengan sepenuh hati serta harga special dan paling terjangkau.
                </p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
   
    </>
  )
}

export default Fortofolio