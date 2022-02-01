import sgMail from '@sendgrid/mail';

console.log(process.env['SENDGRID_API_KEY']);

export async function post({ request }) {
  // the `slug` parameter is available because this file
  // is called [slug].json.js

  try {
    const body = await request.json();
    if (body) {
      console.log(process.env['SENDGRID_API_KEY']);

      sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

      const message = {
        to: 'mail@michaelbreyton.dev', // Change to your recipient
        from: 'michael@supanextail.dev', // Change to your verified sender
        subject: `Portfolio | New message from ${request.body.name}`,
        text: request.body.message,
        reply_to: request.body.email,
      };

      try {
        const result = await sgMail.send(message);
        console.log(result);
        if (result) {
          return {
            status: 200,
            body: {
              message: 'Message sent successfully',
            },
          };
        }
      } catch (error: unknown) {
        if (error) {
          return {
            status: 500,
            body: {
              message:
                'Oups, there was a problem with your email, please try again',
            },
          };
        }
      }
    }
    return body;
  } catch (error) {
    console.error(error);
  }
}
