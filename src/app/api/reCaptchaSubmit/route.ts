import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    /// collecting the data from the request
    const postData = await request.json();
    const { gRecaptchaToken } = postData;

    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
    /// sending the request to Google reCAPTCHA API
    try {
        const res = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        // Checking for successful response from reCAPTCHA
        if (res.data?.success && res.data?.score > 0.5) {
            console.log("res.data?.score:", res.data?.score);

            return NextResponse.json({
                success: true,
                score: res.data.score,
            });
        } else {
            return NextResponse.json({ success: false });
        }
    } catch (e) {
        return NextResponse.json({ success: false });
    }
}

