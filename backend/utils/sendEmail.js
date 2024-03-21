// import nodemailer from "nodemailer";

// const sendEmail = async (email, subject, text) => {
// 	try {
// 		console.log(subject)
// 		console.log(text)
// 		const transporter = nodemailer.createTransport({
// 			host: process.env.HOST,
// 			service: process.env.SERVICE,
// 			port: Number(process.env.EMAIL_PORT),
// 			secure: Boolean(process.env.SECURE),
// 			auth: {
// 				user: process.env.USER,
// 				pass: process.env.PASS,
// 			},
// 		});

// 		await transporter.sendMail({
// 			from: process.env.USER,
// 			to: email,
// 			subject: subject,
// 			text: text,
// 		});
// 		console.log("email sent successfully");
// 	} catch (error) {
// 		console.log("email not sent!");
// 		console.log(error);
// 		return error;
// 	}
// };

// export default sendEmail;

// // mailer.js
// import nodemailer from 'nodemailer';

// // Create a transporter object using SMTP transport
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'cocpasiya@gmail.com',
//     pass: '0789657504'
//   }
// });

// // Define the mail options
// const mailOptions1 = {
//   from: 'pasiya20024@gmail.com',
//   to: 'pasiya20024@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// // Define another set of mail options
// const mailOptions2 = {
//   from: 'pasiya20024@gmail.com',
//   to: 'pasiya20024@gmail.com, pasiya20024@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// // Define yet another set of mail options with HTML content
// const mailOptions3 = {
//   from: 'pasiya20024@gmail.com',
//   to: 'pasiya20024@gmail.com',
//   subject: 'Sending Email using Node.js',
//   html: '<h1>Welcome</h1><p>That was easy!</p>'
// };

// // Function to send email
// const sendEmail = () => {
//   return new Promise((resolve, reject) => {
//     transporter.sendMail(mailOptions3, (error, info) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(info.response);
//       }
//     });
//   });
// };

// export default sendEmail;


