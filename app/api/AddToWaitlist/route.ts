'use server'
import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export async function POST(req: Request) {
    const { email, date } = await req.json();
    console.log(email, date);
    if (!email) {
        return Response.json({ message: "Email is required" }, { status: 400 });
    }

    try {
        // Check if the email already exists in the database
        const searchResponse = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID!,
            filter: {
                property: "Email",
                title: {
                    equals: email,
                },
            },
        });

        if (searchResponse.results.length > 0) {
            return Response.json({ message: "Email already in waitlist" }, { status: 400 });
        }

        const response = await notion.pages.create({
            parent: {
                database_id: process.env.NOTION_DATABASE_ID!,
            },
            properties: {
                Email: {
                    title: [{ text: { content: email } }],
                },
                SignUpDate: {
                    date: {
                        start: date,
                    },
                },
            },
        });
        return Response.json({ message: "Email added to waitlist" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Error adding email to waitlist" }, { status: 500 });
    }
}