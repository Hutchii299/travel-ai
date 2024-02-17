export async function POST(request: Request) {
  const req = await request.json();
  const email = req.email;

  if (!email) {
    return new Response(JSON.stringify({ message: "Email is required" }), {
      status: 400,
    });
  }

  const mailChimpData = {
    members: [
      {
        email_address: email,
        status: "subscribed",
      },
    ],
  };

  try {
    const audienceId = process.env.MAILCHIMP_AUIDENCE_ID as string;
    const URL = `https://us21.api.mailchimp.com/3.0/lists/${audienceId}`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY as string}`,
      },
      body: JSON.stringify(mailChimpData),
    });

    const data = await response.json();
    // Error handling.
    if (data.errors[0]?.error) {
      return new Response(
        JSON.stringify({ message: data.errors[0].error_code }),
        { status: 401 }
      );
    } else {
      return new Response(JSON.stringify({ message: "success" }), {
        status: 200,
      });
    }
  } catch (e) {
    if (e instanceof Error) {
      return new Response(JSON.stringify({ message: e.message }), {
        status: 500,
      });
    }
  }
}
