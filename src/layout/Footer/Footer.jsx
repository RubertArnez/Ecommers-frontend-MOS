import './Footer.css';
import React from 'react';
// import { faFacebook } from '@fortawesome/fontawesome-svg-core';

export default function Fotter() {
	return (
		<div>
			<footer className="footer-container">
				<section className="footer-box">
					<div className="social">
						<i className="fa-brands fa-facebook "></i>
						<i className="fa-brands fa-whatsapp "></i>
						<i className="fa-brands fa-instagram "></i>
						<i className="fa-brands fa-tiktok "></i>
					</div>
					<div className="linea"></div>
					<div className="social">
						<div className="footer-centro">
							<picture>
								<img
									className="logo-img"
									src="../src/assets/imagenes/logo.png"
									width="120"
									height="250"
								/>
							</picture>
						</div>
					</div>
					<div className="linea"></div>
					<div className="social">
						<div>
							<div className="flex items-center gap-3 mt-6">
								{/* <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a> */}
							</div>
							<div className="mt-6">
								<div className="flex items-center gap-3">
									{/* <FaLocationArrow /> */}
									<p>San justo. Buenos Aires - Argentina</p>
								</div>
								<div className="flex items-center gap-3 mt-3">
									{/* <FaMobileAlt /> */}
									<p>+549 1168351628</p>
								</div>
							</div>
						</div>
						<ul className="social_list">
							{/* <li><i className="fa-solid fa-envelope" style="color: #ffffff;"></i> Correo</li>
                    <li><i className="fa-solid fa-phone" style="color: #ffffff;"></i> Teléfono</li>
                    <li><i className="fa-solid fa-location-dot" style="color: #ffffff;"></i> Dirección</li>  */}
						</ul>
					</div>
				</section>
			</footer>
		</div>
	);
}
