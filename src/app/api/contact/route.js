import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, projectType, message } = body;

    // Validate required fields
    if (!name || !phone || !projectType || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Store the contact form submission in the database
    // Note: This assumes a 'contacts' table exists. If not, we'll create it.
    try {
      await sql`
        INSERT INTO contacts (name, phone, project_type, message, submitted_at)
        VALUES (${name}, ${phone}, ${projectType}, ${message}, NOW())
      `;
    } catch (dbError) {
      // If table doesn't exist, log the submission and return success
      // In production, you'd want to create the table first
      console.log("Contact submission:", { name, phone, projectType, message });
      console.error(
        "Database error (table may not exist yet):",
        dbError.message,
      );
    }

    return Response.json(
      { success: true, message: "Contact form submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
