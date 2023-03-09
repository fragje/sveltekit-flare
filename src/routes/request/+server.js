import { json } from "@sveltejs/kit";

export async function GET({platform}) {
  console.log(platform);
  const { results } = await platform.env.DB.prepare(
    "SELECT * FROM Customers WHERE CompanyName = ?"
  )
    .bind("Around the Horn")
    .all();

  return json(results);
}
