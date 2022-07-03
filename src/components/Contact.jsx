import React from 'react';
import "./Style.css";

function Contact() {
  return (
    <>
        <div className="container-fluid pt-5 pb-5 kontak">
      <div className="container">
        <h2 className="display-3 text-center" id="contact">Contact</h2>
        <p className="text-center">
         Silahkan Tinggal kan pesan kepada kami atau bisa menghubungi pak Dede Langsung melalui  Via Whatsapp: 085703722816
        </p>
        <div className="row pb-3">
          <div className="col-md-6">
            <input
              className="form-control form-control-lg mb-3"
              type="text"
              placeholder="Nama"
            />
            <input
              className="form-control form-control-lg mb-3"
              type="text"
              placeholder="Email"
            />
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="No. Phone"
            />
          </div>
          <div className="col-md-6">
            <textarea className="form-control form-control-lg" rows="5"></textarea>
          </div>
        </div>
        <div className="col-md-3 mx-auto text-center">
          <button type="button" className="btn btn-danger btn-lg">
            Kirim Pesan
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact