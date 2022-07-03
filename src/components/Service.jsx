import React from 'react'

function Service() {
  return (
    <>
     <div className="container-fluid layanan pt-5 pb-5">
      <div className="container text-center">
        <h2 className="display-3" id="service">Service</h2>
        <p>
          Kami melayani penjulan Baju,Jas Hujan, baju Syar'i dan Jasa Design Web
        </p>
        
        <div className="row pt-4 bt-4">
          <div className="col-md-4">
            <span className="lingkaran"><i className="fas fa-code fa-5x"></i></span>
            <br></br>
            <h3 className="mt-3">Programming</h3>
            <p>
             Kami menggunakan teknologi terupdate untuk membuat sebuah website menggunakan HTML5, CSS3, Javascript, React.js, Node.js, Express.js, MySQL dan Restfulls API seperti Axios dan Redux untuk management State untuk aplikasi yang kompleks
            </p>
          </div>

          <div className="col-md-4">
            <span className="lingkaran"><i className="fas fa-palette fa-5x"></i></span>
            <h3 className="mt-4">Design</h3>
            <p>
              Mendesign Kebutuhan Web anda secara professional dengan harga terjangkau dengan service yang memuaskan serta bertanggung jawab penuh bila ada bug di kemudian hari sesuai biaya yang telah di sepakati kedua belah pihak.
            </p>
          </div>

          <div className="col-md-4">
            <span className="lingkaran"
              ><i className="fas fa-network-wired fa-5x"></i></span>
            <h3 className="mt-4">Networking</h3>
            <p>
              Jasa pemasangan jaringan Kabel LAN untuk para UMKM dengan modal yang terjangkau agar memudahkan usaha anda semakin berkembang pesat kami siap membantu dari hulu sampai hilir dan bertanggung jawab apabila terjadi troubleshooting
            </p>
          </div>
        </div>
      </div>
    </div>   
    </>
  )
}

export default Service
